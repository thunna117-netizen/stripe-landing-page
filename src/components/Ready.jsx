import React from 'react';
import ready1 from '../assets/ready1.png';
import ready2 from '../assets/ready2.png';
import color from '../assets/color.png';
import color1 from '../assets/color1.png';
const ReadyToGetStarted = () => {
  return (
    <section id="pricing" className="relative w-full bg-[#F6F9FC] pt-24 pb-32 lg:pt-[128px] lg:pb-[287px] font-['Inter'] 
      [clip-path:polygon(0_0,100%_0,100%_calc(100%-8vw),0_100%)] 
      lg:[clip-path:polygon(0_0,100%_0,100%_calc(100%-120px),0_100%)]"
    >
      

      <div className="absolute inset-0 max-w-[1080px] mx-auto hidden lg:grid grid-cols-4 pointer-events-none z-0">
        <div className="border-l border-[rgba(66,71,112,0.06)]"></div>
        <div className="border-l border-[rgba(66,71,112,0.06)]"></div>
        <div className="border-l border-[rgba(66,71,112,0.06)]"></div>
        <div className="border-l border-r border-[rgba(66,71,112,0.06)]"></div>
      </div>

      <div className="absolute left-0 bottom-0 w-full pointer-events-none z-10 flex justify-center">
        <img 
          src={color} 
          alt="Colorful ribbon right" 
          className="w-[150%] md:w-[120%] lg:w-full max-w-none h-auto object-cover lg:translate-y-[10px]" 
        />
        <img 
          src={color1} 
          alt="Colorful ribbon left" 
          className="absolute left-[-2%] bottom-0 w-[150%] md:w-[120%] lg:w-full max-w-none h-auto object-cover lg:translate-y-[10px]" 
        />
      </div>

      {/*  NỘI DUNG CHÍNH */}
      <div className="relative z-20 max-w-[1080px] mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Cột 1: Giới thiệu & Nút bấm */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
          <h2 className="text-[#0A2540] text-[22px] font-medium leading-[32px] tracking-[0.1px] mb-4">
            Ready to get started?
          </h2>
          <p className="text-[#425466] text-[16.45px] leading-[28px] tracking-[0.2px] mb-8 max-w-[450px]">
            Explore Stripe Payments, or create an account instantly and start accepting payments. You can also contact us to design a custom package for your business.
          </p>
          <div className="flex flex-row items-center gap-4">
            <button className="bg-[#635BFF] hover:bg-[#524BFF] transition-colors text-white px-4 py-1 rounded-full text-[13.35px] font-medium inline-flex items-center gap-1.5 h-[33px] whitespace-nowrap">
              Start now
              <span className="text-[16px] leading-none mb-[2px]">›</span>
            </button>
            <button className="bg-transparent hover:text-[#0A2540] transition-colors text-[#635BFF] px-4 py-1 rounded-full text-[13.9px] font-medium inline-flex items-center gap-1.5 h-[33px] whitespace-nowrap">
              Contact sales
              <span className="text-[16px] leading-none mb-[2px]">›</span>
            </button>
          </div>
        </div>

        {/* Cột 2: Pricing */}
        <div className="col-span-1 md:col-span-1 lg:col-start-3 lg:col-span-1 flex flex-col items-start">
          <div className="mb-4">
            <img src={ready1} alt="Pricing icon" className="w-[44px] h-[44px] object-contain" />
          </div>
          <div className="relative pl-4 mb-3">
            <div className="absolute left-0 top-1 w-[2px] h-[15px] bg-[#635BFF]"></div>
            <h3 className="text-[#0A2540] text-[14px] font-medium leading-[24px] tracking-[0.2px]">
              Always know what you pay
            </h3>
          </div>
          <p className="text-[#425466] text-[13.7px] leading-[24px] tracking-[0.2px] mb-4">
            Integrated per-transaction pricing with no hidden fees.
          </p>
          <a href="#" className="text-[#635BFF] hover:text-[#0A2540] transition-colors font-medium text-[13.7px] flex items-center gap-1 mt-auto">
            Pricing details <span className="text-[16px] mb-[2px]">›</span>
          </a>
        </div>

        {/* Cột 3: Integration */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-start">
          <div className="mb-4">
            <img src={ready2} alt="Integration icon" className="w-[44px] h-[44px] object-contain" />
          </div>
          <div className="relative pl-4 mb-3">
            <div className="absolute left-0 top-1 w-[2px] h-[15px] bg-[#635BFF]"></div>
            <h3 className="text-[#0A2540] text-[13.35px] font-medium leading-[24px] tracking-[0.2px]">
              Start your integration
            </h3>
          </div>
          <p className="text-[#425466] text-[13.47px] leading-[24px] tracking-[0.2px] mb-4">
            Get up and running with Stripe in as little as 10 minutes.
          </p>
          <a href="#" className="text-[#635BFF] hover:text-[#0A2540] transition-colors font-medium text-[13.7px] flex items-center gap-1 mt-auto">
            API reference <span className="text-[16px] mb-[2px]">›</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ReadyToGetStarted;