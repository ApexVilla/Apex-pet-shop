import React from 'react';
import { motion } from 'framer-motion';

const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href="https://wa.me/5562982122201"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_40px_rgba(37,211,102,0.4)] flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.912-.001-3.793-.457-5.47-1.328l-6.527 1.736zm6.388-3.693l.363.216c1.463.87 3.155 1.329 4.887 1.33h.001c5.809 0 10.536-4.726 10.538-10.536.001-2.815-1.097-5.462-3.088-7.456-1.991-1.993-4.639-3.091-7.452-3.092-5.811 0-10.537 4.726-10.54 10.538-.001 2.01.523 3.974 1.517 5.722l.236.417-1.006 3.673 3.754-.998zm11.726-7.854c-.3-.15-1.774-.875-2.048-.975-.275-.1-.475-.15-.675.15s-.775.975-.95 1.175-.35.225-.65.075c-.3-.15-1.265-.466-2.41-1.488-.891-.794-1.492-1.775-1.667-2.075-.175-.3-.019-.463.13-.611.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525-.675-1.625-.925-2.225c-.244-.582-.491-.503-.675-.513-.175-.01-.375-.011-.575-.011s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.113 3.227 5.118 4.526.715.309 1.274.494 1.708.632.718.228 1.372.196 1.889.119.576-.086 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
      </svg>
      <span className="absolute right-full mr-4 bg-white text-zinc-900 px-5 py-2.5 rounded-2xl text-sm font-black shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none translate-x-4 group-hover:translate-x-0">
        Agende pelo WhatsApp
      </span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#25D366]"></span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
