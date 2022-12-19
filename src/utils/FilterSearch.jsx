export const FilterSearch = (allPokemon, searchString) => {
  return allPokemon.filter((pokemon) => {
    if (pokemon.name.includes(searchString)) {
      return pokemon;
    }
  });
};
