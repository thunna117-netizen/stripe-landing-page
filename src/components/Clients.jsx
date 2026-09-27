import React from 'react';
import amazonLogo from '../assets/amazon.svg';
import bmwLogo from '../assets/bmw.svg';
import googleLogo from '../assets/google.svg';
import marriottLogo from '../assets/marriott.svg';
import salesforceLogo from '../assets/salesforce.svg';
import shopifyLogo from '../assets/shopify.svg';
import urbnLogo from '../assets/urbn.svg';
import whatsappLogo from '../assets/whatsapp.svg';

const Clients = () => {
  const clients = [
    { name: 'Amazon', logo: amazonLogo, class: 'h-8 sm:h-10 md:h-12 lg:h-14' },
    { name: 'Salesforce', logo: salesforceLogo, class: 'h-10 sm:h-12 md:h-14 lg:h-16' }, 
    { name: 'Google', logo: googleLogo, class: 'h-8 sm:h-10 md:h-12 lg:h-14' },
    { name: 'URBN', logo: urbnLogo, class: 'h-7 sm:h-9 md:h-10 lg:h-12' },
    { name: 'Shopify', logo: shopifyLogo, class: 'h-8 sm:h-10 md:h-12 lg:h-14' },
    { name: 'WhatsApp', logo: whatsappLogo, class: 'h-8 sm:h-10 md:h-12 lg:h-14' },
    { name: 'BMW', logo: bmwLogo, class: 'h-7 sm:h-9 md:h-11 lg:h-12' },
    { name: 'Marriott', logo: marriottLogo, class: 'h-8 sm:h-10 md:h-12 lg:h-14' },
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto bg-white h-[250px] flex items-center justify-center overflow-hidden">
      
      <div className="w-full max-w-[1080px] mx-auto h-[140px] px-4 md:px-16 lg:px-0 flex flex-col justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 sm:gap-y-10 gap-x-4 sm:gap-x-8 items-center justify-items-center transition-opacity duration-300">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className={`${client.class} w-auto object-contain select-none`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;