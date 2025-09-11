import { FaTrophy } from "react-icons/fa"
import { useCallback } from "react"

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
    ppt: 'yoyo.pdf', // Make sure this file exists in public/
    link: '' 
  },
  { 
    title: 'A real-time Indian language communication assistant for the Deaf and hard of hearing.', 
    issuer: 'Kongu Engineering College – SIGININ 2025', 
    date: '2025',
    ppt: 'sigin.pdf' // Make sure this file exists in public/
  },
]

export default function Achievements() {
  // Helper to open ppt/pptx in Google Docs Viewer
  const handleViewPPT = useCallback((ppt: string) => {
    let isPPTX = ppt.endsWith('.ppt') || ppt.endsWith('.pptx');
    let url = ppt;
    if (isPPTX) {
      const origin = window.location.origin;
      url = `https://docs.google.com/gview?url=${origin}${ppt.startsWith('/') ? ppt : '/' + ppt}&embedded=true`;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

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
              <article key={p.title} className="card p-6">
                <h4 className="text-lg font-semibold">{p.title}</h4>
                <p className="text-slate-400">
                  {p.issuer} {p.date && `• ${p.date}`}
                </p>
                {p.link && p.link !== '' && (
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="mt-3 inline-block btn-outline"
                  >
                    View
                  </a>
                )}
                {p.ppt && (
                  <button
                    type="button"
                    className="mt-3 inline-block btn-outline"
                    onClick={() => handleViewPPT(p.ppt!)}
                  >
                    View PPT
                  </button>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
