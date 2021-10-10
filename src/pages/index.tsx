import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import Layout from '../components/layout';
import { Container } from '../components/layoutComponents';
import SEO from '../components/seo';
import { lightTheme } from '../theme/themes';

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

  h1 {
    color: ${({ theme: { colors } }) => colors.primary};
    font-size: 3.5rem;
  }

  p {
    font-size: 1.25rem;
  }
`;

const IndexPage: FC = () => {
  const data = useStaticQuery(siteTitleandDescriptionQuery);

  return (
    <ThemeProvider theme={lightTheme}>
      <Layout>
        <Container>
          <SEO title="Home" />
          <Hero>
            <h1>{data.site.siteMetadata?.title}</h1>
            <p>{data.site.siteMetadata?.description}</p>
          </Hero>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
