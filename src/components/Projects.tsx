type Project = {
  title: string
  description: string
  tech: string[]
  github: string
  demo?: string
  image: string
}

const projects: Project[] = [
  {
    title: 'E-Commerce Full Stack Website',
    description:
      'A professional e-commerce platform for handmade crafts, built with React frontend and Node.js backend with MongoDB.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/rithikvs/e-commerse-fullstack',
    demo: 'http://e-commerse-fullstack.vercel.app',
    image: 'handmade.png', 
  },
   {
    title: 'Study Hub',
    description:
      'A professional collaborative study platform for students, built with React frontend and Node.js backend with MongoDB.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/rithikvs/study',
    demo: 'https://study-fwpj.vercel.app/',
    image: 'studyhub.png',
  },
  {
    title: 'Attendence management',
    description:
      'A responsive attendance management solution powered by React frontend, Node.js backend, and MongoDB database.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/rithikvs/student_attendence',
    demo: 'http://student-attendence-three.vercel.app',
    image: 'attendence.png',
  },
  {
    title: 'VoiceBridge',
    description:
      'A web application designed for speech and hearing impaired individuals, supporting Indian regional languages with AI-powered sign recognition.',
    tech: ['React', 'Material-UI', 'TensorFlow.js', 'Node.js', 'Twilio API'],
    github: 'https://github.com/rithikvs/VoiceBridge',
    demo: 'https://6925403e753f7969695fa42c--friendly-tartufo-77f55f.netlify.app/',
    image: 'voicebridge.jpg',
  },
  {
    title: 'Wildlife Tracker Dashboard',
    description:
      'A real-time wildlife tracking dashboard for monitoring and conservation efforts, built with React and Node.js backend.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Leaflet.js'],
    github: 'https://github.com/rithikvs/wildlife-tracker-dashboard',
    image: 'wildlife.jpg',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section bg-transparent">
      <div className="container-max">
        <h2 className="section-title">
          <span className="section-title-accent">Projects</span>
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="card p-6 flex flex-col items-center text-center group"
            >
              {/* 🔹 Project image */}
              <div className="relative w-full h-40 mb-4 overflow-hidden rounded-xl">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <h3 className="text-xl font-bold text-white drop-shadow-md">{p.title}</h3>
              <p className="mt-2 text-slate-200 flex-1 leading-relaxed">{p.description}</p>

              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ))}
              </div>

              {/* 🔹 Action buttons */}
              <div className="mt-4 flex flex-wrap gap-3 justify-center">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-success"
                >
                  💻 GitHub
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    🚀 Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* GitHub Profile Button */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/rithikvs"
            target="_blank"
            rel="noreferrer"
            className="btn-success"
          >
            💻 View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
