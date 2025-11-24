import { useState, useCallback } from 'react'

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
    title: "CHEMOVATE 2K25",
    issuer: "COIMBATORE INSTITUTE OF TECHNOLOGY",
    date: "September 29th,30th 2025",
    certificate: "cit hackathon.pdf",
    prize: "TOP 10"
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
    issuer: 'Kongu Engineering College – THROB 2025',
    date: '2025',
    certificate: 'throb paper.pdf',
    ppt: 'sigin.pdf'
  },
]

export default function Achievements() {
  const [tab, setTab] = useState<'hackathon' | 'papers'>('hackathon')

  const handleViewPPT = useCallback((ppt: string) => {
    const isPPT = ppt.endsWith('.ppt') || ppt.endsWith('.pptx')
    let url = ppt
    if (isPPT) {
      const origin = window.location.origin
      url = `https://docs.google.com/gview?url=${origin}${ppt.startsWith('/') ? ppt : '/' + ppt}&embedded=true`
    }
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [])

  const handleViewPDF = useCallback((pdf: string) => {
    window.open(pdf, '_blank', 'noopener,noreferrer')
  }, [])

  return (
    <section id="achievements" className="section bg-transparent">
      <div className="container-max">
        <h2 className="section-title">
          Achievements
          <span className="section-title-accent"></span>
        </h2>
        <p className="subtext">Highlights from hackathons and paper presentations.</p>

        {/* Horizontal toggle buttons */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            className={`btn-outline ${tab === 'hackathon' ? 'ring-2 ring-primary-500 text-primary-700' : ''}`}
            onClick={() => setTab('hackathon')}
          >
            Hackathons
          </button>
          <button
            className={`btn-outline ${tab === 'papers' ? 'ring-2 ring-primary-500 text-primary-700' : ''}`}
            onClick={() => setTab('papers')}
          >
            Paper Presentations
          </button>
        </div>

        {/* Content grid aligned */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {tab === 'hackathon' ? (
            hackathons.map((h) => (
              <article key={h.title} className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900">{h.title}</h3>
                <p className="mt-1 text-slate-700 text-sm">
                  {h.issuer} {h.date ? `• ${h.date}` : ''}
                </p>
                {h.prize && (
                  <p className="mt-1 text-green-700 font-medium text-sm">Prize: {h.prize}</p>
                )}
                <div className="mt-4 flex items-center gap-3">
                  {h.certificate && (
                    <button
                      type="button"
                      className="btn-outline"
                      onClick={() => handleViewPDF(h.certificate!)}
                    >
                      View Certificate
                    </button>
                  )}
                </div>
              </article>
            ))
          ) : (
            papers.map((p) => (
              <article key={p.title} className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-1 text-slate-700 text-sm">
                  {p.issuer} {p.date ? `• ${p.date}` : ''}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  {p.certificate && (
                    <button
                      type="button"
                      className="btn-outline"
                      onClick={() => handleViewPDF(p.certificate!)}
                    >
                      View Certificate
                    </button>
                  )}
                  {p.ppt && (
                    <button
                      type="button"
                      className="btn-outline"
                      onClick={() => handleViewPPT(p.ppt!)}
                    >
                      View Slides
                    </button>
                  )}
                </div>
              </article>
            ))
          )}
        </div>

        {/* Certifications row */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-slate-900">Global Certification</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-4">
            {certifications.map((c) => (
              <article key={c.title} className="card p-6">
                <h4 className="text-lg font-semibold text-slate-900">{c.title}</h4>
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
      </div>
    </section>
  )
}
