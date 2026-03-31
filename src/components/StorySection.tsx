// import { useEffect, useRef, useState } from 'react';

// interface StorySectionProps {
//   title: string;
//   content: string;
// }

// function StorySection({ title, content }: StorySectionProps) {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`min-h-screen flex items-center justify-center p-8 transition-all duration-1000 ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
//       }`}
//     >
//       <div className="max-w-3xl w-full">
//         <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50">
//           <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
//             {title}
//           </h2>
//           <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
//             {content}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StorySection;

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
        // 🔥 Toggle BOTH ways (down + up)
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
      className={`py-12 md:py-16 flex items-center justify-center transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-12 scale-95'
      }`}
    >
      <div className="max-w-3xl w-full">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 transition-all duration-500 hover:shadow-2xl">
          
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
            {title}
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {content}
          </p>

        </div>
      </div>
    </div>
  );
}

export default StorySection;