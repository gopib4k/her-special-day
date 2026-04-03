import { useEffect, useRef, useState } from 'react';

interface StorySectionProps {
  title: string;
  content: string;
}

function StorySection({ title, content }: StorySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle BOTH ways (down + up)
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px', // smoother trigger
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`py-12 md:py-16 flex items-center justify-center transition-all duration-1000 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-16 scale-95' // slightly deeper drop for drama
      }`}
    >
      {/* Outer wrapper for the glowing background effect */}
      <div className="relative max-w-3xl w-full group mx-4">
        
        {/* Animated pulsing background glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-[2.5rem] blur-lg opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300 animate-pulse"></div>
        
        {/* Main Glassmorphism Card */}
        <div className="relative bg-white/80 backdrop-blur-md rounded-[2rem] p-8 md:p-14 shadow-xl border border-white/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
          
          {/* Top right ambient color blur */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-60"></div>
          
          {/* Background decorative quote mark */}
          <span className="absolute top-4 left-6 text-8xl text-pink-200/40 font-serif leading-none select-none">
            "
          </span>

          {/* Content Wrapper */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6 pb-3 border-b-2 border-pink-100/50 inline-block">
              {title}
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-loose font-medium">
              {content}
            </p>
          </div>
          
          {/* Bottom left ambient color blur */}
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-gradient-to-tr from-blue-200 to-pink-200 rounded-full blur-3xl opacity-60"></div>
        </div>
      </div>
    </div>
  );
}

export default StorySection;