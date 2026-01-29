
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('HOME');

  // 섹션이 바뀔 때마다 최상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'HOME':
        return <Hero onViewWorks={() => setActiveSection('PORTFOLIO')} />;
      case 'PORTFOLIO':
        return <Portfolio />;
      case 'ABOUT':
        return <About />;
      case 'CONTACT':
        return <Contact />;
      default:
        return <Hero onViewWorks={() => setActiveSection('PORTFOLIO')} />;
    }
  };

  return (
    <div className="antialiased min-h-screen flex flex-col">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
