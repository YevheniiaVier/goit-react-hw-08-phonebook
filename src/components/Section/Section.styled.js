import styled from 'styled-components';

export const SectionTitle = styled.h1`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.primary};
`;
export const SectionContainer = styled.section`
  // background-image: linear-gradient(
  //   15deg,
  //   rgb(128, 208, 199) 0%,
  //   rgb(19, 84, 122) 100%
  // );
  background-image: linear-gradient(
    225deg,
    rgba(12, 70, 78, 0.4) 0%,
    rgba(38, 197, 235, 0.4) 49%,
    rgba(24, 110, 171, 0.4) 100%
  );
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
