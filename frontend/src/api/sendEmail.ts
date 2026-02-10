import type { FormData } from '../types/formData.ts'

interface EmailResponse {
  message: string;
  success: boolean;
}

const apiPath = '/api/contact'
const fullApiPath = import.meta.env.MODE === 'production'
  ? apiPath
  : 'http://localhost:5000'+apiPath;

export async function sendEmail(formData: FormData): Promise<EmailResponse> {  
  const res = await fetch(fullApiPath, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({ error: 'Failed to send email' }));
    throw new Error(errorData.error || 'Failed to send email');
  }
  
  return res.json();
}

export default sendEmail