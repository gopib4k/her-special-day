import { useState } from 'react';
import { Lock, Unlock, KeyRound, Sparkles } from 'lucide-react';

interface PasswordUnlockProps {
  onUnlock: () => void;
  passwordHint?: string;
}

function PasswordUnlock({
  onUnlock,
  passwordHint = 'Hint: Your favorite little snack 🍇', // Updated hint!
}: PasswordUnlockProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(3);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  // 👉 The secret word is now set to grapes!
  const correctPassword = 'grapes'; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.toLowerCase().trim() === correctPassword.toLowerCase()) {
      setIsUnlocked(true);
      setError('');

      // small delay for animation before moving to the final stage
      setTimeout(() => {
        onUnlock();
      }, 2000);
    } else {
      setAttempts((prev) => prev - 1);
      setPassword('');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500); 

      if (attempts - 1 > 0) {
        setError(`Hmm… that's not it. You have ${attempts - 1} tries left ✨`);
      } else {
        setError('Oops… the lock is jammed! 🥺');
      }
    }
  };

  // 🔄 Fixed Reset Function 
  const handleTryAgain = () => {
    setAttempts(3);
    setPassword('');
    setError('');
  };

  // 🔒 Locked Out Screen
  if (attempts <= 0) {
    return (
      <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden animate-fadeIn">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 -z-20"></div>
        
        <div className="bg-white/10 backdrop-blur-xl p-10 md:p-14 rounded-[2.5rem] border border-white/20 shadow-[0_0_40px_rgba(216,180,254,0.15)] text-center max-w-md w-full transform transition-all animate-slideUp">
          <div className="relative inline-block mb-6">
            <Lock className="w-20 h-20 text-red-400 drop-shadow-[0_0_15px_rgba(248,113,113,0.5)] animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-300 to-pink-300 bg-clip-text text-transparent mb-4">
            Locked 💔
          </h2>
          <p className="text-purple-200/80 mb-8 font-medium">
            Too many tries… but I'd never actually lock you out! Take a breath and try again. 💜
          </p>
          <button
            onClick={handleTryAgain}
            className="group relative px-8 py-3 bg-white/10 backdrop-blur-md rounded-full shadow-lg border border-purple-300/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 text-white font-semibold tracking-wider">Try Again 🔁</span>
          </button>
        </div>
      </div>
    );
  }

  // 🔓 Success screen
  if (isUnlocked) {
    return (
      <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 -z-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] animate-pulse"></div>

        <div className="text-center animate-slideUp">
          <div className="relative flex items-center justify-center mb-8">
            <div className="absolute inset-0 bg-pink-400 blur-3xl opacity-30 rounded-full h-32 w-32 mx-auto animate-pulse"></div>
            <Unlock className="w-24 h-24 text-pink-300 drop-shadow-[0_0_20px_rgba(249,168,212,0.8)] animate-bounce relative z-10" />
            <Sparkles className="absolute -right-4 -top-4 w-8 h-8 text-purple-300 animate-spin-slow" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent mb-4 drop-shadow-lg">
            Unlocked! ✨
          </h2>
          <p className="text-xl text-purple-200/90 font-medium animate-pulse">
            I knew you'd get it. Loading your surprise... 💜
          </p>
        </div>
      </div>
    );
  }

  // 🔐 Main UI
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden animate-fadeIn">
      
      {/* Deep Magical Background */}
      <div className="absolute inset-0 bg-[#0a0514] -z-20"></div>
      <div className="absolute inset-0 max-w-4xl mx-auto top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 blur-[120px] animate-pulse -z-10 rounded-full h-[80%]"></div>

      <div className="w-full max-w-md relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-40 rounded-full"></div>
            <KeyRound className="w-16 h-16 text-purple-300 relative z-10 animate-pulse drop-shadow-lg" />
          </div>
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-300 via-pink-200 to-indigo-300 bg-clip-text text-transparent mb-3 drop-shadow-md pb-1">
            One Last Secret 🔐
          </h2>
          <p className="text-purple-200/70 text-lg font-medium">
            Enter the password to unlock the final surprise
          </p>
        </div>

        {/* Form Container (Frosted Glass) */}
        <div className={`bg-[#1a0b2e]/60 backdrop-blur-xl rounded-[2rem] border border-purple-300/20 shadow-[0_0_40px_rgba(216,180,254,0.1)] p-8 md:p-10 transition-transform ${isShaking ? 'animate-shake' : ''}`}>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6 relative">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                placeholder="Type the secret word..."
                className="w-full px-6 py-4 bg-white/5 border border-purple-300/30 rounded-xl text-white placeholder-purple-300/50 focus:border-pink-400 focus:bg-white/10 focus:ring-2 focus:ring-pink-400/20 outline-none transition-all duration-300 text-center text-lg tracking-widest"
                autoComplete="off"
              />
            </div>

            {/* Hint */}
            <p className="text-sm text-purple-300/70 italic mb-6 text-center font-medium">
              {passwordHint}
            </p>

            {/* Error Message */}
            <div className={`overflow-hidden transition-all duration-300 ${error ? 'max-h-20 mb-6' : 'max-h-0 mb-0'}`}>
              <div className="text-center text-pink-400 text-sm font-medium bg-pink-500/10 py-2 px-4 rounded-lg border border-pink-500/20">
                {error}
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="group relative w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(249,168,212,0.4)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-700 ease-in-out z-0"></div>
              <span className="relative z-10">Unlock</span>
              <Sparkles className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
            </button>
          </form>
        </div>

      </div>

      {/* Shake Animation for wrong password */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}</style>

    </div>
  );
}

export default PasswordUnlock;