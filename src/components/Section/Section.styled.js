import styled from 'styled-components';

export const SectionTitle = styled.h1`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.primary};
`;
export const SectionContainer = styled.section`
  padding-left: ${p => p.theme.space[5]}px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 100px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 700px;
  }
  @media screen and (min-width: 1200px) {
    width: 700px;
  }
  outline: 3px solid black;
`;
