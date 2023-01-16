import * as Styled from './PokemonCardModal.styles';
import { useEffect, useState } from 'react';
import { capitaliseFirstLetter } from '../../utils/CapitalizeFirstLetter';
import SpriteModal from '../Sprite/SpriteModal.component';
const PokemonCardModal = ({ pokemon }) => {
  const [isTwoTypes, setIsTwoTypes] = useState();

  useEffect(() => {
    if (pokemon.types.length > 1) {
      setIsTwoTypes(true);
    } else {
      setIsTwoTypes(false);
    }
  }, []);

  return (
    <>
      <Styled.PokemonCardModalWrapper>
        <Styled.ModalIdNo>{`#${('0' + pokemon.id).slice(-3)}`}</Styled.ModalIdNo>
        <SpriteModal image={pokemon.sprites.front_default} />
        <Styled.PokemonName>{capitaliseFirstLetter(pokemon.name)}</Styled.PokemonName>
        <Styled.BaseStats>
          {pokemon.stats.map((statName) => {
            return (
              <Styled.BaseStat>
                <Styled.BaseStatName>{statName.stat.name}</Styled.BaseStatName>
                <Styled.BaseStatValue>{statName.base_stat}</Styled.BaseStatValue>
              </Styled.BaseStat>
            );
          })}
        </Styled.BaseStats>
        <Styled.BasicStatsWrapper>
          <Styled.BasicStat>
            <b>Weight:</b> {pokemon.weight}
          </Styled.BasicStat>
          <Styled.BasicStat>
            <b>Height:</b> {pokemon.height}
          </Styled.BasicStat>
          <Styled.BasicStat>
            <b>{isTwoTypes ? 'Types' : 'Type'}:</b>{' '}
            {pokemon.types.map((type, i) => {
              return capitaliseFirstLetter(
                `${type.type.name}${i !== pokemon.types.length - 1 ? ', ' : ''}`
              );
            })}
          </Styled.BasicStat>
        </Styled.BasicStatsWrapper>
      </Styled.PokemonCardModalWrapper>
    </>
  );
};

export default PokemonCardModal;
