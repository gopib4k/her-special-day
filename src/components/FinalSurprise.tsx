import { Heart } from 'lucide-react';

interface Props {
  images?: string[];
}

function FinalSurprise({ images = [] }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-16 px-4">

      {/* 💖 Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
          Our Little World 💖
        </h1>
        <p className="text-gray-700 text-lg">
          Every moment with you is special ✨
        </p>
      </div>

      {/* 📸 Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {(images.length > 0 ? images : Array.from({ length: 6 })).map((img, index) => (
          
          <div
            key={index}
            className="bg-white p-4 rounded-2xl shadow-xl transform hover:scale-105 hover:rotate-1 transition-all duration-300"
          >
            {/* 📷 Image / Placeholder */}
            <div className="w-full h-64 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center overflow-hidden">
              
              {img ? (
                <img
                  src={img}
                  alt={`memory-${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <span className="text-gray-600 text-sm">
                  Your memory here 💭
                </span>
              )}
            </div>

            {/* 💬 Caption */}
            <div className="mt-4 text-center">
              <p className="text-gray-700 text-sm">
                A moment I’ll always remember 💫
              </p>

              <div className="flex justify-center mt-2">
                <Heart className="w-5 h-5 text-pink-500 fill-pink-500 animate-pulse" />
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* 💖 Bottom Message */}
      <div className="text-center mt-16">
        <p className="text-xl text-gray-700 mb-4">
          And this is just the beginning... 💖
        </p>
        <p className="text-2xl font-semibold text-pink-600">
          I hope we create many more memories together ✨
        </p>
      </div>

    </div>
  );
}

export default FinalSurprise;