import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

// Load environment variables (expects SMTP_USER and SMTP_PASS)
dotenv.config()

// IMPORTANT GMAIL NOTE:
// - Use a Gmail App Password (requires 2FA enabled) for SMTP_PASS.
// - Regular passwords or "less secure apps" won't work anymore.
// - FROM must be the authenticated user; we use replyTo for the visitor's email.

const TO_EMAIL = 'rithikvs08@gmail.com' // Fixed recipient as requested

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { name = '', email = '', message = '' } = req.body || {}

  // Basic validation
  if (!name.trim() || !email.trim() || !message.trim()) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  // Minimal email shape validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }

  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS

  if (!smtpUser || !smtpPass) {
    console.error('Missing SMTP credentials:', { smtpUser: !!smtpUser, smtpPass: !!smtpPass })
    return res.status(500).json({ error: 'Email service not configured on server.' })
  }

  // Create a transporter for Gmail. Prefer 465/SSL, fall back to 587/TLS if needed.
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user: smtpUser, pass: smtpPass },
  })

  // Verify the transporter to catch configuration issues early
  try {
    await transporter.verify()
  } catch (verifyErr) {
    console.error('SMTP verification failed:', verifyErr)
    return res.status(500).json({ error: `SMTP verification failed: ${verifyErr.message}` })
  }

  // Prepare the message. FROM must be the authenticated user for Gmail.
  const mailOptions = {
    from: `Portfolio Contact <${smtpUser}>`, // must match the authenticated account
    to: TO_EMAIL, // fixed recipient
    replyTo: `${name} <${email}>`, // so you can reply directly to the visitor
    subject: 'Portfolio Contact Form',
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
           <p><strong>Email:</strong> ${escapeHtml(email)}</p>
           <p><strong>Message:</strong><br/>${breaklines(escapeHtml(message))}</p>`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Email send error:', err)
    return res.status(500).json({ error: err?.message || 'Failed to send email' })
  }
}

// Helpers to keep HTML safe and readable
function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function breaklines(str) {
  return String(str).replaceAll('\n', '<br/>')
}