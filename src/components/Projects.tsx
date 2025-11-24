type Project = {
  title: string
  description: string
  tech: string[]
  github: string
  image: string
}

const projects: Project[] = [
  {
    title: 'E-Commerce Full Stack Website',
    description:
      'A professional e-commerce platform for handmade crafts, built with React frontend and Node.js backend with MongoDB.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/rithikvs/e-commerse-fullstack',
    image: 'ecommerse.jpg', // 🔹 place image in public/images/
  },
  {
    title: 'VoiceBridge',
    description:
      'A web application designed for speech and hearing impaired individuals, supporting Indian regional languages with AI-powered sign recognition.',
    tech: ['React', 'Material-UI', 'TensorFlow.js', 'Node.js', 'Twilio API'],
    github: 'https://github.com/rithikvs/VoiceBridge',
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

              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-700 flex-1">{p.description}</p>

              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ))}
              </div>

              {/* 🔹 Consistent primary button */}
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="mt-4 btn-primary"
              >
                GitHub
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
