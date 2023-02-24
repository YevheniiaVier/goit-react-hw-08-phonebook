import styled from 'styled-components';

export const WelcomeMessage = styled.p`
  color: ${p => p.theme.colors.primary};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 50px;
  text-align: center;
`;

export const Box = styled.div`
  min-height: 300px;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
