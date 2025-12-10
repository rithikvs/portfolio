import { useState, useCallback } from 'react'

type Item = { 
  title: string
  issuer?: string
  date?: string
  link?: string
  certificate?: string
  ppt?: string
  prize?: string
  image?: string
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
    prize: "Finalist",
    image: "bytes image.png"
  },
  {
    title: "HACKATRONICS ",
    issuer: "Mechatronics department Kongu Engineering College",
     date: "September 26th,27th 2025",
    certificate: "hactronics mts.pdf",
    prize: "7th place",
    image: "hackatronics image.jpg"
  },
  {
    title: "ibm skills",
    issuer: "nascom foundation",
    date: "September 16th,17th 2025",
    certificate: "ibm certificate.pdf",
    prize: "TOP 20",
    image: "ibm image.jpg"
  },
  {
    title: "2nd AI/ML CHALLENGE (online)",
    issuer: "IIT MADRAS",
    date: "2023",
    certificate: "iit madras.pdf",
    prize: "participated",
    image: "iit madras.png"
  }
]

const papers: Item[] = [
  {
    title: 'AI-Driven Adaptive NPC Personalities in Video Games',
    issuer: 'Bannari Amman Institute of Technology – INFREIX24',
    date: '6th NOVEMBER2024',
    certificate: 'bannari.pdf',
    ppt: 'yoyo.pdf',
    link: '',
    prize: "1st prize",
    image: 'bannari image.png'
  },
  
  {
    title: 'A real-time Indian language communication assistant for the Deaf and hard of hearing.',
    issuer: 'Kongu Engineering College – THROB 2025',
    date: '2025',
    certificate: 'throb paper.pdf',
    ppt: 'sigin.pdf',
    prize: "1st prize",
    image: 'throb image.jpg'
  },
   {
    title: 'Land connect',
    issuer: 'Kongu Engineering College – Sigin 2024',
    date: '1.10.2024',
    certificate: 'sigin25.pdf',
    ppt: 'land connect.pdf',
    prize: "2nd prize",
    image: 'sigin image.png'
  },
   {
    title: 'AI-Powered Chatbots: Enhancing Customer Experience',
    issuer: 'KGISL college coimbatore',
    date: '25th oct 2024',
    certificate: 'kgisl.pdf',
    ppt: 'kgisl ppt.pdf',
    prize: "participated",
    image: 'kgisl image.png'
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
            className={`btn-light ${tab === 'hackathon' ? 'ring-2 ring-cyan-600 !bg-cyan-700 !text-white shadow-md shadow-cyan-600/30' : ''}`}
            onClick={() => setTab('hackathon')}
          >
            Hackathons
          </button>
          <button
            className={`btn-light ${tab === 'papers' ? 'ring-2 ring-cyan-600 !bg-cyan-700 !text-white shadow-md shadow-cyan-600/30' : ''}`}
            onClick={() => setTab('papers')}
          >
            Paper Presentations
          </button>
        </div>

        {/* Content grid aligned */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {tab === 'hackathon' ? (
            hackathons.map((h) => (
              <article key={h.title} className="card p-6 group">
                {/* Image */}
                {h.image && (
                  <div className="relative w-full h-40 mb-4 overflow-hidden rounded-xl">
                    <img
                      src={h.image}
                      alt={h.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                )}
                <h3 className="text-xl font-bold text-white drop-shadow-md">{h.title}</h3>
                <p className="mt-2 text-slate-100 text-base font-medium">
                  {h.issuer} {h.date ? `• ${h.date}` : ''}
                </p>
                {h.prize && (
                  <p className="mt-2 text-green-300 font-bold text-base bg-green-500/20 px-3 py-1 rounded-lg inline-block">🏆 {h.prize}</p>
                )}
                <div className="mt-4 flex items-center gap-3">
                  {h.certificate && (
                    <button
                      type="button"
                      className="btn-success"
                      onClick={() => handleViewPDF(h.certificate!)}
                    >
                      📄 View Certificate
                    </button>
                  )}
                </div>
              </article>
            ))
          ) : (
            papers.map((p) => (
              <article key={p.title} className="card p-6 group">
                {/* Image */}
                {p.image && (
                  <div className="relative w-full h-40 mb-4 overflow-hidden rounded-xl">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                )}
                <h3 className="text-xl font-bold text-white drop-shadow-md">{p.title}</h3>
                <p className="mt-2 text-slate-100 text-base font-medium">
                  {p.issuer} {p.date ? `• ${p.date}` : ''}
                </p>
                {p.prize && (
                  <p className="mt-2 text-green-300 font-bold text-base bg-green-500/20 px-3 py-1 rounded-lg inline-block">🏆 {p.prize}</p>
                )}
                <div className="mt-4 flex items-center gap-3">
                  {p.certificate && (
                    <button
                      type="button"
                      className="btn-success"
                      onClick={() => handleViewPDF(p.certificate!)}
                    >
                      📄 View Certificate
                    </button>
                  )}
                  {p.ppt && (
                    <button
                      type="button"
                      className="btn-success"
                      onClick={() => handleViewPPT(p.ppt!)}
                    >
                      🎯 View Slides
                    </button>
                  )}
                </div>
              </article>
            ))
          )}
        </div>

        {/* Certifications row */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-white drop-shadow-md">Global Certification</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-4">
            {certifications.map((c) => (
              <article key={c.title} className="card p-6">
                <h4 className="text-xl font-bold text-white drop-shadow-md">{c.title}</h4>
                <div className="mt-3 flex gap-2">
                  {c.certificate && (
                    <a
                      href={encodeURI(c.certificate)}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-success"
                    >
                      📄 View Certificate
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
