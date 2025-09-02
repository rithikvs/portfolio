export default function Hero() {
  return (
    <section
      id="hero"
      className="section min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="container-max grid items-center gap-16 md:grid-cols-2">
        
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-slate-300 shadow-xl">
            <span className="animate-wave inline-block">👋</span>
            <span>Welcome to my portfolio</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 animate-gradient">
                RITHIK V S
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-lg mx-auto md:mx-0 leading-relaxed">
              A passionate student building modern websites and learning new technologies to create meaningful digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/25 transform hover:-translate-y-1 transition-all duration-300"
            >
              🚀 Contact Me
            </a>
            <a
              href="RITHIK V S resume.pdf"
              download
              className="px-6 py-3 bg-white/5 text-white rounded-xl font-medium border border-white/10 hover:bg-white/10 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              📄 Download Resume
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="justify-self-center relative group">
          <div
            className="absolute -inset-8 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 opacity-30 blur-3xl animate-pulse group-hover:opacity-40 transition-opacity duration-500"
            aria-hidden
          ></div>
          <img
            src="rithik.jpg"
            alt="Profile"
            className="relative z-10 h-64 w-64 sm:h-72 sm:w-72 rounded-full object-cover border-4 border-white/10 shadow-2xl shadow-indigo-500/30 group-hover:border-indigo-400/30 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  )
}
