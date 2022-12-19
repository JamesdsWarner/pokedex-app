import * as Styled from "./PokemonCard.styles";
import Sprite from "../Sprite/Sprite.component";

const PokemonCard = ({ pokemon }) => {
  //   console.log("new pokemon");

  const capitaliseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <Styled.PokemonCardWrapper>
        <Sprite image={pokemon.sprites.front_default} />
        <Styled.PokemonName>{capitaliseFirstLetter(pokemon.name)}</Styled.PokemonName>
        <Styled.BasicStatsWrapper>
          <Styled.BasicStat>
            <b>Weight:</b> {pokemon.weight}
          </Styled.BasicStat>
          <Styled.BasicStat>
            <b>Height:</b> {pokemon.height}
          </Styled.BasicStat>
          <Styled.BasicStat>
            <b>Types:</b>{" "}
            {pokemon.types.map((type, i) => {
              console.log(pokemon.types.length);
              return capitaliseFirstLetter(
                `${type.type.name}${i !== pokemon.types.length - 1 ? ", " : ""}`
              );
            })}
          </Styled.BasicStat>
        </Styled.BasicStatsWrapper>
      </Styled.PokemonCardWrapper>
    </>
  );
};

export default PokemonCard;
