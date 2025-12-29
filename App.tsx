import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Differences from './components/Differences';
import Reviews from './components/Reviews';
import VeoSection from './components/VeoSection';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-pet-orange selection:text-white">
      <Header isScrolled={isScrolled} />

      <main>
        <div id="inicio">
          <Hero />
        </div>

        <div id="servicos">
          <Services />
        </div>

        <div className="bg-white">
          <Differences />
        </div>

        <div id="veo" className="bg-zinc-950">
          <VeoSection />
        </div>

        <div id="avaliacoes">
          <Reviews />
        </div>

        <div id="contato">
          <Location />
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
