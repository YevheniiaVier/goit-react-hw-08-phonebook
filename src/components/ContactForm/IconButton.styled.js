import styled from 'styled-components';

export const StyledIconBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.none};
  padding: ${p => p.theme.space[0]}px;
  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.accent};
  background-image: radial-gradient(
      93% 87% at 87% 89%,
      rgba(0, 0, 0, 0.23) 0%,
      transparent 86.18%
    ),
    radial-gradient(
      66% 66% at 26% 20%,
      rgba(255, 255, 255, 0.55) 0%,
      rgba(255, 255, 255, 0) 69.79%,
      rgba(255, 255, 255, 0) 100%
    );
  box-shadow: inset -3px -3px 9px rgba(255, 255, 255, 0.25),
    inset 0px 3px 9px rgba(255, 255, 255, 0.3),
    inset 0px 1px 1px rgba(255, 255, 255, 0.6),
    inset 0px -8px 36px rgba(0, 0, 0, 0.3),
    inset 0px 1px 5px rgba(255, 255, 255, 0.6), 2px 19px 31px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${p => p.theme.colors.accent};

    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
      &:hover,
    &:focus {
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.4);
        2px 2px 5px 2px rgba(0, 0, 0, 0);
    }
`;
