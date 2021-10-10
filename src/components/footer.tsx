import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from './layoutComponents';

interface FooterProps {
  className?: string;
}

const Footer: FC<FooterProps> = ({ className }) => (
  <footer className={className}>
    <Container>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Container>
  </footer>
);

const StyledFooter = styled(Footer)`
  color: #fffaff;
  background: var(--primary-color);
  padding: 1rem 0;
`;

export default StyledFooter;
