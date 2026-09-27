import React from 'react';

import bgGlobe from '../assets/Background.png';

const GlobalScale = () => {
  const stats = [
    {
      value: '250M+',
      desc: 'API requests per day, peaking at 13,000 requests a second.',
    },
    {
      value: '99.999%',
      desc: (
        <>
          historical uptime for <a href="#" className="text-[#00D4FF] hover:text-white transition-colors">Stripe services</a>.
        </>
      ),
    },
    {
      value: '90%',
      desc: 'of U.S. adults have bought from businesses using Stripe.',
    },
    {
      value: '135+',
      desc: 'currencies and payment methods supported.',
    },
  ];

  return (
    <section id="solutions" className="relative z-0 w-full lg:h-[911px] flex flex-col justify-end bg-[#0A2540] overflow-hidden font-['Inter'] [clip-path:polygon(0_12vw,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(0_240px,100%_0,100%_100%,0_100%)] -mt-[12vw] lg:-mt-[120px] pt-32 pb-24 lg:pb-[128px]">
      
      {/* Nền  */}
      <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
        <img 
          src={bgGlobe} 
          alt="Global network background" 
          className="w-full h-full object-cover lg:w-[1200px] lg:h-[911px] lg:object-contain object-right-top opacity-80"
        />
      </div>

      <div className="absolute inset-0 z-0 max-w-[1080px] mx-auto hidden lg:grid grid-cols-4 pointer-events-none">
        <div className="border-l border-[rgba(66,71,112,0.3)]"></div>
        <div className="border-l border-[rgba(66,71,112,0.3)]"></div>
        <div className="border-l border-[rgba(66,71,112,0.3)]"></div>
        <div className="border-l border-r border-[rgba(66,71,112,0.3)]"></div>
      </div>

      {/* Nội dung chính */}
      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-6 lg:px-8">
        
        {/* Header Bên trái */}
        <div className="max-w-[674px] mb-16 lg:mb-24">
          <h3 className="text-[#00D4FF] font-medium text-[17px] tracking-wide mb-4">
            Global scale
          </h3>
          <h2 className="text-white text-4xl lg:text-[35.18px] font-medium leading-[48px] tracking-[-0.2px] mb-6">
            The backbone for global commerce
          </h2>
          <p className="text-[#ADBDCC] text-[17.7px] leading-[28px] tracking-[0.2px]">
            Stripe makes moving money as easy and programmable as moving data. Our teams are based in offices around the world and we process hundreds of billions of dollars each year for ambitious businesses of all sizes.
          </p>
        </div>

        {/*  Cột Thống kê */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative pl-5">
              <div className="absolute left-0 top-1 w-[2px] h-6 bg-[#00D4FF] rounded-full"></div>
              <h4 className="text-white text-[24px] font-medium tracking-[0.1px] mb-2">
                {stat.value}
              </h4>
              <p className="text-[#ADBDCC] text-[13.7px] leading-[24px] tracking-[0.2px] pr-4">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GlobalScale;