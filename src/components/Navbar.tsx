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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      
      // Find which section is currently in view
      const navHeight = 80
      const offset = window.scrollY + navHeight + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= offset) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // Call once on mount
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const navHeight = 80
      const offsetTop = el.offsetTop - navHeight
      setActiveSection(id)
      setMobileMenuOpen(false)
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <header 
      className={`fixed top-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 border-b border-cyan-500/30 shadow-lg shadow-cyan-500/20' 
          : 'bg-slate-900/90 border-b border-cyan-500/20'
      }`}
    >
      <nav className="container-max flex items-center justify-between py-3">
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); handleClick('hero') }} 
          className="font-bold text-2xl tracking-tight text-cyan-400 hover:text-cyan-300 transition-colors"
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
                  activeSection === s.id ? 'text-white bg-cyan-700/60 shadow-md' : 'text-slate-300 hover:text-cyan-300'
                } hover:bg-cyan-700/30 hover:shadow-sm hover:-translate-y-0.5`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-cyan-400 text-2xl cursor-pointer hover:text-cyan-300 transition-colors p-2 rounded-lg hover:bg-cyan-500/10"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/98 border-t border-cyan-500/30 backdrop-blur-lg">
          <ul className="flex flex-col py-4">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={(e) => { e.preventDefault(); handleClick(s.id) }}
                  className={`block px-6 py-3 font-medium transition-all duration-150 ${
                    activeSection === s.id ? 'text-white bg-cyan-700/60' : 'text-slate-300 hover:text-white hover:bg-cyan-700/30'
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}