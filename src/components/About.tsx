import { useState } from 'react'

export default function About() {
  const [showBio, setShowBio] = useState(false)
  return (
    <section
      id="about"
      className="section bg-transparent"
    >
      <div className="container-max text-center">
        
        {/* Heading */}
        <h2 className="section-title mb-8">
          <span className="section-title-accent">About</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400 animate-gradient">Me</span>
        </h2>

        {/* Main Paragraph */}
        <p className="text-slate-300 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
          I'm a <span className="text-indigo-400 font-medium">student developer</span> with a strong passion for creating 
          scalable, modern, and user-friendly applications. My journey involves 
          learning <span className="text-pink-400 font-medium">cutting-edge web technologies</span>, contributing to 
          <span className="text-purple-400 font-medium"> open-source projects</span>, and constantly 
          refining my skills to build meaningful digital experiences.
        </p>

        {/* Bio Data Dropdown Button */}
        <div className="mb-10">
          <button
            className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/25 transform hover:-translate-y-1 transition-all duration-300"
            onClick={() => setShowBio((v) => !v)}
          >
            {showBio ? 'Hide Bio Data' : 'Show Bio Data'}
          </button>
        </div>

        {/* Bio Data Panel */}
        {showBio && (
          <div className="mx-auto max-w-2xl bg-white/5 border border-white/10 rounded-2xl shadow-xl p-8 text-left transition-all duration-500 transform">
            <h3 className="text-2xl font-bold mb-6 text-white">Short Bio Data</h3>
            <ul className="space-y-4 text-lg">
              <li className="p-3 bg-white/5 rounded-lg">
                <span className="font-semibold text-indigo-300">Name:</span> <span className="text-white">RITHIK V S</span>
              </li>
              <li className="p-3 bg-white/5 rounded-lg">
                <span className="font-semibold text-indigo-300">DOB:</span> <span className="text-white">11th Aug 2005</span>
              </li>
              <li className="p-3 bg-white/5 rounded-lg">
                <span className="font-semibold text-indigo-300">Father's Name:</span> <span className="text-white">SUBRAMANIYAN R</span>
              </li>
              <li className="p-3 bg-white/5 rounded-lg">
                <span className="font-semibold text-indigo-300">Mother's Name:</span> <span className="text-white">SATHYA S</span>
              </li>
              <li className="p-3 bg-white/5 rounded-lg">
                <span className="font-semibold text-indigo-300">Nationality:</span> <span className="text-white">Indian</span>
              </li>
              <li className="p-3 bg-white/5 rounded-lg">
                <span className="font-semibold text-indigo-300">Languages:</span> <span className="text-white">English, Tamil</span>
              </li>
              <li className="p-3 bg-white/5 rounded-lg">
                <span className="font-semibold text-indigo-300">Hobbies:</span> <span className="text-white">Coding, Gaming, Music</span>
              </li>
            </ul>
          </div>
        )}

        {/* Quick Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400 shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-lg font-bold text-indigo-300">💻 Tech Enthusiast</h3>
            <p className="text-slate-300 mt-3">
              Skilled in React, Node.js, Express, MongoDB, and modern frameworks.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400 shadow-xl hover:shadow-pink-500/20 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-lg font-bold text-pink-300">🚀 Fast Learner</h3>
            <p className="text-slate-300 mt-3">
              Always exploring new tools and adapting to emerging tech trends.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-lg font-bold text-purple-300">🤝 Team Player</h3>
            <p className="text-slate-300 mt-3">
              Experienced in working collaboratively on group projects and hackathons.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-green-400 shadow-xl hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-lg font-bold text-green-300">📚 Continuous Learner</h3>
            <p className="text-slate-300 mt-3">
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
