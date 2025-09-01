import { FaTrophy } from "react-icons/fa"

type Item = { 
  title: string
  issuer?: string
  date?: string
  link?: string
  certificate?: string
  ppt?: string
  prize?: string
}

const certifications: Item[] = [
  { title: 'MongoDB', certificate: '/MongoDBAssociateDeveloper_Badge20250406-27-yeb5et.pdf' },
  { title: 'Oracle', certificate: '/oracle certificate.pdf' },
]

const papers: Item[] = [
  { 
    title: 'AI-Driven Adaptive NPC Personalities in Video Games', 
    issuer: 'Bannari Amman Institute of Technology – INFREIX24', 
    date: '2024', 
    ppt: '/ai-npc-presentation.pdf',
    prize: '1st Prize'
  },
  { 
    title: 'Land Connect', 
    issuer: 'Kongu Engineering College – SIGININ 2024', 
    date: '2024',
    ppt: '/land-connect-presentation.pdf'
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container-max">
        <h2 className="text-3xl font-semibold">Achievements & Certifications</h2>

        {/* Certifications */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Global Certification</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-4">
            {certifications.map((c) => (
              <article key={c.title} className="card p-6">
                <h4 className="text-lg font-semibold">{c.title}</h4>
                <div className="mt-3 flex gap-2">
                  {c.certificate && (
                    <a
                      href={encodeURI(c.certificate)}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Paper Presentations */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Paper Presentation</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-4">
            {papers.map((p) => (
              <article key={p.title} className="card p-6 relative">
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-semibold">{p.title}</h4>
                  {p.prize && (
                    <span className="flex items-center gap-1 text-yellow-500 font-bold text-sm">
                      <FaTrophy className="text-yellow-500" /> {p.prize}
                    </span>
                  )}
                </div>
                <p className="text-slate-400">
                  {p.issuer} {p.date && `• ${p.date}`}
                </p>
                <div className="mt-3 flex gap-2">
                  {p.link && (
                    <a 
                      href={p.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn-outline"
                    >
                      View
                    </a>
                  )}
                  {p.ppt && (
                    <a
                      href={encodeURI(p.ppt)}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline"
                    >
                      View PPT
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
