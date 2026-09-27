import React from 'react';
import chairImg from '../assets/chair.png';
import containerImg from '../assets/Container.png';
import figure2Img from '../assets/Figure.png';
import cards1Img from '../assets/cards1.png';
import cardsImg from '../assets/cards.png';
import paymentsLogo from '../assets/payments-logo.svg';
import billingLogo from '../assets/billing-logo.svg'; 
import connectLogo from '../assets/connect-logo.svg';
import issuingLogo from '../assets/issuing-logo.svg';

// KHỐI 1: HEADER CHUNG
const Block1_Header = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 mb-32 lg:mb-48">
      <div className="w-full lg:w-[460px] shrink-0">
        <h3 className="text-[#635BFF] font-medium text-[16.7px] tracking-wide mb-4">
          Modular solutions
        </h3>
        <h2 className="text-[#0A2540] text-2xl lg:text-[51.63px] font-bold leading-[1.2] lg:leading-[68px] tracking-[-1.12px] mb-6">
          A fully integrated suite of financial and payments products
        </h2>
        <p className="text-[#425466] text-[17.5px] leading-[28px] tracking-[0.2px]">
          Reduce costs, grow revenue, and run your business more efficiently on a fully integrated platform. Use Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models.
        </p>
      </div>
      
      <div className="w-full lg:w-[540px] flex justify-center lg:justify-end shrink-0">
        <div className="relative w-full flex items-center justify-center translate-y-8">
          <img src={cardsImg} alt="Suite mockup" className="w-full h-auto object-contain drop-shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

// KHỐI 2: PAYMENTS
const Block2_Payments = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
      
      {/* NỬA TRÁI: Chữ */}
      <div className="w-full lg:w-[460px] shrink-0">
        <div className="flex items-center gap-3 mb-4">
          <img src={paymentsLogo} alt="Payments logo" className="w-6 h-6 object-contain" />
          <span className="text-[#2E3A55] font-semibold text-[17px]">Payments</span>
        </div>
        <h3 className="text-[#0A2540] text-3xl lg:text-[35.7px] font-bold leading-tight tracking-tight mb-4">
          Accept and optimize payments, globally
        </h3>
        <p className="text-[#425466] text-[16.5px] leading-relaxed mb-8">
          Increase authorization rates, optimize your checkout conversion, and offer local payment methods in every market.
        </p>
        <button className="bg-[#635BFF] hover:bg-[#5851DF] transition-colors text-white font-medium py-1.5 px-4 rounded-full inline-flex items-center gap-2 group text-[13.5px]">
          Start with Payments <span className="group-hover:translate-x-1 transition-transform">›</span>
        </button>
        <div className="mt-12">
          <p className="text-[#0A2540] font-bold text-[14px] mb-3">See also</p>
          <ul className="space-y-2">
            {[
              { name: 'Tax', desc: 'for automating sales tax and VAT' },
              { name: 'Radar', desc: 'for fraud prevention and management' },
              { name: 'Terminal', desc: 'for custom in-person payments' }
            ].map((item, idx) => (
              <li key={idx} className="text-[13.71px] leading-[24px] tracking-[0.2px] text-[#425466] flex items-center flex-wrap">
                <a href="#" className="text-[#635BFF] hover:text-[#0A2540] font-bold transition-colors">
                  {item.name}
                </a>
                <span className="ml-1 font-medium">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* NỬA PHẢI: Ảnh */}
      <div className="w-full lg:w-[438px] flex justify-center lg:justify-end shrink-0">

        <div className="relative w-full flex items-center justify-center translate-y-12 transition-transform hover:-translate-y-2 duration-500">
          <img src={chairImg} alt="Payments" className="w-full h-auto object-contain drop-shadow-2xl" />
        </div>
        
      </div>
    </div>
  );
};

// KHỐI 3: BILLING
const Block3_Billing = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
      
      <div className="w-full lg:w-[420px] shrink-0">
        <div className="flex items-center gap-3 mb-4">
          <img src={billingLogo} alt="Billing logo" className="w-6 h-6 object-contain" />
          <span className="text-[#2E3A55] font-semibold text-[17px]">Billing</span>
        </div>
        <h3 className="text-[#0A2540] text-3xl lg:text-[35.7px] font-bold leading-tight tracking-tight mb-4">
          Capture recurring revenue
        </h3>
        <p className="text-[#425466] text-[16.5px] leading-relaxed mb-8">
          Support recurring business models, minimize churn, and automate finance operations.
        </p>
        <button className="bg-[#635BFF] hover:bg-[#5851DF] transition-colors text-white font-medium py-1.5 px-4 rounded-full inline-flex items-center gap-2 group text-[13.5px]">
          Start with Billing <span className="group-hover:translate-x-1 transition-transform">›</span>
        </button>
        
        <div className="mt-12">
          <p className="text-[#0A2540] font-bold text-[14px] mb-3">See also</p>
          <ul className="space-y-2">
            {[
              { name: 'Invoicing', desc: 'for automating billing and collection' },
              { name: 'Revenue Recognition', desc: 'for streamlined accounting' },
              { name: 'Sigma', desc: 'for custom business insights' }
            ].map((item, idx) => (
              <li key={idx} className="text-[13.71px] leading-[24px] tracking-[0.2px] text-[#425466] flex items-center flex-wrap">
                <a href="#" className="text-[#635BFF] hover:text-[#0A2540] font-bold transition-colors">
                  {item.name}
                </a>
                <span className="ml-1 font-medium">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full lg:w-[700px] flex justify-center lg:justify-end shrink-0">
        <div className="relative w-full flex items-center justify-center translate-y-[20px]  transition-transform hover:-translate-y-[2px] duration-500">
          <img src={containerImg} alt="Billing" className="w-full h-auto object-contain drop-shadow-2xl" />
        </div>
      </div>
    </div>
  );
};


// KHỐI 4: CONNECT
const Block4_Connect = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">

      <div className="w-full lg:w-[460px] shrink-0">
        <div className="flex items-center gap-3 mb-4">
          <img src={connectLogo} alt="Connect logo" className="w-6 h-6 object-contain" />
          <span className="text-[#2E3A55] font-semibold text-[17px]">Connect</span>
        </div>
        <h3 className="text-[#0A2540] text-3xl lg:text-[35.7px] font-bold leading-tight tracking-tight mb-4">
          Set up multiparty payments and payouts
        </h3>
        <p className="text-[#425466] text-[16.5px] leading-relaxed mb-8">
          Integrate payments into your platform or marketplace for end-to-end payments experiences.
        </p>
        <button className="bg-[#635BFF] hover:bg-[#5851DF] transition-colors text-white font-medium py-1.5 px-4 rounded-full inline-flex items-center gap-2 group text-[13.5px]">
          Start with Connect <span className="group-hover:translate-x-1 transition-transform">›</span>
        </button>

        <div className="mt-12">
          <p className="text-[#0A2540] font-bold text-[14px] mb-3">See also</p>
          <ul className="space-y-2">
            {[
              { name: 'Terminal', desc: 'for custom in-person payments' },
              { name: 'Instant Payouts', desc: 'for fast funds transfer' },
              { name: 'Payment Elements', desc: 'for customizable UI components' }
            ].map((item, idx) => (
              <li key={idx} className="text-[13.71px] leading-[24px] tracking-[0.2px] text-[#425466] flex items-center flex-wrap">
                <a href="#" className="text-[#635BFF] hover:text-[#0A2540] font-bold transition-colors">
                  {item.name}
                </a>
                <span className="ml-1 font-medium">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full lg:w-[348px] flex justify-center lg:justify-end shrink-0 mt-8 lg:mt-0">
        <div className="relative w-full flex items-center justify-center transition-transform hover:-translate-y-2 duration-500">
          <img src={figure2Img} alt="Connect" className="w-[80%] h-auto object-contain drop-shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

// KHỐI 5: ISSUING

const Block5_Issuing = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
      
      <div className="w-full lg:w-[460px] shrink-0">
        <div className="flex items-center gap-3 mb-4">
          <img src={issuingLogo} alt="Issuing logo" className="w-6 h-6 object-contain" />
          <span className="text-[#2E3A55] font-semibold text-[17px]">Issuing</span>
        </div>
        <h3 className="text-[#0A2540] text-3xl lg:text-[35.7px] font-bold leading-tight tracking-tight mb-4">
          Build a fintech offering with banking-as-a-service
        </h3>
        <p className="text-[#425466] text-[16.5px] leading-relaxed mb-8">
          Launch, manage, and scale a commercial card program without any setup fees.
        </p>
        <button className="bg-[#635BFF] hover:bg-[#5851DF] transition-colors text-white font-medium py-1.5 px-4 rounded-full inline-flex items-center gap-2 group text-[13.5px]">
          Start with Issuing <span className="group-hover:translate-x-1 transition-transform">›</span>
        </button>
        
        <div className="mt-12">
          <p className="text-[#0A2540] font-bold text-[14px] mb-3">See also</p>
          <ul className="space-y-2">
            {[
              { name: 'Treasury', desc: 'for embedding financial services' },
              { name: 'Capital', desc: 'for offering business financing' },
              { name: 'Connect', desc: 'for multi-party platform payments' }
            ].map((item, idx) => (
              <li key={idx} className="text-[13.71px] leading-[24px] tracking-[0.2px] text-[#425466] flex items-center flex-wrap">
                <a href="#" className="text-[#635BFF] hover:text-[#0A2540] font-bold transition-colors">
                  {item.name}
                </a>
                <span className="ml-1 font-medium">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full lg:w-[488px] flex justify-center lg:justify-end shrink-0">
        <div className="relative w-full flex items-center justify-center translate-y-20 lg:translate-x-12 transition-transform hover:-translate-y-2 duration-500">
          <img src={cards1Img} alt="Issuing" className="w-full h-auto object-contain drop-shadow-2xl" />
        </div>
      </div>
    </div>
  );
};


// COMPONENT CHÍNH
const Features = () => {
  return (
    <section id="products" className="relative w-full py-24 bg-[#F6F9FC] font-['Inter'] overflow-hidden">
      
      <div className="absolute inset-0 max-w-[1080px] mx-auto hidden lg:grid grid-cols-4 pointer-events-none opacity-40">
        <div className="border-l border-[rgba(66,71,112,0.1)]"></div>
        <div className="border-l border-[rgba(66,71,112,0.1)]"></div>
        <div className="border-l border-[rgba(66,71,112,0.1)]"></div>
        <div className="border-l border-r border-[rgba(66,71,112,0.1)]"></div>
      </div>

      <div className="relative z-10 max-w-[1080px] mx-auto px-6 lg:px-8">
        <Block1_Header />
        <div className="space-y-32 lg:space-y-48">
          <Block2_Payments />
          <Block3_Billing />
          <Block4_Connect />
          <Block5_Issuing />
        </div>
      </div>
    </section>
  );
};

export default Features;