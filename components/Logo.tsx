
import React from 'react';

const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ size = 'md' }) => {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64'
  };

  const scale = size === 'sm' ? 0.5 : size === 'md' ? 1 : size === 'lg' ? 2 : 2.8;

  return (
    <div className={`${sizes[size]} bg-black rounded-full flex flex-col items-center justify-center relative overflow-hidden shadow-2xl border border-zinc-900 select-none pointer-events-none`}>
      
      {/* Background Decorative Paws (Orange Outlines) - Fiel à foto */}
      <div className="absolute top-[12%] left-[-5%] opacity-60 rotate-[25deg]" style={{ transform: `scale(${0.5 * scale}) rotate(25deg)` }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f94c10" strokeWidth="2.5">
          <path d="M12 18C10 18 8 16.5 8 14.5C8 12.5 10 11 12 11C14 11 16 12.5 16 14.5C16 16.5 14 18 12 18Z" />
          <circle cx="7.5" cy="8.5" r="2.2" />
          <circle cx="12" cy="6" r="2.2" />
          <circle cx="16.5" cy="8.5" r="2.2" />
        </svg>
      </div>

      <div className="absolute bottom-[8%] right-[-5%] opacity-60 rotate-[-15deg]" style={{ transform: `scale(${0.6 * scale}) rotate(-15deg)` }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f94c10" strokeWidth="2.5">
          <path d="M12 18C10 18 8 16.5 8 14.5C8 12.5 10 11 12 11C14 11 16 12.5 16 14.5C16 16.5 14 18 12 18Z" />
          <circle cx="7.5" cy="8.5" r="2.2" />
          <circle cx="12" cy="6" r="2.2" />
          <circle cx="16.5" cy="8.5" r="2.2" />
        </svg>
      </div>

      {/* Dog & Cat Outline - Replicando exatamente a silhueta da foto */}
      <div className="z-10" style={{ width: 65 * scale, height: 48 * scale }}>
        <svg viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cachorro (Maior, atrás) */}
          <path 
            d="M48 68C35 68 28 65 28 50C28 35 32 25 45 15C50 10 58 8 62 12C65 15 63 22 58 25C54 28 53 35 55 45" 
            stroke="#39ff14" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" 
          />
          {/* Orelha caída do cachorro */}
          <path d="M48 18C44 20 42 25 44 30" stroke="#39ff14" strokeWidth="2.8" strokeLinecap="round" />
          
          {/* Gato (Menor, frente) */}
          <path 
            d="M52 68C65 68 70 64 70 50C70 42 66 38 65 30C65 25 60 22 55 25C52 28 52 35 52 45" 
            stroke="#39ff14" strokeWidth="2.8" strokeLinecap="round" 
          />
          {/* Orelhas do gato */}
          <path d="M54 32L57 24L61 31" stroke="#39ff14" strokeWidth="2" strokeLinecap="round" />
          
          {/* Cauda do gato enrolada */}
          <path d="M70 50C75 50 82 55 82 62C82 66 78 68 72 66" stroke="#39ff14" strokeWidth="2.8" strokeLinecap="round" />
          
          {/* Detalhe da pata do cachorro/base */}
          <path d="M28 50C20 50 15 55 15 62C15 66 20 68 28 67" stroke="#39ff14" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      </div>

      {/* Container de Texto Centralizado */}
      <div className="flex flex-col items-center z-10" style={{ marginTop: -2 * scale }}>
        {/* FORTALEZA - Estilo Bubbly Arredondado */}
        <div className="font-logo font-black text-pet-orange uppercase tracking-tight leading-none" style={{ fontSize: 11 * scale }}>
          FORTALEZA
        </div>
        
        {/* 'pet' com a pata branca no 'p' */}
        <div className="flex items-center leading-none" style={{ marginTop: -1 * scale }}>
          <div className="font-logo font-black text-pet-orange lowercase relative flex items-center" style={{ fontSize: 29 * scale }}>
            <span className="relative inline-block">
              p
              <div className="absolute top-[62%] left-[50%] -translate-x-1/2 -translate-y-1/2" style={{ width: 10 * scale, height: 10 * scale }}>
                <svg viewBox="0 0 24 24" fill="white">
                  <path d="M12 18C10 18 8 16.5 8 14.5C8 12.5 10 11 12 11C14 11 16 12.5 16 14.5C16 16.5 14 18 12 18Z" />
                  <circle cx="7.5" cy="8.5" r="2.2" />
                  <circle cx="12" cy="6" r="2.2" />
                  <circle cx="16.5" cy="8.5" r="2.2" />
                </svg>
              </div>
            </span>
            <span style={{ marginLeft: -1 * scale }}>et</span>
          </div>
        </div>

        {/* Estética Animal em Verde Neon */}
        <div className="font-logo font-bold text-pet-green uppercase leading-none tracking-wide" style={{ fontSize: 9.5 * scale, marginTop: -1 * scale }}>
          Estética Animal
        </div>
      </div>

    </div>
  );
};

export default Logo;
