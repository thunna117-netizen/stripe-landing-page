import React from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Features from '../components/Features';
import GlobalScale from '../components/GlobalScale';
import EnterpriseSection from '../components/Enterprise';
import Built from '../components/Built';
import DeveloperSection from '../components/DeveloperSection';
import Launch from '../components/Launch';
import Ready from '../components/Ready';
import Footer from '../components/Footer';  

const Home = () => {
  return (
    <main className="w-full bg-white min-h-screen">
      <Hero />
      
      <Clients />
      
      <Features />

      <GlobalScale />
      
      <EnterpriseSection />

      <Built />

      <DeveloperSection />

      <Launch />
      
      <Ready />

      <Footer />
    </main>
  );
};

export default Home;