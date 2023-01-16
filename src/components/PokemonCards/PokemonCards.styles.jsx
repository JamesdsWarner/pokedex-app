import styled from 'styled-components';

export const PokemonCardsWrapper = styled.div`
  display: grid; /* 1 */
  grid-template-columns: repeat(auto-fill, 250px); /* 2 */
  grid-gap: 1rem; /* 3 */
  justify-content: space-around; /* 4 */
  margin-top: 30px;
  color: black;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  padding-bottom: 38px;
`;

export const EmptyCardWrapper = styled.div`
  width: 250px;
  height: 250px;
`;

export const NoPokemonText = styled.h2`
  text-align: center;
  font-size: 2rem;
  width: 100%;
  margin-top: 40px;
`;
