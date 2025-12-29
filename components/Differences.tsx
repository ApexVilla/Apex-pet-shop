import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Clock, HeartHandshake } from 'lucide-react';

const diffs = [
  {
    icon: <Star size={32} />,
    title: '5.0 no Google',
    desc: 'Excelência total no St. Faicalville.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10'
  },
  {
    icon: <HeartHandshake size={32} />,
    title: 'Especialistas',
    desc: 'Amor e técnica em cada detalhe.',
    color: 'text-pet-green',
    bg: 'bg-pet-green/10'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Higiene Total',
    desc: 'Ambiente seguro e desinfetado.',
    color: 'text-pet-orange',
    bg: 'bg-pet-orange/10'
  },
  {
    icon: <Clock size={32} />,
    title: 'Aberto 24h',
    desc: 'Sempre disponíveis para você.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  }
];

const Differences: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-100 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {diffs.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center text-center group"
          >
            <div className={`w-20 h-20 ${item.bg} ${item.color} rounded-[2rem] flex items-center justify-center mb-8 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
              {item.icon}
            </div>
            <h4 className="text-xl font-black text-zinc-900 mb-3 tracking-tighter uppercase">{item.title}</h4>
            <p className="text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Differences;
