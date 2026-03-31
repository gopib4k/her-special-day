// import { useState, useRef } from 'react';
// import GiftBox from './components/GiftBox';
// import StorySection from './components/StorySection';
// import LoveLetter from './components/LoveLetter';
// import FloatingHearts from './components/FloatingHearts';
// import Confetti from './components/Confetti';

// function App() {
//   const [isOpened, setIsOpened] = useState(false);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   const handleGiftOpen = () => {
//     setIsOpened(true);

//     // 🎵 play music
//     if (audioRef.current) {
//   audioRef.current.volume = 0;
//   audioRef.current.play();

//   let vol = 0;
//   const fade = setInterval(() => {
//     if (audioRef.current && vol < 0.2) {
//       vol += 0.01;
//       audioRef.current.volume = vol;
//     } else {
//       clearInterval(fade);
//     }
//   }, 100);
// }

//     setTimeout(() => setShowConfetti(true), 1000);
//     setTimeout(() => setShowConfetti(false), 5000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">

//       {/* 🎵 Background Music */}
//       <audio ref={audioRef} loop>
//         <source src="/music.mp3" type="audio/mpeg" />
//       </audio>

//       <FloatingHearts />
//       {showConfetti && <Confetti />}

//       {!isOpened ? (
//         <GiftBox onOpen={handleGiftOpen} />
//       ) : (
//         <div className="animate-fadeIn">
//           <StorySection
//             title="Happy Birthday! 🎂"
//             content="Today is your special day, and I wanted to create something as unique as you are."
//           />

//           <StorySection
//             title="The Day I Noticed You ✨"
//             content="I don’t know if you remember it, but I do. That moment when I first saw you… something just felt different. Like my world paused for a second."
//           />

//           <StorySection
//             title="Things I Like About You 💖"
//             content="The way you smile, the way you talk, even the small things you don’t notice about yourself… they mean everything to me."
//           />

//           <StorySection
//             title="My Favorite Memory 🌟"
//             content="It's not just one moment… it’s all those little conversations, random laughs, and the way you made ordinary days feel special."
//           />

//           <LoveLetter delay={1.2} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
import { useState, useRef } from 'react';
import GiftBox from './components/GiftBox';
import StorySection from './components/StorySection';
import LoveLetter from './components/LoveLetter';
import FloatingHearts from './components/FloatingHearts';
import Confetti from './components/Confetti';
import HeartGame from './components/HeartGame';
import StarryNight from './components/StarryNight';
import PasswordUnlock from './components/PasswordUnlock';
import FinalSurprise from './components/FinalSurprise';
function App() {
  const [stage, setStage] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleGiftOpen = () => {
    setStage(1);

    // 🎵 smooth music fade-in
    if (audioRef.current) {
      audioRef.current.volume = 0;
      audioRef.current.play();

      let vol = 0;
      const fade = setInterval(() => {
        if (audioRef.current && vol < 0.2) {
          vol += 0.01;
          audioRef.current.volume = vol;
        } else {
          clearInterval(fade);
        }
      }, 100);
    }

    // 🎉 confetti
    setTimeout(() => setShowConfetti(true), 1000);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">

      {/* 🎵 Background Music */}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {/* ❤️ floating hearts only after gift */}
      {stage > 0 && <FloatingHearts />}
      {showConfetti && <Confetti />}

      {/* 🎁 Stage 0 - Gift */}
      {stage === 0 && <GiftBox onOpen={handleGiftOpen} />}

      {/* 📖 Stage 1 - Story */}
      {stage === 1 && (
        <div className="animate-fadeIn max-w-3xl mx-auto px-4">

          <StorySection
            title="Happy Birthday! 🎂"
            content="Today is your special day, and I wanted to create something as unique as you are."
          />

          <StorySection
            title="The Day I Noticed You ✨"
            content="I don’t know if you remember it, but I do. That moment when I first saw you… something just felt different. Like my world paused for a second."
          />

          <StorySection
            title="Things I Like About You 💖"
            content="The way you smile, the way you talk, even the small things you don’t notice about yourself… they mean everything to me."
          />

          <StorySection
            title="My Favorite Memory 🌟"
            content="It's not just one moment… it’s all those little conversations, random laughs, and the way you made ordinary days feel special."
          />

          {/* 💖 Improved Continue Section */}
          <div className="text-center mt-6 mb-10 animate-fadeIn">

            <p className="text-pink-500 mb-2 animate-pulse text-sm">
              Wait… I have something more for you 👀
            </p>

            <button
              onClick={() => setStage(2)}
              className="px-10 py-3 bg-gradient-to-r from-pink-500 to-purple-500 
              text-white rounded-full shadow-xl 
              hover:scale-110 transition-all duration-300 
              flex items-center gap-2 mx-auto"
            >
              <span>Continue</span>
              <span className="animate-bounce">💖</span>
            </button>

          </div>
        </div>
      )}

      {/* 💌 Stage 2 - Love Letter */}
      {stage === 2 && (
        <LoveLetter onNext={() => setStage(3)} />
      )}

      {/* 🎮 Stage 3 - Heart Game */}
      {stage === 3 && (
        <HeartGame onNext={() => setStage(4)} />
      )}

      {/* ⭐ Stage 4 - Starry Night */}
{stage === 4 && (
  <StarryNight onRestart={() => setStage(5)} />
)}

{/* 🔐 Stage 5 - Password */}
{stage === 5 && (
  <PasswordUnlock onUnlock={() => setStage(6)} />
)}

{/* 🎁 Stage 6 - Final Surprise */}
{stage === 6 && (
  <FinalSurprise 
  images={[
    "/public/image1.jpg",
    "/public/image1.jpg",
    "/public/image1.jpg",
    "/public/image1.jpg",
    "/public/image1.jpg",
    "/public/image1.jpg"
  ]}
  />
)}

    </div>
  );
}

export default App;