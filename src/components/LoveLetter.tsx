// import { useEffect, useState } from 'react';
// import { Heart } from 'lucide-react';

// interface LoveLetterProps {
//   delay: number;
// }

// function LoveLetter({ delay }: LoveLetterProps) {
//   const [isVisible, setIsVisible] = useState(false);
//   const [displayedText, setDisplayedText] = useState('');

//   const fullText = `Dear Special One,

// This might seem like just a website, but it represents something much more meaningful. Every line of code, every animation, every word here was crafted with you in mind.

// On your birthday, I wanted to create something that shows how much you mean to me. You deserve to feel celebrated, appreciated, and valued—not just today, but every single day.

// Your presence makes the world brighter. Your smile can turn an ordinary moment into something extraordinary. The way you care about others, the way you stay true to yourself—it's truly inspiring.

// I hope this year brings you everything you've been dreaming of and more. May it be filled with laughter, love, adventures, and beautiful memories.

// Thank you for being you. Thank you for the moments we've shared. Here's to many more.

// Happy Birthday! 🎂✨

// With all my heart ❤️`;

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), delay * 1000);
//     return () => clearTimeout(timer);
//   }, [delay]);

//   useEffect(() => {
//     if (!isVisible) return;

//     let index = 0;
//     const typeInterval = setInterval(() => {
//       if (index <= fullText.length) {
//         setDisplayedText(fullText.slice(0, index));
//         index++;
//       } else {
//         clearInterval(typeInterval);
//       }
//     }, 30);

//     return () => clearInterval(typeInterval);
//   }, [isVisible, fullText]);

//   return (
//     <div
//       className={`min-h-screen flex items-center justify-center p-8 transition-all duration-1000 ${
//         isVisible ? 'opacity-100' : 'opacity-0'
//       }`}
//     >
//       <div className="max-w-3xl w-full">
//         <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-white/50 relative overflow-hidden">
//           <div className="absolute top-4 right-4">
//             <Heart className="w-8 h-8 text-pink-400 fill-pink-400 animate-pulse" />
//           </div>

//           <div className="prose prose-lg max-w-none">
//             <pre className="font-serif text-base md:text-lg text-gray-800 whitespace-pre-wrap leading-relaxed">
//               {displayedText}
//               <span className="animate-pulse">|</span>
//             </pre>
//           </div>

//           {displayedText === fullText && (
//             <div className="mt-8 text-center animate-fadeIn">
//               <div className="flex justify-center gap-2">
//                 <Heart className="w-6 h-6 text-pink-500 fill-pink-500 animate-bounce" style={{ animationDelay: '0ms' }} />
//                 <Heart className="w-6 h-6 text-purple-500 fill-purple-500 animate-bounce" style={{ animationDelay: '150ms' }} />
//                 <Heart className="w-6 h-6 text-blue-500 fill-blue-500 animate-bounce" style={{ animationDelay: '300ms' }} />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoveLetter;

import { useEffect, useState, useRef } from 'react';
import { Heart } from 'lucide-react';

interface LoveLetterProps {
  onNext?: () => void; // 👈 for next surprise
}

function LoveLetter({ onNext }: LoveLetterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  const containerRef = useRef<HTMLDivElement | null>(null);

  const fullText = `Dear Special One,

This might seem like just a website, but it represents something much more meaningful. Every line of code, every animation, every word here was crafted with you in mind.

On your birthday, I wanted to create something that shows how much you mean to me. You deserve to feel celebrated, appreciated, and valued—not just today, but every single day.

Your presence makes the world brighter. Your smile can turn an ordinary moment into something extraordinary. The way you care about others, the way you stay true to yourself—it's truly inspiring.

I hope this year brings you everything you've been dreaming of and more. May it be filled with laughter, love, adventures, and beautiful memories.

Thank you for being you. Thank you for the moments we've shared. Here's to many more.

Happy Birthday! 🎂✨

With all my heart ❤️`;

  // 👀 Start when visible on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
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
    }, 30);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className={`min-h-screen flex items-center justify-center p-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-3xl w-full">
        <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-white/50 relative overflow-hidden">
          
          {/* ❤️ corner icon */}
          <div className="absolute top-4 right-4">
            <Heart className="w-8 h-8 text-pink-400 fill-pink-400 animate-pulse" />
          </div>

          {/* 💌 letter */}
          <div className="prose prose-lg max-w-none">
            <pre className="font-serif text-base md:text-lg text-gray-800 whitespace-pre-wrap leading-relaxed">
              {displayedText}
              {displayedText !== fullText && (
                <span className="animate-pulse">|</span>
              )}
            </pre>
          </div>

          {/* 🎯 after typing complete */}
          {displayedText === fullText && (
            <div className="mt-10 text-center animate-fadeIn">
              
              {/* hearts */}
              <div className="flex justify-center gap-2 mb-6">
                <Heart className="w-6 h-6 text-pink-500 fill-pink-500 animate-bounce" />
                <Heart className="w-6 h-6 text-purple-500 fill-purple-500 animate-bounce" />
                <Heart className="w-6 h-6 text-blue-500 fill-blue-500 animate-bounce" />
              </div>

              {/* next button */}
              <button
                onClick={onNext}
                className="px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:scale-105 transition"
              >
                Next Surprise 💖
              </button>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoveLetter;