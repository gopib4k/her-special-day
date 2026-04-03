import { useState, useMemo } from 'react';
import { Sparkles } from 'lucide-react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  colorClass: string;
  delay: number;
}

interface Props {
  onRestart?: () => void;
}

// 📝 Define your messages outside so they don't recreate on every render
const ALL_MESSAGES = [
  { text: "S is for Silence — because you speak only when it truly matters, and that makes every word of yours special.", emoji: "🤍" },
  { text: "S is for Stage — because whenever you present, you don’t just speak, you steal the entire spotlight.", emoji: "🎤" },
  { text: "S is for Style — the way your words, accent, and confidence flow so effortlessly.", emoji: "✨" },
  { text: "S is for Smile — that one curve of yours that instantly makes my whole day better.", emoji: "😊" },
  { text: "S is for Sweetness — in the way you talk, gentle, kind, and always respectful.", emoji: "🍯" },
  { text: "S is for Soul — pure and kind, the way you treat everyone around you with care.", emoji: "💖" },
  { text: "S is for Steps — the little walks, coffees, and pani puri moments that mean the world to me when you’re beside me.", emoji: "🚶‍♂️" },
  { text: "S is for Stillness — the calmness in you that makes everything feel peaceful.", emoji: "🌸" },
  { text: "S is for Strength — both in your mind and your heart, stronger than you even realize.", emoji: "💪" },
  { text: "S is for Spark — the butterflies I feel every time I see your name or hear your voice.", emoji: "🦋" },
  { text: "S is for Shine — your eyes that feel as deep as the sea and your smile that sparkles like stars.", emoji: "🌊✨" },
  { text: "S is for Sound — your voice, soft, magical, and something I could listen to forever.", emoji: "🎶" },
  { text: "S is for Softness — in your hair, your smile, and the way you carry yourself so gracefully.", emoji: "🌷" },
  { text: "S is for Sincerity — because you are real, loyal, and never fake with anyone.", emoji: "🤍" },
  { text: "S is for Special — because there is truly no one else like you.", emoji: "❤️" },
  { text: "S is for Smart — the perfect balance of beauty and brains that makes you even more amazing.", emoji: "🧠✨" },
  { text: "S is for Skip — I think I need to upgrade my messages so they pass your 'reply filter'.", emoji: "😜" }
];

function StarryNight({ onRestart }: Props) {
  const [activeMessage, setActiveMessage] = useState<{ text: string; emoji: string } | null>(null);
  const [shooting, setShooting] = useState<{ active: boolean; top: number; left: number }>({ active: false, top: 0, left: 0 });

  // Create a shuffled deck of messages when the component first mounts
  const [availableMessages, setAvailableMessages] = useState(() => {
    return [...ALL_MESSAGES].sort(() => Math.random() - 0.5);
  });

  const colors = [
    'text-purple-300 drop-shadow-[0_0_12px_rgba(216,180,254,0.8)]',
    'text-pink-300 drop-shadow-[0_0_12px_rgba(249,168,212,0.8)]',
    'text-blue-300 drop-shadow-[0_0_12px_rgba(147,197,253,0.8)]',
    'text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)]'
  ];

  // Draw 35 stars for the visual effect
  const stars = useMemo(() => {
    return Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      x: Math.random() * 90 + 5, 
      y: Math.random() * 80 + 5,
      size: Math.random() * 1.2 + 0.8, 
      colorClass: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
    }));
  }, []);

  const handleStarClick = (star: Star) => {
    setActiveMessage(null); 
    
    setTimeout(() => {
      // Pull the next message from the available deck to guarantee no repeats
      if (availableMessages.length > 0) {
        const nextMsg = availableMessages[0];
        setAvailableMessages((prev) => prev.slice(1)); // Remove it from the deck
        setActiveMessage(nextMsg);
      } else {
        // Fallback message if they click more than 17 times
        setActiveMessage({ 
          text: "You've uncovered all my thoughts! It's time to unlock the final surprise.", 
          emoji: "✨" 
        });
      }
    }, 50);

    // 🌠 Trigger a shooting star
    setShooting({ active: true, top: star.y, left: star.x });
    setTimeout(() => setShooting({ active: false, top: 0, left: 0 }), 1000);
  };

  return (
    <div className="min-h-screen bg-[#0a0514] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.35),rgba(255,255,255,0))] text-white relative overflow-hidden flex flex-col items-center justify-center animate-fadeIn select-none">

      {/* 🌌 Twinkling Stars Map (Forced to the background with z-0) */}
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            onClick={() => handleStarClick(star)}
            className={`absolute cursor-pointer transition-transform duration-300 hover:scale-[1.8] z-0 ${star.colorClass}`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              fontSize: `${star.size}rem`,
              animation: `twinkle 3s ease-in-out infinite alternate`,
              animationDelay: `${star.delay}s`,
            }}
          >
            ✦
          </div>
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes shootRight {
          0% { transform: translateX(0) translateY(0) rotate(45deg) scale(0); opacity: 0; }
          10% { opacity: 1; transform: translateX(10vw) translateY(-10vh) rotate(45deg) scale(1); }
          100% { transform: translateX(100vw) translateY(-100vh) rotate(45deg) scale(0); opacity: 0; }
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .shooting-star {
          position: absolute;
          width: 150px;
          height: 3px;
          background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(216,180,254,1) 50%, rgba(255,255,255,0) 100%);
          border-radius: 999px;
          filter: drop-shadow(0 0 12px rgba(255,255,255,0.9));
          animation: shootRight 1s ease-out forwards;
          pointer-events: none;
        }
      `}</style>

      {/* 🌠 Dynamic Shooting Star */}
      {shooting.active && (
        <div 
          className="shooting-star z-0" 
          style={{ top: `${shooting.top}%`, left: `${shooting.left}%` }}
        />
      )}

      {/* 🌝 Smiling Full Moon Decoration */}
      <div className="absolute top-12 right-10 md:top-20 md:right-32 z-0 pointer-events-none" style={{ animation: 'gentleFloat 6s ease-in-out infinite' }}>
        <div className="text-7xl md:text-[8rem] drop-shadow-[0_0_40px_rgba(253,224,71,0.5)]">
          🌝
        </div>
      </div>

      {/* ✨ Main Title Area (z-20 keeps it above stars) */}
      <div className="text-center z-20 mt-10 pointer-events-none px-4">
        <h1 className="flex flex-wrap items-center justify-center gap-3 text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          <span className="bg-gradient-to-r from-purple-300 via-pink-200 to-blue-300 bg-clip-text text-transparent pb-2">
            A Sky Full of Thoughts
          </span>
          <span className="text-4xl md:text-5xl animate-pulse drop-shadow-md">✨</span>
        </h1>
        <p className="text-purple-200/80 text-lg md:text-xl font-medium tracking-wide flex items-center justify-center gap-2">
          Tap the stars and feel the magic <Sparkles className="w-5 h-5" />
        </p>
      </div>

      {/* 💬 Message Display (Centered Dark Glassmorphism) */}
      <div className="flex-grow flex items-center justify-center w-full z-20 pointer-events-none">
        <div className={`transition-all duration-700 ease-out transform ${activeMessage ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
          {activeMessage && (
            <div className="px-6 py-6 md:px-10 md:py-8 mx-4 max-w-3xl bg-[#1a0b2e]/70 backdrop-blur-2xl rounded-3xl border border-purple-300/20 shadow-[0_0_40px_rgba(216,180,254,0.15)] text-center flex flex-col md:flex-row items-center justify-center gap-4">
              <p className="text-xl md:text-2xl font-medium leading-relaxed bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent drop-shadow-sm pb-1">
                "{activeMessage.text}"
              </p>
              <span className="text-3xl md:text-4xl animate-bounce drop-shadow-md shrink-0">
                {activeMessage.emoji}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* 🔁 Next Stage Button (z-20) */}
      <div className="absolute bottom-12 z-20">
        <button
          onClick={onRestart}
          className="group relative flex items-center gap-3 px-10 py-4 bg-white/10 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(216,180,254,0.3)] border border-purple-300/30 hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_30px_rgba(216,180,254,0.5)] transition-all duration-300 overflow-hidden cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10 text-white font-semibold text-lg tracking-wider">Unlock the Final Stage</span>
          <span className="relative z-10 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300 text-xl">🔐</span>
        </button>
      </div>

    </div>
  );
}

export default StarryNight;