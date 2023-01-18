import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addTypesWithThunk = createAsyncThunk(
  'pokemonTypes/addTypesWithThunk',
  async (pokemonType, { getState }) => {
    let pokemonArray = getState().allPokemon.pokemon;
    var newPokemonTypes = [];
    pokemonArray.map((pokemon) => {
      for (var i = 0; i < pokemon.types.length; i++) {
        let thisType = pokemon.types[i].type.name;
        if (!newPokemonTypes.includes(thisType)) {
          newPokemonTypes.push(thisType);
        }
      }
    });
    return newPokemonTypes;
  }
);

export const pokemonTypesSlice = createSlice({
  name: 'pokemonTypes',
  initialState: {
    types: [],
  },

  extraReducers: (builder) => {
    builder.addCase(addTypesWithThunk.fulfilled, (state, action) => {
      state.types.push(...action.payload);
    });
  },
});

export default pokemonTypesSlice.reducer;
