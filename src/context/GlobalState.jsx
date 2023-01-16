import React, { createContext, useState } from 'react';
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [pokemonToDisplay, setPokemonToDisplay] = useState(allPokemon);
  const [searchString, setSearchString] = useState('');
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [chosenType, setChosenType] = useState('Select');
  const [isPokemon, setIsPokemon] = useState(true);
  return (
    <GlobalContext.Provider
      value={{
        allPokemon,
        setAllPokemon,
        searchString,
        setSearchString,
        pokemonTypes,
        setPokemonTypes,
        pokemonToDisplay,
        setPokemonToDisplay,
        chosenType,
        setChosenType,
        isPokemon,
        setIsPokemon,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
