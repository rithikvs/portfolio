type Project = {
  title: string
  description: string
  tech: string[]
  github: string
}

const projects: Project[] = [
 
 {
  title: 'E-Commerce Full Stack website',
  description: 'A beautiful and professional e-commerce platform for handmade crafts, built with React frontend and Node.js backend with MongoDB.',
  tech: ['React', 'Node.js', 'Express', 'MongoDB'],
  github: 'https://github.com/rithikvs/e-commerse-fullstack',
},
{
  title: 'VoiceBridge',
  description: 'A comprehensive web application designed specifically for speech and hearing impaired individuals, with support for Indian regional languages.',
  tech: ['React', 'Tailwind CSS', 'Vite', 'Node.js', 'MongoDB'],
  github: 'https://github.com/rithikvs/VoiceBridge',
},
{
  title: 'Wildlife Tracker Dashboard',
  description: 'A comprehensive real-time wildlife tracking dashboard built with React, Vite, Node.js, and MongoDB. This application provides monitoring and management capabilities for wildlife conservation efforts.',
  tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Leaflet.js'],
  github: 'https://github.com/rithikvs/wildlife-tracker-dashboard',
}

]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-max">
        <h2 className="text-3xl font-semibold">Projects</h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="card p-6 flex flex-col">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-300 flex-1">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
              <a href={p.github} target="_blank" rel="noreferrer" className="mt-4 btn-outline w-max">GitHub</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}