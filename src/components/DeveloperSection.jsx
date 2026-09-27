import React from 'react';
import code from '../assets/code.png'; 
import designlogo1 from '../assets/designlogo1.png';
import designlogo2 from '../assets/designlogo2.png';
import designlogo3 from '../assets/designlogo3.png';
import designlogo4 from '../assets/designlogo4.png';

const DeveloperSection = () => {
  const features = [
    {
      id: 1,
      title: 'Use Stripe with your stack',
      description: 'We offer client and server libraries in everything from React and PHP to .NET and iOS.',
      linkText: 'See libraries',
      icon: designlogo1
    },
    {
      id: 2,
      title: 'Try no-code options',
      description: 'Customize and deploy payments interfaces directly from the Stripe Dashboard.',
      linkText: 'Explore no-code',
      icon: designlogo2
    },
    {
      id: 3,
      title: 'Explore prebuilt integrations',
      description: 'Connect Stripe to over a hundred tools including Adobe, Salesforce, and Xero.',
      linkText: 'Browse App Marketplace',
      icon: designlogo3
    },
    {
      id: 4,
      title: 'Build on Stripe Apps',
      description: 'Create an app just for your team or for the millions of businesses on Stripe.',
      linkText: 'Learn about Apps',
      icon: designlogo4
    }
  ];

  return (
    <section id="developers" className="relative w-full font-['Inter'] z-20 
      -mt-[8vw] lg:-mt-[160px] 
      -mb-[4vw] lg:-mb-[60px] 
      pt-[calc(8vw+8rem)] lg:pt-[calc(160px+12rem)] 
      pb-[calc(4vw+8rem)] lg:pb-[calc(60px+12rem)]"
    >
      
      {/* 2. Nền */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A2540] pointer-events-none 
        [clip-path:polygon(0_8vw,100%_0,100%_calc(100%-8vw),0_100%)] 
        lg:[clip-path:polygon(0_160px,100%_0,100%_calc(100%-160px),0_100%)]"
      >
        <div className="absolute inset-0 max-w-[1080px] mx-auto hidden lg:grid grid-cols-4 pointer-events-none z-10">
          <div className="border-l border-[rgba(66,71,112,0.3)]"></div>
          <div className="border-l border-[rgba(66,71,112,0.3)]"></div>
          <div className="border-l border-[rgba(66,71,112,0.3)]"></div>
          <div className="border-l border-r border-[rgba(66,71,112,0.3)]"></div>
        </div>
      </div>

      {/* NỘI DUNG CHÍNH  */}
      <div className="relative z-10 max-w-[1080px] mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-24 mb-16 md:mb-24 lg:mb-32">
          
          <div className="w-full md:w-[300px] lg:w-5/12 max-w-[460px] shrink-0">
            <h3 className="text-[#00D4FF] font-medium text-[16.7px] tracking-wide mb-4">
              Designed for developers
            </h3>
            <h2 className="text-white text-3xl md:text-[28px] lg:text-[40px] font-bold leading-[1.2] lg:leading-[48px] tracking-[-0.2px] mb-4 lg:mb-6">
              Ship more quickly with powerful and easy-to-use APIs
            </h2>
            <p className="text-[#ADBDCC] text-[16px] md:text-[17.5px] leading-[28px] tracking-[0.2px] mb-8">
              Save engineering time with unified payments functionality. We obsess over the maze of gateways, payments rails, and financial institutions that make up the global economic landscape so that your teams can build what you need on one platform.
            </p>
            <button className="bg-[#00D4FF] hover:bg-[#CCFFFF] transition-colors text-[#0A2540] font-medium py-2 px-5 rounded-full inline-flex items-center gap-2 group text-[14px]">
              Read the docs
              <span className="group-hover:translate-x-1 transition-transform">›</span>
            </button>
          </div>
          <div className="w-full md:w-[50%] lg:w-[55%] flex justify-center md:justify-start mt-10 md:mt-0 overflow-visible">
            <div className="relative w-full max-w-[600px] lg:max-w-none lg:-translate-x-22  md:translate-y-18 lg:translate-y-6">
              <img 
                src={code} 
                alt="Code editor mockup" 
                className="w-full h-auto object-contain drop-shadow-2xl scale-115 md:scale-[1.25] lg:scale-[1.4] origin-left transition-transform duration-300" 
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-12 md:mt-16">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-start">
              <img 
                src={feature.icon} 
                alt={feature.title} 
                className="w-10 h-10 object-contain mb-6 ml-4 lg:ml-6" 
              />
              <div className="border-l-2 border-[#00D4FF] pl-4 mb-3">
                <h4 className="text-white text-[15px] font-medium leading-[24px]">
                  {feature.title}
                </h4>
              </div>
              <p className="text-[#ADBDCC] text-[14px] leading-[24px] mb-4 flex-grow pr-4">
                {feature.description}
              </p>
              <a href="#" className="text-[#00D4FF] text-[14px] font-medium mt-auto flex items-center gap-1 group hover:text-white transition-colors">
                {feature.linkText} 
                <span className="text-[16px] group-hover:translate-x-1 transition-transform">›</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DeveloperSection;