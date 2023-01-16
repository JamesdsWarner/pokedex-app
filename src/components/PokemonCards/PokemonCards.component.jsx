import * as Styled from './PokemonCards.styles';
import PokemonCard from '../PokemonCard/PokemonCard.component';
import Modal from 'react-modal';
import PokemonCardModal from '../PokemonCardModal/PokemonCardModal.component';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { LoadPokemon } from '../../utils/LoadPokemon';
import { FilterSearch } from '../../utils/FilterSearch';
import { LoadTypesFromArray } from '../../utils/LoadPokemon';
import { LoadTypes } from '../../utils/LoadPokemon';

const PokemonCards = () => {
  const {
    allPokemon,
    setAllPokemon,
    searchString,
    pokemonToDisplay,
    setPokemonTypes,
    setPokemonToDisplay,
  } = useContext(GlobalContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState();

  useEffect(() => {
    LoadPokemon(allPokemon, setAllPokemon);
  }, []);

  useEffect(() => {
    setPokemonToDisplay(allPokemon);

    if (allPokemon.length === 151) {
      setPokemonTypes(LoadTypesFromArray(allPokemon));
    }
  }, [allPokemon]);

  const openModal = (pokemon) => {
    setModalIsOpen(true);
    setModalContent(pokemon);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: 0,
      overflow: '',
      border: 'none',
      background: 'none',
    },
  };

  return (
    <>
      {FilterSearch(pokemonToDisplay, searchString).length === 0 && (
        <Styled.NoPokemonText>No Pokemon under that name</Styled.NoPokemonText>
      )}
      <Styled.PokemonCardsWrapper>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <PokemonCardModal openModal={openModal} pokemon={modalContent} />
        </Modal>
        {FilterSearch(pokemonToDisplay, searchString).map((pokemon, i) => {
          return <PokemonCard openModal={openModal} pokemon={pokemon} key={i} />;
        })}
      </Styled.PokemonCardsWrapper>
    </>
  );
};

export default PokemonCards;
