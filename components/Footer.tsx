
import React from 'react';

const Footer: React.FC = () => {
  const logoUrl = "https://naver.me/FK0tB7tN";

  return (
    <footer className="bg-black text-gray-500 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-4">
            <div className="h-10 flex items-center justify-center overflow-hidden">
              <img 
                src={logoUrl} 
                alt="DESIGN MU Logo" 
                className="h-full w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <span className="text-white text-lg font-bold tracking-widest">DESIGN MU</span>
          </div>
          
          <div className="flex gap-8 text-sm tracking-widest">
            <a 
              href="https://www.instagram.com/design_mu_official_/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              INSTAGRAM
            </a>
            <a href="#" className="hover:text-white transition-colors">PINTEREST</a>
            <a href="#" className="hover:text-white transition-colors">BLOG</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase">
          <p>© 2024 DESIGN MU. ALL RIGHTS RESERVED.</p>
          <p>Privacy Policy / Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
