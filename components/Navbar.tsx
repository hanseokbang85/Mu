
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'PORTFOLIO', href: '#portfolio' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
            <img 
              src="사이트로고.png" 
              alt="DESIGN MU Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className={`text-xl font-bold tracking-widest transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
            DESIGN MU
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-widest transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-black' : 'text-gray-200 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
          <div className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
          <div className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black text-white transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full items-center justify-center space-y-8">
           <button 
            className="absolute top-8 right-8 text-3xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            &times;
          </button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-light tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
