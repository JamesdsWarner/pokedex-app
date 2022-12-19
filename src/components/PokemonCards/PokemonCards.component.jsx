import * as Styled from "./PokemonCards.styles";
import PokemonCard from "../PokemonCard/PokemonCard.component";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { LoadPokemon } from "../../utils/LoadPokemon";
import { FilterSearch } from "../../utils/FilterSearch";

const PokemonCards = () => {
  const { allPokemon, setAllPokemon, searchString } = useContext(GlobalContext);

  useEffect(() => {
    LoadPokemon(allPokemon, setAllPokemon);
  }, []);

  console.log(allPokemon);

  const n = 3;

  return (
    <Styled.PokemonCardsWrapper>
      {FilterSearch(allPokemon, searchString).map((pokemon, i) => {
        return <PokemonCard pokemon={pokemon} key={i} />;
      })}
      {[...Array(n)].map((e, i) => (
        <Styled.EmptyCardWrapper key={i}></Styled.EmptyCardWrapper>
      ))}
    </Styled.PokemonCardsWrapper>
  );
};

export default PokemonCards;
