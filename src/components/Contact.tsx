import { useState, type ChangeEvent, type FormEvent } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<string | null>(null)

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    // For demo, just show a success message
    setStatus('Thanks! Your message has been queued. I will get back to you soon.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section">
      <div className="container-max grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="mt-3 text-slate-300">Feel free to reach out for collaborations or just a friendly hello 👋</p>
          <div className="mt-6 flex gap-3">
            <a href="https://github.com/yourname" target="_blank" rel="noreferrer" className="badge">GitHub</a>
            <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="badge">LinkedIn</a>
            <a href="mailto:your.email@example.com" className="badge">Email</a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="card p-6 space-y-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Name</label>
            <input name="name" value={form.name} onChange={onChange} required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Email</label>
            <input type="email" name="email" value={form.email} onChange={onChange} required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Message</label>
            <textarea name="message" value={form.message} onChange={onChange} required rows={4} className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <button className="btn-primary" type="submit">Send Message</button>
          {status && <p className="text-green-400 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  )
}