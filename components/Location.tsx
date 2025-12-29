import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section className="border-t border-zinc-100 bg-white py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pet-orange font-bold text-sm tracking-[0.3em] uppercase mb-4"
            >
              Onde Estamos
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl font-display font-black text-zinc-900 mb-12 leading-[1.1] uppercase tracking-tight"
            >
              Visite nossa <br /> unidade no <span className="text-pet-orange">Faicalville</span>
            </motion.h3>

            <div className="space-y-10 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-6 group"
              >
                <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-900 group-hover:bg-pet-orange group-hover:text-white transition-colors shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-black text-xl text-zinc-900 mb-1 uppercase tracking-tight">Endereço</h4>
                  <p className="text-zinc-500 font-medium leading-relaxed">Rua Pres. Rodrigues Alves – St. Faicalville,<br /> Goiânia – GO, 74350-650</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-6 group"
              >
                <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-900 group-hover:bg-pet-orange group-hover:text-white transition-colors shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="font-black text-xl text-zinc-900 mb-1 uppercase tracking-tight">Horário</h4>
                  <p className="text-zinc-500 font-medium">Aberto 24 Horas - Todos os dias</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-6 group"
              >
                <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-900 group-hover:bg-pet-orange group-hover:text-white transition-colors shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-black text-xl text-zinc-900 mb-1 uppercase tracking-tight">Contato</h4>
                  <p className="text-zinc-500 font-medium">(62) 98212-2201</p>
                </div>
              </motion.div>
            </div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              href="https://wa.me/5562982122201"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-zinc-900 hover:bg-pet-orange text-white px-10 py-6 rounded-2xl font-black text-lg flex items-center justify-center gap-4 transition-all shadow-xl uppercase tracking-widest"
            >
              Agendar Visita
              <ArrowRight />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="h-[500px] lg:h-[700px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white relative z-0"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5702202611846!2d-49.3101689!3d-16.7483696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef749be88a2e1%3A0xe96c4d7e97495098!2sR.%20Pres.%20Rodrigues%20Alves%20-%20St.%20Faicalville%2C%20Goi%C3%A2nia%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1715632124567!5m2!1spt-BR!2sbr"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
