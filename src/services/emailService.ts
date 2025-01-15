import emailjs from '@emailjs/browser';  
import { EMAIL_CONFIG } from '../config/email.config';  

export const sendEmail = async (form: HTMLFormElement): Promise<boolean> => {  
  try {  
    const result = await emailjs.sendForm(  
      EMAIL_CONFIG.SERVICE_ID,  
      EMAIL_CONFIG.TEMPLATE_ID,  
      form,  
      EMAIL_CONFIG.PUBLIC_KEY  
    );  

    // Check for successful response (status code 200-299)  
    if (result.status >= 200 && result.status < 300) {  
      return true; // Indicate success  
    } else {  
      throw new Error('Failed to send email');  
    }  
  } catch (error) {  
    console.error('Email sending error:', error);  
    return false; // Indicate failure  
  }  
};