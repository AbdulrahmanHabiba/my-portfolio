import emailjs from "emailjs-com";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail({ name, email, message }: ContactFormData) {
  const time = new Date().toLocaleString();
  const templateParams = {
    name,
    email,
    message,
    time,
  };
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    EMAILJS_USER_ID
  );
} 