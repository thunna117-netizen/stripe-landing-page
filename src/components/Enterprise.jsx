import React, { useState } from 'react';
import amazonImg from '../assets/amazon.png';
import maerskLogo from '../assets/maersklogo.png';
import twilioLogo from '../assets/twiliologo.png';
import bmwLogo from '../assets/bmw.svg';
import amazomLogo from '../assets/amazon.svg';
import bmwImg from '../assets/bmw.png';
import maerskImg from '../assets/maersk.png';
import paymentsLogo from '../assets/payments-logo.svg';
import connectLogo from '../assets/connect-logo.svg';

export default function EnterpriseSection() {
  const [activeTab, setActiveTab] = useState('amazon');

  const tabContent = {
    bmw: {
      image: bmwImg,
      color: '#1C69D4',
    },
    amazon: {
      image: amazonImg,
      color: '#EFA82E',
    },
    maersk: {
      image: maerskImg,
      color: '#4CB5E5',
    },
    twilio: {
      image: amazonImg, 
      color: '#F22F46',
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <section className="relative w-full bg-white flex justify-center py-20 lg:py-32 font-sans overflow-hidden">
      <div className="w-full max-w-[1080px] px-6 lg:px-8">
        
        {/* PHẦN 1: HEADER & GIỚI THIỆU */}
        <div className="mb-16 lg:mb-20 max-w-[674px]">
          <h3 className="text-[#635BFF] font-medium text-[15px] lg:text-[17px] tracking-wide mb-4">
            Enterprise reinvention
          </h3>
          <h2 className="text-[#0A2540] text-[32px] lg:text-[35.18px] font-medium leading-[40px] lg:leading-[48px] tracking-[-0.2px] mb-5">
            Bring agility to your enterprise
          </h2>
          <p className="text-[#425466] text-[16px] lg:text-[17.7px] leading-[26px] lg:leading-[28px] tracking-[0.2px] mb-8">
            You can use Stripe not only to accept payments but also to quickly support new markets, 
            upgrade existing systems and tools, go direct-to-consumer, and engage customers with 
            subscriptions and marketplaces. Get expert integration guidance from our{' '}
            <a href="#" className="text-[#635BFF] font-medium hover:underline">professional services team</a>{' '}
            and{' '}
            <a href="#" className="text-[#635BFF] font-medium hover:underline">certified partners</a>{' '}
            so you can see value with Stripe faster.
          </p>
          <button className="bg-[#635BFF] hover:bg-[#524BFF] transition-colors text-white pl-4 pr-3 py-1 rounded-full text-[14px] font-medium inline-flex items-center justify-between min-w-[110px]">
            <span className="text-left leading-[1.1]">
              Contact <br /> sales
            </span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="ml-2">
              <path d="M4 1.5L8 5L4 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* PHẦN 2: THỐNG KÊ, CAROUSEL & TABS */}
        <div className="flex flex-col w-full">
          
          {/* Cấu trúc Grid 2 cột cho Số liệu và Hình ảnh */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            
            {/* Cột trái : Thông số & Sản phẩm */}
            <div className="lg:col-span-4 flex flex-col gap-10 pt-2 lg:pt-0">
              <div className="relative pl-5 border-l-2 border-[#b7b5fb]">
                <h4 className="text-[24px] font-medium text-[#0A2540] mb-1">5+</h4>
                <p className="text-[#425466] text-[14px] leading-[22px]">
                  Amazon businesses on Stripe including Prime, Audible, and Amazon Pay.
                </p>
              </div>
              
              <div className="relative pl-5 border-l-2 border-[#b7b5fb]">
                <h4 className="text-[24px] font-medium text-[#0A2540] mb-1">50+</h4>
                <p className="text-[#425466] text-[14px] leading-[22px]">
                  Payment methods available on Stripe
                </p>
              </div>
              
              <div className="relative pl-5 border-l-2 border-[#b7b5fb]">
                <h4 className="text-[14px] font-medium text-[#0A2540] mb-4">Products used</h4>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-2.5 text-[#425466] text-[15px] font-medium">
                    <img src={paymentsLogo} alt="Payments" className="w-5 h-5" />
                    Payments
                  </li>
                  <li className="flex items-center gap-2.5 text-[#425466] text-[15px] font-medium">
                    <img src={connectLogo} alt="Connect" className="w-5 h-5" />
                    Connect
                  </li>
                </ul>
              </div>
            </div>

            {/* Cột phải : Khối Hình ảnh */}
            <div className="lg:col-span-8">
              <div className="relative w-full aspect-[16/10] lg:aspect-[1.7] rounded-lg overflow-hidden shadow-[0_30px_60px_-12px_rgba(50,50,93,0.25),0_18px_36px_-18px_rgba(0,0,0,0.3)] group transition-all duration-300">
                <div className="absolute inset-0 z-0" style={{ backgroundColor: currentContent.color }}></div>
                
                <img 
                  key={activeTab} 
                  src={currentContent.image} 
                  alt={`${activeTab} Card`} 
                  className="absolute inset-0 w-full h-full object-cover object-center z-10 opacity-90 animate-fade-in"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20"></div>
 
              </div>
            </div>

          </div>

          <div className="flex w-full h-[80px] mt-12 border-t border-[#EBEEF1]">
            
            <div 
              onClick={() => setActiveTab('bmw')}
              className={`flex-1 flex justify-center items-center h-full border-t-[2px] -mt-[1px] cursor-pointer transition-all ${activeTab === 'bmw' ? 'border-[#1C69D4] opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}
            >
              <img src={bmwLogo} alt="BMW" className="h-[30px] object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
            
            <div 
              onClick={() => setActiveTab('amazon')}
              className={`flex-1 flex justify-center items-center h-full border-t-[2px] -mt-[1px] cursor-pointer transition-all ${activeTab === 'amazon' ? 'border-[#EFA82E] opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}
            >
              <img src={amazomLogo} alt="Amazon" className="h-[38px] object-contain" />
            </div>
            
            <div 
              onClick={() => setActiveTab('maersk')}
              className={`flex-1 flex justify-center items-center h-full border-t-[2px] -mt-[1px] cursor-pointer transition-all ${activeTab === 'maersk' ? 'border-[#4CB5E5] opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}
            >
              <img src={maerskLogo} alt="Maersk" className="h-[30px] object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
            
            <div 
              onClick={() => setActiveTab('twilio')}
              className={`flex-1 flex justify-center items-center h-full border-t-[2px] -mt-[1px] cursor-pointer transition-all ${activeTab === 'twilio' ? 'border-[#F22F46] opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}
            >
              <img src={twilioLogo} alt="Twilio" className="h-[28px] object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}