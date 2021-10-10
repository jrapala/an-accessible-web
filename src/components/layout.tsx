import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GlobalStyle } from '../theme/globalStyle';
import { MainWrapper } from './layoutComponents';
import Header from './header';
import Footer from './footer';

const siteTitleQuery = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout: FC = ({ children }) => {
  const data = useStaticQuery(siteTitleQuery);

  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <Footer />
      </MainWrapper>
    </>
  );
};

export default Layout;
