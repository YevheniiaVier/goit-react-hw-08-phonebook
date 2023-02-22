import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthBox = styled.div``;

export const AuthLink = styled(NavLink)`
  display: inline-block;
  border-radius: 10rem;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.grey};
  color: ${p => p.theme.colors.primary};
  font-size: 17px;

  font-weight: ${p => p.theme.fontWeights.bolder};
  transition: all 200ms 100ms;
  &.active {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
    color: ${p => p.theme.colors.muted};
    background-color: ${p => p.theme.colors.accentDark};
  }
  :hover {
    color: ${p => p.theme.colors.muted};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accentDark};
  }
`;
