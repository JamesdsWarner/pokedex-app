import PokemonCard from '../PokemonCard/PokemonCard.component';
import Modal from 'react-modal';
import PokemonCardModal from '../PokemonCardModal/PokemonCardModal.component';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPokemon, filterByType } from '../../features/allPokemon/allPokemonSlice';
import { addTypesWithThunk } from '../../features/pokemonTypes/pokemonTypesSlice';

import * as Styled from './PokemonCards.styles';

const PokemonCards = () => {
  const dispatch = useDispatch();
  const { pokemon, loading, error, pokemonToDisplay } = useSelector((state) => state.allPokemon);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState();

  // console.log(pokemonToDisplay);

  useEffect(() => {
    dispatch(loadPokemon());
  }, [dispatch]);

  useEffect(() => {
    if (pokemon.length === 151) {
      dispatch(addTypesWithThunk());
      dispatch(filterByType());
    }
  }, [pokemon, dispatch]);

  const openModal = (pokemonToDisplay) => {
    setModalIsOpen(true);
    setModalContent(pokemonToDisplay);
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

  if (loading === 'pending') {
    return <Styled.NoPokemonText>Loading...</Styled.NoPokemonText>;
  }

  if (loading === 'idle') {
    return (
      <>
        {pokemonToDisplay.length === 0 && (
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
          {pokemonToDisplay.map((pokemon, i) => {
            return <PokemonCard openModal={openModal} pokemon={pokemon} key={i} />;
          })}
        </Styled.PokemonCardsWrapper>
      </>
    );
  }

  if (error !== null) {
    return <Styled.NoPokemonText>{error}</Styled.NoPokemonText>;
  }
};

export default PokemonCards;
