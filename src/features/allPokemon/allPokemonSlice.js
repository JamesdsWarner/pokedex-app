import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadPokemon = createAsyncThunk('allPokemon/loadPokemon', async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = response.data;
  const createPokemonObjectArray = async (result) => {
    let pokemonArray = [];
    await Promise.all(
      result.map(async (pokemon) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = res.data;
        pokemonArray = [...pokemonArray, data];
      })
    );
    return pokemonArray.sort((a, b) => a.id - b.id);
  };
  let pokemonArray = createPokemonObjectArray(data.results);
  // console.log('here', await pokemonArray);
  return await pokemonArray;
});

export const filterByType = createAsyncThunk(
  'allPokemon/filterByType',
  async (filteredPokemon, { getState }) => {
    let type = getState().chosenFilters.chosenType;
    let search = getState().chosenFilters.searchString;
    // console.log(type);
    return { type: type, search: search };
  }
);

export const allPokemonSlice = createSlice({
  name: 'allPokemon',
  initialState: {
    pokemon: [],
    loading: 'idle',
    error: null,
    pokemonToDisplay: [],
  },

  extraReducers: (builder) => {
    builder.addCase(loadPokemon.pending, (state) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    });
    builder.addCase(loadPokemon.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.pokemon = action.payload;
        state.loading = 'idle';
      }
    });
    builder.addCase(loadPokemon.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = 'Error occured';
      }
    });

    builder.addCase(filterByType.fulfilled, (state, action) => {
      const { type, search } = action.payload;
      state.pokemonToDisplay = state.pokemon.filter((pokemon) => {
        for (var i = 0; i < pokemon.types.length; i++) {
          var thisPokemon = pokemon.types[i].type.name;
          if ((thisPokemon === type || type === 'Select') && pokemon.name.includes(search)) {
            return pokemon;
          }
        }
      });
    });
  },
});

export const { setAllPokemonToDisplay } = allPokemonSlice.actions;

export default allPokemonSlice.reducer;
