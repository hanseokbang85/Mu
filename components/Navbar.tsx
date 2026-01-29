
import React, { useState } from 'react';
import Logo from './Logo';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // HOME 섹션이 아닐 때는 항상 스크롤된 상태(흰 배경)처럼 보이게 설정
  const isSolid = activeSection !== 'HOME';

  const navLinks = [
    { name: 'HOME', id: 'HOME' },
    { name: 'PORTFOLIO', id: 'PORTFOLIO' },
    { name: 'ABOUT', id: 'ABOUT' },
    { name: 'CONTACT', id: 'CONTACT' },
  ];

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isSolid ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => handleLinkClick('HOME')} 
          className="flex items-center gap-3 group outline-none"
        >
          <Logo 
            className="h-7 md:h-9" 
            color={isSolid ? "black" : "white"} 
          />
          <span className={`text-xl font-bold tracking-[0.2em] transition-colors duration-500 ${isSolid ? 'text-black' : 'text-white'}`}>
            DESIGN MU
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-sm font-medium tracking-widest transition-all duration-300 relative pb-1 overflow-hidden group ${
                isSolid ? 'text-gray-600 hover:text-black' : 'text-gray-200 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-current transition-transform duration-300 ${activeSection === link.id ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'}`}></span>
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 transition-all ${isSolid ? 'bg-black' : 'bg-white'}`}></div>
          <div className={`w-6 h-0.5 transition-all ${isSolid ? 'bg-black' : 'bg-white'}`}></div>
          <div className={`w-6 h-0.5 transition-all ${isSolid ? 'bg-black' : 'bg-white'}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black text-white transition-transform duration-500 md:hidden z-[60] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full items-center justify-center space-y-8">
           <button 
            className="absolute top-8 right-8 text-4xl font-light"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            &times;
          </button>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`text-2xl font-light tracking-[0.3em] ${activeSection === link.id ? 'text-white font-bold' : 'text-gray-500'}`}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
