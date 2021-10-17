import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import { Container } from '../components/LayoutComponents';
import SEO from '../components/SEO';
import { lightTheme } from '../styles/themes';

const siteTitleandDescriptionQuery = graphql`
  query SiteTitleAndDescriptionQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  justify-content: center;
  text-align: center;

  p {
    font-size: 1.25rem;
  }
`;

const IndexPage: FC = () => {
  const data = useStaticQuery(siteTitleandDescriptionQuery);

  return (
    <ThemeProvider theme={lightTheme}>
      <Layout>
        <SEO title="Home" />
        <Hero>
          <h1>{data.site.siteMetadata?.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: data.site.siteMetadata?.description }} />
        </Hero>
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
