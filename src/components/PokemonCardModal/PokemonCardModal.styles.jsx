import styled from 'styled-components';

export const PokemonName = styled.h2`
  margin: 0;
  text-align: center;
  font-size: 2.6rem;
  margin-top: -24px;
  @media only screen and (min-width: 630px) {
    font-size: 4rem;
  }

  @media only screen and (min-width: 830px) {
    font-size: 5rem;
  }
`;

export const BasicStatsWrapper = styled.div`
  line-height: 15px;
  text-align: center;
  font-size: 0.9rem;
  padding: 0 2px;
  gap: 0;
  display: flex;
  justify-content: space-around;
  opacity: 0.5;
  margin-top: 5px;
  flex-wrap: wrap;
  margin: auto;
  height: 50px;
  align-items: center;
  @media only screen and (min-width: 630px) {
    font-size: 1rem;
    padding: 0 50px;
    margin-top: -5px;
  }

  @media only screen and (min-width: 830px) {
    margin-top: 10px;

    font-size: 1.3rem;
    padding: 0 80px;
  }
`;

export const PokemonCardModalWrapper = styled.div`
  min-width: 220px;
  width: 320px;
  height: 700px;
  border-radius: 20px;
  background-image: linear-gradient(to top, #f5f5f5 00% 53%, #b70000 53% 100%);
  color: black;
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: all 300ms ease 0s;

  @media only screen and (min-width: 630px) {
    width: 500px;
    height: 730px;
  }

  @media only screen and (min-width: 830px) {
    width: 750px;
    height: 800px;
    background-image: linear-gradient(to top, #f5f5f5 00% 57%, #b70000 57% 100%);
  }
`;

export const BasicStat = styled.p`
  height: 0px;
  margin-top: 10px;
  padding: 0 10px;
`;

export const ModalIdNo = styled.p`
  color: white;
  position: absolute;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 10px;
  margin-left: 12px;
  @media only screen and (min-width: 630px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 830px) {
    font-size: 2rem;
    margin-left: 20px;
  }
`;

export const BaseStats = styled.div`
  @media only screen and (min-width: 630px) {
    margin-top: -20px;
  }
`;

export const BaseStat = styled.div`
  display: flex;
  justify-content: space-between;
  gap: -10px;
  line-height: 0;
  height: 40px;
  padding: 0 30px;
  margin: auto;
  font-size: 1.2rem;
  text-transform: uppercase;

  @media only screen and (min-width: 630px) {
    font-size: 1.5rem;
    height: 45px;
  }

  @media only screen and (min-width: 830px) {
    height: 50px;

    font-size: 1.8rem;
    padding: 0 120px;
  }
`;

export const BaseStatName = styled.h3`
  font-weight: 400;
`;

export const BaseStatValue = styled.h3``;
