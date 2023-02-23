import styled from 'styled-components';

export const StyledTitle = styled.h1`
  display: block;
  width: 100%;
  padding: ${p => p.theme.space[0]}px;
  color: ${p => p.theme.colors.primary};
  margin: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[3]}px;

  padding-left: ${p => p.theme.space[7]}px;
`;
