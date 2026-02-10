import type { FormData } from '../types/formData.ts'
import getCompleteApiPath from '../services/getCompleteApiPath.ts'

interface EmailResponse {
  message: string;
  success: boolean;
}


const apiPath = getCompleteApiPath('contact');
  

export async function sendEmail(formData: FormData): Promise<EmailResponse> {  
  const res = await fetch(apiPath, {
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