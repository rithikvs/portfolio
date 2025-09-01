import { useState, type ChangeEvent, type FormEvent } from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<string | null>(null)

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatus('✅ Thanks! Your message has been queued. I will get back to you soon.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section py-16">
      <div className="container mx-auto max-w-5xl grid gap-12 md:grid-cols-2 items-center px-6">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-white">Contact Me</h2>
          <p className="mt-4 text-slate-300 text-lg">
            Feel free to reach out for collaborations or just a friendly hello 👋
          </p>

          {/* Social Links */}
          <div className="mt-8 flex justify-center md:justify-start gap-6">
            <a
              href="https://github.com/rithikvs"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition"
            >
              <FaGithub size={28} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rithik-v-s-519059320/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition"
            >
              <FaLinkedin size={28} /> LinkedIn
            </a>
           
            <a
              href="mailto:rithikvs08@gmail.com"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition"
            >
              <MdEmail size={28} /> Email
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          onSubmit={onSubmit}
          className="card bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg space-y-5"
        >
          <div>
            <label className="block text-sm text-slate-300 mb-1">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              required
              className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows={4}
              className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button
            className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 rounded-lg transition"
            type="submit"
          >
            Send Message
          </button>
          {status && <p className="text-green-400 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  )
}
