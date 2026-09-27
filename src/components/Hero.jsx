import React, { useState } from 'react';
import logoStripe from '../assets/logo.png';
import heroBg from '../assets/image.png';
import heroGraphic from '../assets/Mask Group.png';
import heroBgS from '../assets/Background+Shadow.png';

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-white min-h-[691px] sm:min-h-[816px] md:min-h-[828px] lg:min-h-[840px] xl:min-h-[840px]">
      
      {/* 1. Background Gradient Wave */}
      <div className="absolute top-0 left-0 w-full h-[330px] sm:h-[580px] md:h-[580px] lg:h-[580px] xl:h-[580px] pointer-events-none z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Stripe Gradient Background"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-10 max-w-[1080px] mx-auto px-4">      
        
        {/* 3. NAVBAR (68px) */}
        <header className="flex justify-between items-center h-[68px] text-white">
          <div className="flex items-center gap-8 xl:gap-10">
            <a href="#" className="flex items-center hover:opacity-90 transition">
              <img src={logoStripe} alt="Stripe" className="h-10 w-auto" />
            </a>
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-white/95 text-[15px] font-medium">
              <a href="#products" className="hover:text-white transition">Products</a>
              <a href="#solutions" className="hover:text-white transition">Solutions</a>
              <a href="#developers" className="hover:text-white transition">Developers</a>
              <a href="#resources" className="hover:text-white transition">Resources</a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-5 text-[14px]">
            <a href="#contact" className="text-white hover:text-white/85 font-medium transition flex items-center gap-1">
              <span>Contact sales</span>
              <span className="text-xs">&gt;</span>
            </a>
            <a href="#signin" className="bg-white text-[#0a2540] hover:bg-white/95 font-semibold px-4 py-1.5 rounded-full transition shadow-sm flex items-center gap-1">
              <span>Sign in</span>
              <span className="text-xs">&gt;</span>
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </header>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-[68px] left-4 right-4 z-50 bg-white text-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-100 flex flex-col gap-4">
            <nav className="flex flex-col gap-3 font-semibold text-base border-b border-slate-100 pb-4">
              <a href="#products" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#635bff] py-1">Products</a>
              <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#635bff] py-1">Solutions</a>
              <a href="#developers" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#635bff] py-1">Developers</a>
              <a href="#resources" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#635bff] py-1">Resources</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#635bff] py-1">Pricing</a>
            </nav>
            <div className="flex flex-col gap-3 pt-1">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-2 text-slate-700 font-medium hover:text-slate-900">
                Contact sales &gt;
              </a>
              <a href="#signin" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-2.5 bg-[#0a2540] text-white rounded-full font-semibold hover:bg-slate-800 transition">
                Sign in &gt;
              </a>
            </div>
          </div>
        )}

        <div className="relative pt-10 sm:pt-14 md:pt-16 lg:pt-[84px] xl:pt-[100px] pb-16 sm:pb-20 md:pb-24 lg:pb-32">
          
          <div className="relative z-10 w-[370px] sm:w-[480px] lg:w-[540px] xl:w-[540px] 2xl:w-[640px] text-left mt-8 lg:mt-12">
            <h1 className="text-[38px] sm:text-[48px] md:text-[58px] lg:text-[68px] xl:text-[76px] 2xl:text-[80px] font-semibold text-[#0a2540] leading-[1.06] tracking-[-0.035em] mb-6 sm:mb-8">
              Financial <br />
              infrastructure <br />
              for the internet
            </h1>
            <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#425466] max-w-[480px] mb-8 sm:mb-10 leading-[1.6] font-normal">
              Millions of companies of all sizes use Stripe online and in person to accept payments, send payouts, automate financial processes, and ultimately grow revenue.
            </p>

            <div className="flex flex-row items-center justify-start gap-6 font-semibold text-[15px]">
              <a href="#start" className="inline-flex items-center justify-center gap-2 bg-[#0a2540] text-white px-6 py-3 rounded-full hover:bg-slate-800 transition-all shadow-sm hover:shadow group">
                <span>Start now</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-1.5 text-[#0a2540] hover:text-slate-600 transition-colors py-2 group">
                <span>Contact <br /> sales</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="absolute z-0 flex items-start
            top-1/2 -translate-y-1/2 -mt-2 
            lg:top-[84px] xl:top-[100px] lg:translate-y-0 lg:-mt-16 
            left-[340px] sm:left-[350px] md:left-[500px] lg:left-[580px] xl:left-[600px] 2xl:left-[650px]"
          >
            <div className="relative w-[800px] md:w-[780px] lg:w-[800px] xl:w-[800px] 2xl:w-[850px] grid grid-cols-10 grid-rows-1 transition-all duration-300">
              
              {/* Dashboard Image */}
              <div className="col-start-2 col-end-11 row-start-1">
                <img
                  src={heroBgS}
                  alt="Stripe Analytics Dashboard"
                  className="w-full h-auto object-contain rounded-lg drop-shadow-xl select-none pointer-events-none"
                  loading="eager"
                />
              </div>

              {/* Phone Image */}
              <div className="col-start-1 col-end-5 row-start-1 z-10 mt-4 flex justify-end -translate-x-10">
                <img
                  src={heroGraphic}
                  alt="Stripe Payment Mockup"
                  className="w-[75%] h-auto object-contain drop-shadow-2xl select-none pointer-events-none"
                  loading="eager"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;