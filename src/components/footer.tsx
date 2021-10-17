import React, { FC } from 'react';
import styled from 'styled-components';
import { ContainerStyles } from './LayoutComponents';

interface FooterProps {
  className?: string;
}

const Footer: FC<FooterProps> = ({ className }) => (
  <footer className={className}>© {new Date().getFullYear()} An Accessible Web</footer>
);

const StyledFooter = styled(Footer)`
  ${ContainerStyles}
  padding: 1rem 0;
  margin: 0 auto;
  text-align: center;
`;

export default StyledFooter;
