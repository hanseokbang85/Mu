
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
          alt="Main Hero Background" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h2 className="text-lg md:text-xl font-light tracking-[0.5em] mb-4 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
          DESIGN MU
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
          Beyond Design,<br />
          Make Up Your Value
        </h1>
        <p className="text-lg md:text-xl font-light tracking-wide opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
          디자인 그 이상, 당신의 가치를 담다.
        </p>
        <div className="mt-12 opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards]">
          <a 
            href="#portfolio" 
            className="inline-block border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-all"
          >
            VIEW WORKS
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/50"></div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
