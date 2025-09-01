import { useEffect, useState } from 'react'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur ${scrolled ? 'bg-slate-950/70 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="container-max flex items-center justify-between py-3">
        <a href="#hero" onClick={(e) => { e.preventDefault(); handleClick('hero') }} className="font-semibold tracking-tight text-slate-100">Portfolio</a>
        <ul className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => { e.preventDefault(); handleClick(s.id) }}
                className="text-slate-300 hover:text-white transition"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden text-slate-300">☰</div>
      </nav>
    </header>
  )
}