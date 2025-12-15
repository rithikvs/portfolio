import { useState, useEffect, useCallback } from 'react'

type Difficulty = 'easy' | 'medium' | 'hard'
type Operation = '+' | '-' | '×' | '÷'

interface Question {
  num1: number
  num2: number
  operation: Operation
  displayedAnswer: number
  correctAnswer: number
  isCorrect: boolean
}

interface MathGameProps {
  onClose: () => void
}

export default function MathGame({ onClose }: MathGameProps) {
  const [gameStarted, setGameStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [questionCount, setQuestionCount] = useState(0)
  const [difficulty, setDifficulty] = useState<Difficulty>('easy')
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [timeLeft, setTimeLeft] = useState(4)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [isAnswering, setIsAnswering] = useState(false)

  const TOTAL_QUESTIONS = 15
  const TIME_LIMIT = 4

  const generateQuestion = useCallback((diff: Difficulty): Question => {
    let num1: number, num2: number, operation: Operation, correctAnswer: number

    if (diff === 'easy') {
      num1 = Math.floor(Math.random() * 20) + 1
      num2 = Math.floor(Math.random() * 20) + 1
      operation = Math.random() > 0.5 ? '+' : '-'
      
      if (operation === '-' && num2 > num1) {
        [num1, num2] = [num2, num1] // Ensure positive result
      }
      correctAnswer = operation === '+' ? num1 + num2 : num1 - num2
    } else if (diff === 'medium') {
      num1 = Math.floor(Math.random() * 12) + 1
      num2 = Math.floor(Math.random() * 12) + 1
      operation = '×'
      correctAnswer = num1 * num2
    } else {
      // Hard: Mixed operations
      const ops: Operation[] = ['+', '-', '×']
      operation = ops[Math.floor(Math.random() * ops.length)]
      
      if (operation === '×') {
        num1 = Math.floor(Math.random() * 15) + 1
        num2 = Math.floor(Math.random() * 15) + 1
        correctAnswer = num1 * num2
      } else {
        num1 = Math.floor(Math.random() * 50) + 1
        num2 = Math.floor(Math.random() * 50) + 1
        if (operation === '-' && num2 > num1) {
          [num1, num2] = [num2, num1]
        }
        correctAnswer = operation === '+' ? num1 + num2 : num1 - num2
      }
    }

    // Randomly decide if we show correct or incorrect answer
    const showCorrect = Math.random() > 0.5
    let displayedAnswer: number

    if (showCorrect) {
      displayedAnswer = correctAnswer
    } else {
      // Generate a wrong answer (±1 to ±5)
      const offset = (Math.floor(Math.random() * 5) + 1) * (Math.random() > 0.5 ? 1 : -1)
      displayedAnswer = correctAnswer + offset
      // Ensure displayed answer is positive
      if (displayedAnswer < 0) displayedAnswer = correctAnswer + Math.abs(offset)
    }

    return {
      num1,
      num2,
      operation,
      displayedAnswer,
      correctAnswer,
      isCorrect: showCorrect
    }
  }, [])

  const startGame = () => {
    setGameStarted(true)
    setGameOver(false)
    setScore(0)
    setStreak(0)
    setQuestionCount(0)
    setDifficulty('easy')
    setTimeLeft(TIME_LIMIT)
    setCurrentQuestion(generateQuestion('easy'))
  }

  const handleAnswer = (answer: boolean) => {
    if (isAnswering || !currentQuestion) return

    setIsAnswering(true)
    const correct = answer === currentQuestion.isCorrect

    if (correct) {
      setScore(prev => prev + 1)
      setStreak(prev => prev + 1)
      setFeedback('correct')
    } else {
      setStreak(0)
      setFeedback('wrong')
    }

    // Show feedback for 1 second, then next question
    setTimeout(() => {
      nextQuestion()
    }, 1000)
  }

  const nextQuestion = () => {
    const newCount = questionCount + 1

    if (newCount >= TOTAL_QUESTIONS) {
      setGameOver(true)
      setGameStarted(false)
      return
    }

    // Increase difficulty based on score
    let newDiff: Difficulty = 'easy'
    if (score >= 10) newDiff = 'hard'
    else if (score >= 5) newDiff = 'medium'

    setQuestionCount(newCount)
    setDifficulty(newDiff)
    setCurrentQuestion(generateQuestion(newDiff))
    setTimeLeft(TIME_LIMIT)
    setFeedback(null)
    setIsAnswering(false)
  }

  // Timer countdown
  useEffect(() => {
    if (!gameStarted || gameOver || isAnswering || !currentQuestion) return

    if (timeLeft <= 0) {
      setIsAnswering(true)
      setStreak(0)
      setFeedback('wrong')
      
      setTimeout(() => {
        nextQuestion()
      }, 1000)
      return
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft, gameStarted, gameOver, isAnswering, currentQuestion])

  const getDifficultyColor = (diff: Difficulty) => {
    if (diff === 'easy') return 'text-green-400'
    if (diff === 'medium') return 'text-yellow-400'
    return 'text-red-400'
  }

  const getDifficultyLabel = (diff: Difficulty) => {
    if (diff === 'easy') return '🟢 Easy'
    if (diff === 'medium') return '🟡 Medium'
    return '🔴 Hard'
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-blue-500/50 max-w-2xl w-full overflow-hidden animate-scaleIn">
        {/* Game Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h3 className="text-white font-bold text-xl flex items-center gap-2">
              🧮 Math Challenge
            </h3>
            <div className="flex gap-3 text-sm">
              <span className="text-blue-100 font-semibold">Score: {score}</span>
              {streak > 1 && (
                <span className="text-yellow-300 font-semibold animate-pulse">🔥 {streak}</span>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-blue-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Game Content */}
        <div className="p-6 md:p-8">
          {/* Start Screen */}
          {!gameStarted && !gameOver && (
            <div className="text-center space-y-6 py-8">
              <div className="text-7xl">🧮</div>
              <h4 className="text-3xl font-bold text-blue-300">Math True or False</h4>
              <p className="text-slate-300 text-lg max-w-md mx-auto">
                Decide if each math equation is True or False before time runs out!
              </p>
              <div className="bg-slate-800/50 rounded-lg p-6 max-w-md mx-auto space-y-3 text-left">
                <h5 className="text-blue-400 font-semibold text-center mb-4">📋 Rules:</h5>
                <div className="space-y-2 text-slate-300 text-sm">
                  <p>⏱️ You have 4 seconds per question</p>
                  <p>✅ Correct answer = +1 point</p>
                  <p>❌ Wrong or timeout = streak reset</p>
                  <p>📈 Difficulty increases as you score</p>
                  <p>🎯 Complete {TOTAL_QUESTIONS} questions</p>
                </div>
              </div>
              <button
                onClick={startGame}
                className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-4 px-12 rounded-lg shadow-lg transition-all duration-200 text-lg"
              >
                Start Game
              </button>
            </div>
          )}

          {/* Game Over Screen */}
          {gameOver && (
            <div className="text-center space-y-6 py-8">
              <div className="text-7xl">
                {score >= 12 ? '🏆' : score >= 8 ? '🎉' : '📊'}
              </div>
              <h4 className="text-3xl font-bold text-blue-300">Game Complete!</h4>
              <div className="bg-slate-800/50 rounded-lg p-8 max-w-md mx-auto">
                <p className="text-5xl font-bold text-cyan-400 mb-2">{score}</p>
                <p className="text-slate-300 text-lg">out of {TOTAL_QUESTIONS}</p>
                <p className="text-slate-400 text-sm mt-4">
                  {score >= 12 ? '🌟 Excellent!' : score >= 8 ? '👍 Good job!' : '💪 Keep practicing!'}
                </p>
              </div>
              <button
                onClick={startGame}
                className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-4 px-12 rounded-lg shadow-lg transition-all duration-200"
              >
                Play Again
              </button>
            </div>
          )}

          {/* Game Play Screen */}
          {gameStarted && !gameOver && currentQuestion && (
            <div className="space-y-6">
              {/* Progress & Difficulty */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">
                  Question {questionCount + 1} / {TOTAL_QUESTIONS}
                </span>
                <span className={`font-semibold ${getDifficultyColor(difficulty)}`}>
                  {getDifficultyLabel(difficulty)}
                </span>
              </div>

              {/* Timer */}
              <div className="relative">
                <div className="flex items-center justify-center gap-3">
                  <div className={`text-4xl font-bold ${
                    timeLeft <= 1 ? 'text-red-400 animate-pulse' : 
                    timeLeft <= 2 ? 'text-yellow-400' : 'text-cyan-400'
                  }`}>
                    {timeLeft}s
                  </div>
                </div>
                <div className="mt-2 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ease-linear ${
                      timeLeft <= 1 ? 'bg-red-500' : 
                      timeLeft <= 2 ? 'bg-yellow-500' : 'bg-cyan-500'
                    }`}
                    style={{ width: `${(timeLeft / TIME_LIMIT) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Math Expression */}
              <div className={`bg-slate-800/50 rounded-2xl p-8 md:p-12 border-2 transition-all duration-300 ${
                feedback === 'correct' ? 'border-green-500 bg-green-900/20' :
                feedback === 'wrong' ? 'border-red-500 bg-red-900/20' :
                'border-slate-700'
              }`}>
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono">
                    {currentQuestion.num1} {currentQuestion.operation} {currentQuestion.num2} = {currentQuestion.displayedAnswer}
                  </div>
                  {feedback && (
                    <div className={`text-xl font-semibold ${
                      feedback === 'correct' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {feedback === 'correct' ? '✅ Correct!' : `❌ Wrong! Answer is ${currentQuestion.correctAnswer}`}
                    </div>
                  )}
                </div>
              </div>

              {/* Answer Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <button
                  onClick={() => handleAnswer(true)}
                  disabled={isAnswering}
                  className="group bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 disabled:from-slate-700 disabled:to-slate-800 text-white font-bold py-6 md:py-8 rounded-xl shadow-lg hover:shadow-green-500/50 disabled:shadow-none transition-all duration-200 disabled:cursor-not-allowed hover:scale-105 disabled:scale-100"
                >
                  <div className="text-3xl mb-2">✅</div>
                  <div className="text-xl">TRUE</div>
                </button>
                <button
                  onClick={() => handleAnswer(false)}
                  disabled={isAnswering}
                  className="group bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 disabled:from-slate-700 disabled:to-slate-800 text-white font-bold py-6 md:py-8 rounded-xl shadow-lg hover:shadow-red-500/50 disabled:shadow-none transition-all duration-200 disabled:cursor-not-allowed hover:scale-105 disabled:scale-100"
                >
                  <div className="text-3xl mb-2">❌</div>
                  <div className="text-xl">FALSE</div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
