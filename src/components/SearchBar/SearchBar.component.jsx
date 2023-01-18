import * as Styled from './SearchBar.styled';
import { useDispatch } from 'react-redux';
import { setSearchString } from '../../features/chosenFilters/chosenFiltersSlice';
import { filterByType } from '../../features/allPokemon/allPokemonSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSearchString(event.target.value.toLowerCase().replace(/\s+/g, '')));
    dispatch(filterByType());
  };

  return (
    <Styled.SearchBarWrapper>
      <Styled.SearchHeading>Search</Styled.SearchHeading>
      <Styled.SearchInput
        placeholder="Search here..."
        type="search"
        onChange={(event) => handleChange(event)}
      />
    </Styled.SearchBarWrapper>
  );
};

export default SearchBar;
