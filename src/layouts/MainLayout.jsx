import React, { useState, useEffect } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import SignInModal from '../components/SignInModal';

const MainLayout = ({ children }) => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  useEffect(() => {
    const handleGlobalClick = (e) => {
      const target = e.target.closest('a[href="#signin"]');
      if (target) {
        e.preventDefault();
        setIsSignInOpen(true);
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white font-sans antialiased relative">
      {children}
      <ScrollToTop />
      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </div>
  );
};

export default MainLayout;
