import React from 'react';
import { Target, Users, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/content';

export const Manifesto: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].manifesto;

  return (
    <section id="historia" className="relative w-full bg-[#040806] border-t border-bacx-border/20 overflow-hidden select-none">
      {/* Grid Asimétrico 60/40 de Borde a Borde */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[680px]">
        {/* Lado Izquierdo: Fotografía Editorial que Toca el Borde de la Pantalla (Cols 1-6) */}
        <div className="lg:col-span-6 relative min-h-[420px] lg:min-h-[700px] overflow-hidden group">
          <img
            src="/images/cyclist-studio.png"
            alt="Liderazgo Team BACX"
            className="absolute inset-0 w-full h-full object-cover object-center filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040806] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#040806] opacity-90" />

          {/* Tarjeta de Liderazgo Flotante en la Esquina */}
          <div className="absolute bottom-8 left-8 right-8 lg:right-auto max-w-md bg-[#071710]/90 backdrop-blur-xl border border-bacx-border/40 p-6 rounded-2xl shadow-2xl">
            <span className="font-mono text-[10px] text-bacx-neon-green uppercase font-bold tracking-widest block mb-1">
              {t.founderTag}
            </span>
            <p className="font-display font-black text-xl text-bacx-text-white">
              {t.founderTitle}
            </p>
            <p className="font-sans text-xs text-bacx-text-muted mt-2 leading-relaxed">
              {t.founderDesc}
            </p>
          </div>
        </div>

        {/* Lado Derecho: Narrativa Editorial y Compromisos (Cols 7-12) */}
        <div className="lg:col-span-6 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-16 lg:py-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-bacx-neon-green" />
            <span className="font-mono text-xs font-bold tracking-widest text-bacx-mint uppercase">
              {t.tag}
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-bacx-text-white tracking-tight uppercase leading-[1.1] mb-6">
            {t.title}
          </h2>

          <div className="w-16 h-0.5 bg-bacx-neon-green mb-6" />

          <p className="font-sans text-sm sm:text-base text-bacx-text-muted leading-relaxed mb-4">
            {t.p1}
          </p>

          <p className="font-sans text-sm sm:text-base text-bacx-text-muted leading-relaxed mb-8">
            {t.p2}
          </p>

          {/* 3 Pilares en formato limpio */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-bacx-border/30">
            <div className="flex flex-col gap-2">
              <div className="w-9 h-9 rounded-lg bg-bacx-surface border border-bacx-border/40 flex items-center justify-center text-bacx-neon-green">
                <Target className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-base text-bacx-text-white">{t.pillar1Title}</h4>
              <p className="font-sans text-xs text-bacx-text-dim leading-relaxed">
                {t.pillar1Desc}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-9 h-9 rounded-lg bg-bacx-surface border border-bacx-border/40 flex items-center justify-center text-bacx-mint">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-base text-bacx-text-white">{t.pillar2Title}</h4>
              <p className="font-sans text-xs text-bacx-text-dim leading-relaxed">
                {t.pillar2Desc}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-9 h-9 rounded-lg bg-bacx-surface border border-bacx-border/40 flex items-center justify-center text-bacx-text-white">
                <Award className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-base text-bacx-text-white">{t.pillar3Title}</h4>
              <p className="font-sans text-xs text-bacx-text-dim leading-relaxed">
                {t.pillar3Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
