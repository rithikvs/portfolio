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
          <span className="section-title-accent">About</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 animate-gradient" style={{backgroundSize: '200% 200%'}}>Me</span>
        </h2>

        {/* Main Paragraph */}
        <p className="text-slate-100 text-lg leading-relaxed mb-12 max-w-3xl mx-auto font-medium">
          I'm a <span className="text-cyan-300 font-bold">student developer</span> with a strong passion for creating 
          scalable, modern, and user-friendly applications. My journey involves 
          learning <span className="text-blue-300 font-bold">cutting-edge web technologies</span>, contributing to 
          <span className="text-cyan-200 font-bold"> open-source projects</span>, and constantly 
          refining my skills to build meaningful digital experiences.
        </p>

        {/* Bio Data Dropdown Button */}
        <div className="mb-10">
          <button
            className="btn-primary px-8 py-3 rounded-xl"
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
                <span className="font-semibold text-cyan-300">Name:</span> <span className="text-white">RITHIK V S</span>
              </li>
              <li className="p-3 bg-white/5 rounded-lg">
                <span className="font-semibold text-cyan-300">DOB:</span> <span className="text-white">11th Aug 2005</span>
              </li>
              <li className="p-3 bg-white/5 rounded-lg">
                <span className="font-semibold text-cyan-300">Father's Name:</span> <span className="text-white">SUBRAMANIYAN R</span>
              </li>
              <li className="p-3 bg-white/5 rounded-lg">
                <span className="font-semibold text-cyan-300">Mother's Name:</span> <span className="text-white">SATHYA S</span>
              </li>
              <li className="p-3 bg-white/5 rounded-lg">
                <span className="font-semibold text-cyan-300">Nationality:</span> <span className="text-white">Indian</span>
              </li>
              <li className="p-3 bg-white/5 rounded-lg">
                <span className="font-semibold text-cyan-300">Languages:</span> <span className="text-white">English, Tamil</span>
              </li>
              <li className="p-3 bg-white/5 rounded-lg">
                <span className="font-semibold text-cyan-300">Hobbies:</span> <span className="text-white">Coding, Gaming, Music</span>
              </li>
            </ul>
          </div>
        )}

        {/* Quick Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-lg font-bold text-cyan-300">💻 Tech Enthusiast</h3>
            <p className="text-slate-300 mt-3">
              Skilled in React, Node.js, Express, MongoDB, and modern frameworks.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400 shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-lg font-bold text-blue-300">🚀 Fast Learner</h3>
            <p className="text-slate-300 mt-3">
              Always exploring new tools and adapting to emerging tech trends.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-300 shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-lg font-bold text-cyan-200">🤝 Team Player</h3>
            <p className="text-slate-300 mt-3">
              Experienced in working collaboratively on group projects and hackathons.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-300 shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-lg font-bold text-blue-200">📚 Continuous Learner</h3>
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
