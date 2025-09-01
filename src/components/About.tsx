import { useState } from 'react'

export default function About() {
  const [showBio, setShowBio] = useState(false)
  return (
    <section
      id="about"
      className="section bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="container-max text-center">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">Me</span>
        </h2>

        {/* Main Paragraph */}
        <p className="text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          I'm a <span className="text-indigo-400 font-medium">student developer</span> with a strong passion for creating 
          scalable, modern, and user-friendly applications. My journey involves 
          learning <span className="text-pink-400 font-medium">cutting-edge web technologies</span>, contributing to 
          <span className="text-purple-400 font-medium"> open-source projects</span>, and constantly 
          refining my skills to build meaningful digital experiences.
        </p>

        {/* Bio Data Dropdown Button */}
        <div className="mb-8">
          <button
            className="btn-primary text-lg px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
            onClick={() => setShowBio((v) => !v)}
          >
            {showBio ? 'Hide Bio Data' : 'Show Bio Data'}
          </button>
        </div>

        {/* Bio Data Panel */}
        {showBio && (
          <div className="mx-auto max-w-xl bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 border-2 border-indigo-400 rounded-2xl shadow-xl p-6 text-left animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-pink-300">Short Bio Data</h3>
            <ul className="space-y-2 text-lg">
              <li>
                <span className="font-semibold text-indigo-300">Name:</span> RITHIK V S
              </li>
              <li>
                <span className="font-semibold text-indigo-300">DOB:</span> 11th Aug 2005
              </li>
              <li>
                <span className="font-semibold text-indigo-300">Father's Name:</span> SUBRAMANIYAN R
              </li>
              <li>
                <span className="font-semibold text-indigo-300">Mother's Name:</span> JEYAKODI N
              </li>
              <li>
                <span className="font-semibold text-indigo-300">Address:</span> 21, PUDUR KUDI STREET, VALAYALKARANPUDUR (PO), KR PURAM (TK), KARUR (DT) - 639108
              </li>
              <li>
                <span className="font-semibold text-indigo-300">Mobile:</span> +91 7708552461
              </li>
              <li>
                <span className="font-semibold text-indigo-300">Email:</span> rithikvs08@gmail.com
              </li>
              <li>
                <span className="font-semibold text-indigo-300">Education:</span> B.Tech IT, Kongu Engineering College
              </li>
            </ul>
          </div>
        )}

        {/* Quick Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-10">
          <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-indigo-400 transition">
            <h3 className="text-lg font-semibold text-indigo-300">💻 Tech Enthusiast</h3>
            <p className="text-sm text-slate-400 mt-2">
              Skilled in React, Node.js, Express, MongoDB, and modern frameworks.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-pink-400 transition">
            <h3 className="text-lg font-semibold text-pink-300">🚀 Fast Learner</h3>
            <p className="text-sm text-slate-400 mt-2">
              Always exploring new tools and adapting to emerging tech trends.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-purple-400 transition">
            <h3 className="text-lg font-semibold text-purple-300">🤝 Team Player</h3>
            <p className="text-sm text-slate-400 mt-2">
              Experienced in working collaboratively on group projects and hackathons.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-green-400 transition">
            <h3 className="text-lg font-semibold text-green-300">📚 Continuous Learner</h3>
            <p className="text-sm text-slate-400 mt-2">
              Actively pursuing new certifications, courses, and real-world projects.
            </p>
          </div>
        </div>
      </div>

      {/* Animation style */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </section>
  )
}
