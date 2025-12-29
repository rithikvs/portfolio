
import GameMenu from './GameMenu'
import RobotChatbot from './robot'

export default function Hero() {
  return (
    <section
      id="hero"
      className="section bg-transparent min-h-screen flex items-center justify-center relative overflow-hidden py-8 md:py-0"
    >
      {/* Math Game - Top Right Corner */}
      <GameMenu />

      {/* Mobile: Robot in top left under Portfolio */}
      {/* Mobile: Robot in top left under Portfolio, small size */}
      <div className="robot-hero-mobile-top-left">
        <RobotChatbot mobileModeOnly />
      </div>

      <div className="container-max grid items-center gap-8 md:gap-16 md:grid-cols-2 w-full relative">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-4 md:space-y-6 order-2 md:order-1 relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 border border-cyan-300/40 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-cyan-100 shadow-xl shadow-cyan-500/30">
            <span className="animate-wave inline-block">👋</span>
            <span>Welcome to my portfolio</span>
          </div>
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-center md:text-left">
              <span className="block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3">Hi, I'm</span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-400 drop-shadow-2xl break-words" style={{
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite',
                WebkitTextStroke: '1px rgba(6, 182, 212, 0.3)',
                textShadow: '0 0 30px rgba(6, 182, 212, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)'
              }}>
                RITHIK V S
              </span>
            </h1>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-lg mx-auto md:mx-0 leading-relaxed font-normal italic my-4 md:my-8 px-4 md:px-0">
            A passionate student building modern websites and learning new technologies to create meaningful digital experiences.
          </p>
          <div className="flex flex-col items-center md:items-start gap-3 md:gap-5 max-w-md mx-auto md:mx-0 px-4 md:px-0">
            <a
              href="#contact"
              className="group relative w-full px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl overflow-hidden shadow-lg shadow-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-400/60 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-base md:text-lg">
                🚀 Contact Me
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="https://www.linkedin.com/in/rithik-v-s-519059320/"
              target="_blank"
              rel="noreferrer"
              className="group relative w-full px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-green-700 to-emerald-700 text-white font-bold rounded-xl overflow-hidden shadow-lg shadow-green-500/40 hover:shadow-2xl hover:shadow-green-400/60 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-base md:text-lg">
                💼 LinkedIn
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="RITHIK V S resume.pdf"
              download
              className="group relative w-full px-6 py-3 md:px-8 md:py-4 bg-slate-800/90 border-2 border-cyan-500/60 text-cyan-100 font-bold rounded-xl overflow-hidden shadow-lg shadow-slate-900/40 hover:shadow-2xl hover:shadow-cyan-500/50 hover:-translate-y-1 hover:border-cyan-400 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-base md:text-lg">
                📄 Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="justify-self-center relative group order-1 md:order-2 profile-image-robot-wrapper">
          <div
            className="absolute -inset-4 md:-inset-8 rounded-full bg-gradient-to-r from-cyan-500 via-blue-400 to-cyan-600 opacity-40 blur-3xl animate-pulse group-hover:opacity-60 transition-opacity duration-500"
            aria-hidden
          ></div>
          <div className="relative z-10 h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full overflow-hidden border-4 border-cyan-400/40 shadow-2xl shadow-cyan-500/60 group-hover:border-cyan-300/70 transition-all duration-500">
            <img
              src="rithik1.jpg"
              alt="Profile"
              className="w-full h-full object-cover object-center scale-110 transition-transform duration-500 group-hover:scale-125"
            />
          </div>
          {/* Robot floating button on desktop only */}
          <div className="robot-hero-desktop-fixed">
            <RobotChatbot />
          </div>
        </div>
      </div>
    </section>
  )
}
