
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Category } from '../types';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('ALL');

  const categories: Category[] = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'OFFICE'];

  const filteredProjects = activeCategory === 'ALL' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Our Portfolio</h2>
            <div className="w-20 h-1 bg-black"></div>
          </div>
          
          <div className="flex flex-wrap gap-4 text-xs font-bold tracking-widest">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 border transition-all ${
                  activeCategory === cat 
                    ? 'bg-black text-white border-black' 
                    : 'text-gray-400 border-gray-100 hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden bg-gray-100 aspect-[4/5]">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                <p className="text-xs tracking-widest mb-2 text-gray-300">{project.category} / {project.location}</p>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <div className="w-0 group-hover:w-full h-px bg-white/50 transition-all duration-700"></div>
                <p className="mt-4 text-sm font-light leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
