import * as Styled from './SearchBar.styled';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const SearchBar = () => {
  const { setSearchString } = useContext(GlobalContext);

  const handleChange = (event) => {
    setSearchString(event.target.value.toLowerCase().replace(/\s+/g, ''));
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
