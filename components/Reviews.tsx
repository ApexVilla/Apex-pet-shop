import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Ana Paula',
    text: 'O melhor atendimento que já tive em Goiânia. Minha cachorrinha voltou cheirosa e muito calma. A equipe é super atenciosa!',
    avatar: 'https://i.pravatar.cc/150?u=ana'
  },
  {
    name: 'Marcos Silva',
    text: 'A tosa na tesoura é impecável. Profissionais muito técnicos e cuidadosos. Recomendo demais para quem busca qualidade.',
    avatar: 'https://i.pravatar.cc/150?u=marcos'
  },
  {
    name: 'Juliana Costa',
    text: 'Ambiente super limpo e o fato de ser 24h ajuda muito na minha rotina corrida. O cuidado com os animais é visível. Nota 10!',
    avatar: 'https://i.pravatar.cc/150?u=juju'
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pet-orange/5 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-pet-orange font-bold text-sm tracking-[0.3em] uppercase mb-4"
            >
              Prova Social
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl font-display font-black text-white mb-6 uppercase tracking-tighter"
            >
              Pais de Pet <br /><span className="text-zinc-500">Satisfeitos</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-xl max-w-md leading-relaxed"
            >
              Confiança conquistada com dedicação e amor aos animais.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-sm"
          >
            <div className="text-6xl font-black text-white tracking-tighter">5.0</div>
            <div className="h-12 w-px bg-white/10"></div>
            <div>
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <div className="text-zinc-400 text-sm font-bold uppercase tracking-wider">Média Google</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-900 border border-white/5 p-10 rounded-[2.5rem] hover:bg-zinc-800/50 transition-colors relative group"
            >
              <div className="absolute top-10 right-10 text-white/5 group-hover:text-pet-orange/20 transition-colors">
                <Quote size={80} />
              </div>
              <div className="flex text-pet-orange mb-8 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-zinc-300 text-lg mb-10 leading-relaxed font-medium relative z-10">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full border-2 border-white/10" />
                <div>
                  <span className="font-bold text-white block text-lg">{review.name}</span>
                  <span className="text-zinc-500 text-xs uppercase tracking-wider font-bold">Cliente Verificado</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
