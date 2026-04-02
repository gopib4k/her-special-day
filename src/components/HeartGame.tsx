// import { useState, useEffect } from 'react';
// import { Heart } from 'lucide-react';

// interface GameHeart {
//   id: number;
//   x: number;
//   y: number;
//   message: string;
// }

// interface HeartGameProps {
//   onNext?: () => void;
// }

// function HeartGame({ onNext }: HeartGameProps) {
//   const [hearts, setHearts] = useState<GameHeart[]>([]);
//   const [score, setScore] = useState(0);
//   const [gameActive, setGameActive] = useState(true);
//   const [currentMessage, setCurrentMessage] = useState('');

//   const messages = [
//     'You make me smile every day 💖',
//     'Your laugh is my favorite sound 😊',
//     'You inspire me to be better ✨',
//     'Every moment with you is special ❤️',
//     'You are truly beautiful 💫',
//     'Your kindness is amazing 🌸',
//     'I love your vibe 😄',
//     'You light up my world 🌍',
//     'You mean a lot to me 💕',
//     'I’m lucky to know you 💖',
//   ];

//   // 🎯 Spawn hearts
//   useEffect(() => {
//     if (!gameActive) return;

//     const spawnHeart = () => {
//       const newHeart: GameHeart = {
//         id: Date.now(),
//         x: Math.random() * 80 + 10,
//         y: Math.random() * 60 + 10,
//         message: messages[Math.floor(Math.random() * messages.length)],
//       };

//       setHearts((prev) => [...prev, newHeart]);

//       setTimeout(() => {
//         setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
//       }, 3000);
//     };

//     const interval = setInterval(spawnHeart, 700);
//     return () => clearInterval(interval);
//   }, [gameActive]);

//   // ❤️ Click heart
//   const handleHeartClick = (heart: GameHeart) => {
//     setScore((s) => s + 1);
//     setCurrentMessage(heart.message);

//     setHearts((prev) => prev.filter((h) => h.id !== heart.id));

//     // Auto end after 8 hearts
//     if (score + 1 >= 8) {
//       setTimeout(() => setGameActive(false), 1000);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-rose-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
//       {/* Header */}
//       <div className="relative z-10 text-center mb-6">
//         <h2 className="text-4xl font-bold text-pink-600 mb-2">
//           Catch the Hearts ❤️
//         </h2>
//         <p className="text-pink-700 mb-4">
//           Click hearts to reveal something special 💖
//         </p>
//         <div className="text-2xl font-bold text-pink-500">
//           Score: {score}
//         </div>
//       </div>

//       {/* Game Area */}
//       <div className="relative w-full max-w-4xl h-96 bg-white/40 backdrop-blur rounded-3xl overflow-hidden shadow-2xl">
//         {hearts.map((heart) => (
//           <button
//             key={heart.id}
//             onClick={() => handleHeartClick(heart)}
//             className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-bounce hover:scale-125 transition"
//             style={{
//               left: `${heart.x}%`,
//               top: `${heart.y}%`,
//             }}
//           >
//             <Heart className="w-10 h-10 text-red-500 fill-red-500 drop-shadow-lg" />
//           </button>
//         ))}
//       </div>

//       {/* 💬 Message display (NEW - important) */}
//       {currentMessage && (
//         <div className="mt-6 px-6 py-3 bg-white rounded-full shadow-lg text-pink-600 font-medium animate-fadeIn">
//           {currentMessage}
//         </div>
//       )}

//       {/* 🎮 Manual continue */}
//       {gameActive && (
//         <button
//           onClick={() => setGameActive(false)}
//           className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-full hover:scale-105 transition"
//         >
//           Skip 💨
//         </button>
//       )}

//       {/* 🏁 Game Over */}
//       {!gameActive && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded-2xl text-center shadow-xl">
//             <p className="text-2xl font-bold text-pink-600 mb-4">
//               You caught {score} hearts ❤️
//             </p>

//             <p className="text-gray-700 mb-6">
//               Each one is something I truly feel about you 💖
//             </p>

//             <div className="flex gap-4 justify-center">
//               <button
//                 onClick={() => window.location.reload()}
//                 className="px-5 py-2 bg-gray-300 rounded-full"
//               >
//                 Play Again
//               </button>

//               <button
//                 onClick={onNext}
//                 className="px-6 py-2 bg-pink-500 text-white rounded-full hover:scale-105 transition"
//               >
//                 Next Surprise 💖
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default HeartGame;

// import { useState, useEffect } from 'react';
// import { Heart, Sparkles } from 'lucide-react';

// // Added color property to randomize the heart themes
// interface GameHeart {
//   id: number;
//   x: number;
//   y: number;
//   message: string;
//   colorClass: string;
// }

// interface HeartGameProps {
//   onNext?: () => void;
// }

// function HeartGame({ onNext }: HeartGameProps) {
//   const [hearts, setHearts] = useState<GameHeart[]>([]);
//   const [score, setScore] = useState(0);
//   const [gameActive, setGameActive] = useState(true);
//   const [currentMessage, setCurrentMessage] = useState('');

//   const messages = [
//   "When you speak, everything else just fades away 💭",
//   "Our conversations mean more to me than the walks 😄",
//   "Your smile can quietly make my whole day better 😊",
//   "With you, I never even realize how time passes 😌",
//   "Time just feels different when I’m with you ⏳",
//   "You make simple moments feel quietly special ✨",
//   "I don’t remember every word, but I remember how it felt 💖",
//   "Somehow, you make everything feel a little lighter 🌸",
// ];

//   const colors = [
//     'text-purple-500 fill-purple-400',
//     'text-pink-400 fill-pink-300',
//     'text-indigo-400 fill-indigo-300'
//   ];

//   // 🎯 Spawn hearts
//   useEffect(() => {
//     if (!gameActive) return;

//     const spawnHeart = () => {
//       const newHeart: GameHeart = {
//         id: Date.now(),
//         x: Math.random() * 80 + 10,
//         y: Math.random() * 80 + 10, // Increased Y range to use full box
//         message: messages[Math.floor(Math.random() * messages.length)],
//         colorClass: colors[Math.floor(Math.random() * colors.length)],
//       };

//       setHearts((prev) => [...prev, newHeart]);

//       // Remove heart after 3.5 seconds if not clicked
//       setTimeout(() => {
//         setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
//       }, 3500);
//     };

//     const interval = setInterval(spawnHeart, 800); // Slightly slower spawn for better playability
//     return () => clearInterval(interval);
//   }, [gameActive]);

//   // ❤️ Click heart
//   const handleHeartClick = (heart: GameHeart) => {
//     setScore((s) => s + 1);
//     setCurrentMessage(heart.message);
//     setHearts((prev) => prev.filter((h) => h.id !== heart.id));

//     // Auto end after 8 hearts
//     if (score + 1 >= 8) {
//       setTimeout(() => setGameActive(false), 500);
//     }
//   };

//   // 🔄 Proper Reset Function (Fixes the page reload bug!)
//   const handlePlayAgain = () => {
//     setScore(0);
//     setCurrentMessage('');
//     setHearts([]);
//     setGameActive(true);
//   };

//   return (
//     <div className="min-h-screen relative flex flex-col items-center justify-center p-4 overflow-hidden animate-fadeIn">
      
//       {/* Magical Ambient Glow Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 -z-20"></div>
//       <div className="absolute inset-0 max-w-4xl mx-auto top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 blur-[100px] opacity-40 animate-pulse -z-10 rounded-full h-[80%]"></div>

//       {/* Header */}
//       <div className="relative z-10 text-center mb-8">
//         <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 bg-clip-text text-transparent mb-3 drop-shadow-sm">
//           Catch the Magic ✨
//         </h2>
//         <p className="text-purple-700/80 font-medium text-lg mb-4">
//           Catch 8 hearts to unlock the next surprise 💜
//         </p>
//         <div className="inline-block px-6 py-2 bg-white/60 backdrop-blur-md rounded-full shadow-inner border border-purple-100 text-xl font-bold text-purple-600">
//           Score: {score} / 8
//         </div>
//       </div>

//       {/* Game Area (Frosted Glass Container) */}
//       <div className="relative w-full max-w-2xl h-[400px] md:h-[500px] bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-[0_8px_32px_rgba(168,85,247,0.15)] overflow-hidden group">
        
//         {/* Decorative inner glow */}
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-pink-200/20 pointer-events-none"></div>

//         {hearts.map((heart) => (
//           <button
//             key={heart.id}
//             onClick={() => handleHeartClick(heart)}
//             className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform duration-200 outline-none"
//             style={{
//               left: `${heart.x}%`,
//               top: `${heart.y}%`,
//               animation: 'popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, floatSlightly 3s ease-in-out infinite',
//             }}
//           >
//             <Heart className={`w-12 h-12 md:w-14 md:h-14 drop-shadow-lg cursor-pointer ${heart.colorClass}`} />
//           </button>
//         ))}

//         {/* 💬 Message display Toast */}
//         <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-auto transition-all duration-500 ${currentMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
//           <div className="px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-purple-100 text-center text-purple-600 font-semibold flex items-center justify-center gap-2">
//             <Sparkles className="w-4 h-4 text-pink-400" />
//             {currentMessage}
//             <Sparkles className="w-4 h-4 text-indigo-400" />
//           </div>
//         </div>
//       </div>

//       {/* 🎮 Manual continue */}
//       {gameActive && (
//         <button
//           onClick={() => setGameActive(false)}
//           className="mt-8 text-purple-400 hover:text-purple-600 font-medium transition-colors text-sm uppercase tracking-widest"
//         >
//           Skip Game
//         </button>
//       )}

//       {/* Custom Keyframes for popping and floating */}
//       <style>{`
//         @keyframes popIn {
//           0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
//           100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
//         }
//         @keyframes floatSlightly {
//           0%, 100% { transform: translate(-50%, -50%); }
//           50% { transform: translate(-50%, calc(-50% - 10px)); }
//         }
//       `}</style>

//       {/* 🏁 Game Over Modal (Glassmorphism Reveal) */}
//       {!gameActive && (
//         <div className="fixed inset-0 bg-purple-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
//           <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] text-center shadow-2xl border border-white/60 max-w-md w-full transform transition-all animate-slideUp">
            
//             <div className="flex justify-center mb-6">
//               <div className="relative flex items-center justify-center animate-bounce">
//                 <Heart className="w-16 h-16 text-purple-500 fill-purple-400 drop-shadow-lg" />
//                 <Sparkles className="absolute -right-4 -top-2 w-6 h-6 text-pink-400 animate-pulse" />
//               </div>
//             </div>

//             <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
//               You caught {score} hearts!
//             </p>

//             <p className="text-indigo-900/70 font-medium mb-8">
//               Every single one is something I truly feel about you 💜
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               {/* Fixed Play Again Button */}
//               <button
//                 onClick={handlePlayAgain}
//                 className="px-6 py-3 bg-purple-100 text-purple-700 font-semibold rounded-full hover:bg-purple-200 transition-colors shadow-sm"
//               >
//                 Play Again
//               </button>

//               <button
//                 onClick={onNext}
//                 className="relative group/btn px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden"
//               >
//                 <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover/btn:left-[200%] transition-all duration-700 ease-in-out z-0"></div>
//                 <span className="relative z-10">Next Surprise ✨</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default HeartGame;

import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

// Removed 'message' from here since we will track it by the score sequence instead
interface GameHeart {
  id: number;
  x: number;
  y: number;
  colorClass: string;
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
    "When you speak, everything else just fades away 💭",
    "Our conversations mean more to me than the walks 😄",
    "Your smile can quietly make my whole day better 😊",
    "With you, I never even realize how time passes 😌",
    "Time just feels different when I’m with you ⏳",
    "You make simple moments feel quietly special ✨",
    "I don’t remember every word, but I remember how it felt 💖",
    "Somehow, you make everything feel a little lighter 🌸",
  ];

  const colors = [
    'text-purple-500 fill-purple-400',
    'text-pink-400 fill-pink-300',
    'text-indigo-400 fill-indigo-300'
  ];

  // 🎯 Spawn hearts
  useEffect(() => {
    if (!gameActive) return;

    const spawnHeart = () => {
      const newHeart: GameHeart = {
        id: Date.now(),
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10, // Increased Y range to use full box
        colorClass: colors[Math.floor(Math.random() * colors.length)],
      };

      setHearts((prev) => [...prev, newHeart]);

      // Remove heart after 3.5 seconds if not clicked
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 3500);
    };

    const interval = setInterval(spawnHeart, 800); // Slightly slower spawn for better playability
    return () => clearInterval(interval);
  }, [gameActive]);

  // ❤️ Click heart
  const handleHeartClick = (heart: GameHeart) => {
    // Remove the clicked heart immediately
    setHearts((prev) => prev.filter((h) => h.id !== heart.id));

    // Update score and strictly bind the message to the current catch number
    setScore((prevScore) => {
      const nextScore = prevScore + 1;
      
      // Reveal the message perfectly in order, guaranteeing no repeats!
      if (prevScore < messages.length) {
        setCurrentMessage(messages[prevScore]);
      }

      // Auto end after 8 hearts
      if (nextScore >= 8) {
        setTimeout(() => setGameActive(false), 500);
      }
      
      return nextScore;
    });
  };

  // 🔄 Proper Reset Function
  const handlePlayAgain = () => {
    setScore(0);
    setCurrentMessage('');
    setHearts([]);
    setGameActive(true);
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-4 overflow-hidden animate-fadeIn">
      
      {/* Magical Ambient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 -z-20"></div>
      <div className="absolute inset-0 max-w-4xl mx-auto top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 blur-[100px] opacity-40 animate-pulse -z-10 rounded-full h-[80%]"></div>

      {/* Header */}
      <div className="relative z-10 text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 bg-clip-text text-transparent mb-3 drop-shadow-sm">
          Catch the Magic ✨
        </h2>
        <p className="text-purple-700/80 font-medium text-lg mb-4">
          Catch 8 hearts to unlock the next surprise 💜
        </p>
        <div className="inline-block px-6 py-2 bg-white/60 backdrop-blur-md rounded-full shadow-inner border border-purple-100 text-xl font-bold text-purple-600">
          Score: {score} / 8
        </div>
      </div>

      {/* Game Area (Frosted Glass Container) */}
      <div className="relative w-full max-w-2xl h-[400px] md:h-[500px] bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-[0_8px_32px_rgba(168,85,247,0.15)] overflow-hidden group">
        
        {/* Decorative inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-pink-200/20 pointer-events-none"></div>

        {hearts.map((heart) => (
          <button
            key={heart.id}
            onClick={() => handleHeartClick(heart)}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform duration-200 outline-none"
            style={{
              left: `${heart.x}%`,
              top: `${heart.y}%`,
              animation: 'popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, floatSlightly 3s ease-in-out infinite',
            }}
          >
            <Heart className={`w-12 h-12 md:w-14 md:h-14 drop-shadow-lg cursor-pointer ${heart.colorClass}`} />
          </button>
        ))}

        {/* 💬 Message display Toast */}
        <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-auto transition-all duration-500 ${currentMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
          <div className="px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-purple-100 text-center text-purple-600 font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-pink-400" />
            {currentMessage}
            <Sparkles className="w-4 h-4 text-indigo-400" />
          </div>
        </div>
      </div>

      {/* 🎮 Manual continue */}
      {gameActive && (
        <button
          onClick={() => setGameActive(false)}
          className="mt-8 text-purple-400 hover:text-purple-600 font-medium transition-colors text-sm uppercase tracking-widest"
        >
          Skip Game
        </button>
      )}

      {/* Custom Keyframes for popping and floating */}
      <style>{`
        @keyframes popIn {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
        @keyframes floatSlightly {
          0%, 100% { transform: translate(-50%, -50%); }
          50% { transform: translate(-50%, calc(-50% - 10px)); }
        }
      `}</style>

      {/* 🏁 Game Over Modal (Glassmorphism Reveal) */}
      {!gameActive && (
        <div className="fixed inset-0 bg-purple-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] text-center shadow-2xl border border-white/60 max-w-md w-full transform transition-all animate-slideUp">
            
            <div className="flex justify-center mb-6">
              <div className="relative flex items-center justify-center animate-bounce">
                <Heart className="w-16 h-16 text-purple-500 fill-purple-400 drop-shadow-lg" />
                <Sparkles className="absolute -right-4 -top-2 w-6 h-6 text-pink-400 animate-pulse" />
              </div>
            </div>

            <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
              You caught {score} hearts!
            </p>

            <p className="text-indigo-900/70 font-medium mb-8">
              Every single one is something I truly feel about you 💜
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Fixed Play Again Button */}
              <button
                onClick={handlePlayAgain}
                className="px-6 py-3 bg-purple-100 text-purple-700 font-semibold rounded-full hover:bg-purple-200 transition-colors shadow-sm"
              >
                Play Again
              </button>

              <button
                onClick={onNext}
                className="relative group/btn px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden"
              >
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover/btn:left-[200%] transition-all duration-700 ease-in-out z-0"></div>
                <span className="relative z-10">Next Surprise ✨</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeartGame;