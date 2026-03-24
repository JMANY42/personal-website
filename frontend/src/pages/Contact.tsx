import React, { useState, type FormEvent } from 'react';
import Layout from '../components/Layout.tsx'
import type { FormData } from '../types/formData.ts'
import sendEmail from '../api/sendEmail.ts'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setErrorMessage(null);

  try {
    await sendEmail(formData);
    
    console.log('Form submitted successfully:', formData);
    setSubmitSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000);
  } catch (error) {
    console.error('Error sending email:', error);
    setErrorMessage(
      error instanceof Error 
        ? error.message 
        : 'Failed to send message. Please try again.'
    );
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <Layout>
    <div className="bg-bg flex-1 overflow-y-auto flex items-center">
      <div className="max-w-3xl mx-auto w-full py-4 sm:py-6">
        <div className="text-center mb-2 sm:mb-4 space-y-1 sm:space-y-2 animate-fadeInFirst">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-accent">
            Get in Touch
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted px-4">
            Have a question? &nbsp;Want to hire me? &nbsp;Found a bug?<br/>I'd love to hear from you!
          </p>
        </div>

        <div className="bg-surface rounded-2xl shadow-xl p-4 sm:p-6 md:p-10 border border-neutral-800 animate-fadeIn">
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-main mb-1 sm:mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition text-main placeholder:text-main text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-main mb-1 sm:mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition text-main placeholder:text-main text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label 
                htmlFor="subject" 
                className="block text-sm font-medium text-main mb-1 sm:mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition text-main placeholder:text-main text-sm sm:text-base"
                placeholder="How can I help?"
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-main mb-1 sm:mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition resize-none text-main placeholder:text-main text-sm sm:text-base"
                placeholder="Tell me more about your inquiry..."
              />
            </div>

            

            {submitSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-3 sm:px-4 py-2 sm:py-3 rounded-lg">
                <p className="font-medium text-sm sm:text-base">Success! Your message has been sent.</p>
              </div>
            )}

            {errorMessage && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-3 sm:px-4 py-2 sm:py-3 rounded-lg">
                <p className="font-medium text-sm sm:text-base">{errorMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand text-main font-semibold py-2.5 sm:py-3 px-6 rounded-lg hover:bg-brand-muted focus:outline-none focus:ring-brand focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-sm sm:text-base"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Contact;