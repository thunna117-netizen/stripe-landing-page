import React from 'react';
import launch1 from '../assets/launch1.png';
import launch2 from '../assets/launch2.png';
import launch3 from '../assets/launch3.png';
import color from '../assets/color.png';

const NoCodeOptions = () => {
  const options = [
    {
      id: 1,
      title: 'Use a pre-integrated platform',
      description: (
        <>
          Explore our directory to find out-of-the-box solutions that connect with Stripe, such as{' '}
          <a href="#" className="text-[#635BFF] font-medium hover:text-[#0A2540] transition-colors">Squarespace</a> and{' '}
          <a href="#" className="text-[#635BFF] font-medium hover:text-[#0A2540] transition-colors">Lightspeed</a>.
        </>
      ),
      image: launch1
    },
    {
      id: 2,
      title: 'Build with Stripe-certified experts',
      description: 'Work with a Stripe consulting partner that can integrate and deploy Stripe solutions for you.',
      image: launch2
    },
    {
      id: 3,
      title: 'Try our no-code products',
      description: (
        <>
          Create an <a href="#" className="text-[#635BFF] font-medium hover:text-[#0A2540] transition-colors">invoice</a>, accept an{' '}
          <a href="#" className="text-[#635BFF] font-medium hover:text-[#0A2540] transition-colors">in-person payment</a> with your phone, or share a{' '}
          <a href="#" className="text-[#635BFF] font-medium hover:text-[#0A2540] transition-colors">payment link</a> directly from your Dashboard to start generating revenue in minutes—no code required.
        </>
      ),
      image: launch3
    }
  ];

  return (
    <section className="relative w-full font-['Inter'] z-30 
      -mt-[12vw] lg:-mt-[160px] 
      pt-[calc(12vw+4rem)] lg:pt-[calc(160px+4rem)] 
      pb-24 lg:pb-32"
    >
      
      {/* 1. NỀN */}
      <div className="absolute inset-0 z-0 bg-white pointer-events-none 
        [clip-path:polygon(0_12vw,100%_0,100%_100%,0_100%)] 
        lg:[clip-path:polygon(0_160px,100%_0,100%_100%,0_100%)]"
      ></div>

      {/* 2. DẢI MÀU */}
      <div className="absolute inset-0 z-10 pointer-events-none 
        [clip-path:polygon(0_12vw,100%_0,100%_72px,0_calc(12vw+72px))] 
        lg:[clip-path:polygon(0_160px,100%_0,100%_72px,0_calc(160px+72px))]"
      >
        <img 
          src={color} 
          alt="Colorful ribbon" 
          className="w-full h-auto object-cover translate-y-[20px]" 
        />
      </div>

      <div className="absolute inset-0 max-w-[1080px] mx-auto hidden lg:grid grid-cols-4 pointer-events-none opacity-40 z-0 pt-[160px]">
        <div className="border-l border-[rgba(66,71,112,0.1)]"></div>
        <div className="border-l border-[rgba(66,71,112,0.1)]"></div>
        <div className="border-l border-[rgba(66,71,112,0.1)]"></div>
        <div className="border-l border-r border-[rgba(66,71,112,0.1)]"></div>
      </div>

      {/* 3. NỘI DUNG CHÍNH */}
      <div className="relative z-20 max-w-[1080px] mx-auto px-6 lg:px-8">
        
        {/* HEADER KHỐI */}
        <div className="max-w-[682px] mb-16 lg:mb-20">
          <h3 className="text-[#635BFF] font-medium text-[16.8px] tracking-wide mb-4">
            Launch with ease
          </h3>
          <h2 className="text-[#0A2540] text-3xl lg:text-[35.77px] font-medium leading-[1.3] lg:leading-[48px] tracking-[-0.2px] mb-6">
            Low- and no-code options for getting started
          </h2>
          <p className="text-[#425466] text-[16.45px] leading-[28px] tracking-[0.2px]">
            If you'd like to use Stripe for your business but don't have developers on staff, no problem. We have a few options depending on your needs.
          </p>
        </div>

        {/* LƯỚI 3 THẺ TÍNH NĂNG */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((opt) => (
            <div 
              key={opt.id} 
              className="bg-white rounded-lg shadow-[0_18px_36px_-18px_rgba(0,0,0,0.1),0_30px_45px_-30px_rgba(50,50,93,0.25)] flex flex-col transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="pt-1 px-1">
                <div className="w-full bg-[#F6F9FC] rounded-[4px] overflow-hidden">
                  <img 
                    src={opt.image} 
                    alt={opt.title} 
                    className="w-full h-auto object-cover mix-blend-multiply" 
                  />
                </div>
              </div>
              
              <div className="px-6 pt-6 pb-8 flex flex-col flex-grow">
                <h3 className="text-[#0A2540] text-[22px] lg:text-[24px] font-medium leading-[32px] lg:leading-[36px] mb-3">
                  {opt.title}
                </h3>
                <p className="text-[#425466] text-[15px] lg:text-[16px] leading-[26px] lg:leading-[28px] tracking-[0.2px] flex-grow">
                  {opt.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NoCodeOptions;