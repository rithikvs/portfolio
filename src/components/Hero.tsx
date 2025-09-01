export default function Hero() {
  return (
    <section id="hero" className="section">
      <div className="container-max grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 inline-flex rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300 ring-1 ring-white/10">Welcome</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Hi, I'm <span className="bg-clip-text text-transparent bg-hero-gradient">RITHIK V S</span></h1>
          <p className="mt-4 text-slate-300">A passionate student building modern web sites and learning new technologies.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">Contact Me</a>
            <a href="RITHIK V S resume.pdf" download className="btn-outline">Download Resume</a>
          </div>
        </div>
        <div className="justify-self-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-hero-gradient opacity-30 blur-2xl" aria-hidden></div>
            <img src="rithik.jpg" alt="Profile" className="relative z-10 h-48 w-48 sm:h-60 sm:w-60 rounded-full object-cover border-4 border-white/10 shadow" />
          </div>
        </div>
      </div>
    </section>
  )
}