import styled from 'styled-components';

export const ErrorText = styled.p`
  padding: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.offline};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const ErrorBox = styled.div`
  width: 500px;
  display: flex;
  text-align: center;
  justify-content: center;
`;
