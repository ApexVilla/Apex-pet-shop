import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {

  const scrollToServices = () => {
    const el = document.getElementById('servicos');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-black">
      {/* Dynamic Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop"
            alt="Golden Retriever feliz"
            className="w-full h-full object-cover opacity-70"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 text-pet-green px-4 py-2 rounded-full text-xs font-bold mb-8 uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-pet-green animate-pulse"></span>
            Aberto 24 Horas em Goiânia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl sm:text-8xl lg:text-9xl font-display font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase"
          >
            Amor em <br />
            <span
              className="inline-block"
              style={{
                backgroundImage: 'linear-gradient(to right, #f94c10, #fb923c)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Cada Detalhe
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl text-zinc-400 mb-12 leading-relaxed font-medium max-w-xl"
          >
            A referência premium no Setor Faicalville. Estética animal com excelência, segurança e o carinho que seu pet merece.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a
              href="https://wa.me/5562982122201"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-pet-orange hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-[0_20px_40px_-10px_rgba(249,76,16,0.3)] uppercase tracking-wider flex items-center justify-center gap-3"
            >
              Agendar Agora
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={scrollToServices}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 text-white backdrop-blur-md px-10 py-5 rounded-2xl font-bold text-lg transition-all uppercase tracking-wider"
            >
              Conhecer Serviços
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 flex items-center gap-8 border-t border-white/10 pt-8"
          >
            <div className="flex -space-x-5">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-14 h-14 rounded-full border-4 border-black overflow-hidden relative z-0 hover:z-10 transition-all hover:scale-110">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-full h-full object-cover" alt="Reviewer" />
                </div>
              ))}
            </div>
            <div className="text-white">
              <div className="flex text-pet-green mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm font-bold text-zinc-400 uppercase tracking-wider"><span className="text-white">4.9/5</span> de Avaliações</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 hidden 2xl:block"
      >
        <div className="bg-zinc-900/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl rotate-3 max-w-xs">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-pet-green/20 rounded-full flex items-center justify-center text-pet-green">
              <Star fill="currentColor" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">Qualidade Premium</p>
              <p className="text-zinc-500 text-xs uppercase tracking-wider">Garantia de Satisfação</p>
            </div>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Utilizamos apenas os melhores produtos do mercado para garantir a saúde e beleza do seu pet.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
