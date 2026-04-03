import { useMemo } from 'react';
import { Gift } from 'lucide-react';

interface GiftBoxProps {
  onOpen: () => void;
}

function GiftBox({ onOpen }: GiftBoxProps) {
  const decorations = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => {
      const isButterfly = Math.random() > 0.4;
      const hearts = ['💖', '💝', '💕', '💗', '💓', '💘', '💞'];
      const content = isButterfly ? '🦋' : hearts[Math.floor(Math.random() * hearts.length)];
      
      const filterStyle = isButterfly ? `hue-rotate(${Math.floor(Math.random() * 360)}deg)` : 'none';
      
      return {
        id: i,
        content,
        left: `${Math.random() * 100}%`,
        animationDuration: `${10 + Math.random() * 15}s`,
        animationDelay: `-${Math.random() * 20}s`, 
        fontSize: `${1 + Math.random() * 1.5}rem`,
        filter: filterStyle,
      };
    });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden bg-white">
      <style>
        {`
          @keyframes floatUp {
            0% { transform: translate3d(0, 10vh, 0) scale(0.5) rotate(0deg); opacity: 0; }
            10% { opacity: 0.8; }
            50% { transform: translate3d(0, -40vh, 0) scale(1.2) rotate(15deg); }
            90% { opacity: 0.8; }
            100% { transform: translate3d(0, -100vh, 0) scale(0.5) rotate(-15deg); opacity: 0; }
          }
          .floating-item {
            position: absolute;
            bottom: 0;
            animation: floatUp linear infinite;
            pointer-events: none;
            z-index: 0;
            /* Performance Enhancements Below */
            will-change: transform;
            backface-visibility: hidden;
            -webkit-font-smoothing: antialiased;
          }
        `}
      </style>

      {decorations.map((item) => (
        <div
          key={item.id}
          className="floating-item"
          style={{
            left: item.left,
            animationDuration: item.animationDuration,
            animationDelay: item.animationDelay,
            fontSize: item.fontSize,
            filter: item.filter,
          }}
        >
          {item.content}
        </div>
      ))}

      <div className="relative z-10 text-center mb-12 animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
          Something Special
        </h1>
        <p className="text-xl md:text-2xl text-gray-600">
          Just for you 💝
        </p>
      </div>

      <button
        onClick={onOpen}
        className="group relative z-10 animate-bounce hover:animate-none transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>

        <div className="relative bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 p-12 md:p-16 rounded-3xl shadow-2xl transform group-hover:scale-110 transition-all duration-300">
          <Gift className="w-24 h-24 md:w-32 md:h-32 text-white" />
        </div>
      </button>

      <p className="relative z-10 mt-8 text-lg md:text-xl text-gray-600 animate-pulse">
        Click the gift to open 🎁
      </p>
    </div>
  );
}

export default GiftBox;