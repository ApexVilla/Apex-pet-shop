import React from 'react';
import { Instagram, MessageCircle, MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-24 border-t border-white/10 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pet-green/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pet-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex flex-col">
                <span className="font-display font-black text-3xl tracking-tighter leading-none">FORTALEZA <span className="text-pet-orange">PET</span></span>
                <span className="text-pet-green text-sm font-bold uppercase tracking-[0.2em] neon-glow-green">Estética Animal</span>
              </div>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-medium">
              A maior referência em estética animal no Setor Faicalville, Goiânia. Cuidado profissional com amor e segurança 24 horas por dia.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/fortalezarpet.estetica" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 hover:bg-pet-orange transition-all rounded-2xl flex items-center justify-center group border border-white/5 hover:border-pet-orange shadow-lg">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://wa.me/5562982122201" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 hover:bg-pet-green hover:text-black transition-all rounded-2xl flex items-center justify-center group border border-white/5 hover:border-pet-green shadow-lg">
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-white">Navegação</h4>
            <ul className="space-y-4 text-zinc-500 font-medium text-sm">
              <li><a href="#inicio" className="hover:text-pet-orange transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-pet-orange transition-colors"></span> Início</a></li>
              <li><a href="#servicos" className="hover:text-pet-orange transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-pet-orange transition-colors"></span> Serviços</a></li>
              <li><a href="#veo" className="hover:text-pet-orange transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-pet-orange transition-colors"></span> Veo Magic AI</a></li>
              <li><a href="#avaliacoes" className="hover:text-pet-orange transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-pet-orange transition-colors"></span> Avaliações</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-white">Serviços</h4>
            <ul className="space-y-4 text-zinc-500 font-medium text-sm">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pet-green"></span> Banho & Tosa</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pet-green"></span> Tosa na Tesoura</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pet-green"></span> Tosa Higiênica</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pet-green"></span> Estética VIP</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-white">Contato</h4>
            <ul className="space-y-6 text-zinc-400 font-medium text-sm">
              <li className="flex gap-4">
                <MapPin size={20} className="text-pet-orange shrink-0" />
                <span>Rua Pres. Rodrigues Alves – St. Faicalville, Goiânia – GO</span>
              </li>
              <li className="flex gap-4">
                <Phone size={20} className="text-pet-orange shrink-0" />
                <span>(62) 98212-2201</span>
              </li>
              <li className="flex gap-4">
                <Clock size={20} className="text-pet-orange shrink-0" />
                <span className="text-pet-green font-bold uppercase tracking-wider neon-glow-green">Aberto 24 Horas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs font-bold uppercase tracking-wider">
            © 2024 Fortaleza Pet. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-zinc-600 text-xs font-black uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
