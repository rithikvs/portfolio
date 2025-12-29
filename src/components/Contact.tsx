import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaTelegram, FaDiscord } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoMdCall } from 'react-icons/io';
export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>('');
  const [showForm, setShowForm] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('');
    if (!formRef.current) return;
    emailjs.sendForm(
      'service_jxkaboj', // replace with your EmailJS service ID
      'template_av2gz77', // replace with your EmailJS template ID
      formRef.current!,
      'D79E-sle-sq8mt2ia' // replace with your EmailJS public key
    )
      .then(() => {
        setStatus(() => 'Message sent successfully!');
        formRef.current?.reset();
      })
      .catch(() => {
        setStatus(() => 'Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="section bg-transparent">
      <div className="container-max">
        <div className="text-center">
          <h2 className="section-title"><span className="section-title-accent">Contact Me</span></h2>
          <p className="mt-4 text-slate-100 text-lg mx-auto max-w-2xl font-medium">
            Feel free to reach out for collaborations, job opportunities, or just a friendly hello 👋
            Connect with me through any of these platforms:
          </p>
        </div>

        {/* Contact Form Modal (hidden until mail button is clicked) */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Blurred background overlay */}
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setShowForm(false)}
            />
            {/* Modal content */}
            <div className="relative z-50 bg-slate-800/90 rounded-2xl p-8 shadow-2xl max-w-lg w-full mx-4 animate-fadeIn">
              <button
                className="absolute top-3 right-3 text-slate-300 hover:text-white text-2xl font-bold focus:outline-none"
                onClick={() => setShowForm(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Send a Message</h3>
              <form ref={formRef} className="flex flex-col gap-4" onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="p-3 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="p-3 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="p-3 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <button
                  type="submit"
                  className="btn-primary w-full mt-2"
                >
                  Send Message
                </button>
                {status && (
                  <p className={`text-center mt-2 ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}>{status}</p>
                )}
              </form>
            </div>
          </div>
        )}

        {/* Contact Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Email Card */}
          <div className="card bg-slate-800/70 rounded-2xl p-8 shadow-xl hover:bg-slate-700/70 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-cyan-500/30 rounded-full mb-6 transform transition-transform hover:scale-110 shadow-lg shadow-cyan-500/40">
                <MdEmail size={40} className="text-cyan-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-md">Email</h3>
              <p className="text-slate-100 mb-4 font-medium">Drop me an email anytime</p>
              <div className="flex flex-col items-center w-full">
                <button
                  type="button"
                  className="w-full btn-primary justify-center text-center"
                  style={{ display: 'inline-block' }}
                  onClick={() => setShowForm(true)}
                >
                  rithikvs08@gmail.com
                </button>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="card bg-slate-800/70 rounded-2xl p-8 shadow-xl hover:bg-slate-700/70 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-cyan-500/30 rounded-full mb-6 transform transition-transform hover:scale-110 shadow-lg shadow-cyan-500/40">
                <IoMdCall size={40} className="text-cyan-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Phone</h3>
              <p className="text-slate-300 mb-4">Contact at any time</p>
              <a
                href="tel:+917708552461"
                className="w-full btn-primary text-center"
              >
                +91 7708552461
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-16 bg-slate-800/70 border-2 border-slate-700/60 rounded-2xl p-8 shadow-xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-8 drop-shadow-md">Connect on Social Media</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/rithik-v-s-519059320/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-slate-700/50 hover:bg-slate-600/70 border-2 border-slate-600/50 hover:border-cyan-500/60 transition-all duration-300 transform hover:-translate-y-1 group w-32"
            >
              <FaLinkedin size={36} className="text-slate-100 group-hover:text-cyan-300 transition-colors" />
              <span className="text-sm font-semibold text-slate-100 group-hover:text-white transition-colors">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-slate-700/50 hover:bg-slate-600/70 border-2 border-slate-600/50 hover:border-cyan-500/60 transition-all duration-300 transform hover:-translate-y-1 group w-32"
            >
              <FaInstagram size={36} className="text-slate-100 group-hover:text-cyan-300 transition-colors" />
              <span className="text-sm font-semibold text-slate-100 group-hover:text-white transition-colors">Instagram</span>
            </a>
            <a
              href="https://wa.me/917708552461"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-slate-700/50 hover:bg-slate-600/70 border-2 border-slate-600/50 hover:border-cyan-500/60 transition-all duration-300 transform hover:-translate-y-1 group w-32"
            >
              <FaWhatsapp size={36} className="text-slate-100 group-hover:text-cyan-300 transition-colors" />
              <span className="text-sm font-semibold text-slate-100 group-hover:text-white transition-colors">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}