import React, { useState, useRef } from 'react';
import { GeminiService } from '../services/geminiService';
import { motion } from 'framer-motion';
import { Upload, Video, AlertCircle, Loader2, Sparkles, X, Clapperboard } from 'lucide-react';
import clsx from 'clsx';

const VeoSection: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsGenerating(true);
      setError(null);

      const win = window as any;
      if (!(await win.aistudio.hasSelectedApiKey())) {
        await win.aistudio.openSelectKey();
      }

      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = (reader.result as string).split(',')[1];
        try {
          const url = await GeminiService.generatePetVideo(
            base64,
            "A cute pet moving joyfully, professional studio lighting, 4k cinematic",
            aspectRatio
          );
          setVideoUrl(url);
        } catch (err: any) {
          if (err.message === 'KEY_EXPIRED') {
            const win = window as any;
            await win.aistudio.openSelectKey();
            setError("Houve um problema com a chave. Por favor, tente novamente.");
          } else {
            setError("Ocorreu um erro ao gerar o vídeo. Tente novamente em alguns instantes.");
          }
        } finally {
          setIsGenerating(false);
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error(err);
      setIsGenerating(false);
      setError("Erro ao carregar imagem.");
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-black rounded-[4rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] border border-white/10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Content */}
          <div className="p-10 sm:p-24 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 p-10 opacity-20 pointer-events-none">
              <Sparkles size={200} className="text-pet-green text-stroke" />
            </div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-pet-green/10 text-pet-green px-5 py-2 rounded-full text-xs font-black mb-10 w-fit uppercase tracking-widest border border-pet-green/30"
            >
              <Sparkles size={14} />
              Veo Magic AI
            </motion.div>

            <h2 className="text-5xl sm:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase font-display">
              Dê <span className="text-pet-orange">Vida</span> à <br />Foto do seu Pet
            </h2>

            <p className="text-zinc-400 text-xl mb-12 leading-relaxed font-semibold max-w-md">
              Carregue uma foto e veja o seu melhor amigo em um vídeo cinematográfico gerado por IA.
            </p>

            <div className="flex flex-col gap-8 max-w-md">
              <div className="flex gap-4 p-1 bg-white/5 rounded-2xl border border-white/5">
                <button
                  onClick={() => setAspectRatio('16:9')}
                  className={clsx(
                    "flex-1 py-4 rounded-xl text-xs font-black transition-all uppercase tracking-widest flex items-center justify-center gap-2",
                    aspectRatio === '16:9' ? 'bg-pet-orange text-white shadow-lg' : 'text-zinc-500 hover:text-white'
                  )}
                >
                  <Video size={16} /> Landscape
                </button>
                <button
                  onClick={() => setAspectRatio('9:16')}
                  className={clsx(
                    "flex-1 py-4 rounded-xl text-xs font-black transition-all uppercase tracking-widest flex items-center justify-center gap-2",
                    aspectRatio === '9:16' ? 'bg-pet-orange text-white shadow-lg' : 'text-zinc-500 hover:text-white'
                  )}
                >
                  <Clapperboard size={16} /> Portrait
                </button>
              </div>

              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isGenerating}
                className="bg-white hover:bg-zinc-200 text-black px-12 py-7 rounded-[2rem] font-black text-xl transition-all flex items-center justify-center gap-4 disabled:opacity-50 group shadow-2xl uppercase tracking-widest relative overflow-hidden"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Criando Magia...
                  </>
                ) : (
                  <>
                    <Upload className="relative z-10 group-hover:-translate-y-1 transition-transform" />
                    <span className="relative z-10">Fazer Upload</span>
                    <div className="absolute inset-0 bg-pet-green/0 group-hover:bg-pet-green/20 transition-colors duration-500"></div>
                  </>
                )}
              </button>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                className="hidden"
                accept="image/*"
              />

              <p className="text-zinc-600 text-xs text-center font-bold uppercase tracking-[0.2em]">
                Exclusividade Fortaleza Pet
              </p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 p-6 bg-red-500/10 border border-red-500/20 text-red-400 rounded-3xl text-sm font-bold text-center flex items-center justify-center gap-3"
              >
                <AlertCircle size={20} />
                {error}
              </motion.div>
            )}
          </div>

          {/* Right: Preview/Result */}
          <div className="bg-zinc-900/40 relative flex items-center justify-center min-h-[600px] border-l border-white/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pet-orange/5 via-zinc-900/0 to-zinc-900/0">
            {videoUrl ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full h-full p-10 flex items-center justify-center"
              >
                <div className="relative group">
                  <video
                    src={videoUrl}
                    controls
                    autoPlay
                    loop
                    className={clsx(
                      "shadow-[0_0_80px_rgba(249,76,16,0.2)] rounded-[2rem] border-4 border-zinc-800 bg-black",
                      aspectRatio === '9:16' ? 'h-[600px] w-auto' : 'w-full h-auto max-h-[500px] object-cover'
                    )}
                  />
                  <button
                    onClick={() => setVideoUrl(null)}
                    className="absolute -top-4 -right-4 bg-pet-orange p-3 rounded-full text-white shadow-xl hover:scale-110 transition-transform border-4 border-zinc-950 z-10"
                  >
                    <X size={20} />
                  </button>
                </div>
              </motion.div>
            ) : isGenerating ? (
              <div className="text-center p-16">
                <div className="relative pb-10">
                  <div className="w-24 h-24 border-4 border-white/5 border-t-pet-orange rounded-full animate-spin mx-auto shadow-[0_0_30px_rgba(249,76,16,0.3)]"></div>
                  <div className="absolute inset-0 flex items-center justify-center pt-10">
                    <Sparkles className="text-pet-green animate-pulse" />
                  </div>
                </div>
                <h4 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">Gerando Magia...</h4>
                <p className="text-zinc-500 text-lg max-w-xs mx-auto font-medium">
                  Nossa IA está transformando seu pet em uma estrela de cinema.
                </p>
              </div>
            ) : (
              <div
                className="text-center p-16 group cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="w-40 h-40 bg-zinc-800/50 rounded-[3rem] flex items-center justify-center mx-auto mb-10 text-zinc-600 transition-all group-hover:scale-110 group-hover:bg-pet-orange/10 group-hover:text-pet-orange border-2 border-dashed border-white/10 group-hover:border-pet-orange/30">
                  <Upload size={60} strokeWidth={1} />
                </div>
                <p className="text-zinc-600 text-xl font-black uppercase tracking-widest transition-colors group-hover:text-zinc-300">
                  Escolha uma foto
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VeoSection;
