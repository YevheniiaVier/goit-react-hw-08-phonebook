import styled from 'styled-components';

export const StyledFilter = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color: transparent;
  padding: 15px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const FilterBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: rgba(41, 102, 139, 0.9);
  border-radius: 15px;
  border: 2px solid ${p => p.theme.colors.accent};
  overflow: hidden;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border: 2px solid ${p => p.theme.colors.accentDark};
  }
`;

export const CloseButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-color: transparent;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  ${StyledFilter}:not(:placeholder-shown) ~ & {
    opacity: 1;
  }
`;
