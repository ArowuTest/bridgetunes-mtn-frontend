import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../components/Layout';
import DrawSelector from '../components/DrawManagement/DrawSelector';
import DrawHistory from '../components/DrawManagement/DrawHistory';
import { Grid, Col, Alert } from '../components/common/styles';
import { useAuth } from '../contexts/AuthContext';

const DrawManagementContainer = styled.div`
  padding: 1.5rem;
`;

const DrawManagement: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Layout>
        <DrawManagementContainer>
          <Alert variant="warning">
            Please log in to access the draw management page.
          </Alert>
        </DrawManagementContainer>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Draw Management | MTN MyNumba Don Win</title>
      </Head>
      
      <DrawManagementContainer>
        <Grid>
          <Col span={5}>
            <DrawSelector />
          </Col>
          <Col span={7}>
            <DrawHistory />
          </Col>
        </Grid>
      </DrawManagementContainer>
    </Layout>
  );
};

export default DrawManagement;
