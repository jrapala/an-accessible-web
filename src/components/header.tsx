import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Container } from './layoutComponents';

interface HeaderProps {
  className?: string;
  siteTitle?: string;
}

const Header: FC<HeaderProps> = ({ className, siteTitle = '' }) => (
  <header className={className}>
    <Container>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </Container>
  </header>
);

const StyledHeader = styled(Header)`
  color: var(--white);
  background: var(--primary-color);
  padding: 1rem 0;
  margin-bottom: 1rem;
  h1 {
    margin: 0;
  }
`;

export default StyledHeader;
