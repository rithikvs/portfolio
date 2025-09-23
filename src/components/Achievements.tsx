import { FaTrophy } from "react-icons/fa"
import { useState, useCallback } from "react"

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

const hackathons: Item[] = [
  {
    title: "BYTS India Hackathon (BIH) 1.0 ",
    issuer: "BYTS India and powered by Nunnari Labs",
    date: "April 11&12 2025",
    certificate: "bytes.pdf",
    prize: "Finalist"
  },
  {
    title: "2nd AI/ML CHALLENGE",
    issuer: "IIT MADRAS",
    date: "2023",
    certificate: "iit madras.pdf",
    prize: "participated"
  }
]

const papers: Item[] = [
  {
    title: 'AI-Driven Adaptive NPC Personalities in Video Games',
    issuer: 'Bannari Amman Institute of Technology – INFREIX24',
    date: '6th NOVEMBER2024',
    certificate: 'bannari.pdf',
    ppt: 'yoyo.pdf',
    link: '' 
  },
  {
    title: 'A real-time Indian language communication assistant for the Deaf and hard of hearing.',
    issuer: 'Kongu Engineering College – SIGININ 2025',
    date: '2024',
    certificate: 'sigin24.pdf',
    ppt: 'sigin.pdf'
  },
]

export default function Achievements() {
  const [showHackathon, setShowHackathon] = useState(false)
  const [showPaper, setShowPaper] = useState(false)

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

  const handleViewPDF = useCallback((pdf: string) => {
    window.open(pdf, '_blank', 'noopener,noreferrer')
  }, [])

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

        {/* Hackathon Dropdown */}
        <div className="mt-10">
          <button
            className="btn-primary px-6 py-2 rounded-full font-semibold shadow hover:scale-105 transition"
            onClick={() => setShowHackathon((v) => !v)}
          >
            {showHackathon ? "Hide Hackathon Achievements" : "Show Hackathon Achievements"}
          </button>
          
          {/* Fixed height container to prevent layout shift */}
          <div className={`transition-all duration-500 overflow-hidden ${showHackathon ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="mt-6 space-y-4">
              {hackathons.map((h) => (
                <div key={h.title} className="card p-4">
                  <h4 className="text-lg font-semibold">{h.title}</h4>
                  <p className="text-slate-400 text-sm">{h.issuer} {h.date && `• ${h.date}`}</p>
                  {h.prize && <p className="text-green-400 font-semibold mt-1 text-sm">Prize: {h.prize}</p>}
                  {h.certificate && (
                    <button
                      type="button"
                      className="mt-2 btn-outline text-sm px-3 py-1"
                      onClick={() => handleViewPDF(h.certificate!)}
                    >
                      View Certificate
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Paper Presentation Dropdown */}
        <div className="mt-10">
          <button
            className="btn-primary px-6 py-2 rounded-full font-semibold shadow hover:scale-105 transition"
            onClick={() => setShowPaper((v) => !v)}
          >
            {showPaper ? "Hide Paper Presentations" : "Show Paper Presentations"}
          </button>
          
          {/* Fixed height container to prevent layout shift */}
          <div className={`transition-all duration-500 overflow-hidden ${showPaper ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="mt-6 space-y-4">
              {papers.map((p) => (
                <div key={p.title} className="card p-4">
                  <h4 className="text-lg font-semibold">{p.title}</h4>
                  <p className="text-slate-400 text-sm">{p.issuer} {p.date && `• ${p.date}`}</p>
                  <div className="flex gap-2 mt-2">
                    {p.certificate && (
                      <button
                        type="button"
                        className="btn-outline text-sm px-3 py-1"
                        onClick={() => handleViewPDF(p.certificate!)}
                      >
                        View Certificate
                      </button>
                    )}
                    {p.ppt && (
                      <button
                        type="button"
                        className="btn-outline text-sm px-3 py-1"
                        onClick={() => handleViewPPT(p.ppt!)}
                      >
                        View PPT
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
