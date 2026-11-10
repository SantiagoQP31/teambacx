import React from 'react';
import { Mail, MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="w-full bg-[#030604] border-t border-bacx-border/30 text-bacx-text-muted select-none">
      {/* Banner Superior de Llamado a Alianzas */}
      <div className="border-b border-bacx-border/20 bg-gradient-to-r from-bacx-surface via-[#0a1a13] to-bacx-surface py-16 px-6 sm:px-12 xl:px-20">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <HeartHandshake className="w-4 h-4 text-bacx-neon-green" />
              <span className="font-mono text-xs font-bold tracking-widest text-bacx-mint uppercase">
                {t.bannerTag}
              </span>
            </div>
            <h3 className="font-display font-black text-2xl md:text-4xl text-bacx-text-white tracking-tight leading-tight">
              {t.bannerTitle}
            </h3>
            <p className="font-sans text-xs md:text-sm text-bacx-text-muted mt-2 leading-relaxed">
              {t.bannerDesc}
            </p>
          </div>

          <a
            href="#alianzas"
            className="group flex-shrink-0 inline-flex items-center gap-2 bg-bacx-neon-green hover:bg-bacx-mint text-bacx-bg-deep font-sans font-black text-xs md:text-sm tracking-wider px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_25px_rgba(24,232,136,0.3)]"
          >
            <span>{t.bannerBtn}</span>
          </a>
        </div>
      </div>

      {/* Grid Principal de 4 Columnas */}
      <div className="w-full py-16 px-6 sm:px-12 xl:px-20 grid grid-cols-1 md:grid-cols-4 gap-12 text-xs">
        {/* Columna 1: Identidad BACX */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src="/images/emblem.png" alt="BACX Emblem" className="w-8 h-8 object-contain" />
            <span className="font-display font-black text-lg tracking-wider text-bacx-text-white">
              TEAM <span className="text-bacx-mint">BACX</span>
            </span>
          </div>

          <p className="text-bacx-text-muted leading-relaxed font-sans">
            {t.brandDesc}
          </p>

          <div className="flex items-center gap-2 text-bacx-mint font-mono text-[11px] font-bold mt-2">
            <ShieldCheck className="w-4 h-4 text-bacx-neon-green" />
            <span>{t.legalBadge}</span>
          </div>
        </div>

        {/* Columna 2: Pilares Deportivos */}
        <div className="flex flex-col gap-3 font-sans">
          <h4 className="font-mono text-xs font-bold tracking-widest text-bacx-text-white uppercase mb-1">
            {t.colSports}
          </h4>
          <a href="#equipo" className="hover:text-bacx-mint transition-colors">{t.linkSemillero}</a>
          <a href="#historia" className="hover:text-bacx-mint transition-colors">{t.linkParidad}</a>
          <a href="#equipo" className="hover:text-bacx-mint transition-colors">{t.linkAltoRend}</a>
          <a href="#equipo" className="hover:text-bacx-mint transition-colors">{t.linkCalendario}</a>
        </div>

        {/* Columna 3: Sostenibilidad & Empresa */}
        <div className="flex flex-col gap-3 font-sans">
          <h4 className="font-mono text-xs font-bold tracking-widest text-bacx-text-white uppercase mb-1">
            {t.colAlliances}
          </h4>
          <a href="#sostenibilidad" className="hover:text-bacx-mint transition-colors">{t.linkSost}</a>
          <a href="#alianzas" className="hover:text-bacx-mint transition-colors">{t.linkTrib}</a>
          <a href="/cargas" className="text-bacx-neon-green hover:underline font-bold transition-colors">{t.linkCargas}</a>
          <a href="#alianzas" className="hover:text-bacx-mint transition-colors">{t.linkRSE}</a>
          <a href="#alianzas" className="hover:text-bacx-mint transition-colors">{t.linkGobierno}</a>
        </div>

        {/* Columna 4: Sede y Ubicación */}
        <div className="flex flex-col gap-3 font-sans">
          <h4 className="font-mono text-xs font-bold tracking-widest text-bacx-text-white uppercase mb-1">
            {t.colContact}
          </h4>
          
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-bacx-mint flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-bacx-text-white font-medium">{t.locTitle}</p>
              <p className="text-bacx-text-dim text-[11px]">{t.locSub}</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 mt-2">
            <Mail className="w-4 h-4 text-bacx-mint flex-shrink-0" />
            <span className="text-bacx-text-muted hover:text-bacx-mint transition-colors cursor-pointer">
              alianzas@teambacx.com
            </span>
          </div>

          <div className="pt-2">
            <span className="inline-block bg-[#07130e] border border-bacx-border/30 px-3 py-1.5 rounded text-[10px] font-mono text-bacx-neon-green">
              GPS: 4°35'56"N 74°04'51"W
            </span>
          </div>
        </div>
      </div>

      {/* Barra Inferior de Derechos */}
      <div className="border-t border-bacx-border/20 py-6 px-6 sm:px-12 xl:px-20 bg-black/40">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-bacx-text-dim">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-bacx-neon-green" />
            <span>{t.copy}</span>
          </div>

          <div className="flex items-center gap-6">
            <span>{t.tagline}</span>
            <span>TEMPORADA 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
