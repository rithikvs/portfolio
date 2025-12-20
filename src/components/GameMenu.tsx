import { useState, useEffect, useRef } from 'react'
import MathGame from './MathGame'
import MemoryGame from './MemoryGame'

type GameType = 'math' | 'memory' | null

export default function GameMenu() {
  const [showGameMenu, setShowGameMenu] = useState(false)
  const [activeGame, setActiveGame] = useState<GameType>(null)
  const toggleGameMenu = () => {
    setShowGameMenu((prev: boolean) => !prev);
  }

  const openGame = (game: GameType) => {
    setShowGameMenu(false)
    setActiveGame(game)
  }

  const closeGame = () => {
    setActiveGame(null)
  }

  const [showButton, setShowButton] = useState(true)
  const heroRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // Find the hero section
    const hero = document.getElementById('hero') as HTMLElement | null
    heroRef.current = hero
    if (!hero) return

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowButton(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <>
          {/* Play Games Button - Only show when hero is visible */}
          {showButton && (
            <button
              onClick={toggleGameMenu}
              className="fixed top-[88px] sm:top-20 md:top-24 right-3 sm:right-4 md:right-8 z-40 group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 active:scale-95 text-white font-bold px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base whitespace-nowrap"
            >
              <span className="text-base sm:text-lg">🎮</span>
              <span>Play Games</span>
            </button>
          )}

          {/* Games Menu Dropdown */}
          {showGameMenu && (
            <div className="fixed top-[132px] sm:top-32 md:top-36 right-3 sm:right-4 md:right-8 z-40 w-[calc(100vw-1.5rem)] max-w-[280px] sm:w-64 md:w-80 animate-scaleIn">
              <div className="bg-gradient-to-br from-slate-800/98 to-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/30 overflow-hidden">
                {/* Menu Header */}
                <div className="bg-gradient-to-r from-purple-600/90 to-pink-600/90 px-4 py-3 border-b border-purple-400/30">
                  <h3 className="text-white font-bold text-lg flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      🎮 Game Zone
                    </span>
                    <button
                      onClick={toggleGameMenu}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </h3>
                </div>

                {/* Games List */}
                <div className="p-3 space-y-2">
                  {/* Math Game */}
                  <button
                    onClick={() => openGame('math')}
                    className="w-full py-2 px-4 rounded-lg bg-cyan-700/80 hover:bg-cyan-600/90 text-white font-semibold flex items-center gap-2 shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all duration-200"
                  >
                    ➕ Math Game
                  </button>
                  {/* Memory Game */}
                  <button
                    onClick={() => openGame('memory')}
                    className="w-full py-2 px-4 rounded-lg bg-pink-700/80 hover:bg-pink-600/90 text-white font-semibold flex items-center gap-2 shadow-md shadow-pink-500/20 hover:shadow-pink-400/40 transition-all duration-200"
                  >
                    🧠 Memory Game
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Render active game */}
          {/* Render active game with onClose prop */}
          {activeGame === 'math' && <MathGame onClose={closeGame} />}
          {activeGame === 'memory' && <MemoryGame onClose={closeGame} />}
        </>
  );
}
