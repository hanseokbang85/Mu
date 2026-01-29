
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-tight">Contact</h2>
              <p className="text-gray-500 mb-12 font-light">
                당신의 공간에 가치를 더하는 여정, 디자인뮤가 함께합니다. 견적 및 상담 문의는 아래 채널을 이용해 주세요.
              </p>
              
              <div className="space-y-10">
                <div>
                  <h4 className="text-xs font-bold tracking-[0.3em] text-gray-400 mb-3 uppercase">Address</h4>
                  <p className="text-gray-800 font-light">경기도 의왕시 성고개로53, 에이스청계타워 722호</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-[0.3em] text-gray-400 mb-3 uppercase">Direct Line</h4>
                  <p className="text-gray-800 font-light">T. 010-9878-8907</p>
                  <p className="text-gray-800 font-light">E. hanseok122@naver.com</p>
                  <a 
                    href="https://www.instagram.com/design_mu_official_/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-black transition-all flex items-center gap-1 mt-2 font-medium"
                  >
                    IG. @design_mu_official_ →
                  </a>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-[0.3em] text-gray-400 mb-3 uppercase">Office Hours</h4>
                  <p className="text-gray-800 font-light">Mon - Fri / 10:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-50 border-transparent focus:border-black focus:bg-white border-b p-4 transition-all outline-none font-light"
                    placeholder="성함을 입력해 주세요"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-50 border-transparent focus:border-black focus:bg-white border-b p-4 transition-all outline-none font-light"
                    placeholder="답변 받으실 이메일 주소"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-50 border-transparent focus:border-black focus:bg-white border-b p-4 transition-all outline-none font-light"
                    placeholder="문의 유형 (주거 인테리어, 오피스 등)"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full bg-gray-50 border-transparent focus:border-black focus:bg-white border-b p-4 transition-all outline-none resize-none font-light"
                    placeholder="문의 내용을 상세히 작성해 주시면 빠른 상담이 가능합니다."
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="w-full bg-black text-white py-5 font-bold tracking-[0.3em] hover:bg-gray-800 transition-all uppercase text-sm">
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
