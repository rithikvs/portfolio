import { useState, useEffect, useRef, useCallback } from 'react'

type Position = { x: number; y: number }
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'

export default function SnakeGameCard() {
  const [showGameMenu, setShowGameMenu] = useState(false)
  const [showGame, setShowGame] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const snakeRef = useRef<Position[]>([{ x: 7, y: 7 }])
  const directionRef = useRef<Direction>('RIGHT')
  const foodRef = useRef<Position>({ x: 10, y: 10 })
  const gameLoopRef = useRef<number>()
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)

  const GRID_SIZE = 15
  const CELL_SIZE = 16
  const GAME_SPEED = 150

  const openGame = () => {
    setShowGameMenu(false)
    setShowGame(true)
  }

  const closeGame = () => {
    setShowGame(false)
    setGameStarted(false)
    setGameOver(false)
    resetGame()
  }

  const toggleGameMenu = () => {
    setShowGameMenu(!showGameMenu)
  }

  const changeDirection = (newDirection: Direction) => {
    if (!gameStarted) return
    
    const currentDirection = directionRef.current
    
    // Prevent reversing direction
    if (newDirection === 'UP' && currentDirection !== 'DOWN') {
      directionRef.current = 'UP'
    } else if (newDirection === 'DOWN' && currentDirection !== 'UP') {
      directionRef.current = 'DOWN'
    } else if (newDirection === 'LEFT' && currentDirection !== 'RIGHT') {
      directionRef.current = 'LEFT'
    } else if (newDirection === 'RIGHT' && currentDirection !== 'LEFT') {
      directionRef.current = 'RIGHT'
    }
  }

  const generateFood = useCallback((): Position => {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    }
  }, [])

  const resetGame = useCallback(() => {
    snakeRef.current = [{ x: 7, y: 7 }]
    directionRef.current = 'RIGHT'
    foodRef.current = generateFood()
    setScore(0)
    setGameOver(false)
  }, [generateFood])

  const startGame = () => {
    resetGame()
    setGameStarted(true)
    setGameOver(false)
  }

  const drawGame = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.fillStyle = '#0f172a'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw grid
    ctx.strokeStyle = '#1e293b'
    ctx.lineWidth = 0.5
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath()
      ctx.moveTo(i * CELL_SIZE, 0)
      ctx.lineTo(i * CELL_SIZE, GRID_SIZE * CELL_SIZE)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(0, i * CELL_SIZE)
      ctx.lineTo(GRID_SIZE * CELL_SIZE, i * CELL_SIZE)
      ctx.stroke()
    }

    // Draw snake
    snakeRef.current.forEach((segment, index) => {
      if (index === 0) {
        // Snake Head - Green with eyes
        ctx.fillStyle = '#22c55e'
        ctx.shadowBlur = 15
        ctx.shadowColor = '#22c55e'
        ctx.beginPath()
        ctx.roundRect(
          segment.x * CELL_SIZE + 1,
          segment.y * CELL_SIZE + 1,
          CELL_SIZE - 2,
          CELL_SIZE - 2,
          4
        )
        ctx.fill()
        
        // Draw eyes on the head
        ctx.shadowBlur = 0
        ctx.fillStyle = '#ffffff'
        const eyeSize = 2
        const eyeOffset = 4
        
        // Determine eye position based on direction
        if (directionRef.current === 'RIGHT') {
          ctx.fillRect(segment.x * CELL_SIZE + eyeOffset + 4, segment.y * CELL_SIZE + 3, eyeSize, eyeSize)
          ctx.fillRect(segment.x * CELL_SIZE + eyeOffset + 4, segment.y * CELL_SIZE + 8, eyeSize, eyeSize)
        } else if (directionRef.current === 'LEFT') {
          ctx.fillRect(segment.x * CELL_SIZE + 2, segment.y * CELL_SIZE + 3, eyeSize, eyeSize)
          ctx.fillRect(segment.x * CELL_SIZE + 2, segment.y * CELL_SIZE + 8, eyeSize, eyeSize)
        } else if (directionRef.current === 'UP') {
          ctx.fillRect(segment.x * CELL_SIZE + 3, segment.y * CELL_SIZE + 2, eyeSize, eyeSize)
          ctx.fillRect(segment.x * CELL_SIZE + 8, segment.y * CELL_SIZE + 2, eyeSize, eyeSize)
        } else {
          ctx.fillRect(segment.x * CELL_SIZE + 3, segment.y * CELL_SIZE + eyeOffset + 4, eyeSize, eyeSize)
          ctx.fillRect(segment.x * CELL_SIZE + 8, segment.y * CELL_SIZE + eyeOffset + 4, eyeSize, eyeSize)
        }
      } else {
        // Snake Body - Darker green segments
        const greenShade = Math.max(100, 200 - index * 5)
        ctx.fillStyle = `rgb(34, ${greenShade}, 94)`
        ctx.shadowBlur = 8
        ctx.shadowColor = '#10b981'
        ctx.beginPath()
        ctx.roundRect(
          segment.x * CELL_SIZE + 2,
          segment.y * CELL_SIZE + 2,
          CELL_SIZE - 4,
          CELL_SIZE - 4,
          3
        )
        ctx.fill()
        
        // Add scale pattern
        ctx.shadowBlur = 0
        ctx.fillStyle = `rgba(16, 185, 129, 0.3)`
        ctx.beginPath()
        ctx.arc(
          segment.x * CELL_SIZE + CELL_SIZE / 2,
          segment.y * CELL_SIZE + CELL_SIZE / 2,
          2,
          0,
          Math.PI * 2
        )
        ctx.fill()
      }
      ctx.shadowBlur = 0
    })

    // Draw food
    ctx.fillStyle = '#f43f5e'
    ctx.shadowBlur = 15
    ctx.shadowColor = '#f43f5e'
    ctx.beginPath()
    ctx.arc(
      foodRef.current.x * CELL_SIZE + CELL_SIZE / 2,
      foodRef.current.y * CELL_SIZE + CELL_SIZE / 2,
      CELL_SIZE / 2 - 1,
      0,
      Math.PI * 2
    )
    ctx.fill()
    ctx.shadowBlur = 0
  }, [])

  const moveSnake = useCallback(() => {
    const snake = snakeRef.current
    const head = { ...snake[0] }

    // Move head
    switch (directionRef.current) {
      case 'UP':
        head.y -= 1
        break
      case 'DOWN':
        head.y += 1
        break
      case 'LEFT':
        head.x -= 1
        break
      case 'RIGHT':
        head.x += 1
        break
    }

    // Wrap around walls (smooth movement through edges)
    if (head.x < 0) head.x = GRID_SIZE - 1
    if (head.x >= GRID_SIZE) head.x = 0
    if (head.y < 0) head.y = GRID_SIZE - 1
    if (head.y >= GRID_SIZE) head.y = 0

    // Check self collision only
    if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
      setGameOver(true)
      setGameStarted(false)
      if (score > highScore) {
        setHighScore(score)
      }
      return
    }

    // Add new head
    snake.unshift(head)

    // Check food collision
    if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
      setScore(prev => prev + 10)
      foodRef.current = generateFood()
    } else {
      // Remove tail
      snake.pop()
    }

    snakeRef.current = snake
  }, [score, highScore, generateFood])

  useEffect(() => {
    if (gameStarted && !gameOver) {
      gameLoopRef.current = window.setInterval(() => {
        moveSnake()
        drawGame()
      }, GAME_SPEED)

      return () => {
        if (gameLoopRef.current) {
          clearInterval(gameLoopRef.current)
        }
      }
    }
  }, [gameStarted, gameOver, moveSnake, drawGame])

  useEffect(() => {
    drawGame()
  }, [drawGame])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted) return

      const key = e.key
      
      if (key === 'ArrowUp') {
        changeDirection('UP')
      } else if (key === 'ArrowDown') {
        changeDirection('DOWN')
      } else if (key === 'ArrowLeft') {
        changeDirection('LEFT')
      } else if (key === 'ArrowRight') {
        changeDirection('RIGHT')
      }
      e.preventDefault()
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [gameStarted])

  // Touch controls for mobile
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      touchStartRef.current = { x: touch.clientX, y: touch.clientY }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current || !gameStarted) return

      const touch = e.changedTouches[0]
      const deltaX = touch.clientX - touchStartRef.current.x
      const deltaY = touch.clientY - touchStartRef.current.y

      // Determine swipe direction (minimum 30px swipe)
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 30) {
        // Horizontal swipe
        if (deltaX > 0) {
          changeDirection('RIGHT')
        } else {
          changeDirection('LEFT')
        }
      } else if (Math.abs(deltaY) > 30) {
        // Vertical swipe
        if (deltaY > 0) {
          changeDirection('DOWN')
        } else {
          changeDirection('UP')
        }
      }

      touchStartRef.current = null
    }

    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [gameStarted])

  return (
    <>
      {/* Play Games Button - Top Right Corner */}
      <button
        onClick={toggleGameMenu}
        className="fixed top-20 md:top-24 right-4 md:right-8 z-40 group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 hover:scale-110 transition-all duration-300 flex items-center gap-2"
      >
        <span className="text-lg">🎮</span>
        <span className="text-sm md:text-base">Play Games</span>
      </button>

      {/* Games Menu Dropdown */}
      {showGameMenu && (
        <div className="fixed top-32 md:top-36 right-4 md:right-8 z-40 w-64 md:w-80 animate-scaleIn">
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
              {/* Snake Game */}
              <button
                onClick={openGame}
                className="w-full group bg-gradient-to-br from-green-900/60 to-emerald-950/60 hover:from-green-800/80 hover:to-emerald-900/80 border-2 border-green-500/40 hover:border-green-400/60 rounded-xl p-4 transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-green-500/30"
              >
                <div className="flex items-center gap-3">
                  <div className="text-4xl">🐍</div>
                  <div className="text-left flex-1">
                    <h4 className="text-white font-bold text-base">Snake Game</h4>
                    <p className="text-green-300 text-xs mt-0.5">Classic arcade fun</p>
                  </div>
                  <div className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* More Games - Coming Soon */}
              <div className="bg-slate-800/40 border-2 border-slate-600/30 rounded-xl p-4 opacity-60">
                <div className="flex items-center gap-3">
                  <div className="text-4xl grayscale">🎯</div>
                  <div className="text-left flex-1">
                    <h4 className="text-slate-300 font-bold text-base">More Games</h4>
                    <p className="text-slate-400 text-xs mt-0.5">Coming soon...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Game Modal */}
      {showGame && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-purple-500/50 max-w-lg w-full overflow-hidden animate-scaleIn">
            {/* Game Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h3 className="text-white font-bold text-xl flex items-center gap-2">
                  🐍 Snake Game
                </h3>
                <div className="flex gap-3 text-sm">
                  <span className="text-purple-100 font-semibold">Score: {score}</span>
                  <span className="text-yellow-300 font-semibold">High: {highScore}</span>
                </div>
              </div>
              <button
                onClick={closeGame}
                className="text-white hover:text-purple-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Game Canvas */}
            <div className="p-6">
              <div className="relative bg-slate-950 rounded-lg border-2 border-purple-500/40 overflow-hidden">
                <canvas
                  ref={canvasRef}
                  width={GRID_SIZE * CELL_SIZE}
                  height={GRID_SIZE * CELL_SIZE}
                  className="w-full h-full"
                />
                
                {/* Game Over Overlay */}
                {gameOver && (
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="text-6xl">💀</div>
                      <h4 className="text-3xl font-bold text-red-400">Game Over!</h4>
                      <p className="text-xl text-purple-300">Score: {score}</p>
                      {score === highScore && score > 0 && (
                        <p className="text-yellow-400 font-semibold">🎉 New High Score!</p>
                      )}
                      <button
                        onClick={startGame}
                        className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-200"
                      >
                        Play Again
                      </button>
                    </div>
                  </div>
                )}

                {/* Start Screen */}
                {!gameStarted && !gameOver && (
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                    <div className="text-center space-y-4 px-4">
                      <div className="text-6xl animate-bounce">🐍</div>
                      <h4 className="text-2xl font-bold text-purple-300">Ready to Play?</h4>
                      <p className="text-slate-300 text-sm">
                        <span className="hidden md:inline">Use Arrow Keys or </span>
                        <span className="md:hidden">Swipe or use buttons to control</span>
                        <span className="hidden md:inline">on-screen buttons</span>
                      </p>
                      <button
                        onClick={startGame}
                        className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-200"
                      >
                        Start Game
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Touch Controls */}
              {gameStarted && !gameOver && (
                <div className="mt-4 md:hidden">
                  <div className="grid grid-cols-3 gap-2 max-w-[200px] mx-auto">
                    <div></div>
                    <button
                      onClick={() => changeDirection('UP')}
                      className="bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 active:scale-95 text-white font-bold py-4 rounded-lg shadow-lg shadow-purple-500/30 flex items-center justify-center transition-all"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    <div></div>
                    
                    <button
                      onClick={() => changeDirection('LEFT')}
                      className="bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 active:scale-95 text-white font-bold py-4 rounded-lg shadow-lg shadow-purple-500/30 flex items-center justify-center transition-all"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <div className="flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-purple-900/30 border-2 border-purple-500/30"></div>
                    </div>
                    <button
                      onClick={() => changeDirection('RIGHT')}
                      className="bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 active:scale-95 text-white font-bold py-4 rounded-lg shadow-lg shadow-purple-500/30 flex items-center justify-center transition-all"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    <div></div>
                    <button
                      onClick={() => changeDirection('DOWN')}
                      className="bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 active:scale-95 text-white font-bold py-4 rounded-lg shadow-lg shadow-purple-500/30 flex items-center justify-center transition-all"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div></div>
                  </div>
                  <p className="text-center text-xs text-slate-400 mt-3">
                    💡 Tip: You can also swipe to control
                  </p>
                </div>
              )}

              {/* Controls Info */}
              <div className="mt-4 bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">🎯</span>
                    <span>Eat the red food</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">⌨️</span>
                    <span className="hidden md:inline">Arrow keys</span>
                    <span className="md:hidden">Swipe/Buttons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">🌀</span>
                    <span>Wrap through edges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">⚡</span>
                    <span>Don't hit yourself</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
