import styled from 'styled-components';

export const StyledContacts = styled.ul`
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px;
  width: 80%;
`;
