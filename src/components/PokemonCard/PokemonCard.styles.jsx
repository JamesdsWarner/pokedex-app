import styled from 'styled-components';

export const PokemonName = styled.h2`
  margin: 0;
  margin-top: 30px;
  transition: all 300ms ease 0s;
  font-weight: 800;
`;

export const BasicStatsWrapper = styled.div`
  line-height: 10px;
  opacity: 0;
`;

export const PokemonCardWrapper = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 20px;
  background-image: linear-gradient(to top, #f5f5f5 00% 53%, #b70000 53% 100%);
  color: black;
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: all 300ms ease 0s;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }

  &:hover ${PokemonName} {
    margin-top: 0;
    transition: all 300ms ease 0s;
  }

  &:hover ${BasicStatsWrapper} {
    opacity: 1;
    transition: all 300ms ease 0s;
  }
`;

export const BasicStat = styled.p`
  margin-top: 8px;
`;

export const IdNo = styled.p`
  position: absolute;
  font-weight: 700;
  margin-top: 10px;
  margin-left: 10px;
`;
