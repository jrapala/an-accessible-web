import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { ContainerStyles } from './LayoutComponents';

interface NavProps {
  siteTitle: string;
}

const MainNav = styled.nav`
  ${ContainerStyles}
  padding: 1rem;
  margin-bottom: 1rem;

  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 1rem;
    margin: 0;
    align-items: center;
    justify-content: start;

    li:first-child > a {
      text-decoration: none;
    }
  }
`;

const Header: FC<NavProps> = ({ siteTitle = '' }) => (
  <header>
    <MainNav>
      <ul>
        <li>
          <Link to="/">{siteTitle}</Link>
        </li>
      </ul>
    </MainNav>
  </header>
);

export default Header;
