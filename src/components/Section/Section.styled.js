import styled from 'styled-components';

export const SectionTitle = styled.h1`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.primary};
`;
export const SectionContainer = styled.section`
  background-image: linear-gradient(
    225deg,
    rgba(12, 70, 78, 0.6) 0%,
    rgba(38, 197, 235, 0.6) 49%,
    rgba(24, 110, 171, 0.6) 100%
  );
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 100px;
  height: 100vh;

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
`;
