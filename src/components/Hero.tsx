export default function Hero() {
  return (
    <section
      id="hero"
      className="section relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="container-max grid items-center gap-12 md:grid-cols-2">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          <p className="mb-4 inline-flex rounded-full bg-indigo-500/10 px-4 py-1 text-sm text-indigo-300 ring-1 ring-indigo-500/20">
            Welcome 👋
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500">
              RITHIK V S
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-lg mx-auto md:mx-0">
            A passionate student building modern websites and learning new technologies to create meaningful digital experiences.
          </p>
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="btn-primary hover:scale-105 transition-transform"
            >
              🚀 Contact Me
            </a>
            <a
              href="RITHIK V S resume.pdf"
              download
              className="btn-outline hover:bg-slate-800/40 hover:scale-105 transition-transform"
            >
              📄 Download Resume
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="justify-self-center relative">
          <div
            className="absolute -inset-6 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 opacity-40 blur-3xl animate-pulse"
            aria-hidden
          ></div>
          <img
            src="rithik.jpg"
            alt="Profile"
            className="relative z-10 h-52 w-52 sm:h-64 sm:w-64 rounded-full object-cover border-4 border-indigo-400/30 shadow-lg shadow-indigo-500/30"
          />
        </div>
      </div>
    </section>
  )
}
