import * as Styled from './PokemonCard.styles';
import { capitaliseFirstLetter } from '../../utils/CapitalizeFirstLetter';
import Sprite from '../Sprite/Sprite.component';

const PokemonCard = ({ pokemon, openModal }) => {
  const handleClick = () => {
    openModal(pokemon);
  };
  return (
    <>
      <Styled.PokemonCardWrapper onClick={handleClick}>
        <Styled.IdNo>{`#${('0' + pokemon.id).slice(-3)}`}</Styled.IdNo>

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
            <b>Types:</b>{' '}
            {pokemon.types.map((type, i) => {
              return capitaliseFirstLetter(
                `${type.type.name}${i !== pokemon.types.length - 1 ? ', ' : ''}`
              );
            })}
          </Styled.BasicStat>
        </Styled.BasicStatsWrapper>
      </Styled.PokemonCardWrapper>
    </>
  );
};

export default PokemonCard;
