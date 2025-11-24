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
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const navHeight = 80
      const offsetTop = el.offsetTop - navHeight
      setActiveSection(id)
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <header 
      className={`fixed top-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 border-b border-slate-200 shadow-sm' 
          : 'bg-white/80 border-b border-slate-200'
      }`}
    >
      <nav className="container-max flex items-center justify-between py-3">
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); handleClick('hero') }} 
          className="font-bold text-2xl tracking-tight text-slate-900 hover:text-primary-700 transition-colors"
        >
          Portfolio
        </a>
        
        <ul className="hidden md:flex items-center gap-1 px-2 py-1">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => { e.preventDefault(); handleClick(s.id) }}
                className={`relative px-4 py-2 rounded-full font-medium transition-all duration-150 ${
                  activeSection === s.id ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                } hover:bg-slate-100 hover:shadow-sm hover:-translate-y-0.5`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="md:hidden text-slate-700 text-2xl cursor-pointer hover:text-slate-900 transition-colors p-2 rounded-lg hover:bg-slate-100">
          ☰
        </div>
      </nav>
    </header>
  )
}