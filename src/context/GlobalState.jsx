import React, { createContext, useState } from "react";
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [searchString, setSearchString] = useState("");

  return (
    <GlobalContext.Provider value={{ allPokemon, setAllPokemon, searchString, setSearchString }}>
      {children}
    </GlobalContext.Provider>
  );
};
