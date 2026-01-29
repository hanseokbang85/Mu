
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
              <img 
                src="사이트로고.png" 
                alt="DESIGN MU Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white text-lg font-bold tracking-widest">DESIGN MU</span>
          </div>
          
          <div className="flex gap-8 text-sm tracking-widest">
            <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
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
