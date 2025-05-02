import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Layout from "../components/Layout/layout";
import TemplateList from '../components/Notification/TemplateList';
import TemplateForm from '../components/Notification/TemplateForm';
import CampaignForm from '../components/Notification/CampaignForm';
import { Grid, Col, Alert } from '../components/common/styles';
import { useAuth } from '../contexts/AuthContext';
import { useNotification } from '../contexts/NotificationContext';

const NotificationContainer = styled.div`
  padding: 1.5rem;
`;

const NotificationManagement: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { selectedTemplate } = useNotification();

  if (!isAuthenticated) {
    return (
      <Layout>
        <NotificationContainer>
          <Alert variant="warning">
            Please log in to access the notification management page.
          </Alert>
        </NotificationContainer>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Notification Management | MTN MyNumba Don Win</title>
      </Head>
      
      <NotificationContainer>
        <Grid>
          <Col span={6}>
            {selectedTemplate !== undefined && <TemplateForm />}
            <CampaignForm />
          </Col>
          <Col span={6}>
            <TemplateList />
          </Col>
        </Grid>
      </NotificationContainer>
    </Layout>
  );
};

export default NotificationManagement;
