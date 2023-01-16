import { capitaliseFirstLetter } from '../../utils/CapitalizeFirstLetter';
import { useState, useRef, useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { FilterType } from '../../utils/FilterSearch';
import * as Styled from './Dropdown.styles';

const Dropdown = ({ label, options, defaultValue }) => {
  const [chosenOption, setChosenOption] = useState('Select');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownSelect = useRef(null);
  const { allPokemon, pokemonToDisplay, setPokemonToDisplay, chosenType, setChosenType } =
    useContext(GlobalContext);

  useEffect(() => {
    if (label === 'Types') {
      if (chosenType === 'Select') {
        setPokemonToDisplay(allPokemon);
      } else {
        setPokemonToDisplay(() =>
          FilterType(allPokemon, chosenType, setPokemonToDisplay, pokemonToDisplay)
        );
      }
    }
  }, [chosenType]);

  const closeOpenMenus = (e) => {
    if (dropdownSelect.current && isDropdownOpen && !dropdownSelect.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  document.addEventListener('mousedown', closeOpenMenus);

  const handleOptionClick = (name) => {
    setChosenOption(name);
    setIsDropdownOpen(false);

    if (label === 'Types') {
      setChosenType(name);
    }
  };

  const handleDropdownOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAllClick = () => {
    setChosenOption('Select');
    setChosenType('Select');
    setIsDropdownOpen(false);
  };

  return (
    <Styled.DropdownWrapper>
      <Styled.DropdownLabel>{label}</Styled.DropdownLabel>
      <Styled.DropdownSelect ref={dropdownSelect}>
        <Styled.ChosenDropdownOption isDropdownOpen={isDropdownOpen} onClick={handleDropdownOpen}>
          {capitaliseFirstLetter(chosenOption)}
        </Styled.ChosenDropdownOption>
        <Styled.DropdownSelectInner isDropdownOpen={isDropdownOpen}>
          <Styled.DropdownOptionSelect onClick={handleAllClick}>Select</Styled.DropdownOptionSelect>

          {options.map((option, i) => {
            return (
              <Styled.DropdownOption key={i} onClick={() => handleOptionClick(option)}>
                {capitaliseFirstLetter(option)}
              </Styled.DropdownOption>
            );
          })}
        </Styled.DropdownSelectInner>
      </Styled.DropdownSelect>
    </Styled.DropdownWrapper>
  );
};

export default Dropdown;
