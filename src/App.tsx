// export default App;
// import { useState, useRef } from 'react';
// import GiftBox from './components/GiftBox';
// import StorySection from './components/StorySection';
// import LoveLetter from './components/LoveLetter';
// import FloatingHearts from './components/FloatingHearts';
// import Confetti from './components/Confetti';
// import HeartGame from './components/HeartGame';
// import StarryNight from './components/StarryNight';
// import PasswordUnlock from './components/PasswordUnlock';
// import FinalSurprise from './components/FinalSurprise';
// function App() {
//   const [stage, setStage] = useState(0);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   const handleGiftOpen = () => {
//     setStage(1);

//     // 🎵 smooth music fade-in
//     if (audioRef.current) {
//       audioRef.current.volume = 0;
//       audioRef.current.play();

//       let vol = 0;
//       const fade = setInterval(() => {
//         if (audioRef.current && vol < 0.2) {
//           vol += 0.01;
//           audioRef.current.volume = vol;
//         } else {
//           clearInterval(fade);
//         }
//       }, 100);
//     }

//     // 🎉 confetti
//     setTimeout(() => setShowConfetti(true), 1000);
//     setTimeout(() => setShowConfetti(false), 5000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">

//       {/* 🎵 Background Music */}
//       <audio ref={audioRef} loop>
//         <source src="/music.mp3" type="audio/mpeg" />
//       </audio>

//       {/* ❤️ floating hearts only after gift */}
//       {stage > 0 && <FloatingHearts />}
//       {showConfetti && <Confetti />}

//       {/* 🎁 Stage 0 - Gift */}
//       {stage === 0 && <GiftBox onOpen={handleGiftOpen} />}

//       {/* 📖 Stage 1 - Story */}
//       {stage === 1 && (
//         <div className="animate-fadeIn max-w-3xl mx-auto px-4">

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

//           {/* ✨ Magical Continue Section */}
//           <div className="flex flex-col items-center justify-center mt-16 animate-fadeIn">

//             {/* Glowing, floating text - darkened slightly for better contrast */}
//             <p className="text-pink-500 font-semibold tracking-wider mb-8 animate-pulse text-xl drop-shadow-md">
//               Wait… the magic isn't over yet ✨
//             </p>

//             <div className="relative group">
//               {/* Softer, wider pulsing ambient glow */}
//               <div className="absolute -inset-3 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full blur-xl opacity-30 group-hover:opacity-70 transition duration-1000 animate-pulse"></div>
              
//               {/* Glassmorphism Button - adjusted padding, border, and text size */}
//               <button
//                 onClick={() => setStage(2)}
//                 className="relative flex items-center gap-3 px-12 py-5 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-pink-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 overflow-hidden"
//               >
//                 {/* Sweeping shine effect */}
//                 <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-pink-100/60 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-in-out z-0"></div>
                
//                 {/* Gradient Text */}
//                 <span className="relative z-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold text-2xl tracking-wide">
//                   Continue
//                 </span>
                
//                 {/* Animated Heart */}
//                 <span className="relative z-10 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300 transform origin-bottom text-3xl">
//                   💖
//                 </span>
//               </button>
//             </div>

//           </div>
//         </div>
//       )}

//       {/* 💌 Stage 2 - Love Letter */}
//       {stage === 2 && (
//         <LoveLetter onNext={() => setStage(3)} />
//       )}

//       {/* 🎮 Stage 3 - Heart Game */}
//       {stage === 3 && (
//         <HeartGame onNext={() => setStage(4)} />
//       )}

//       {/* ⭐ Stage 4 - Starry Night */}
// {stage === 4 && (
//   <StarryNight onRestart={() => setStage(5)} />
// )}

// {/* 🔐 Stage 5 - Password */}
// {stage === 5 && (
//   <PasswordUnlock onUnlock={() => setStage(6)} />
// )}

// {/* 🎁 Stage 6 - Final Surprise */}
// {stage === 6 && (
//   <FinalSurprise 
//   images={[
//     "/public/image1.jpg",
//     "/public/image1.jpg",
//     "/public/image1.jpg",
//     "/public/image1.jpg",
//     "/public/image1.jpg",
//     "/public/image1.jpg"
//   ]}
//   />
// )}

//     </div>
//   );
// }

// export default App;


// import { useState, useRef } from 'react';
// import GiftBox from './components/GiftBox';
// import StorySection from './components/StorySection';
// import LoveLetter from './components/LoveLetter';
// import FloatingHearts from './components/FloatingHearts';
// import Confetti from './components/Confetti';
// import HeartGame from './components/HeartGame';
// import StarryNight from './components/StarryNight';
// import PasswordUnlock from './components/PasswordUnlock';
// import FinalSurprise from './components/FinalSurprise';
// import HeartLottie from './components/HeartLottie';
// import ButterflyLottie from './components/ButterflyLottie';

// function App() {
//   const [stage, setStage] = useState(0);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   const handleGiftOpen = () => {
//     setStage(1);

//     // 🎵 smooth music fade-in
//     if (audioRef.current) {
//       audioRef.current.volume = 0;
//       audioRef.current.play();

//       let vol = 0;
//       const fade = setInterval(() => {
//         if (audioRef.current && vol < 0.2) {
//           vol += 0.01;
//           audioRef.current.volume = vol;
//         } else {
//           clearInterval(fade);
//         }
//       }, 100);
//     }

//     // 🎉 confetti
//     setTimeout(() => setShowConfetti(true), 1000);
//     setTimeout(() => setShowConfetti(false), 5000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">

//       {/* 🎵 Background Music */}
//       <audio ref={audioRef} loop>
//         <source src="/music.mp3" type="audio/mpeg" />
//       </audio>

//       {/* ❤️ floating hearts only after gift */}
//       {stage > 0 && <FloatingHearts />}
//       {showConfetti && <Confetti />}

//       {/* 🎁 Stage 0 - Gift */}
//       {stage === 0 && <GiftBox onOpen={handleGiftOpen} />}

//       {/* 📖 Stage 1 - Story */}
//       {stage === 1 && (
//         <div className="relative animate-fadeIn max-w-7xl mx-auto px-4 overflow-hidden">
          
//           {/* ✨ Lottie Background Decorations ✨ */}
//           {/* Left Side */}
//           <div className="absolute inset-y-0 left-0 w-24 md:w-48 overflow-hidden pointer-events-none z-0">
//             <ButterflyLottie className="absolute top-[10%] left-4 w-16 h-16 opacity-50" />
//             <HeartLottie className="absolute top-[30%] left-10 w-12 h-12 opacity-40" />
//             <ButterflyLottie className="absolute top-[50%] left-6 w-14 h-14 opacity-60" />
//             <HeartLottie className="absolute top-[70%] left-12 w-10 h-10 opacity-30" />
//           </div>

//           {/* Right Side */}
//           <div className="absolute inset-y-0 right-0 w-24 md:w-48 overflow-hidden pointer-events-none z-0">
//             <HeartLottie className="absolute top-[15%] right-8 w-14 h-14 opacity-60" />
//             <ButterflyLottie className="absolute top-[35%] right-6 w-12 h-12 opacity-40" />
//             <HeartLottie className="absolute top-[55%] right-10 w-16 h-16 opacity-50" />
//             <ButterflyLottie className="absolute top-[75%] right-4 w-10 h-10 opacity-30" />
//           </div>

//           {/* Story Content Area */}
//           <div className="relative z-10 max-w-3xl mx-auto">
//             <StorySection
//               title="Happy Birthday! 🎂"
//               content="Today is your special day, and I wanted to create something as unique as you are. Instead of a normal gift, I put together these illustrations to capture some of the best moments we've shared. I hope this brings a smile to your face."
//             />

//             <StorySection
//               title="The Day I Noticed You ✨"
//               content= "I like how you don’t speak unnecessarily… but when you do, people listen.The way you stay away from the noise, focused on what really matters — that’s something I truly respect. You keep your circle small, your thoughts clear, and your presence meaningful. And when the moment comes, you don’t just step up… you own it effortlessly. Also… that iconic ponytail — simple, neat, and somehow perfectly you. ✨"
//             />

//             <StorySection
//               title="Things I Like About You 💖"
//               content= "It’s never just one moment with you… it’s always the simple ones. That long walk with fizz where I made you walk more than I should have… and you still didn’t complain. 😅 That pani puri day, where you said it didn’t taste the same… but the moment still stayed with me. That café time with apple juice and endless conversations… where I didn’t even realize how time passed. And that journey which felt like 5 minutes instead of hours… I may not remember every conversation, but I clearly remember one thing — I never felt bored, not even for a second when I was with you. 💖"/>

//             <StorySection
//               title="My Favorite Memory 🌟"
//               content= "It’s never just one moment with you… it’s always the simple ones. That long walk with fizz where I made you walk more than I should have… and you still didn’t complain. 😅 That pani puri day, where you said it didn’t taste the same… but the moment still stayed with me. That café time with apple juice and endless conversations… where I didn’t even realize how time passed. And that journey which felt like 5 minutes instead of hours… I may not remember every conversation, but I clearly remember one thing — I never felt bored, not even for a second when I was with you. 💖"/>

//             {/* ✨ Magical Continue Section */}
//             <div className="flex flex-col items-center justify-center mt-16 mb-32 animate-fadeIn">
//               <p className="text-pink-500 font-semibold tracking-wider mb-8 animate-pulse text-xl drop-shadow-md">
//                 Wait… the magic isn't over yet ✨
//               </p>

//               <div className="relative group">
//                 <div className="absolute -inset-3 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full blur-xl opacity-30 group-hover:opacity-70 transition duration-1000 animate-pulse"></div>
                
//                 <button
//                   onClick={() => setStage(2)}
//                   className="relative flex items-center gap-3 px-12 py-5 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-pink-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 overflow-hidden"
//                 >
//                   <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-pink-100/60 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-in-out z-0"></div>
                  
//                   <span className="relative z-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold text-2xl tracking-wide">
//                     Continue
//                   </span>
                  
//                   <span className="relative z-10 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300 transform origin-bottom text-3xl">
//                     💖
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>

//         </div>
//       )}

//       {/* 💌 Stage 2 - Love Letter */}
//       {stage === 2 && (
//         <LoveLetter onNext={() => setStage(3)} />
//       )}

//       {/* 🎮 Stage 3 - Heart Game */}
//       {stage === 3 && (
//         <HeartGame onNext={() => setStage(4)} />
//       )}

//       {/* ⭐ Stage 4 - Starry Night */}
//       {stage === 4 && (
//         <StarryNight onRestart={() => setStage(5)} />
//       )}

//       {/* 🔐 Stage 5 - Password */}
//       {stage === 5 && (
//         <PasswordUnlock onUnlock={() => setStage(6)} />
//       )}

//       {/* 🎁 Stage 6 - Final Surprise */}
//       {stage === 6 && (
//         <FinalSurprise 
//           images={[
//             "/public/image1.png",
//             "/public/image2.png",
//             "/public/image3.png",
//             "/public/image4.jpeg",
//             "/public/image5.png",
//             "/public/image6.png"
//           ]}
//         />
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
import HeartLottie from './components/HeartLottie';
import ButterflyLottie from './components/ButterflyLottie';

// Importing the images directly from the new assets folder
import img1 from './assets/image1.png';
import img2 from './assets/image2.png';
import img3 from './assets/image3.png';
import img4 from './assets/image4.jpeg'; 
import img5 from './assets/image5.png';
import img6 from './assets/image6.png';

function App() {
  const [stage, setStage] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleGiftOpen = () => {
    setStage(1);

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

    setTimeout(() => setShowConfetti(true), 1000);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">

      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {stage > 0 && <FloatingHearts />}
      {showConfetti && <Confetti />}

      {stage === 0 && <GiftBox onOpen={handleGiftOpen} />}

      {stage === 1 && (
        <div className="relative animate-fadeIn max-w-7xl mx-auto px-4 overflow-hidden">
          
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 overflow-hidden pointer-events-none z-0">
            <ButterflyLottie className="absolute top-[10%] left-4 w-16 h-16 opacity-50" />
            <HeartLottie className="absolute top-[30%] left-10 w-12 h-12 opacity-40" />
            <ButterflyLottie className="absolute top-[50%] left-6 w-14 h-14 opacity-60" />
            <HeartLottie className="absolute top-[70%] left-12 w-10 h-10 opacity-30" />
          </div>

          <div className="absolute inset-y-0 right-0 w-24 md:w-48 overflow-hidden pointer-events-none z-0">
            <HeartLottie className="absolute top-[15%] right-8 w-14 h-14 opacity-60" />
            <ButterflyLottie className="absolute top-[35%] right-6 w-12 h-12 opacity-40" />
            <HeartLottie className="absolute top-[55%] right-10 w-16 h-16 opacity-50" />
            <ButterflyLottie className="absolute top-[75%] right-4 w-10 h-10 opacity-30" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-12 py-10">
            
            <StorySection
              title="Happy Birthday! 🎂"
              content="Today is your special day, and I wanted to create something as unique as you are. Instead of a normal gift, I put together these illustrations to capture some of the best moments we've shared. I hope this brings a smile to your face.🎀"
            />

            <StorySection
              title="The Day I Noticed You ✨"
              content="I don’t know if you remember it… but I do. It wasn’t just the first time I saw you — it was the first time I heard you speak. The way you presented, your confidence, and that calm tone… it made everything else go silent for a moment. From then, I started noticing you more — not loudly, but quietly… just like you. 💭"
            />

            <StorySection
              title="Things I Like About You 💖"
              content="I like how you don’t speak unnecessarily… but when you do, people listen. The way you stay away from the noise, focused on what really matters — that’s something I truly respect. You keep your circle small, your thoughts clear, and your presence meaningful. And when the moment comes, you don’t just step up… you own it effortlessly. Also… that iconic ponytail — simple, neat, and somehow perfectly you. ✨"
            />

            <StorySection
              title="My Favorite Memory 🌟"
              content="It’s never just one moment with you… it’s always the simple ones. That long walk with fizz where I made you walk more than I should have… and you still didn’t complain. 😅 That pani puri day, where you said it didn’t taste the same… but the moment still stayed with me. That café time with apple juice and endless conversations… where I didn’t even realize how time passed. And that journey which felt like 6 minutes instead of hours… I may not remember every conversation, but I clearly remember one thing — I never felt bored, not even for a second when I was with you. 💖"
            />

            <div className="flex flex-col items-center justify-center mt-8 mb-32 animate-fadeIn">
              <p className="text-pink-500 font-semibold tracking-wider mb-8 animate-pulse text-xl drop-shadow-md">
                Wait… the magic isn't over yet ✨
              </p>

              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full blur-xl opacity-30 group-hover:opacity-70 transition duration-1000 animate-pulse"></div>
                
                <button
                  onClick={() => setStage(2)}
                  className="relative flex items-center gap-3 px-12 py-5 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-pink-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-pink-100/60 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-in-out z-0"></div>
                  
                  <span className="relative z-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold text-2xl tracking-wide">
                    Continue
                  </span>
                  
                  <span className="relative z-10 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300 transform origin-bottom text-3xl">
                    💖
                  </span>
                </button>
              </div>
            </div>
          </div>

        </div>
      )}

      {stage === 2 && (
        <LoveLetter onNext={() => setStage(3)} />
      )}

      {stage === 3 && (
        <HeartGame onNext={() => setStage(4)} />
      )}

      {stage === 4 && (
        <StarryNight onRestart={() => setStage(5)} />
      )}

      {stage === 5 && (
        <PasswordUnlock onUnlock={() => setStage(6)} />
      )}

      {/* 🎁 Stage 6 - Passing the imported images to the final stage */}
      {stage === 6 && (
        <FinalSurprise 
          images={[img1, img2, img3, img4, img5, img6]}
        />
      )}

    </div>
  );
}

export default App;