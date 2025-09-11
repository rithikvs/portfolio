import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaTelegram, FaDiscord } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoMdCall } from 'react-icons/io'

export default function Contact() {

  return (
    <section id="contact" className="section py-16">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Contact Me</h2>
          <p className="mt-4 text-slate-300 text-lg mx-auto max-w-2xl">
            Feel free to reach out for collaborations, job opportunities, or just a friendly hello 👋
            Connect with me through any of these platforms:
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Email Card */}
          <div className="card bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-primary-500/20 rounded-full mb-6 transform transition-transform hover:scale-110">
                <MdEmail size={40} className="text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Email</h3>
              <p className="text-slate-300 mb-4">Drop me an email anytime</p>
              <div className="flex flex-col items-center w-full">
                <a
                  href="mailto:rithikvs08@gmail.com?subject=Portfolio%20Contact&body=Hello%20Rithik,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards,%0A"
                  className="w-full px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300 text-center font-medium"
                >
                  rithikvs08@gmail.com
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rithikvs08@gmail.com&su=Portfolio Contact&body=Hello Rithik,%0A%0AI saw your portfolio and would like to connect.%0A%0ABest regards,%0A"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 font-medium"
                >
                  <MdEmail size={20} /> Open in Gmail
                </a>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="card bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-primary-500/20 rounded-full mb-6 transform transition-transform hover:scale-110">
                <IoMdCall size={40} className="text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Phone</h3>
              <p className="text-slate-300 mb-4">Call me during business hours</p>
              <a
                href="tel:+917708552461"
                className="w-full px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300 text-center font-medium"
              >
                +91 7708552461
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Connect on Social Media</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="https://github.com/rithikvs"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <FaGithub size={32} className="text-slate-300 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rithik-v-s-519059320/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <FaLinkedin size={32} className="text-slate-300 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <FaInstagram size={32} className="text-slate-300 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Instagram</span>
            </a>
            <a
              href="https://web.telegram.org/a/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <FaTelegram size={32} className="text-slate-300 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

