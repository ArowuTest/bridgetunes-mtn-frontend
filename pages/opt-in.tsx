import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Layout from "../components/Layout/layout";
import OptInForm from '../components/OptIn/OptInForm';

const OptInContainer = styled.div`
  padding: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const OptInPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Opt-In | MTN MyNumba Don Win</title>
      </Head>
      
      <OptInContainer>
        <OptInForm />
      </OptInContainer>
    </Layout>
  );
};

export default OptInPage;
