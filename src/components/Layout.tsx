import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={`relative bg-navy min-h-screen text-cream selection:bg-gold selection:text-navy overflow-hidden font-sans transition-opacity duration-1000 opacity-100`}>
      {/* Dynamic Ambient Background - Optimized for performance */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-gold/10 opacity-60 blur-[120px] animate-[orb_20s_ease-in-out_infinite]" />
        <div className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-[#002B61]/80 opacity-60 blur-[120px] animate-[orb_25s_ease-in-out_infinite_reverse]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[80vw] rounded-full bg-[#001B3D] opacity-80 blur-[140px] animate-[orb_30s_ease-in-out_infinite]" />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 pb-4">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
