import { capitaliseFirstLetter } from '../../utils/CapitalizeFirstLetter';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseType } from '../../features/chosenFilters/chosenFiltersSlice';
import { filterByType } from '../../features/allPokemon/allPokemonSlice';

import * as Styled from './Dropdown.styles';

const Dropdown = ({ label, options }) => {
  const dispatch = useDispatch();

  const chosenType = useSelector((state) => state.chosenFilters.chosenType);

  const [chosenOption, setChosenOption] = useState('Select');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownSelect = useRef(null);

  useEffect(() => {
    dispatch(filterByType());
  }, [chosenType, dispatch]);

  const closeOpenMenus = (e) => {
    if (dropdownSelect.current && isDropdownOpen && !dropdownSelect.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  document.addEventListener('mousedown', closeOpenMenus);

  //   console.log(chosenType);

  const handleOptionClick = (name) => {
    setChosenOption(name);
    setIsDropdownOpen(false);

    if (label === 'Types') {
      dispatch(chooseType(name));
    }
  };

  const handleDropdownOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Styled.DropdownWrapper>
      <Styled.DropdownLabel>{label}</Styled.DropdownLabel>
      <Styled.DropdownSelect ref={dropdownSelect}>
        <Styled.ChosenDropdownOption isDropdownOpen={isDropdownOpen} onClick={handleDropdownOpen}>
          {capitaliseFirstLetter(chosenOption)}
        </Styled.ChosenDropdownOption>
        <Styled.DropdownSelectInner isDropdownOpen={isDropdownOpen}>
          <Styled.DropdownOptionSelect onClick={() => handleOptionClick('Select')}>
            Select
          </Styled.DropdownOptionSelect>

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
