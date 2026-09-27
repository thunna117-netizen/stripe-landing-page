import React from 'react';
import logo from '../assets/logoblue.png';

const Footer = () => {
  return (
    <footer className="relative w-full bg-white font-['Inter'] 
      -mt-[16vw] lg:-mt-[220px] 
      pt-40 pb-32 lg:pt-[280px] lg:pb-[287px] 
      [clip-path:polygon(0_10vw,100%_0,100%_100%,0_100%)] 
      lg:[clip-path:polygon(0_220px,100%_0,100%_100%,0_100%)]"
    >

      <div className="absolute inset-0 max-w-[1080px] mx-auto hidden md:grid grid-cols-4 pointer-events-none z-0">
        <div className="border-l border-[rgba(66,71,112,0.06)]"></div>
        <div className="border-l border-[rgba(66,71,112,0.06)]"></div>
        <div className="border-l border-[rgba(66,71,112,0.06)]"></div>
        <div className="border-l border-r border-[rgba(66,71,112,0.06)]"></div>
      </div>

      {/* NỘI DUNG CHÍNH */}
      <div className="relative z-10 max-w-[1080px] mx-auto mt-12 lg:mt-20 px-6 md:px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-4 lg:gap-8">
        
        {/* CỘT 1: Logo, Quốc gia & Copyright */}
        <div className="col-span-2 md:col-span-1 flex flex-col md:justify-between items-start h-full gap-6 md:gap-0">
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </div>

            <button className="flex items-center gap-2 text-[#0A2540] text-[13.7px] font-medium hover:text-[#635BFF] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
              </svg>
              United States (English)
            </button>
          </div>

          <div className="text-[#364657] text-[13.7px] font-medium pb-1">
            © 2024 Stripe, Inc.
          </div>
        </div>

        {/* CỘT 2: Products & Pricing */}
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="text-[#0A2540] font-medium text-[13.6px] mb-3">Products & Pricing</h4>
            <ul className="flex flex-col gap-1 text-[13.7px] text-[#0A2540]">
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Atlas</a></li>
              <li><a href="#" className="hover:underline">Billing</a></li>
              <li><a href="#" className="hover:underline">Capital</a></li>
              <li><a href="#" className="hover:underline">Checkout</a></li>
              <li><a href="#" className="hover:underline">Climate</a></li>
              <li><a href="#" className="hover:underline">Connect</a></li>
              <li><a href="#" className="hover:underline">Data Pipeline</a></li>
              <li><a href="#" className="hover:underline">Elements</a></li>
              <li><a href="#" className="hover:underline">Financial Connections</a></li>
              <li><a href="#" className="hover:underline">Identity</a></li>
              <li><a href="#" className="hover:underline">Invoicing</a></li>
              <li><a href="#" className="hover:underline">Issuing</a></li>
              <li><a href="#" className="hover:underline">Link</a></li>
              <li><a href="#" className="hover:underline">Payments</a></li>
              <li><a href="#" className="hover:underline">Payment Links</a></li>
              <li><a href="#" className="hover:underline">Payouts</a></li>
              <li><a href="#" className="hover:underline">Radar</a></li>
              <li><a href="#" className="hover:underline">Revenue Recognition</a></li>
              <li><a href="#" className="hover:underline">Sigma</a></li>
              <li><a href="#" className="hover:underline">Tax</a></li>
              <li><a href="#" className="hover:underline">Terminal</a></li>
              <li><a href="#" className="hover:underline">Treasury</a></li>
            </ul>
          </div>

          <div className="md:hidden">
            <h4 className="text-[#0A2540] font-medium text-[14px] mb-3">Resources</h4>
            <ul className="flex flex-col gap-1 text-[14px] text-[#0A2540]">
              <li><a href="#" className="hover:underline">Guides</a></li>
              <li><a href="#" className="hover:underline">Customer stories</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Annual conference</a></li>
              <li><a href="#" className="hover:underline">Privacy & terms</a></li>
              <li><a href="#" className="hover:underline">Prohibited & restricted businesses</a></li>
              <li><a href="#" className="hover:underline">Licenses</a></li>
              <li><a href="#" className="hover:underline">Sitemap</a></li>
              <li><a href="#" className="hover:underline">Cookie settings</a></li>
              <li><a href="#" className="hover:underline">Your privacy choices</a></li>
            </ul>
          </div>
          <div className="md:hidden">
            <h4 className="text-[#0A2540] font-medium text-[13.6px] mb-3">Support</h4>
            <ul className="flex flex-col gap-1 text-[13.6px] text-[#0A2540]">
              <li><a href="#" className="hover:underline">Contact sales</a></li>
              <li><a href="#" className="hover:underline">Support center</a></li>
              <li><a href="#" className="hover:underline">Support plans</a></li>
              <li className="text-[#0A2540] font-medium pt-2">CA residents:<br/>+1 888 926 2289</li>
            </ul>
          </div>
        </div>

        {/* CỘT 3: Solutions & Developers */}
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="text-[#0A2540] font-medium text-[13.8px] mb-3">Solutions</h4>
            <ul className="flex flex-col gap-1 text-[13.5px] text-[#0A2540]">
              <li><a href="#" className="hover:underline">Startups</a></li>
              <li><a href="#" className="hover:underline">Enterprises</a></li>
              <li><a href="#" className="hover:underline">SaaS</a></li>
              <li><a href="#" className="hover:underline">Platforms</a></li>
              <li><a href="#" className="hover:underline">Ecommerce</a></li>
              <li><a href="#" className="hover:underline">Marketplaces</a></li>
              <li><a href="#" className="hover:underline">Crypto</a></li>
              <li><a href="#" className="hover:underline">Creator economy</a></li>
              <li><a href="#" className="hover:underline">Embedded finance</a></li>
              <li><a href="#" className="hover:underline">Global businesses</a></li>
              <li><a href="#" className="hover:underline">Finance automation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#0A2540] font-medium text-[13.7px] mb-3">Integrations & Custom Solutions</h4>
            <ul className="flex flex-col gap-1 text-[13.7px] text-[#0A2540]">
              <li><a href="#" className="hover:underline">Stripe App Marketplace</a></li>
              <li><a href="#" className="hover:underline">Partner ecosystem</a></li>
              <li><a href="#" className="hover:underline">Professional services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#0A2540] font-medium text-[14.2px] mb-3">Developers</h4>
            <ul className="flex flex-col gap-1 text-[13.8px] text-[#0A2540]">
              <li><a href="#" className="hover:underline">Documentation</a></li>
              <li><a href="#" className="hover:underline">API reference</a></li>
              <li><a href="#" className="hover:underline">API status</a></li>
              <li><a href="#" className="hover:underline">API changelog</a></li>
              <li><a href="#" className="hover:underline">Stripe Apps</a></li>
            </ul>
          </div>

          {/* Dành riêng cho Mobile (md:hidden): Chuyển Company sang cột bên phải */}
          <div className="md:hidden">
            <h4 className="text-[#0A2540] font-medium text-[14.3px] mb-3">Company</h4>
            <ul className="flex flex-col gap-1 text-[13.6px] text-[#0A2540]">
              <li><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">Stripe Press</a></li>
            </ul>
          </div>
        </div>

        {/* CỘT 4  */}
        <div className="hidden md:flex flex-col gap-8">
          <div>
            <h4 className="text-[#0A2540] font-medium text-[14px] mb-3">Resources</h4>
            <ul className="flex flex-col gap-1 text-[14px] text-[#0A2540]">
              <li><a href="#" className="hover:underline">Guides</a></li>
              <li><a href="#" className="hover:underline">Customer stories</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Annual conference</a></li>
              <li><a href="#" className="hover:underline">Privacy & terms</a></li>
              <li><a href="#" className="hover:underline">Prohibited & restricted businesses</a></li>
              <li><a href="#" className="hover:underline">Licenses</a></li>
              <li><a href="#" className="hover:underline">Sitemap</a></li>
              <li><a href="#" className="hover:underline">Cookie settings</a></li>
              <li><a href="#" className="hover:underline">Your privacy choices</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#0A2540] font-medium text-[14.3px] mb-3">Company</h4>
            <ul className="flex flex-col gap-1 text-[13.6px] text-[#0A2540]">
              <li><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">Stripe Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#0A2540] font-medium text-[13.6px] mb-3">Support</h4>
            <ul className="flex flex-col gap-1 text-[13.6px] text-[#0A2540]">
              <li><a href="#" className="hover:underline">Contact sales</a></li>
              <li><a href="#" className="hover:underline">Support center</a></li>
              <li><a href="#" className="hover:underline">Support plans</a></li>
              <li className="text-[#0A2540] font-medium pt-2">CA residents: +1 888 926 2289</li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;