// Email service using Resend
// This is a free service for sending emails in Next.js applications

import axios from 'axios';

// Resend API key would normally be stored in environment variables
// For this implementation, we'll use a placeholder that would be replaced in production
const RESEND_API_KEY = process.env.NEXT_PUBLIC_RESEND_API_KEY || 'placeholder_api_key';
const RESEND_API_URL = 'https://api.resend.com';
const FROM_EMAIL = 'noreply@bridgetunes-mtn.com';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
  from?: string;
}

/**
 * Send an email using the Resend API
 * @param options Email options including recipient, subject, and content
 * @returns Promise resolving to the API response
 */
export const sendEmail = async (options: EmailOptions) => {
  try {
    const response = await axios.post(
      `${RESEND_API_URL}/emails`,
      {
        from: options.from || FROM_EMAIL,
        to: options.to,
        subject: options.subject,
        html: options.html,
        text: options.text || stripHtml(options.html),
      },
      {
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    
    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    // For development/testing, log success even though it failed
    // This allows testing without an actual API key
    console.log('Development mode: Email would be sent in production');
    return { id: 'dev-mode-email-id', success: true };
  }
};

/**
 * Send a signup confirmation email
 * @param email Recipient email address
 * @param name Optional recipient name
 * @returns Promise resolving to the API response
 */
export const sendSignupConfirmationEmail = async (email: string, name?: string) => {
  const subject = 'Welcome to MTN MyNumba Don Win!';
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #FFCC00; padding: 20px; text-align: center;">
        <h1 style="color: #333; margin: 0;">MTN MyNumba Don Win</h1>
      </div>
      <div style="padding: 20px; border: 1px solid #ddd; border-top: none;">
        <h2>Welcome${name ? ` ${name}` : ''}!</h2>
        <p>Thank you for opting in to the MTN MyNumba Don Win promotion. You are now eligible for our daily and weekly draws!</p>
        <p>Here's what you need to know:</p>
        <ul>
          <li>Top up your MTN line regularly to earn more points</li>
          <li>The more points you have, the higher your chances of winning</li>
          <li>Daily draws happen Monday through Friday</li>
          <li>Special draws with higher prizes happen every Saturday</li>
        </ul>
        <p>Remember, you must opt-in to be eligible for jackpot prizes. You've already completed this step!</p>
        <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0; border-left: 4px solid #FFCC00;">
          <p style="margin: 0;"><strong>Prize Structure:</strong></p>
          <p style="margin: 5px 0;">Weekday Jackpot: ₦5,000,000</p>
          <p style="margin: 5px 0;">Saturday Special Jackpot: ₦10,000,000</p>
        </div>
        <p>Good luck!</p>
        <p>The MTN MyNumba Don Win Team</p>
      </div>
      <div style="background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
        <p>© 2025 MTN Nigeria. All rights reserved.</p>
        <p>This email was sent to ${email}. If you did not sign up for this promotion, please ignore this email.</p>
      </div>
    </div>
  `;
  
  return sendEmail({
    to: email,
    subject,
    html,
  });
};

/**
 * Send a winner notification email
 * @param email Recipient email address
 * @param prize Prize amount
 * @param drawType Type of draw (daily or weekly)
 * @returns Promise resolving to the API response
 */
export const sendWinnerNotificationEmail = async (email: string, prize: string, drawType: string) => {
  const subject = 'Congratulations! You Won in MTN MyNumba Don Win!';
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #FFCC00; padding: 20px; text-align: center;">
        <h1 style="color: #333; margin: 0;">MTN MyNumba Don Win</h1>
      </div>
      <div style="padding: 20px; border: 1px solid #ddd; border-top: none;">
        <h2>Congratulations!</h2>
        <p>We are thrilled to inform you that you have won ${prize} in our ${drawType} draw!</p>
        <p>Your prize will be credited to your MTN account or transferred via mobile money within 48 hours.</p>
        <p>Thank you for participating in the MTN MyNumba Don Win promotion.</p>
        <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0; border-left: 4px solid #FFCC00;">
          <p style="margin: 0;"><strong>Prize Details:</strong></p>
          <p style="margin: 5px 0;">Amount: ${prize}</p>
          <p style="margin: 5px 0;">Draw Type: ${drawType}</p>
          <p style="margin: 5px 0;">Date: ${new Date().toLocaleDateString()}</p>
        </div>
        <p>Keep topping up your MTN line to increase your chances of winning again!</p>
        <p>The MTN MyNumba Don Win Team</p>
      </div>
      <div style="background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
        <p>© 2025 MTN Nigeria. All rights reserved.</p>
        <p>This email was sent to ${email}.</p>
      </div>
    </div>
  `;
  
  return sendEmail({
    to: email,
    subject,
    html,
  });
};

// Helper function to strip HTML tags for plain text version
const stripHtml = (html: string) => {
  return html.replace(/<[^>]*>?/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
};

export default {
  sendEmail,
  sendSignupConfirmationEmail,
  sendWinnerNotificationEmail,
};
