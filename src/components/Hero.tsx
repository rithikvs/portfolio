export default function Hero() {
  return (
    <section
      id="hero"
      className="section bg-transparent min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="container-max grid items-center gap-16 md:grid-cols-2">
        
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 border border-cyan-300/40 px-4 py-2 text-sm text-cyan-100 shadow-xl shadow-cyan-500/30">
            <span className="animate-wave inline-block">👋</span>
            <span>Welcome to my portfolio</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-center md:text-left text-white whitespace-nowrap">
              Hi, I'm{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 animate-gradient" style={{backgroundSize: '200% 200%'}}>
                RITHIK V S
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-100 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
              A passionate student building modern websites and learning new technologies to create meaningful digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="btn-primary px-6 py-3 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              🚀 Contact Me
            </a>
            <a
              href="RITHIK V S resume.pdf"
              download
              className="btn-outline px-6 py-3 hover:-translate-y-0.5"
            >
              📄 Download Resume
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="justify-self-center relative group">
          <div
            className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-500 via-blue-400 to-cyan-600 opacity-40 blur-3xl animate-pulse group-hover:opacity-60 transition-opacity duration-500"
            aria-hidden
          ></div>
          <img
            src="rithik.jpg"
            alt="Profile"
            className="relative z-10 h-64 w-64 sm:h-72 sm:w-72 rounded-full object-cover border-4 border-cyan-400/40 shadow-2xl shadow-cyan-500/60 group-hover:border-cyan-300/70 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  )
}
