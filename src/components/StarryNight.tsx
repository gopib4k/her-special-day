import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  message: string;
}

interface Props {
  onRestart?: () => void;
}

function StarryNight({ onRestart }: Props) {
  const [stars, setStars] = useState<Star[]>([]);
  const [activeMessage, setActiveMessage] = useState('');
  const [shooting, setShooting] = useState(false);

  const messages = [
    "You make my days brighter ✨",
    "Happy Birthday 💖",
    "You are truly special 🌸",
    "I’m lucky to know you 💫",
    "You mean more than you know ❤️",
    "Your smile = my favorite thing 😊",
  ];

  // 🌟 Generate stars
  useEffect(() => {
    const generatedStars = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      message: messages[Math.floor(Math.random() * messages.length)],
    }));
    setStars(generatedStars);
  }, []);

  const handleStarClick = (star: Star) => {
    setActiveMessage(star.message);

    // 🌠 shooting star trigger
    setShooting(true);
    setTimeout(() => setShooting(false), 800);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">

      {/* 🌌 Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          onClick={() => handleStarClick(star)}
          className="absolute w-2 h-2 bg-white rounded-full cursor-pointer animate-pulse hover:scale-150 transition"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
        />
      ))}

      {/* 🌠 Shooting Star */}
      {shooting && (
        <div className="absolute top-10 left-0 w-40 h-1 bg-white opacity-70 animate-shooting" />
      )}

      {/* 💬 Message */}
      {activeMessage && (
        <div className="absolute bottom-24 text-center px-6 py-3 bg-white/10 backdrop-blur rounded-full text-lg animate-fadeIn">
          {activeMessage}
        </div>
      )}

      {/* 🌙 Title */}
      <div className="text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          A Sky Full of Thoughts for You 🌌
        </h1>
        <p className="text-gray-300">
          Tap the stars and feel the magic ✨
        </p>
      </div>

      {/* 🔁 Restart / End */}
      <div className="absolute bottom-10">
        <button
          onClick={onRestart}
          className="px-6 py-2 bg-pink-500 rounded-full hover:scale-105 transition"
        >
          See More 💖
        </button>
      </div>
    </div>
  );
}

export default StarryNight;