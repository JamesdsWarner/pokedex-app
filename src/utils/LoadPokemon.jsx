export async function LoadPokemon(allPokemon, setAllPokemon) {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.json();

  const createPokemonObject = (result) => {
    result.forEach(async (pokemon) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      const data = await res.json();
      setAllPokemon((currentPokemon) => [...currentPokemon, data]);
    });
  };
  createPokemonObject(data.results);
}

export async function LoadTypes(setPokemonTypes) {
  const response = await fetch('https://pokeapi.co/api/v2/type');
  const data = await response.json();
  setPokemonTypes(data.results);
}

export function LoadTypesFromArray(allPokemon) {
  var newPokemonTypes = [];
  allPokemon.map((pokemon) => {
    for (var i = 0; i < pokemon.types.length; i++) {
      let thisType = pokemon.types[i].type.name;
      if (!newPokemonTypes.includes(thisType)) {
        newPokemonTypes.push(thisType);
        // setPokemonTypes([...pokemonTypes, thisType]);
      }
    }
  });
  return newPokemonTypes;
}
