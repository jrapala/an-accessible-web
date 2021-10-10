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
      <Link to="/">{siteTitle}</Link>
    </Container>
  </header>
);

const StyledHeader = styled(Header)`
  background: ${({ theme: { colors } }) => colors.background};
  padding: 1rem 0;
  margin-bottom: 1rem;
`;

export default StyledHeader;
