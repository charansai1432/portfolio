import { useState } from 'react';
import { sendEmail } from '../services/emailService';
import toast from 'react-hot-toast';

export const useEmailService = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendEmail = async (form: HTMLFormElement) => {
    setIsSubmitting(true);
    
    try {
      await sendEmail(form);
      toast.success('Message sent successfully! I will get back to you soon.');
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    sendEmail: handleSendEmail,
    isSubmitting
  };
};