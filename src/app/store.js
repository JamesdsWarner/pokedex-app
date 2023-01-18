import { configureStore } from '@reduxjs/toolkit';
import allPokemonReducer from '../features/allPokemon/allPokemonSlice.js';
import pokemonTypesSlice from '../features/pokemonTypes/pokemonTypesSlice.js';
import chosenFiltersSlice from '../features/chosenFilters/chosenFiltersSlice.js';

export default configureStore({
  reducer: {
    allPokemon: allPokemonReducer,
    pokemonTypes: pokemonTypesSlice,
    chosenFilters: chosenFiltersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
