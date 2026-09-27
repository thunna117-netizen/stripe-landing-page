import React from 'react';
import built1 from '../assets/built1.png'; 
import built2 from '../assets/built2.png'; 
import built3 from '../assets/built3.png'; 
import built4 from '../assets/built4.png'; 
import atlasIcon from '../assets/atlas-ui.png';
import checkoutIcon from '../assets/checkout-ui.png';
import paymentLinksIcon from '../assets/payment-links-ui.png';
import invoicingIcon from '../assets/invoicing-ui.png';

const GrowthSection = () => {
  const growthCards = [
    {
      id: 'atlas',
      badge: 'Atlas',
      title: 'Incorporate your company',
      description: 'Form a legal entity, issue stock, and start accepting payments.',
      imgSrc: built1,
      badgeIcon: (
        <img src={atlasIcon} alt="Atlas icon" className="w-[18px] h-[18px] object-contain" />
      ),
    },
    {
      id: 'checkout',
      badge: 'Checkout',
      title: 'Sell to consumers',
      description: 'Launch a B2C business with a prebuilt payment page that’s optimized for conversion.',
      imgSrc: built3, 
      badgeIcon: (
        <img src={checkoutIcon} alt="Checkout icon" className="w-[18px] h-[18px] object-contain" />
      ),
    },
    {
      id: 'payment-links',
      badge: 'Payment Links',
      title: 'Validate your idea',
      description: 'Test your product idea by launching payments with little to no code.',
      imgSrc: built2, 
      badgeIcon: (
        <img src={paymentLinksIcon} alt="Payment Links icon" className="w-[18px] h-[18px] object-contain" />
      ),
    },
    {
      id: 'invoicing',
      badge: 'Invoicing',
      title: 'Sell to businesses',
      description: 'Launch a B2B business and collect one-time or recurring payments from customers.',
      imgSrc: built4, 
      badgeIcon: (
        <img src={invoicingIcon} alt="Invoicing icon" className="w-[18px] h-[18px] object-contain" />
      ),
    }
  ];

  return (
    <section id="resources" className="relative w-full py-24 lg:py-32 bg-[#F6F9FC] font-['Inter'] overflow-hidden">

      <div className="absolute inset-0 max-w-[1080px] mx-auto hidden lg:grid grid-cols-4 pointer-events-none opacity-40">
        <div className="border-l border-[rgba(66,71,112,0.1)]"></div>
        <div className="border-l border-[rgba(66,71,112,0.1)]"></div>
        <div className="border-l border-[rgba(66,71,112,0.1)]"></div>
        <div className="border-l border-r border-[rgba(66,71,112,0.1)]"></div>
      </div>

      <div className="relative z-10 max-w-[1080px] mx-auto px-6 lg:px-8">
        
        {/* PHẦN HEADER */}
        <div className="max-w-[810px] mb-16 lg:mb-24">
          <h3 className="text-[#635BFF] font-medium text-[16px] tracking-wide mb-4">
            Built for growth
          </h3>
          <h2 className="text-[#0A2540] text-3xl lg:text-[34px] font-bold leading-[1.2] mb-6">
            Take your startup farther, faster
          </h2>
          <p className="text-[#425466] text-[16.5px] leading-[28px] max-w-[680px]">
            Startups build on Stripe to launch faster, adapt as they grow, and automate workflows to do more with less. Build your own API-based integration or use our low- to no-code solutions, which are simple enough for easy implementation and powerful enough to scale as fast and as far as you need.
          </p>
        </div>

        {/* LƯỚI 2 CỘT (MASONRY LAYOUT)  */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          <div className="w-full md:w-1/2 flex flex-col gap-8 md:mt-[130px]">
            {/* Render 2 thẻ đầu tiên (Atlas, Checkout) */}
            {growthCards.slice(0, 2).map((card) => (
              <div key={card.id} className="bg-white rounded-lg shadow-[0_18px_36px_-18px_rgba(0,0,0,0.1),0_30px_45px_-30px_rgba(50,50,93,0.25)] flex flex-col overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                
                {/* Nửa trên: Hình ảnh mockups */}
                <div className="h-[333px] w-full relative overflow-hidden bg-[#F6F9FC]">
                  <img 
                    src={card.imgSrc} 
                    alt={card.title} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Nửa dưới: Nội dung chữ */}
                <div className="p-8">
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-4 bg-[#F6F9FC] w-max px-3 py-1.5 rounded-md">
                    {card.badgeIcon}
                    <span className="text-[11.25px] font-semibold text-[#2E3A55]">{card.badge}</span>
                  </div>
                  
                  <h4 className="text-[24px] text-[#0A2540] font-semibold mb-2">{card.title}</h4>
                  <p className="text-[#425466] text-[16.3px] leading-[28px]">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CỘT PHẢI  */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            {/* Render 2 thẻ cuối (Payment Links, Invoicing) */}
            {growthCards.slice(2, 4).map((card) => (
              <div key={card.id} className="bg-white rounded-lg shadow-[0_18px_36px_-18px_rgba(0,0,0,0.1),0_30px_45px_-30px_rgba(50,50,93,0.25)] flex flex-col overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                
                {/* Nửa trên: Hình ảnh mockups */}
                <div className="h-[333px] w-full relative overflow-hidden bg-[#F6F9FC]">
                  <img 
                    src={card.imgSrc} 
                    alt={card.title} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Nửa dưới: Nội dung chữ */}
                <div className="p-8">
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-4 bg-[#F6F9FC] w-max px-3 py-1.5 rounded-md">
                    {card.badgeIcon}
                    <span className="text-[11.25px] font-semibold text-[#2E3A55]">{card.badge}</span>
                  </div>
                  
                  <h4 className="text-[24px] text-[#0A2540] font-semibold mb-2">{card.title}</h4>
                  <p className="text-[#425466] text-[16.3px] leading-[28px]">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default GrowthSection;