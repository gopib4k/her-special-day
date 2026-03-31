import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface GameHeart {
  id: number;
  x: number;
  y: number;
  message: string;
}

interface HeartGameProps {
  onNext?: () => void;
}

function HeartGame({ onNext }: HeartGameProps) {
  const [hearts, setHearts] = useState<GameHeart[]>([]);
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(true);
  const [currentMessage, setCurrentMessage] = useState('');

  const messages = [
    'You make me smile every day 💖',
    'Your laugh is my favorite sound 😊',
    'You inspire me to be better ✨',
    'Every moment with you is special ❤️',
    'You are truly beautiful 💫',
    'Your kindness is amazing 🌸',
    'I love your vibe 😄',
    'You light up my world 🌍',
    'You mean a lot to me 💕',
    'I’m lucky to know you 💖',
  ];

  // 🎯 Spawn hearts
  useEffect(() => {
    if (!gameActive) return;

    const spawnHeart = () => {
      const newHeart: GameHeart = {
        id: Date.now(),
        x: Math.random() * 80 + 10,
        y: Math.random() * 60 + 10,
        message: messages[Math.floor(Math.random() * messages.length)],
      };

      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 3000);
    };

    const interval = setInterval(spawnHeart, 700);
    return () => clearInterval(interval);
  }, [gameActive]);

  // ❤️ Click heart
  const handleHeartClick = (heart: GameHeart) => {
    setScore((s) => s + 1);
    setCurrentMessage(heart.message);

    setHearts((prev) => prev.filter((h) => h.id !== heart.id));

    // Auto end after 8 hearts
    if (score + 1 >= 8) {
      setTimeout(() => setGameActive(false), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-rose-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Header */}
      <div className="relative z-10 text-center mb-6">
        <h2 className="text-4xl font-bold text-pink-600 mb-2">
          Catch the Hearts ❤️
        </h2>
        <p className="text-pink-700 mb-4">
          Click hearts to reveal something special 💖
        </p>
        <div className="text-2xl font-bold text-pink-500">
          Score: {score}
        </div>
      </div>

      {/* Game Area */}
      <div className="relative w-full max-w-4xl h-96 bg-white/40 backdrop-blur rounded-3xl overflow-hidden shadow-2xl">
        {hearts.map((heart) => (
          <button
            key={heart.id}
            onClick={() => handleHeartClick(heart)}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-bounce hover:scale-125 transition"
            style={{
              left: `${heart.x}%`,
              top: `${heart.y}%`,
            }}
          >
            <Heart className="w-10 h-10 text-red-500 fill-red-500 drop-shadow-lg" />
          </button>
        ))}
      </div>

      {/* 💬 Message display (NEW - important) */}
      {currentMessage && (
        <div className="mt-6 px-6 py-3 bg-white rounded-full shadow-lg text-pink-600 font-medium animate-fadeIn">
          {currentMessage}
        </div>
      )}

      {/* 🎮 Manual continue */}
      {gameActive && (
        <button
          onClick={() => setGameActive(false)}
          className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-full hover:scale-105 transition"
        >
          Skip 💨
        </button>
      )}

      {/* 🏁 Game Over */}
      {!gameActive && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl text-center shadow-xl">
            <p className="text-2xl font-bold text-pink-600 mb-4">
              You caught {score} hearts ❤️
            </p>

            <p className="text-gray-700 mb-6">
              Each one is something I truly feel about you 💖
            </p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-5 py-2 bg-gray-300 rounded-full"
              >
                Play Again
              </button>

              <button
                onClick={onNext}
                className="px-6 py-2 bg-pink-500 text-white rounded-full hover:scale-105 transition"
              >
                Next Surprise 💖
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeartGame;