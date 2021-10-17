import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

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
    <Layout>
      <SEO title="Home" />
      <Hero>
        <h1>{data.site.siteMetadata?.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: data.site.siteMetadata?.description }} />
      </Hero>
    </Layout>
  );
};

export default IndexPage;
