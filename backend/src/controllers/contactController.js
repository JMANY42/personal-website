import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const ENVIRONMENT = process.env.NODE_ENV || 'testing';

const transporter = nodemailer.createTransport({
  service: 'gmail', // or 'outlook', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Use app password for Gmail
  },
});

export async function forwardMessage(req, res) {
  try {
    console.log("req",req.body);
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        error: 'All fields are required' 
      });
    }


    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #4F46E5; margin-bottom: 5px;">From:</h3>
            <p style="margin: 5px 0; color: #666;">
              <strong>Name:</strong> ${name}<br>
              <strong>Email:</strong> <a href="mailto:${email}">${email}</a>
            </p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #4F46E5; margin-bottom: 5px;">Subject:</h3>
            <p style="margin: 5px 0; color: #666;">${subject}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #4F46E5; margin-bottom: 5px;">Message:</h3>
            <p style="margin: 5px 0; color: #666; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
            <p>This email was sent from the ${ENVIRONMENT} server.</p>
          </div>
        </div>
      `,
      replyTo: email, // Allows you to reply directly to the sender
    };


    await transporter.verify();
    console.log("success")
    // Send email
    await transporter.sendMail(mailOptions);


    res.status(200).json({ 
      message: 'Email sent successfully',
      success: true 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send email. Please try again later.' 
    });
  }
};