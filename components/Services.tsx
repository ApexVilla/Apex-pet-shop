import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Heart, Sparkles, Bath, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Bath className="w-8 h-8" />,
    title: 'Banho & Tosa',
    description: 'Limpeza profunda com produtos de alta performance e finalização detalhada.',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800',
    tags: ['Relaxante', 'Premium']
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Tosa Higiênica',
    description: 'Manutenção essencial para a saúde e higiene do seu pet em áreas críticas.',
    image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=800',
    tags: ['Saúde', 'Higiene']
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: 'Tosa na Tesoura',
    description: 'Estética personalizada realizada por especialistas para um acabamento impecável.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
    tags: ['Artesanal', 'Exclusivo']
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Estética Animal',
    description: 'Hidratação, cardação e tratamentos específicos para cada tipo de pelagem.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
    tags: ['Beleza', 'Spa']
  }
];

const Services: React.FC = () => {
  return (
    <section className="bg-white py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-pet-orange font-bold tracking-[0.3em] uppercase text-sm mb-4"
          >
            Nossos Especialistas
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl font-display font-black text-zinc-900 mb-8 tracking-tighter uppercase"
          >
            Cuidado <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">Profissional</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed"
          >
            Transformamos o visual do seu pet com as melhores técnicas de corte e produtos de primeira linha.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-zinc-50 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-zinc-200 transition-all duration-500"
            >
              <div className="h-72 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-2xl text-white border border-white/20">
                  {service.icon}
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="bg-pet-green text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-black text-zinc-900 mb-4 uppercase tracking-tight">{service.title}</h4>
                <p className="text-zinc-500 text-sm mb-8 leading-relaxed font-medium">{service.description}</p>
                <a
                  href={`https://wa.me/5562982122201?text=Olá! Gostaria de agendar o serviço de ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-zinc-900 text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest group-hover:bg-pet-orange transition-colors"
                >
                  Agendar
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
