import React from 'react';
import { Leaf, Recycle, Compass, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/content';

export const ImpactPillars: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].impact;

  return (
    <section id="sostenibilidad" className="relative w-full py-28 px-6 sm:px-12 xl:px-20 bg-gradient-to-b from-[#040806] via-[#071710] to-[#040806] border-t border-bacx-border/20 overflow-hidden select-none">
      {/* Halo de luz esmeralda de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-bacx-neon-green/5 blur-[160px] pointer-events-none" />

      <div className="w-full relative z-10">
        {/* Cabecera */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-4 h-4 text-bacx-neon-green" />
            <span className="font-mono text-xs font-bold tracking-widest text-bacx-mint uppercase">
              {t.tag}
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-bacx-text-white tracking-tight uppercase leading-[1.1]">
            {t.title}
          </h2>

          <p className="font-sans text-sm sm:text-base md:text-lg text-bacx-text-muted mt-5 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Grid de 3 Acciones Concretas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Acción 1 */}
          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-bacx-surface/50 border border-bacx-border/30 hover:border-bacx-neon-green/40 transition-all duration-300 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-[#0e2a1d] border border-bacx-border/40 flex items-center justify-center text-bacx-neon-green">
              <Recycle className="w-6 h-6" />
            </div>

            <h3 className="font-display font-black text-2xl text-bacx-text-white mt-2">
              {t.p1Title}
            </h3>

            <p className="font-sans text-xs sm:text-sm text-bacx-text-muted leading-relaxed">
              {t.p1Desc}
            </p>

            <div className="pt-4 border-t border-bacx-border/20 mt-auto">
              <span className="font-mono text-[11px] font-bold text-bacx-mint uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-bacx-neon-green" />
                {t.p1Badge}
              </span>
            </div>
          </div>

          {/* Acción 2 */}
          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-bacx-surface/50 border border-bacx-border/30 hover:border-bacx-mint/40 transition-all duration-300 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-[#0e2a1d] border border-bacx-border/40 flex items-center justify-center text-bacx-mint">
              <Compass className="w-6 h-6" />
            </div>

            <h3 className="font-display font-black text-2xl text-bacx-text-white mt-2">
              {t.p2Title}
            </h3>

            <p className="font-sans text-xs sm:text-sm text-bacx-text-muted leading-relaxed">
              {t.p2Desc}
            </p>

            <div className="pt-4 border-t border-bacx-border/20 mt-auto">
              <span className="font-mono text-[11px] font-bold text-bacx-mint uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-bacx-neon-green" />
                {t.p2Badge}
              </span>
            </div>
          </div>

          {/* Acción 3 */}
          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-bacx-surface/50 border border-bacx-border/30 hover:border-bacx-electric-lime/40 transition-all duration-300 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-[#0e2a1d] border border-bacx-border/40 flex items-center justify-center text-bacx-electric-lime">
              <Leaf className="w-6 h-6" />
            </div>

            <h3 className="font-display font-black text-2xl text-bacx-text-white mt-2">
              {t.p3Title}
            </h3>

            <p className="font-sans text-xs sm:text-sm text-bacx-text-muted leading-relaxed">
              {t.p3Desc}
            </p>

            <div className="pt-4 border-t border-bacx-border/20 mt-auto">
              <span className="font-mono text-[11px] font-bold text-bacx-mint uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-bacx-neon-green" />
                {t.p3Badge}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
