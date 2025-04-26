import { userAPI } from '../api';
import emailService from './resend';

// Extend the userAPI with email notification functionality
export const extendedUserAPI = {
  ...userAPI,
  
  // Override the optIn method to include email notification
  optIn: async (msisdn: string, email?: string) => {
    try {
      // Call the original optIn method
      const response = await userAPI.optIn(msisdn);
      
      // If email is provided, send confirmation email
      if (email) {
        await emailService.sendSignupConfirmationEmail(email);
        console.log(`Confirmation email sent to ${email}`);
      } else {
        console.log('No email provided for confirmation');
      }
      
      return response;
    } catch (error) {
      console.error('Error in extended optIn:', error);
      throw error;
    }
  }
};

export default extendedUserAPI;
