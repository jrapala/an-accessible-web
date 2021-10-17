import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import Header from './Header';
import Footer from './Footer';

const siteTitleQuery = graphql`
  query SiteQuery {
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
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
