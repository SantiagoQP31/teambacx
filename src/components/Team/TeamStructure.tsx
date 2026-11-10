import React, { useState } from 'react';
import { Users, Activity, Calendar } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/content';

export const TeamStructure: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].team;

  // Active expanded card index (0: Juvenil, 1: Sub-23, 2: Élite) - Controlled strictly by user click
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const categories = [
    {
      id: 0,
      number: '01',
      tag: t.cat1Tag,
      age: t.cat1Age,
      title: t.cat1Title,
      desc: t.cat1Desc,
      status: t.cat1Status,
      season: t.cat1Season,
      image: '/images/cyclist-mountain.png',
      accentColor: 'text-bacx-neon-green',
      borderColor: 'border-bacx-neon-green/50',
      bgGradient: 'from-[#071a11]/90 via-[#06140e]/95 to-[#040806]',
      icon: <Activity className="w-5 h-5 text-bacx-neon-green" />,
    },
    {
      id: 1,
      number: '02',
      tag: t.cat2Tag,
      age: t.cat2Age,
      title: t.cat2Title,
      desc: t.cat2Desc,
      status: t.cat2Status,
      season: t.cat2Season,
      image: '/images/cyclist-studio.png',
      accentColor: 'text-bacx-mint',
      borderColor: 'border-bacx-mint/50',
      bgGradient: 'from-[#0a2217]/90 via-[#071610]/95 to-[#040806]',
      icon: <Users className="w-5 h-5 text-bacx-mint" />,
    },
    {
      id: 2,
      number: '03',
      tag: t.cat3Tag,
      age: t.cat3Age,
      title: t.cat3Title,
      desc: t.cat3Desc,
      status: t.cat3Status,
      season: t.cat3Season,
      image: '/images/cyclist.png',
      accentColor: 'text-bacx-electric-lime',
      borderColor: 'border-bacx-electric-lime/50',
      bgGradient: 'from-[#0c281a]/90 via-[#071810]/95 to-[#040806]',
      icon: <Calendar className="w-5 h-5 text-bacx-electric-lime" />,
    },
  ];

  return (
    <section id="equipo" className="relative w-full py-28 px-6 sm:px-12 xl:px-20 bg-[#05110c] border-t border-bacx-border/20 text-bacx-text-white select-none overflow-hidden">
      {/* Fondo decorativo con halo suave */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[650px] h-[650px] bg-bacx-neon-green/5 blur-[160px] pointer-events-none" />

      <div className="w-full relative z-10">
        {/* Encabezado Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-bacx-neon-green" />
              <span className="font-mono text-xs font-bold tracking-widest text-bacx-mint uppercase">
                {t.tag}
              </span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-bacx-text-white tracking-tight uppercase leading-[1.1]">
              Un proyecto pensado para la <span className="text-transparent bg-clip-text bg-gradient-to-r from-bacx-mint to-bacx-neon-green">permanencia y el desarrollo.</span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-bacx-text-muted max-w-md leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* ======================================================== */}
        {/* CONTENEDOR EXPANSIVO (TRANSICIÓN INERCIAL DE ANCHO REAL) */}
        {/* ======================================================== */}
        <div className="w-full flex flex-col lg:flex-row gap-5 min-h-[580px] lg:h-[620px]">
          {categories.map((cat) => {
            const isExpanded = activeIdx === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => setActiveIdx(cat.id)}
                style={{
                  flex: isExpanded ? 3.5 : 1,
                  transition: 'flex 0.85s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s ease, background 0.5s ease',
                }}
                className={`relative rounded-3xl overflow-hidden border cursor-pointer shadow-2xl ${
                  isExpanded
                    ? `${cat.borderColor} bg-gradient-to-b ${cat.bgGradient}`
                    : 'border-bacx-border/30 bg-[#071610]/80 hover:border-bacx-mint/40 hover:bg-[#081a13]'
                }`}
              >
                {/* 1. Fotografía de fondo con escala y opacidad suave */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    style={{
                      transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease',
                      transform: isExpanded ? 'scale(1.05)' : 'scale(1)',
                      opacity: isExpanded ? 0.38 : 0.12,
                    }}
                    className="w-full h-full object-cover object-center filter contrast-110 brightness-95"
                  />
                  {/* Máscara de degradado para garantizar legibilidad */}
                  <div
                    style={{
                      transition: 'opacity 0.8s ease',
                      opacity: isExpanded ? 0.88 : 0.94,
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-[#040806] via-[#040806]/75 to-transparent"
                  />
                </div>

                {/* 2. Capa Contenedora (Con overflow-hidden estricto) */}
                <div className="relative z-10 w-full h-full overflow-hidden">
                  
                  {/* =================================================== */}
                  {/* A. VISTA EXPANDIDA: Canvás interno con ancho fijo   */}
                  {/* (Nunca se deforma ni cambia de líneas al cerrarse)  */}
                  {/* =================================================== */}
                  <div
                    style={{
                      opacity: isExpanded ? 1 : 0,
                      transform: isExpanded ? 'translateX(0px)' : 'translateX(-24px)',
                      transition: isExpanded
                        ? 'opacity 0.55s ease 0.25s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.25s'
                        : 'opacity 0.28s ease, transform 0.3s ease',
                      pointerEvents: isExpanded ? 'auto' : 'none',
                    }}
                    className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between w-[580px] lg:w-[640px]"
                  >
                    {/* Cabecera Expandida */}
                    <div className="flex items-center justify-between w-full border-b border-bacx-border/20 pb-4">
                      <div className="flex items-center gap-3 whitespace-nowrap">
                        <span className="font-mono text-base font-black text-bacx-neon-green">
                          {cat.number}
                        </span>
                        <span className="w-px h-4 bg-bacx-border/40" />
                        <span className={`font-mono text-xs font-bold uppercase tracking-wider ${cat.accentColor}`}>
                          {cat.tag}
                        </span>
                      </div>

                      <span className="font-mono text-[11px] font-bold text-bacx-text-white px-3 py-1 rounded-full bg-white/10 border border-white/10 whitespace-nowrap">
                        {cat.age}
                      </span>
                    </div>

                    {/* Cuerpo Editorial Expandido */}
                    <div className="my-auto flex flex-col gap-5 py-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-bacx-neon-green animate-pulse" />
                        <span className="font-mono text-[11px] font-bold text-bacx-mint uppercase tracking-widest">
                          CATEGORÍA OFICIAL
                        </span>
                      </div>

                      <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-bacx-text-white leading-[1.08] tracking-tight">
                        {cat.title}
                      </h3>

                      <p className="font-sans text-xs sm:text-sm md:text-base text-bacx-text-muted leading-relaxed">
                        {cat.desc}
                      </p>

                      <div className="flex items-center gap-4 pt-2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-bacx-surface/80 border border-bacx-border/40 text-xs font-mono">
                          {cat.icon}
                          <span className="text-bacx-text-white font-bold">{cat.status}</span>
                        </div>

                        <span className="font-mono text-xs text-bacx-text-dim">
                          {cat.season}
                        </span>
                      </div>
                    </div>

                    {/* Pie Expandido */}
                    <div className="w-full border-t border-bacx-border/20 pt-4 flex items-center justify-between text-xs font-mono text-bacx-text-dim">
                      <span className="text-[11px] text-bacx-mint font-bold uppercase tracking-wider">
                        {cat.season}
                      </span>
                      <span className="text-[10px] text-bacx-text-dim uppercase tracking-wider">
                        {cat.age}
                      </span>
                    </div>
                  </div>

                  {/* =================================================== */}
                  {/* B. VISTA COMPRIMIDA: Diseño vertical ultralimpio    */}
                  {/* (Entra suavemente sólo cuando la tarjeta se cierra) */}
                  {/* =================================================== */}
                  <div
                    style={{
                      opacity: !isExpanded ? 1 : 0,
                      transform: !isExpanded ? 'scale(1)' : 'scale(0.96)',
                      transition: !isExpanded
                        ? 'opacity 0.45s ease 0.3s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
                        : 'opacity 0.2s ease, transform 0.2s ease',
                      pointerEvents: !isExpanded ? 'auto' : 'none',
                    }}
                    className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between items-center w-full"
                  >
                    {/* Número superior */}
                    <div className="flex items-center justify-between w-full border-b border-bacx-border/20 pb-4">
                      <span className="font-mono text-base font-black text-bacx-text-muted">{cat.number}</span>
                      <span className="w-2 h-2 rounded-full bg-bacx-neon-green/60" />
                    </div>

                    {/* Título Vertical (Nunca salta ni parte líneas) */}
                    <h3 className="font-display font-black text-xl lg:text-2xl text-bacx-text-white/70 hover:text-bacx-text-white transition-colors lg:[writing-mode:vertical-rl] lg:rotate-180 tracking-wider whitespace-nowrap">
                      {cat.title}
                    </h3>

                    {/* Rango de edad al pie */}
                    <div className="w-full border-t border-bacx-border/20 pt-4 flex justify-center text-[10px] font-mono text-bacx-text-dim uppercase tracking-wider">
                      <span>{cat.age}</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Nota institucional de transparencia */}
        <div className="mt-8 p-4 rounded-xl bg-black/40 border border-bacx-border/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-bacx-text-dim">
          <span>{t.disclaimer}</span>
          <span className="text-bacx-mint flex items-center gap-1">
            VERIFICACIÓN FORMAL
          </span>
        </div>
      </div>
    </section>
  );
};
