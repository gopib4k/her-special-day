import { useState } from 'react';
import { Lock, Unlock } from 'lucide-react';

interface PasswordUnlockProps {
  onUnlock: () => void;
  passwordHint?: string;
}

function PasswordUnlock({
  onUnlock,
  passwordHint = 'Hint: Something only we would know 💭',
}: PasswordUnlockProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(3);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const correctPassword = 'forever'; // 👉 change this

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.toLowerCase() === correctPassword) {
      setIsUnlocked(true);

      // small delay for animation 💖
      setTimeout(() => {
        onUnlock();
      }, 1500);
    } else {
      setAttempts((prev) => prev - 1);
      setPassword('');

      // 💬 softer messages
      if (attempts - 1 > 0) {
        setError('Hmm… not that one 😅 try again 💖');
      } else {
        setError('Oops… locked for now 🥺 refresh and try again');
      }
    }
  };

  // 🔒 Locked Out
  if (attempts <= 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center p-4">
        <div className="text-center">
          <Lock className="w-24 h-24 text-red-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Locked 💔</h2>
          <p className="text-gray-600 mb-6">
            Too many tries… but don’t worry, you’ll get it 💖
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-purple-500 text-white rounded-full hover:scale-105 transition"
          >
            Try Again 🔁
          </button>
        </div>
      </div>
    );
  }

  // 🔓 Success screen
  if (isUnlocked) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center animate-fadeIn">
          <Unlock className="w-20 h-20 text-pink-400 mx-auto mb-6 animate-bounce" />
          <h2 className="text-3xl font-bold mb-4">
            You unlocked it 💖
          </h2>
          <p className="text-gray-300">
            I knew you would 😊
          </p>
        </div>
      </div>
    );
  }

  // 🔐 Main UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center p-4">

      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <Lock className="w-16 h-16 text-pink-500 mx-auto mb-4 animate-pulse" />
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            One Last Secret 💖
          </h2>
          <p className="text-gray-600 text-lg">
            Enter the password to unlock your surprise
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 transition-all hover:shadow-2xl"
        >
          <div className="mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="Type something special..."
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition"
            />
          </div>

          {/* Hint */}
          <p className="text-sm text-gray-500 italic mb-4 text-center">
            {passwordHint}
          </p>

          {/* Error */}
          {error && (
            <div className="mb-4 text-center text-red-500 text-sm">
              {error}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 rounded-lg hover:scale-105 transition-all"
          >
            Unlock 💖
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Attempts left: {attempts}
          </p>
        </form>

        {/* Hint Box */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          Think about something that connects us 💭
        </div>

      </div>
    </div>
  );
}

export default PasswordUnlock;