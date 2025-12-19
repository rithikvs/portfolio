import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import RobotChatbot from './components/robot';

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
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(62, 151, 246, 0.9) 0%, rgba(32, 20, 137, 0.95) 50%, rgba(15, 23, 42, 0.98) 100%)",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      {/* Floating robot assistant (always available) */}
      <RobotChatbot />
    </div>
  );
}