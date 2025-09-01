const nodemailer = require('nodemailer')

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }

  const { name, email, message } = req.body

  // Configure your SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rithikvs08@gmail.com',
      pass: 'your_gmail_app_password', // Use App Password, not your Gmail password
    },
  })

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'rithikvs08@gmail.com',
      subject: 'Portfolio Contact Form',
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    })
    res.status(200).json({ ok: true })
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email' })
  }
}
