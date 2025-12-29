import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import clsx from 'clsx';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = ['Início', 'Serviços', 'Veo', 'Avaliações', 'Contato'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg py-3 border-b border-white/10" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollTo('inicio')}>
          <div className="flex flex-col">
            <span className={clsx("font-display font-black text-2xl tracking-tighter leading-none transition-colors", isScrolled ? "text-white" : "text-white")}>
              FORTALEZA <span className="text-pet-orange group-hover:neon-glow-orange transition-all duration-300">PET</span>
            </span>
            <span className="text-pet-green text-[10px] font-bold uppercase tracking-[0.2em] neon-glow-green opacity-90 group-hover:opacity-100">
              Estética Animal
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase().replace('í', 'i').replace('ç', 'c').replace('õ', 'o'))}
              className="font-bold text-sm uppercase tracking-widest text-zinc-300 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pet-orange transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5562982122201"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex bg-pet-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm uppercase shadow-lg shadow-orange-500/20 active:scale-95 transition-all items-center gap-2"
          >
            <MessageCircle size={18} />
            <span className="hidden lg:inline">Agendar</span>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase().replace('í', 'i').replace('ç', 'c').replace('õ', 'o'))}
                  className="block w-full text-left text-2xl font-black text-white hover:text-pet-orange transition-colors uppercase tracking-tight py-2 border-b border-white/5 last:border-0"
                >
                  {item}
                </button>
              ))}
              <a
                href="https://wa.me/5562982122201"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full justify-center bg-pet-orange text-white py-4 rounded-xl font-black text-lg uppercase shadow-xl"
              >
                Agendar Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
