import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cors from 'cors';

// Load environment variables
dotenv.config({ path: './api/.env' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/contact', async (req, res) => {
  const { name = '', email = '', message = '' } = req.body || {};

  // Basic validation
  if (!name.trim() || !email.trim() || !message.trim()) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Minimal email shape validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    console.error('Missing SMTP credentials:', { smtpUser: !!smtpUser, smtpPass: !!smtpPass });
    return res.status(500).json({ error: 'Email service not configured on server.' });
  }

  // Create a transporter for Gmail
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPass
    },
    tls: {
      rejectUnauthorized: false
    },
    connectionTimeout: 60000, // 60 seconds
    greetingTimeout: 30000,   // 30 seconds
    socketTimeout: 60000      // 60 seconds
  });

  // Verify the transporter to catch configuration issues early
  try {
    await transporter.verify();
  } catch (verifyErr) {
    console.error('SMTP verification failed:', verifyErr);
    return res.status(500).json({ error: `SMTP verification failed: ${verifyErr.message}` });
  }

  // Prepare the message
  const mailOptions = {
    from: `Portfolio Contact <${smtpUser}>`,
    to: smtpUser, // use the email from .env
    replyTo: `${name} <${email}>`, // so you can reply directly to the visitor
    subject: 'Portfolio Contact Form',
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
           <p><strong>Email:</strong> ${escapeHtml(email)}</p>
           <p><strong>Message:</strong><br/>${breaklines(escapeHtml(message))}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Email send error:', err);
    return res.status(500).json({ error: err?.message || 'Failed to send email' });
  }
});

// Serve static files from the dist directory
app.use(express.static(join(__dirname, 'dist')));

// Handle all other routes by serving the index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Helpers to keep HTML safe and readable
function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function breaklines(str) {
  return String(str).replaceAll('\n', '<br/>');
}