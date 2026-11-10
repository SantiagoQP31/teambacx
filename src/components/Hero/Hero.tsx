import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/content';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const [activeTab, setActiveTab] = useState<'2026' | 'semillero' | 'competicion' | 'alianzas'>('2026');

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-24 pb-8 px-6 sm:px-12 xl:px-20 bg-gradient-to-br from-[#0c261b] via-[#091e15] to-[#040907] text-bacx-text-white overflow-hidden select-none">
      {/* 0. Halo de luz de estudio cenital */}
      <div className="absolute top-1/4 right-1/4 w-[750px] h-[750px] bg-gradient-radial from-bacx-neon-green/10 via-transparent to-transparent blur-[160px] pointer-events-none" />

      {/* 1. Indicador Vertical del Borde Derecho (Inspirado en diseño5) */}
      <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-3 z-30 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-bacx-neon-green" />
        <div className="w-px h-10 bg-bacx-border/40" />
        <span className="font-mono text-[9px] text-bacx-text-dim [writing-mode:vertical-rl] tracking-widest uppercase">
          ETAPA 01 — 2.560M
        </span>
        <div className="w-px h-16 bg-bacx-border/30" />
        <span className="w-1 h-1 rounded-full bg-bacx-border/40" />
      </div>

      {/* ======================================================== */}
      {/* 2. GRID PRINCIPAL EN ANCHO TOTAL (100% FULL-WIDTH 60/40) */}
      {/* ======================================================== */}
      <div className="relative z-10 w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-16 items-center py-6">
        
        {/* COLUMNA IZQUIERDA: FICHA TÉCNICA, MATRIZ & NARRATIVA (Cols 1-6) */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col gap-6 w-full">
          
          {/* Categoría superior sutil */}
          <div className="flex items-center gap-3 text-xs font-mono text-bacx-mint">
            <span className="text-bacx-neon-green font-bold">●</span>
            <span className="tracking-widest uppercase text-[11px] font-bold">
              {t.tag}
            </span>
          </div>

          {/* Nombre / Título Sobrio & Profesional (Estilo diseño5) */}
          <div className="flex flex-col gap-3">
            <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl text-bacx-text-white tracking-tight leading-[1.05]">
              {t.title}
            </h1>
            <p className="font-sans text-xs sm:text-sm md:text-base text-bacx-text-muted leading-relaxed max-w-2xl">
              {t.subtitle}
            </p>
          </div>

          {/* MATRIZ DE DATOS TÉCNICOS (Inspirada en diseño5, sin recorte de texto) */}
          <div className="w-full flex flex-col gap-2 pt-1 max-w-2xl">
            <span className="font-mono text-[10px] font-bold tracking-widest text-bacx-mint uppercase">
              {t.matrixHeader}
            </span>

            <div className="grid grid-cols-5 border border-bacx-border/40 rounded-xl overflow-hidden bg-bacx-surface/70 backdrop-blur-md shadow-lg">
              {/* Celda 1 */}
              <div className="p-2.5 sm:p-3.5 border-r border-bacx-border/30 flex flex-col justify-between">
                <span className="font-mono text-[9px] text-bacx-text-dim block leading-tight">{t.cell1Label}</span>
                <span className="font-display font-black text-sm sm:text-lg text-bacx-text-white mt-1">{t.cell1Val}</span>
                <span className="font-sans text-[9px] text-bacx-neon-green font-bold">{t.cell1Sub}</span>
              </div>

              {/* Celda 2 */}
              <div className="p-2.5 sm:p-3.5 border-r border-bacx-border/30 flex flex-col justify-between bg-bacx-mint/5">
                <span className="font-mono text-[9px] text-bacx-text-dim block leading-tight">{t.cell2Label}</span>
                <span className="font-display font-black text-xs sm:text-base text-bacx-mint mt-1">{t.cell2Val}</span>
                <span className="font-sans text-[9px] text-bacx-text-dim">{t.cell2Sub}</span>
              </div>

              {/* Celda 3 */}
              <div className="p-2.5 sm:p-3.5 border-r border-bacx-border/30 flex flex-col justify-between">
                <span className="font-mono text-[9px] text-bacx-text-dim block leading-tight">{t.cell3Label}</span>
                <span className="font-display font-black text-sm sm:text-lg text-bacx-text-white mt-1">{t.cell3Val}</span>
                <span className="font-sans text-[9px] text-bacx-text-dim">{t.cell3Sub}</span>
              </div>

              {/* Celda 4: Figura Legal — SIN TRUNCATE, texto 100% visible */}
              <div className="p-2.5 sm:p-3.5 border-r border-bacx-border/30 flex flex-col justify-between bg-bacx-mint/5 min-w-0">
                <span className="font-mono text-[9px] text-bacx-text-dim block leading-tight">{t.cell4Label}</span>
                <span className="font-display font-black text-[11px] sm:text-xs lg:text-sm text-bacx-text-white mt-1 leading-snug whitespace-normal break-words">
                  {t.cell4Val}
                </span>
                <span className="font-sans text-[9px] text-bacx-mint font-bold">{t.cell4Sub}</span>
              </div>

              {/* Celda 5 */}
              <div className="p-2.5 sm:p-3.5 flex flex-col justify-between">
                <span className="font-mono text-[9px] text-bacx-text-dim block leading-tight">{t.cell5Label}</span>
                <span className="font-display font-black text-xs sm:text-base text-bacx-text-white mt-1">{t.cell5Val}</span>
                <span className="font-sans text-[9px] text-bacx-text-dim">{t.cell5Sub}</span>
              </div>
            </div>

            <p className="font-sans text-[10px] text-bacx-text-dim mt-0.5">
              {t.matrixDisclaimer}
            </p>
          </div>

          {/* Botones de Acción */}
          <div className="flex items-center gap-4 pt-1">
            <a
              href="#alianzas"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-bacx-neon-green text-bacx-neon-green hover:text-bacx-bg-deep font-sans font-bold text-xs sm:text-sm tracking-wider px-7 py-3 rounded-full border border-bacx-neon-green transition-all duration-300 shadow-[0_0_20px_rgba(24,232,136,0.15)]"
            >
              <span>{t.btnAlliances}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#historia"
              className="inline-flex items-center gap-1.5 text-bacx-text-muted hover:text-bacx-mint font-sans text-xs sm:text-sm transition-colors py-2"
            >
              <span>{t.btnAbout}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Selector de Enfoque al Pie (Estilo diseño5) */}
          <div className="flex items-center gap-3 pt-3 border-t border-bacx-border/20 max-w-2xl">
            <span className="font-mono text-[10px] text-bacx-text-dim uppercase tracking-wider mr-1">
              {t.focusLabel}
            </span>
            
            <button
              onClick={() => setActiveTab('2026')}
              className={`px-3.5 py-1.5 rounded-md text-[11px] font-mono font-bold transition-all ${
                activeTab === '2026'
                  ? 'bg-bacx-neon-green text-bacx-bg-deep shadow-md'
                  : 'text-bacx-text-muted hover:text-bacx-text-white bg-white/5'
              }`}
            >
              {t.tab2026}
            </button>

            <button
              onClick={() => setActiveTab('semillero')}
              className={`px-3.5 py-1.5 rounded-md text-[11px] font-mono font-bold transition-all ${
                activeTab === 'semillero'
                  ? 'bg-bacx-neon-green text-bacx-bg-deep shadow-md'
                  : 'text-bacx-text-muted hover:text-bacx-text-white bg-white/5'
              }`}
            >
              {t.tabSemillero}
            </button>

            <button
              onClick={() => setActiveTab('competicion')}
              className={`px-3.5 py-1.5 rounded-md text-[11px] font-mono font-bold transition-all ${
                activeTab === 'competicion'
                  ? 'bg-bacx-neon-green text-bacx-bg-deep shadow-md'
                  : 'text-bacx-text-muted hover:text-bacx-text-white bg-white/5'
              }`}
            >
              {t.tabCompeticion}
            </button>

            <button
              onClick={() => setActiveTab('alianzas')}
              className={`px-3.5 py-1.5 rounded-md text-[11px] font-mono font-bold transition-all ${
                activeTab === 'alianzas'
                  ? 'bg-bacx-neon-green text-bacx-bg-deep shadow-md'
                  : 'text-bacx-text-muted hover:text-bacx-text-white bg-white/5'
              }`}
            >
              {t.tabAlianzas}
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* COLUMNA DERECHA: FOTOGRAFÍA ESTUDIO PRO & BLOQUE ESQUINA */}
        {/* ======================================================== */}
        <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-end justify-center w-full">
          
          {/* Etiqueta superior derecha */}
          <div className="w-full flex justify-end mb-2">
            <span className="font-mono text-[11px] text-bacx-mint uppercase tracking-widest flex items-center gap-1.5">
              <span>{t.topRightTag}</span>
              <span className="text-bacx-neon-green">↗</span>
            </span>
          </div>

          {/* Fotografía de estudio pro a alta resolución */}
          <div className="relative w-full max-w-[680px] xl:max-w-[780px] rounded-2xl overflow-hidden border border-bacx-border/40 shadow-2xl bg-[#030705] group">
            <img
              src="/images/cyclist-studio.png"
              alt="Atleta Profesional Team BACX"
              className="w-full h-auto object-cover object-center filter contrast-105 brightness-100 group-hover:scale-102 transition-transform duration-700"
            />
            {/* Viñeta sutil en los bordes para fundir con la escena */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#040907] via-transparent to-transparent opacity-60 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#040907]/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* TARJETA SÓLIDA INFERIOR DERECHA (Idéntica al bloque 330ml de diseño5) */}
          <div className="w-full sm:w-auto sm:self-end mt-4 bg-bacx-mint/15 border border-bacx-mint/40 rounded-xl p-4 sm:p-5 backdrop-blur-md min-w-[240px] flex flex-col gap-1 shadow-2xl">
            <span className="font-mono text-[9px] font-bold text-bacx-mint uppercase tracking-widest">
              {t.altitudeCardTag}
            </span>
            <p className="font-display font-black text-2xl sm:text-3xl text-bacx-text-white leading-none mt-0.5">
              {t.altitudeCardVal} <span className="text-sm font-bold text-bacx-neon-green">{t.altitudeCardUnit}</span>
            </p>
            <p className="font-sans text-[11px] text-bacx-text-muted leading-tight mt-1.5">
              {t.altitudeCardDesc}
            </p>
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* 3. BARRA HORIZONTAL INFERIOR DE EXTREMO A EXTREMO (100%) */}
      {/* ======================================================== */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-bacx-border/30 text-[11px] font-mono text-bacx-text-dim">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-bacx-neon-green" />
          <span>{t.bottomBrand}</span>
        </div>

        <div className="flex items-center gap-8">
          <span className="text-bacx-text-muted">{t.bottomLocation}</span>
          <span className="text-bacx-mint">4°35'56"N 74°04'51"W</span>
        </div>
      </div>
    </section>
  );
};
