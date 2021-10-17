import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/themes';
import GlobalStyle from '../styles/GlobalStyle';
import Header from './Header';
import Footer from './Footer';

const siteTitleQuery = graphql`
  query siteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Main = styled.main`
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Layout: FC = ({ children }) => {
  const data = useStaticQuery(siteTitleQuery);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
