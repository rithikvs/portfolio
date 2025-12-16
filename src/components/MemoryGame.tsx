import { useState, useEffect } from 'react'

interface MemoryGameProps {
  onClose: () => void
}

type Card = {
  id: number
  symbol: string
  isFlipped: boolean
  isMatched: boolean
}

const SYMBOLS = ['🐘', '⭐', '🍎', '🚗', '🎵', '🌙', '🔥', '⚽', '🎁', '🐟']

export default function MemoryGame({ onClose }: MemoryGameProps) {
  const [cards, setCards] = useState<Card[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [matchedPairs, setMatchedPairs] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [isWon, setIsWon] = useState(false)
  const [time, setTime] = useState(0)
  const [isChecking, setIsChecking] = useState(false)

  // Initialize and shuffle cards
  const initializeGame = () => {
    const cardPairs: Card[] = []
    SYMBOLS.forEach((symbol, index) => {
      cardPairs.push(
        { id: index * 2, symbol, isFlipped: false, isMatched: false },
        { id: index * 2 + 1, symbol, isFlipped: false, isMatched: false }
      )
    })
    
    // Shuffle cards
    const shuffled = cardPairs.sort(() => Math.random() - 0.5)
    setCards(shuffled)
    setFlippedCards([])
    setMoves(0)
    setMatchedPairs(0)
    setIsWon(false)
    setTime(0)
    setGameStarted(true)
  }

  // Handle card click
  const handleCardClick = (id: number) => {
    if (!gameStarted || isChecking || isWon) return
    
    const card = cards.find(c => c.id === id)
    if (!card || card.isFlipped || card.isMatched) return
    if (flippedCards.includes(id)) return
    if (flippedCards.length >= 2) return

    // Flip the card
    const newCards = cards.map(c =>
      c.id === id ? { ...c, isFlipped: true } : c
    )
    setCards(newCards)
    
    const newFlipped = [...flippedCards, id]
    setFlippedCards(newFlipped)

    // Check for match when 2 cards are flipped
    if (newFlipped.length === 2) {
      setMoves(moves + 1)
      setIsChecking(true)
      
      const [firstId, secondId] = newFlipped
      const firstCard = newCards.find(c => c.id === firstId)
      const secondCard = newCards.find(c => c.id === secondId)

      if (firstCard && secondCard && firstCard.symbol === secondCard.symbol) {
        // Match found
        setTimeout(() => {
          setCards(cards.map(c =>
            c.id === firstId || c.id === secondId
              ? { ...c, isMatched: true }
              : c
          ))
          setMatchedPairs(matchedPairs + 1)
          setFlippedCards([])
          setIsChecking(false)
          
          // Check win condition
          if (matchedPairs + 1 === SYMBOLS.length) {
            setIsWon(true)
          }
        }, 600)
      } else {
        // No match - flip back
        setTimeout(() => {
          setCards(cards.map(c =>
            c.id === firstId || c.id === secondId
              ? { ...c, isFlipped: false }
              : c
          ))
          setFlippedCards([])
          setIsChecking(false)
        }, 1000)
      }
    }
  }

  // Timer
  useEffect(() => {
    let interval: number | undefined
    if (gameStarted && !isWon) {
      interval = window.setInterval(() => {
        setTime(prev => prev + 1)
      }, 1000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [gameStarted, isWon])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn overflow-y-auto">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-purple-500/50 max-w-3xl w-full overflow-hidden animate-scaleIn my-auto">
        {/* Game Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h3 className="text-white font-bold text-xl flex items-center gap-2">
              🧠 Memory Match
            </h3>
            <div className="flex gap-3 text-sm">
              <span className="text-purple-100 font-semibold">Moves: {moves}</span>
              <span className="text-yellow-300 font-semibold">Time: {formatTime(time)}</span>
              <span className="text-green-300 font-semibold">Pairs: {matchedPairs}/10</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-purple-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Game Content */}
        <div className="p-6">
          {!gameStarted ? (
            <div className="text-center space-y-4 py-12">
              <div className="text-6xl animate-bounce">🧠</div>
              <h4 className="text-2xl font-bold text-purple-300">Memory Match Game</h4>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Find all 10 matching pairs! Click cards to flip them and remember their positions.
              </p>
              <button
                onClick={initializeGame}
                className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-200"
              >
                Start Game
              </button>
            </div>
          ) : (
            <>
              {/* Game Board */}
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 max-w-2xl mx-auto">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => handleCardClick(card.id)}
                    className={`aspect-square rounded-lg cursor-pointer transition-all duration-300 transform ${
                      card.isMatched
                        ? 'bg-green-600/30 border-2 border-green-400 scale-95'
                        : card.isFlipped
                        ? 'bg-gradient-to-br from-purple-600 to-pink-600 scale-105'
                        : 'bg-gradient-to-br from-slate-700 to-slate-800 hover:scale-105 border-2 border-slate-600'
                    } flex items-center justify-center shadow-lg`}
                  >
                    <span className={`text-4xl transition-opacity duration-300 ${
                      card.isFlipped || card.isMatched ? 'opacity-100' : 'opacity-0'
                    }`}>
                      {card.isFlipped || card.isMatched ? card.symbol : '?'}
                    </span>
                    {!card.isFlipped && !card.isMatched && (
                      <span className="text-3xl text-purple-300">?</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Controls */}
              <div className="mt-6 flex gap-3 justify-center">
                <button
                  onClick={initializeGame}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-all duration-200"
                >
                  New Game
                </button>
              </div>

              {/* Instructions */}
              <div className="mt-4 bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                <div className="text-xs text-slate-300 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">🎯</span>
                    <span>Click cards to flip and find matching pairs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✨</span>
                    <span>Complete all 10 pairs to win the game</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Win Screen */}
          {isWon && (
            <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-10">
              <div className="text-center space-y-4 p-8">
                <div className="text-6xl">🎉</div>
                <h4 className="text-3xl font-bold text-purple-400">Congratulations!</h4>
                <p className="text-xl text-purple-300">
                  You won in {moves} moves and {formatTime(time)}!
                </p>
                <div className="flex gap-3 justify-center mt-6">
                  <button
                    onClick={initializeGame}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-200"
                  >
                    Play Again
                  </button>
                  <button
                    onClick={onClose}
                    className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
