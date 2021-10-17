import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from './layoutComponents';

interface FooterProps {
  className?: string;
}

const Footer: FC<FooterProps> = ({ className }) => (
  <footer className={className}>
    <Container>© {new Date().getFullYear()} An Accessible Web</Container>
  </footer>
);

const StyledFooter = styled(Footer)`
  padding: 1rem 0;
  margin: 0 auto;
`;

export default StyledFooter;
