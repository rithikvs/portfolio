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
      // Removed automatic active section detection to prevent intermediate swapping
    }
    
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const navHeight = 80
      const offsetTop = el.offsetTop - navHeight
      
      // Update active section immediately when clicked
      setActiveSection(id)
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header 
      className={`fixed top-0 z-50 w-full backdrop-blur-xl transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-r from-blue-950/98 via-blue-900/95 to-blue-950/98 border-b border-blue-400/40 shadow-2xl shadow-blue-500/30' 
          : 'bg-gradient-to-r from-blue-950/85 via-blue-900/80 to-blue-950/85 border-b border-blue-400/20'
      }`}
    >
      <nav className="container-max flex items-center justify-between py-4">
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); handleClick('hero') }} 
          className="font-bold text-2xl tracking-tight bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent hover:from-white hover:to-blue-100 transition-all duration-300"
        >
          Portfolio
        </a>
        
        <ul className="hidden md:flex items-center gap-1 bg-blue-950/60 rounded-full px-3 py-2 border border-blue-400/30 shadow-lg">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => { e.preventDefault(); handleClick(s.id) }}
                className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === s.id
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/60'
                    : 'text-blue-200 hover:text-white hover:bg-blue-500/30'
                }`}
              >
                {s.label}
                {activeSection === s.id && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-300 rounded-full animate-pulse shadow-sm shadow-cyan-300"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="md:hidden text-blue-200 text-2xl cursor-pointer hover:text-white transition-colors p-2 rounded-lg hover:bg-blue-500/30">
          ☰
        </div>
      </nav>
    </header>
  )
}