interface ButterflyProps {
  className?: string;
}

function ButterflyLottie({ className }: ButterflyProps) {
  // 🦋 "Butterfly" is a beautiful BTS song.
  // We restrict the hue rotation to only produce Purples, Lavenders, and Pinks!
  const purpleHue = Math.floor(40 + Math.random() * 60);
  
  return (
    <div 
      className={`flex items-center justify-center text-4xl md:text-5xl ${className}`}
      style={{ 
        // Apply the purple color shift and a subtle purple drop shadow
        filter: `hue-rotate(${purpleHue}deg) drop-shadow(0px 0px 8px rgba(168, 85, 247, 0.5))`,
        animation: `hoverFly ${3 + Math.random() * 2}s ease-in-out infinite`
      }}
    >
      🦋
      <style>{`
        @keyframes hoverFly {
          0%, 100% { transform: translateY(0px) rotate(-5deg); }
          50% { transform: translateY(-15px) rotate(5deg) scale(1.1); }
        }
      `}</style>
    </div>
  );
}

export default ButterflyLottie;