
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
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Slider */}
      {HERO_IMAGES.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out z-0 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            src={img} 
            alt={`Slide ${index}`} 
            className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${
              index === currentSlide ? 'scale-115' : 'scale-100'
            }`}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="inline-block overflow-hidden mb-12">
          <p className="font-eng text-[10px] md:text-xs font-light tracking-[1em] translate-y-full animate-[slideUp_1s_ease-out_0.5s_forwards] uppercase text-white/50">
            Premium Interior Solution
          </p>
        </div>
        
        <div className="flex flex-col gap-4 md:gap-6 mb-20">
          <div className="overflow-hidden">
            <h2 className="font-eng text-2xl md:text-5xl lg:text-6xl font-bold tracking-[0.4em] leading-tight uppercase">
              <span className="block translate-y-full animate-[slideUp_1.2s_cubic-bezier(0.2,1,0.3,1)_0.8s_forwards]">
                Beyond Design
              </span>
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="font-eng text-2xl md:text-5xl lg:text-6xl font-bold tracking-[0.4em] leading-tight uppercase">
              <span className="block translate-y-full animate-[slideUp_1.2s_cubic-bezier(0.2,1,0.3,1)_1.0s_forwards]">
                Make Up Your Value
              </span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 opacity-0 animate-[fadeIn_1.5s_ease-out_2.0s_forwards]">
          <button 
            onClick={onPortfolio}
            className="group relative inline-flex items-center justify-center min-w-[200px] border border-white/20 px-10 py-5 text-[10px] tracking-[0.6em] hover:bg-white hover:text-black transition-all duration-700 overflow-hidden font-eng"
          >
            <span className="relative z-10">PORTFOLIO</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>

          <button 
            onClick={onContact}
            className="group relative inline-flex items-center justify-center min-w-[200px] border border-white/20 px-10 py-5 text-[10px] tracking-[0.6em] hover:bg-white hover:text-black transition-all duration-700 overflow-hidden font-eng"
          >
            <span className="relative z-10">CONTACT</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </div>
      </div>

      {/* Slide Indicators - Minimalist style */}
      <div className="absolute bottom-16 left-12 z-30 hidden md:flex flex-col gap-6">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group flex items-center gap-4 outline-none"
          >
            <div className={`h-[1px] transition-all duration-700 ${
              index === currentSlide ? 'w-12 bg-white' : 'w-4 bg-white/20 group-hover:w-8 group-hover:bg-white/40'
            }`} />
            <span className={`font-eng text-[9px] tracking-widest transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
            }`}>
              0{index + 1}
            </span>
          </button>
        ))}
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(110%); }
          to { transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
