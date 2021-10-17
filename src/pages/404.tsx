import React, { FC } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { ContainerStyles } from '../components/LayoutComponents';
import SEO from '../components/SEO';

const Container = styled.div`
  ${ContainerStyles}
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  justify-content: center;
`;

const NotFoundPage: FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
