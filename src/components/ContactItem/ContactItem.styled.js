import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  color: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;

  border-radius: ${p => p.theme.radii.big};
  background-image: linear-gradient(
    15deg,
    rgb(128, 208, 199) 0%,
    rgb(19, 84, 122) 100%
  );
  transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.25),
      inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),
      inset 0 -2px 1px rgba(0, 0, 0, 0.25);
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonBox = styled.div`
  display: flex;

  gap: ${p => p.theme.space[2]}px;
`;

export const TelBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  align-self: right;
  font-size: 22px;
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const Name = styled.span`
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
