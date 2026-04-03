import { useEffect, useState, useRef, useMemo } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface LoveLetterProps {
  onNext?: () => void;
}

function LoveLetter({ onNext }: LoveLetterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  const containerRef = useRef<HTMLDivElement | null>(null);

  const fullText = `Happy Birthday Susritha ✨

I don’t know if this is the usual kind of birthday wish… but I wanted to make it something you’d remember. Not just another message, but something that carries a little piece of how I see you.

Sometimes, it’s not the big things that stay with us—it’s those small walks, random conversations, and simple moments that somehow become special. And many of those moments… have you in them.

This little space I created is just my way of holding onto those memories. Not because they’re extraordinary to the world, but because they felt meaningful to me.

You might not notice it, but your presence has a way of making ordinary days feel a little better.

I hope this year brings you happiness, peace, and moments that truly make you smile.

Happy Birthday once again…💜`;

  // 🌸 Lock in random values for the left side so they don't re-render during typing
  const leftDecorations = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: `left-${i}`,
      left: `${Math.random() * 100}%`,
      duration: `${25 + Math.random() * 20}s`,
      delay: `-${Math.random() * 45}s`,
      filter: `hue-rotate(${Math.random() > 0.5 ? '250deg' : '0deg'})`,
      icon: Math.random() > 0.5 ? '🌸' : '✨',
    }));
  }, []);

  // 🌸 Lock in random values for the right side
  const rightDecorations = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: `right-${i}`,
      left: `${Math.random() * 100}%`,
      duration: `${25 + Math.random() * 20}s`,
      delay: `-${Math.random() * 45}s`,
      filter: `hue-rotate(${Math.random() > 0.5 ? '250deg' : '0deg'})`,
      icon: Math.random() > 0.5 ? '🌸' : '✨',
    }));
  }, []);

  // 👀 Start when visible on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // ✍️ Typing effect
  useEffect(() => {
    if (!isVisible) return;

    let index = 0;

    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 35); 

    return () => clearInterval(interval);
  }, [isVisible, fullText]);

  return (
    <div
      ref={containerRef}
      className={`min-h-screen relative flex items-center justify-center p-4 md:p-8 transition-all duration-1000 ease-out overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Magical Ambient Glow behind the letter */}
      <div className="absolute inset-0 max-w-4xl mx-auto top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 blur-[100px] opacity-30 animate-pulse -z-10 rounded-full h-[80%]"></div>

      {/* 🌸 "Spring Day" Falling Magic (Left Side) */}
      <div className="absolute inset-y-0 left-2 md:left-8 w-28 md:w-64 pointer-events-none z-0">
        {leftDecorations.map((item) => (
          <div
            key={item.id}
            className="absolute opacity-0 text-xl md:text-2xl drop-shadow-sm"
            style={{
              left: item.left,
              animation: `gentleFall ${item.duration} ease-in-out infinite`,
              animationDelay: item.delay,
              filter: item.filter,
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* 🌸 "Spring Day" Falling Magic (Right Side) */}
      <div className="absolute inset-y-0 right-2 md:right-8 w-28 md:w-64 pointer-events-none z-0">
        {rightDecorations.map((item) => (
          <div
            key={item.id}
            className="absolute opacity-0 text-xl md:text-2xl drop-shadow-sm"
            style={{
              left: item.left,
              animation: `gentleFall ${item.duration} ease-in-out infinite`,
              animationDelay: item.delay,
              filter: item.filter,
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* Custom Ultra-Slow Swaying Animation */}
      <style>{`
        @keyframes gentleFall {
          0% { transform: translate(0px, -10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.7; }
          25% { transform: translate(30px, 25vh) rotate(90deg); opacity: 0.8; }
          50% { transform: translate(-30px, 50vh) rotate(180deg); opacity: 0.8; }
          75% { transform: translate(30px, 75vh) rotate(270deg); opacity: 0.8; }
          90% { opacity: 0.7; }
          100% { transform: translate(0px, 110vh) rotate(360deg); opacity: 0; }
        }
      `}</style>

      {/* The Letter Container */}
      <div className="max-w-3xl w-full relative group z-10">
        
        {/* The Frosted Glass Letter Box */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-white/80 relative overflow-hidden transition-all duration-500 hover:shadow-purple-500/20">
          
          {/* ✨ Magical "Wax Seal" Header Decoration */}
          <div className="flex justify-center mb-8 relative">
            <div className="absolute inset-0 bg-purple-200 blur-2xl opacity-50 rounded-full h-16 w-16 mx-auto"></div>
            <div className="relative flex items-center justify-center animate-bounce duration-1000">
              <Sparkles className="absolute -left-6 -top-2 w-5 h-5 text-purple-400 animate-pulse" />
              <Heart className="w-10 h-10 text-purple-500 fill-purple-400 drop-shadow-lg" />
              <Sparkles className="absolute -right-6 -bottom-2 w-5 h-5 text-pink-400 animate-pulse" />
            </div>
          </div>

          {/* 💌 The Letter Content */}
          <div className="relative z-10">
            <div className="font-serif text-[1.1rem] md:text-[1.25rem] text-indigo-950 whitespace-pre-wrap leading-loose tracking-wide font-medium">
              {displayedText}
              {displayedText !== fullText && (
                <span className="inline-block w-2 h-5 ml-1 bg-purple-400 animate-pulse align-middle"></span>
              )}
            </div>
          </div>

          {/* 🎯 The Reveal (After typing is complete) */}
          <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${displayedText === fullText ? 'max-h-96 mt-12 opacity-100' : 'max-h-0 mt-0 opacity-0'}`}>
            
            {/* The Clean, Frosted "Reveal Card" */}
            <div className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-purple-100/50 shadow-[0_8px_32px_rgba(168,85,247,0.1)] relative">
              
              <p className="relative z-10 text-purple-500 font-semibold tracking-widest mb-6 animate-pulse text-xs md:text-sm uppercase">
                Wait… the magic isn't over yet ✨
              </p>

              {/* Magical Medallion (Grouped Hearts) */}
              <div className="relative z-10 flex items-center justify-center gap-2 mb-8 bg-white/70 px-6 py-3 rounded-full shadow-inner border border-purple-100">
                <Heart className="w-5 h-5 text-purple-500 fill-purple-400 animate-bounce" style={{ animationDelay: '0s' }} />
                <Heart className="w-7 h-7 text-pink-400 fill-pink-300 animate-bounce" style={{ animationDelay: '0.2s' }} />
                <Heart className="w-5 h-5 text-indigo-400 fill-indigo-300 animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>

              {/* Polished Next Button */}
              <button
                onClick={onNext}
                className="relative z-10 flex items-center gap-3 px-10 py-4 bg-white/90 rounded-full shadow-[0_4px_20px_rgba(168,85,247,0.2)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.4)] border border-purple-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden group/btn"
              >
                {/* Clean, sweeping shine effect */}
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-purple-100/80 to-transparent skew-x-12 group-hover/btn:left-[200%] transition-all duration-1000 ease-in-out z-0"></div>
                
                <span className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-bold text-xl tracking-wide">
                  Next Surprise
                </span>
                
                <span className="relative z-10 group-hover/btn:rotate-12 group-hover/btn:scale-125 transition-all duration-300 transform origin-bottom text-2xl">
                  💜
                </span>
              </button>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default LoveLetter;