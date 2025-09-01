import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_100%_0%,rgba(99,102,241,0.15),transparent),radial-gradient(1000px_500px_at_0%_20%,rgba(59,130,246,0.15),transparent)]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}