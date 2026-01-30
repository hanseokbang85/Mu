
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onPortfolio: () => void;
  onContact: () => void;
}

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=90&w=2400",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=90&w=2400",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=90&w=2400",
  "https://images.unsplash.com/photo-1600566753190-17f0bbc564ce?auto=format&fit=crop&q=90&w=2400"
];

const Hero: React.FC<HeroProps> = ({ onPortfolio, onContact }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-start justify-center overflow-hidden bg-black text-white">
      {/* Background Slider */}
      {HERO_IMAGES.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out z-0 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img 
            src={img} 
            alt={`Slide ${index}`} 
            className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${
              index === currentSlide ? 'scale-115' : 'scale-100'
            }`}
          />
        </div>
      ))}

      {/* Content - Positioned at lower 1/3 */}
      <div className="relative z-20 container mx-auto px-6 pt-[65vh] text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 opacity-0 animate-[fadeInSlideUp_2s_ease-out_0.5s_forwards]">
          <button 
            onClick={onPortfolio}
            className="group relative inline-flex items-center justify-center min-w-[220px] border border-white/30 px-10 py-5 text-[10px] tracking-[0.8em] hover:border-white transition-all duration-700 overflow-hidden font-eng"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">PORTFOLIO</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </button>

          <button 
            onClick={onContact}
            className="group relative inline-flex items-center justify-center min-w-[220px] border border-white/30 px-10 py-5 text-[10px] tracking-[0.8em] hover:border-white transition-all duration-700 overflow-hidden font-eng"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">CONTACT</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </button>
        </div>
      </div>

      {/* Slide Indicators - Minimalist style */}
      <div className="absolute bottom-12 left-12 z-30 hidden md:flex flex-col gap-5">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group flex items-center gap-4 outline-none"
          >
            <div className={`h-[1px] transition-all duration-700 ${
              index === currentSlide ? 'w-10 bg-white' : 'w-3 bg-white/20 group-hover:w-6 group-hover:bg-white/40'
            }`} />
            <span className={`font-eng text-[8px] tracking-widest transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
            }`}>
              0{index + 1}
            </span>
          </button>
        ))}
      </div>

      {/* Minimal decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-white/20 to-transparent z-20"></div>

      <style>{`
        @keyframes fadeInSlideUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
