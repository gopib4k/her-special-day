// import React from 'react';

// interface HeartProps {
//   className?: string;
// }

// function HeartLottie({ className }: HeartProps) {
//   // Pick a random heart style
//   const hearts = ['💖', '💝', '💕', '💗', '💓'];
//   const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
  
//   return (
//     <div 
//       className={`flex items-center justify-center text-4xl md:text-5xl drop-shadow-md ${className}`}
//       style={{
//         // Randomize the pulsing speed
//         animation: `magicPulse ${2 + Math.random() * 2}s ease-in-out infinite`
//       }}
//     >
//       {randomHeart}
//       <style>{`
//         @keyframes magicPulse {
//           0%, 100% { transform: scale(1); opacity: 0.7; }
//           50% { transform: scale(1.15); opacity: 1; }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default HeartLottie;

import React from 'react';

interface HeartProps {
  className?: string;
}

function HeartLottie({ className }: HeartProps) {
  // 💜 BTS Theme: Purple hearts, finger hearts, and magic sparkles!
  const btsEmojis = ['💜', '🫰', '✨', '🔮', '🌌', '💟'];
  const randomEmoji = btsEmojis[Math.floor(Math.random() * btsEmojis.length)];
  
  return (
    <div 
      className={`flex items-center justify-center text-4xl md:text-5xl drop-shadow-md ${className}`}
      style={{
        animation: `magicPulse ${2 + Math.random() * 2}s ease-in-out infinite`
      }}
    >
      {randomEmoji}
      <style>{`
        @keyframes magicPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          /* Adding a soft purple glowing shadow at the peak of the pulse */
          50% { transform: scale(1.15); opacity: 1; text-shadow: 0 0 15px rgba(168, 85, 247, 0.6); }
        }
      `}</style>
    </div>
  );
}

export default HeartLottie;