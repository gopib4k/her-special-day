import { useState } from 'react';
import { Heart, Sparkles, X, ZoomIn } from 'lucide-react';

interface Props {
  images?: string[];
}

function FinalSurprise({ images = [] }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // New state to trigger the final farewell screen
  const [showFarewell, setShowFarewell] = useState(false);

  // Default captions to match the romantic, personal vibe
  const defaultCaptions = [
    "Pani puri tinna tarwatha nuvvu, 'nenu eppudu ikkade thinta… kani ivala antha taste ledu' ani cheppinappudu, I didn’t know what to say… but somehow, that moment stayed with me. 💭Conversations anni gurthulevu… kani manam akkada kalisi pani puri tinna aa scene matram, I’ll never forget.💛",
    "Just ala 'small walk' ani pilichi, fizz thaguthu chala dooram nadipincha kadha… till Charmas varaku. 😅Hostel ki reach ayyaka konchem guilty ga feel ayyevaadini — arey, antha dooram nadipincha ani… but the best part? You never complained. That’s what made it truly special.💖",
    "Hey, neeku gurthundha… we went to a café, akkada tea or coffee kakunda, apple juice teeskoni ala time spend chesam. 😄Manam em matladamo exact ga gurthuledu… kani chala sepu matladukuntune unnam. 💭Honestly, nenu okka second kuda bored feel avvaledu… spending time with you always feels that easy and special.🌸",
    "I always pay attention when you’re giving a presentation… because antha baavuntundi nee way of delivering content. ✨Your voice adds an extra sweetness to everything you say, and it just makes it even more beautiful to listen. 🎶Nee presentation vinnappudalla, nenu kooda neela confident ga, smooth ga cheppali ani anipisthundi.💫",
    "Mana class lo aa Proton mails drama gurthundha…andaram mana class lo gather ayyi, okkokkallani suspect name cheppamani adiginappudu, nuv ne love name cheppav 👀, Ame 3rd bench lo undi, and nuvvu full serious ga tana meedha points cheppadam start chesav… honestly, nenu akkada shock ayyanu.😄",
    "One of the best journeys till now is travelling with you… and movie choodadam inka special ayyindhi. 🎬✨Movie ayyaka kuda manam coding problems discuss chesthu, ala time ela pass ayyindo teliyaledu 😄KMM reach ayye sariki 5 hours pattindhi emo… kani naku matram adi just 6 minutes la anipinchindhi. 💭 Honestly, time aa teliyaledu assala.💖"
  ];

  // Helper to generate the array to render
  const galleryItems = images.length > 0 
    ? images 
    : Array.from({ length: 6 }).map(() => '');

  // 🌸 The Final Farewell Screen
  if (showFarewell) {
    return (
      <div className="min-h-screen relative flex flex-col items-center justify-center px-4 overflow-hidden bg-[#0a0514] animate-fadeIn">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))] -z-20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] animate-pulse -z-10" style={{ animationDelay: '2s' }}></div>
        
        <div className="text-center z-10 space-y-8 max-w-3xl mx-auto">
          <h1 
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-300 via-pink-200 to-indigo-300 bg-clip-text text-transparent drop-shadow-lg animate-slideUp" 
            style={{ animationFillMode: 'both' }}
          >
            That's it Susritha! ✨
          </h1>
          
          <p 
            className="text-2xl md:text-4xl text-purple-200/90 font-medium leading-relaxed animate-slideUp" 
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            May your year be as beautiful as you are! 💖
          </p>
          
          <div 
            className="pt-8 animate-slideUp" 
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            <p className="text-xl md:text-2xl text-purple-300/70 font-serif italic mb-8">
              Enjoy your day, See you! 👋
            </p>
            <Heart className="w-12 h-12 mx-auto text-pink-400 fill-pink-400/50 animate-pulse drop-shadow-lg" />
          </div>
        </div>

        {/* Local animations just for this page transition */}
        <style>{`
          @keyframes slideUp {
            0% { transform: translateY(30px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-slideUp {
            animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}</style>
      </div>
    );
  }

  // 📸 The Gallery Screen
  return (
    <div className="min-h-screen relative flex flex-col items-center py-16 px-4 md:px-8 overflow-hidden bg-[#0a0514]">
      
      {/* 🌌 Deep Magical Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))] -z-20"></div>
      
      {/* 🔮 Floating Ambient Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] animate-pulse -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/15 rounded-full blur-[120px] animate-pulse -z-10" style={{ animationDelay: '2s' }}></div>

      {/* 💖 Heading */}
      <div className="text-center mb-16 relative z-10 animate-fadeIn">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <Heart className="w-12 h-12 text-purple-400 fill-purple-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.6)] animate-pulse" />
            <Sparkles className="absolute -right-6 -top-2 w-8 h-8 text-pink-300 animate-spin-slow" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-300 via-pink-200 to-indigo-300 bg-clip-text text-transparent mb-4 drop-shadow-lg pb-2">
          Moments that lived, but weren’t captured
        </h1>
        <p className="text-purple-200/80 text-xl font-medium tracking-wide">
          Every moment with you is magic ✨
        </p>
      </div>

      {/* 📸 Scattered Polaroid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 max-w-6xl mx-auto relative z-10">
        {galleryItems.map((img, index) => {
          // Alternating tilts for a messy, organic polaroid look
          const tiltClass = index % 2 === 0 ? 'rotate-[-3deg]' : 'rotate-[3deg]';
          const delay = `delay-[${index * 100}ms]`;
          
          return (
            <div
              key={index}
              className={`group relative bg-white p-4 md:p-5 pb-8 md:pb-10 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] transform transition-all duration-500 hover:scale-105 hover:rotate-0 hover:z-20 cursor-pointer animate-slideUp ${tiltClass} ${delay}`}
              onClick={() => img && setSelectedImage(img)}
            >
              {/* Tape Graphic */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/40 backdrop-blur-sm border border-white/50 rotate-[-2deg] shadow-sm z-20"></div>

              {/* 📷 Image / Placeholder */}
              <div className="w-full aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded flex items-center justify-center overflow-hidden relative border border-gray-200">
                {img ? (
                  <>
                    <img
                      src={img}
                      alt={`memory-${index}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 w-10 h-10 drop-shadow-lg" />
                    </div>
                  </>
                ) : (
                  <div className="text-center px-4">
                    <Heart className="w-8 h-8 text-purple-300 mx-auto mb-2" />
                    <span className="text-purple-400 font-medium text-sm">
                      Your memory here 💭
                    </span>
                  </div>
                )}
              </div>

              {/* 💬 Caption */}
              <div className="mt-6 text-center">
                <p className="text-gray-800 font-serif text-lg italic tracking-wide">
                  {defaultCaptions[index % defaultCaptions.length]}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 💖 Bottom Message & Next Button */}
      <div className="text-center mt-24 relative z-10 animate-fadeIn flex flex-col items-center">
        <div className="inline-block px-10 py-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-[0_0_40px_rgba(168,85,247,0.25)]">
          <p className="text-2xl text-purple-100 mb-4 font-medium tracking-wide">
            I hope you liked these uncaptured moments… 💭
          </p>

          <p className="text-3xl font-bold bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 bg-clip-text text-transparent leading-relaxed">
            I know ivi AI tho chesinavi… Kudhirithe, I’ll try to capture the real ones next time! 💜
          </p>

          <p className="mt-3 text-xl font-semibold text-pink-200/90">
            Konchem honest ga cheppu… ela anipinchindi? 😄
          </p>
        </div>

        {/* Button to Farewell Page */}
        <button
          onClick={() => setShowFarewell(true)}
          className="mt-12 px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg tracking-wider border border-purple-300/30 rounded-full backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(216,180,254,0.2)] hover:shadow-[0_0_40px_rgba(216,180,254,0.5)] transform hover:-translate-y-1 flex items-center gap-2 group"
        >
          One last thing <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      {/* 🔍 Interactive Fullscreen Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-10 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white hover:scale-110 transition-all bg-white/10 p-2 rounded-full backdrop-blur-md"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="w-8 h-8" />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Fullscreen memory" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_50px_rgba(216,180,254,0.3)] transform scale-95 animate-zoomIn"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

      {/* Custom Keyframes for smooth entrance */}
      <style>{`
        @keyframes zoomIn {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-zoomIn {
          animation: zoomIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
    </div>
  );
}

export default FinalSurprise;