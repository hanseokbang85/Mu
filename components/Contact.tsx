
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
              <p className="text-gray-500 mb-12">
                견적 문의는 언제든 환영합니다. 디자인뮤와 함께 당신의 가치를 실현하세요.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 mb-2 uppercase">Address</h4>
                  <p className="text-gray-800">경기도 의왕시 성고개로53, 에이스청계타워 722호</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 mb-2 uppercase">Contact</h4>
                  <p className="text-gray-800">T. 010-9878-8907</p>
                  <p className="text-gray-800">E. hanseok122@naver.com</p>
                  <a 
                    href="https://www.instagram.com/design_mu_official_/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-black hover:underline transition-all flex items-center gap-1 mt-1"
                  >
                    IG. @design_mu_official_
                  </a>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 mb-2 uppercase">Hours</h4>
                  <p className="text-gray-800">Mon - Fri / 10:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold tracking-widest text-gray-400 mb-2 uppercase">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-50 border-transparent focus:border-black focus:bg-white border-b-2 p-4 transition-all outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest text-gray-400 mb-2 uppercase">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-50 border-transparent focus:border-black focus:bg-white border-b-2 p-4 transition-all outline-none"
                    placeholder="Email Address"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold tracking-widest text-gray-400 mb-2 uppercase">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-50 border-transparent focus:border-black focus:bg-white border-b-2 p-4 transition-all outline-none"
                    placeholder="Project Title / Category"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold tracking-widest text-gray-400 mb-2 uppercase">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-gray-50 border-transparent focus:border-black focus:bg-white border-b-2 p-4 transition-all outline-none resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full bg-black text-white py-4 font-bold tracking-[0.2em] hover:bg-gray-800 transition-colors uppercase">
                    Send Message
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
