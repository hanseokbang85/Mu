
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  return (
    <section id="portfolio" className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight uppercase">Portfolio</h2>
          <div className="w-20 h-1 bg-black"></div>
          <p className="mt-6 text-gray-500 max-w-2xl font-light leading-relaxed">
            디자인뮤는 주거 공간 전문 인테리어 그룹으로서, 거주자의 삶의 방식과 취향을 가장 깊이 있게 탐구합니다. 
            단순한 장식을 넘어 삶의 가치를 높이는 공간의 철학을 만나보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden bg-gray-100 aspect-[4/5] cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                <p className="text-xs tracking-widest mb-2 text-gray-300 uppercase">{project.location}</p>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <div className="w-0 group-hover:w-full h-px bg-white/50 transition-all duration-700"></div>
                <p className="mt-4 text-xs font-light tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  View Gallery +
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Gallery View (Existing logic) */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] bg-white flex flex-col animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div className="flex justify-between items-center p-6 md:p-10">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">{selectedProject.title}</h3>
              <p className="text-gray-400 text-sm tracking-widest uppercase mt-1">{selectedProject.location}</p>
            </div>
            <button 
              className="p-2 hover:rotate-90 transition-transform duration-300"
              onClick={() => setSelectedProject(null)}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div 
            className="flex-1 overflow-y-auto px-6 md:px-10 pb-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
                <div className="lg:col-span-1 space-y-6">
                  <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Project Description</h4>
                  <p className="text-gray-700 leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                </div>
                <div className="lg:col-span-3 space-y-8">
                  <div className="aspect-video bg-gray-50 overflow-hidden">
                    <img 
                      src={selectedProject.imageUrl} 
                      alt={`${selectedProject.title} main`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {selectedProject.subImages.map((img, idx) => (
                      <div key={idx} className="aspect-square bg-gray-50 overflow-hidden">
                        <img 
                          src={img} 
                          alt={`${selectedProject.title} detail ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
