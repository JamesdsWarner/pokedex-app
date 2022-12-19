export async function LoadPokemon(allPokemon, setAllPokemon) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
  const data = await response.json();
  console.log(data);

  const createPokemonObject = (result) => {
    result.forEach(async (pokemon) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      const data = await res.json();
      setAllPokemon((currentPokemon) => [...currentPokemon, data]);
    });
  };
  createPokemonObject(data.results);
  console.log(allPokemon);
}
