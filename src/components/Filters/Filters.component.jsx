import * as Styled from './Filters.styles';
import SearchBar from '../SearchBar/SearchBar.component';
import Dropdown from '../Dropdown/Dropdown.component';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { FilterType } from '../../utils/FilterSearch';

const Filters = () => {
  const { pokemonTypes } = useContext(GlobalContext);

  return (
    <Styled.FiltersWrapper>
      <Dropdown
        options={pokemonTypes}
        filterType={FilterType}
        label="Types"
        defaultValue="Select"
      />
      <SearchBar />
    </Styled.FiltersWrapper>
  );
};

export default Filters;
