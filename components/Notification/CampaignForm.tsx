import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUsers, FaEnvelope, FaPlay, FaCheck } from 'react-icons/fa';
import { Card, CardTitle, Button, Form, FormGroup, Label, Select, Textarea, Alert, Spinner, Grid, Col } from '../common/styles';
import { notificationAPI } from "../../network/api";
import { useNotification } from '../../contexts/NotificationContext';

const CampaignFormContainer = styled(Card)`
  margin-bottom: 1.5rem;
`;

const SegmentSelector = styled.div`
  margin-bottom: 1.5rem;
`;

const SegmentOption = styled.div`
  margin-bottom: 0.5rem;
`;

const PreviewContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem;
  margin-top: 1rem;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
`;

const PreviewTitle = styled.h4`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.dark};
`;

const PreviewContent = styled.p`
  margin: 0;
  font-family: monospace;
  white-space: pre-wrap;
`;

const SuccessAnimation = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

const CheckIcon = styled(motion.div)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.success};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const SuccessMessage = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.success};
  margin-bottom: 1rem;
  text-align: center;
`;

const CampaignForm: React.FC = () => {
  const { templates } = useNotification();
  const [selectedTemplateId, setSelectedTemplateId] = useState('');
  const [segment, setSegment] = useState('all');
  const [customMessage, setCustomMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (selectedTemplateId && templates.length > 0) {
      const template = templates.find(t => t.id === selectedTemplateId);
      if (template) {
        setPreview(template.content);
      }
    } else if (customMessage) {
      setPreview(customMessage);
    } else {
      setPreview(null);
    }
  }, [selectedTemplateId, customMessage, templates]);

  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTemplateId(e.target.value);
    if (e.target.value) {
      setCustomMessage('');
    }
  };

  const handleCustomMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCustomMessage(e.target.value);
    if (e.target.value) {
      setSelectedTemplateId('');
    }
  };

  const handleSegmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSegment(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedTemplateId && !customMessage) {
      setError('Please select a template or enter a custom message');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      const campaignData = {
        templateId: selectedTemplateId || null,
        customMessage: customMessage || null,
        segment,
        scheduledDate: new Date().toISOString()
      };
      
      await notificationAPI.createCampaign(campaignData);
      setSuccess(true);
    } catch (error: any) {
      console.error('Campaign creation error:', error);
      setError(error.response?.data?.message || 'Failed to create campaign. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSelectedTemplateId('');
    setSegment('all');
    setCustomMessage('');
    setError(null);
    setSuccess(false);
    setPreview(null);
  };

  return (
    <CampaignFormContainer>
      <CardTitle>Create Notification Campaign</CardTitle>
      
      {!success ? (
        <>
          {error && (
            <Alert variant="danger" style={{ marginBottom: '1rem' }}>
              {error}
            </Alert>
          )}
          
          <Form onSubmit={handleSubmit}>
            <Grid>
              <Col span={6}>
                <FormGroup>
                  <Label htmlFor="template">Select Template</Label>
                  <Select
                    id="template"
                    value={selectedTemplateId}
                    onChange={handleTemplateChange}
                    disabled={isSubmitting || !!customMessage}
                  >
                    <option value="">-- Select a template --</option>
                    {templates.map(template => (
                      <option key={template.id} value={template.id}>
                        {template.name}
                      </option>
                    ))}
                  </Select>
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="customMessage">Or Enter Custom Message</Label>
                  <Textarea
                    id="customMessage"
                    value={customMessage}
                    onChange={handleCustomMessageChange}
                    placeholder="Enter your custom message here..."
                    disabled={isSubmitting || !!selectedTemplateId}
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="segment">Target Audience</Label>
                  <Select
                    id="segment"
                    value={segment}
                    onChange={handleSegmentChange}
                    disabled={isSubmitting}
                  >
                    <option value="all">All Opted-In Users</option>
                    <option value="active">Active Users (Topup in last 30 days)</option>
                    <option value="inactive">Inactive Users (No topup in 30+ days)</option>
                    <option value="winners">Previous Winners</option>
                  </Select>
                </FormGroup>
              </Col>
              
              <Col span={6}>
                <Label>Message Preview</Label>
                {preview ? (
                  <PreviewContainer>
                    <PreviewTitle>Sample SMS</PreviewTitle>
                    <PreviewContent>{preview}</PreviewContent>
                  </PreviewContainer>
                ) : (
                  <Alert variant="warning">
                    Select a template or enter a custom message to see preview
                  </Alert>
                )}
                
                <SegmentSelector>
                  <Label>Estimated Recipients</Label>
                  <Alert variant="primary">
                    <FaUsers style={{ marginRight: '0.5rem' }} />
                    {segment === 'all' ? 'All opted-in users' : 
                     segment === 'active' ? 'Users with recent activity' :
                     segment === 'inactive' ? 'Users without recent activity' :
                     'Previous winners'} will receive this notification.
                  </Alert>
                </SegmentSelector>
              </Col>
            </Grid>
            
            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting || (!selectedTemplateId && !customMessage)}
              style={{ width: '100%' }}
            >
              {isSubmitting ? (
                <Spinner />
              ) : (
                <>
                  <FaPlay style={{ marginRight: '0.5rem' }} />
                  Create Campaign
                </>
              )}
            </Button>
          </Form>
        </>
      ) : (
        <SuccessAnimation>
          <CheckIcon
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          >
            <FaCheck />
          </CheckIcon>
          <SuccessMessage>Campaign Created Successfully!</SuccessMessage>
          <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            Your notification campaign has been created and will be processed shortly.
            Recipients will receive their messages according to the selected segment.
          </p>
          <Button variant="secondary" onClick={resetForm}>
            Create Another Campaign
          </Button>
        </SuccessAnimation>
      )}
    </CampaignFormContainer>
  );
};

export default CampaignForm;

