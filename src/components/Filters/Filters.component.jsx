import * as Styled from './Filters.styles';
import SearchBar from '../SearchBar/SearchBar.component';
import Dropdown from '../Dropdown/Dropdown.component';
import { FilterType } from '../../utils/FilterSearch';
import { useSelector } from 'react-redux';

const Filters = () => {
  const { types } = useSelector((state) => state.pokemonTypes);

  return (
    <Styled.FiltersWrapper>
      <Dropdown options={types} filterType={FilterType} label="Types" />
      <SearchBar />
    </Styled.FiltersWrapper>
  );
};

export default Filters;
