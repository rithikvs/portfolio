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
    <section id="projects" className="section">
      <div className="container-max">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="card p-6 flex flex-col items-center text-center"
            >
              {/* 🔹 Project image */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-300 flex-1">{p.description}</p>

              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ))}
              </div>

              {/* 🔹 Green GitHub button */}
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="mt-4 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition w-max shadow-md"
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
