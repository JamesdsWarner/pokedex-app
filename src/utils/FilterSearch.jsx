export const FilterSearch = (allPokemon, searchString) => {
  return allPokemon.filter((pokemon) => {
    if (pokemon.name.includes(searchString)) {
      return pokemon;
    }
  });
};

export const FilterType = (allPokemon, chosenType, setPokemonToDisplay, pokemonToDisplay) => {
  return allPokemon.filter((pokemon) => {
    for (var i = 0; i < pokemon.types.length; i++) {
      if (pokemon.types[i].type.name === chosenType) {
        return pokemon;
      }
    }
  });
};
