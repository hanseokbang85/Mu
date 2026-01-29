
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Philosophy</h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
              "Beyond Design, Make Up Your Value"<br />
              <span className="text-sm text-gray-400">(디자인 그 이상, 당신의 가치를 담다.)</span>
            </p>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                디자인뮤는 단순한 공간의 미적 완성을 넘어, 그 공간을 사용하는 사람의 가치와 본질을 탐구합니다. 
                우리는 매 프로젝트마다 고유한 아이덴티티를 발견하고, 이를 현대적인 감각으로 풀어내는 전문가 그룹입니다.
              </p>
              <p>
                공간은 삶의 질을 결정하는 가장 중요한 요소 중 하나입니다. 
                우리는 고객과의 긴밀한 소통을 통해 사용자의 라이프스타일과 비즈니스 목표에 최적화된 최상의 결과물을 제안합니다.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold mb-2">15+</p>
                <p className="text-xs text-gray-500 tracking-widest uppercase">Years Exp</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">300+</p>
                <p className="text-xs text-gray-500 tracking-widest uppercase">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">12</p>
                <p className="text-xs text-gray-500 tracking-widest uppercase">Awards</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556912177-c54030775a33?auto=format&fit=crop&q=80&w=1200" 
                alt="Studio Working" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-black text-white p-8 hidden md:block max-w-xs">
              <p className="text-lg font-light leading-relaxed italic">
                "We don't just design spaces; we design experiences that elevate the human spirit."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
