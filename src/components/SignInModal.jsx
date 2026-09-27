import React, { useState } from 'react';
import logoStripe from '../assets/logo.png';

const SignInModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signing in with: ${email}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* 1. Backdrop Overlay */}
      <div 
        className="fixed inset-0 bg-black/15 transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* 2. DYNAMIC FLOATING SOFT MULTI-COLOR MESH BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-0">
        <div className="absolute top-[10%] left-[15%] w-[520px] h-[520px] bg-[#00D4FF] rounded-full mix-blend-multiply filter blur-[130px] opacity-60 animate-blob-1"></div>
        <div className="absolute top-[15%] right-[15%] w-[580px] h-[580px] bg-[#635BFF] rounded-full mix-blend-multiply filter blur-[140px] opacity-65 animate-blob-2"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[520px] h-[520px] bg-[#ec4899] rounded-full mix-blend-multiply filter blur-[130px] opacity-60 animate-blob-3"></div>
        <div className="absolute bottom-[15%] right-[20%] w-[480px] h-[480px] bg-[#f59e0b] rounded-full mix-blend-multiply filter blur-[120px] opacity-55 animate-blob-1"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-[#a855f7] rounded-full mix-blend-multiply filter blur-[135px] opacity-60 animate-blob-2"></div>
      </div>

      {/* 3. FROSTED GLASS SIGN IN CARD  */}
      <div className="relative w-full max-w-[400px] sm:max-w-[420px] bg-white/45 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(10,37,64,0.25)] border border-white/70 text-slate-900 z-10 transition-all transform animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/60 hover:bg-white/90 backdrop-blur-md text-slate-700 hover:text-slate-900 flex items-center justify-center transition-all shadow-sm border border-white/60 focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header Logo & Title */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-11 h-11 rounded-xl bg-[#0a2540] flex items-center justify-center mb-3 shadow-md border border-white/20">
            <img src={logoStripe} alt="Stripe" className="h-5.5 w-auto filter brightness-200" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0a2540] tracking-tight">
            Sign in to Stripe
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Sign In Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email Input */}
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full px-3.5 py-2.5 bg-white/65 backdrop-blur-md border border-white/75 rounded-xl text-slate-900 placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:bg-white/90 focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/20 transition-all shadow-sm font-medium"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                Password
              </label>
              <a href="#forgot" className="text-xs font-bold text-[#635bff] hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 bg-white/65 backdrop-blur-md border border-white/75 rounded-xl text-slate-900 placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:bg-white/90 focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/20 transition-all shadow-sm pr-10 font-medium"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-800 focus:outline-none cursor-pointer"
              >
                {showPassword ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2 pt-0.5">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-[#635bff] border-slate-300 rounded focus:ring-[#635bff] cursor-pointer"
            />
            <label htmlFor="remember" className="text-xs text-slate-800 font-semibold cursor-pointer">
              Stay signed in on this device
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-[#635bff] via-[#7c3aed] to-[#3b82f6] hover:opacity-95 text-white font-bold text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#635bff]/40 flex items-center justify-center gap-2 mt-1 cursor-pointer"
          >
            <span>Sign in to Dashboard</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>

        {/* Single Sign On / Divider */}
        <div className="relative my-4 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-400/40"></div>
          </div>
          <span className="relative bg-white/65 backdrop-blur-md px-2.5 text-xs text-slate-700 font-bold rounded-full">
            Or continue with
          </span>
        </div>

        {/* Google SSO Button */}
        <button
          type="button"
          onClick={() => alert('Single Sign On with Google clicked')}
          className="w-full py-2.5 px-3.5 bg-white/75 backdrop-blur-md hover:bg-white border border-white/85 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
          <span>Sign in with Google</span>
        </button>

        {/* Footer Link */}
        <p className="text-center text-xs text-slate-800 font-medium mt-4">
          Don't have an account?{' '}
          <a href="#register" onClick={onClose} className="font-bold text-[#635bff] hover:underline">
            Create an account
          </a>
        </p>

      </div>
    </div>
  );
};

export default SignInModal;
