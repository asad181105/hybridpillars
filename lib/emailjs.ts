// EmailJS utility for sending emails
import emailjs from '@emailjs/browser';

export interface EmailParams {
  name: string;
  email: string;
  company?: string;
  message?: string;
  topic?: string;
  urgency?: string;
  type: 'contact' | 'get-in-touch';
}

export const sendEmail = async (params: EmailParams): Promise<boolean> => {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment variables are not set');
      return false;
    }

    // Initialize EmailJS
    emailjs.init(publicKey);

    // Prepare template parameters
    const templateParams = {
      from_name: params.name,
      from_email: params.email,
      company: params.company || 'Not provided',
      message: params.message || params.topic || 'No message provided',
      urgency: params.urgency || 'Not specified',
      type: params.type === 'contact' ? 'Contact Form' : 'Get in Touch Form',
      timestamp: new Date().toLocaleString(),
    };

    // Send email
    await emailjs.send(serviceId, templateId, templateParams);

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

