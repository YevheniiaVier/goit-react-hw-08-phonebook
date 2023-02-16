import PropTypes from 'prop-types';
import shortid from 'shortid';
import { FcClearFilters } from 'react-icons/fc';

import { StyledFilter, FilterBox, CloseButton } from './Filter.styled';
// import { Button } from 'components/ContactForm/Button';
const inputId = shortid.generate();

export const Filter = ({ onChange, value, onClear }) => (
  <>
    <FilterBox>
      <StyledFilter
        id={inputId}
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
        name="filter"
      />
      {/* <FilterLabel htmlFor={inputId}></FilterLabel> */}
      <CloseButton type="button" onClick={onClear}>
        <FcClearFilters size={30} />
      </CloseButton>
    </FilterBox>
  </>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onClear: PropTypes.func,
};
