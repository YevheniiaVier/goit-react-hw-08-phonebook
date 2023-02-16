import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 15px;
  // min-height: 60px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid #ececec;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${p => p.theme.colors.white};
  z-index: 1;

  background-color: #0c464e;
  background-image: linear-gradient(
    225deg,
    #0c464e 0%,
    #26c5eb 49%,
    #186eab 100%
  );
`;

export const List = styled.ul`
  display: flex;
  // flex-direction: column;
  width: 100%;
  margin: 0 auto;
  // padding: 15px;
  // display: flex;
  // list-style: none;
  gap: 20px;
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

export const Item = styled.li``;

export const Link = styled(NavLink)`
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
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accentDark};
  }
  :hover {
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accentDark};
  }
`;
