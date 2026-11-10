import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Mountain, ShieldCheck, Leaf } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const AltimetrySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const pathGlowRef = useRef<SVGPathElement>(null);
  const beaconRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const pathGlow = pathGlowRef.current;
    const beacon = beaconRef.current;
    if (!path || !pathGlow || !sectionRef.current) return;

    const length = path.getTotalLength();

    // Prepare stroke dash
    gsap.set([path, pathGlow], {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Animate path draw and beacon tracking on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        end: 'bottom 50%',
        scrub: 1.2,
        onUpdate: (self) => {
          if (beacon) {
            const point = path.getPointAtLength(length * (1 - self.progress));
            beacon.setAttribute('cx', point.x.toString());
            beacon.setAttribute('cy', point.y.toString());
          }
        },
      },
    });

    tl.to([path, pathGlow], {
      strokeDashoffset: 0,
      ease: 'none',
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      id="altimetria"
      ref={sectionRef}
      className="relative w-full py-24 px-6 md:px-12 bg-gradient-to-b from-[#030806] via-[#07150f] to-[#030806] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Editorial */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-bacx-neon-green" />
            <span className="font-mono text-xs font-bold tracking-widest text-bacx-mint uppercase">
              ETAPA 01 — PERFIL DE ALTA MONTAÑA // MANIFIESTO Y PILARES
            </span>
          </div>

          <h2 className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-bacx-text-white tracking-tight uppercase max-w-4xl leading-[1.1]">
            El ascenso del impacto: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bacx-mint via-bacx-neon-green to-bacx-electric-lime">
              Tres cotas, tres causas
            </span>
          </h2>

          <p className="font-sans text-sm md:text-base text-bacx-text-muted max-w-2xl mt-4 leading-relaxed">
            Una etapa no se define únicamente por la llegada: se conquista en cada pendiente. Conoce los tres pilares que sostienen la iniciativa deportiva del Team BACX.
          </p>
        </div>

        {/* 3 TARJETAS TÉCNICAS DE LAS COTAS (Sin colisiones, estructura clara) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* COTA 1: 1.800M (Semillero) */}
          <div className="glass-card rounded-2xl p-6 lg:p-8 flex flex-col justify-between gap-6 hover:border-bacx-neon-green/40 transition-all duration-300">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold tracking-widest text-bacx-mint uppercase flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-bacx-neon-green" />
                  COTA 1.800 MSNM
                </span>
                <span className="font-mono text-[10px] text-bacx-text-dim px-2 py-0.5 rounded bg-black/40">
                  ESTACIÓN 01
                </span>
              </div>

              <h3 className="font-display font-black text-xl lg:text-2xl text-bacx-text-white leading-tight">
                Semillero, Paridad &amp; Oportunidad
              </h3>

              <p className="font-sans text-xs md:text-sm text-bacx-text-muted leading-relaxed italic">
                «La base no es solo física, es social: abrimos camino desde las edades formativas para que el talento femenino compita con respaldo real.»
              </p>
            </div>

            <div className="flex items-center gap-3 bg-black/40 border border-bacx-border/30 p-3 rounded-xl">
              <Mountain className="w-5 h-5 text-bacx-neon-green flex-shrink-0" />
              <div>
                <p className="font-mono text-[10px] font-bold tracking-widest text-bacx-mint uppercase">Talento Base</p>
                <p className="font-sans text-xs text-bacx-text-dim">Categorías formativas y juveniles</p>
              </div>
            </div>
          </div>

          {/* COTA 2: 2.200M (Sostenibilidad) */}
          <div className="glass-card rounded-2xl p-6 lg:p-8 flex flex-col justify-between gap-6 hover:border-bacx-mint/50 transition-all duration-300">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold tracking-widest text-bacx-mint uppercase flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-bacx-mint" />
                  COTA 2.200 MSNM
                </span>
                <span className="font-mono text-[10px] text-bacx-text-dim px-2 py-0.5 rounded bg-black/40">
                  ESTACIÓN 02
                </span>
              </div>

              <h3 className="font-display font-black text-xl lg:text-2xl text-bacx-text-white leading-tight">
                Conciencia Ambiental en Cada Ruta
              </h3>

              <p className="font-sans text-xs md:text-sm text-bacx-text-muted leading-relaxed italic">
                «No podemos amar el ciclismo y descuidar los paisajes que nos reciben. Asumimos el compromiso ecológico desde la acción diaria y la educación.»
              </p>
            </div>

            <div className="flex items-center gap-3 bg-black/40 border border-bacx-border/30 p-3 rounded-xl">
              <Leaf className="w-5 h-5 text-bacx-mint flex-shrink-0" />
              <div>
                <p className="font-mono text-[10px] font-bold tracking-widest text-bacx-mint uppercase">Huella Verde</p>
                <p className="font-sans text-xs text-bacx-text-dim">Rutas sin plásticos y acción ecológica</p>
              </div>
            </div>
          </div>

          {/* COTA 3: 2.560M (Cumbre / Alianzas) */}
          <div className="glass-card rounded-2xl p-6 lg:p-8 flex flex-col justify-between gap-6 border-bacx-mint/40 bg-gradient-to-b from-[#0c241a]/80 to-[#071610]/80 hover:border-bacx-neon-green/60 transition-all duration-300">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold tracking-widest text-white uppercase flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  COTA 2.560 MSNM (CUMBRE)
                </span>
                <span className="font-mono text-[10px] text-bacx-neon-green px-2 py-0.5 rounded bg-black/40 font-bold">
                  ESTACIÓN 03
                </span>
              </div>

              <h3 className="font-display font-black text-xl lg:text-2xl text-bacx-text-white leading-tight">
                Alianzas Corporativas de Alto Retorno
              </h3>

              <p className="font-sans text-xs md:text-sm text-bacx-text-muted leading-relaxed">
                Estructura corporativa constituida para ofrecer respaldo legal, visibilidad institucional y beneficios tributarios a empresas aliadas.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 bg-black/40 border border-bacx-border/30 p-3 rounded-xl">
                <ShieldCheck className="w-5 h-5 text-bacx-mint flex-shrink-0" />
                <div>
                  <p className="font-mono text-[10px] font-bold tracking-widest text-bacx-mint uppercase">Corporación Legal</p>
                  <p className="font-sans text-xs text-bacx-text-dim">Beneficios tributarios y retorno</p>
                </div>
              </div>

              <a
                href="#alianzas"
                className="group flex items-center justify-center gap-2 bg-bacx-neon-green hover:bg-bacx-mint text-bacx-bg-deep font-sans font-black text-xs tracking-wider px-5 py-3 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(24,232,136,0.25)]"
              >
                <span>SUMAR MI EMPRESA</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* GRÁFICO TÉCNICO DE ELEVACIÓN Y ALTIMETRÍA (En su propio contenedor inferior, cero solapamiento) */}
        <div className="w-full bg-[#05110c]/80 border border-bacx-border/30 rounded-2xl p-6 lg:p-8 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4 text-xs font-mono">
            <span className="text-bacx-mint font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bacx-neon-green animate-pulse" />
              PERFIL TOPOGRÁFICO DE ETAPA — ASCENSO BOGOTÁ / ALTO DE PATIOS
            </span>
            <span className="text-bacx-text-dim hidden sm:inline">DESNIVEL POSITIVO: +760M // PENDIENTE MEDIA: 6.8%</span>
          </div>

          <div className="w-full h-48 md:h-64 relative">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 240"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Degradado de montaña */}
              <defs>
                <linearGradient id="elevationGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#18E888" stopOpacity="0.25" />
                  <stop offset="60%" stopColor="#A4DFD6" stopOpacity="0.06" />
                  <stop offset="100%" stopColor="#05110c" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Relleno bajo la curva */}
              <path
                d="M 0 200 C 180 190, 360 160, 520 125 C 720 85, 900 45, 1200 20 L 1200 240 L 0 240 Z"
                fill="url(#elevationGrad)"
              />

              {/* Líneas guía de altitud */}
              <line x1="0" y1="200" x2="1200" y2="200" stroke="rgba(164, 223, 214, 0.1)" strokeDasharray="4 4" />
              <line x1="0" y1="125" x2="1200" y2="125" stroke="rgba(164, 223, 214, 0.1)" strokeDasharray="4 4" />
              <line x1="0" y1="20" x2="1200" y2="20" stroke="rgba(164, 223, 214, 0.1)" strokeDasharray="4 4" />

              {/* Textos de cota claros a la derecha */}
              <text x="10" y="194" fill="#4E6E60" fontSize="10" fontFamily="Inter" fontWeight="700">1.800M (VALLE)</text>
              <text x="10" y="119" fill="#4E6E60" fontSize="10" fontFamily="Inter" fontWeight="700">2.200M (PUERTO)</text>
              <text x="10" y="16" fill="#18E888" fontSize="10" fontFamily="Inter" fontWeight="700">2.560M (CUMBRE)</text>

              {/* Resplandor del trazado */}
              <path
                ref={pathGlowRef}
                d="M 0 200 C 180 190, 360 160, 520 125 C 720 85, 900 45, 1200 20"
                stroke="#18E888"
                strokeWidth="6"
                className="blur-sm opacity-60"
              />

              {/* Curva nítida */}
              <path
                ref={pathRef}
                d="M 0 200 C 180 190, 360 160, 520 125 C 720 85, 900 45, 1200 20"
                stroke="#A4DFD6"
                strokeWidth="2.5"
              />

              {/* Beacon que viaja con el scroll */}
              <circle
                ref={beaconRef}
                cx="0"
                cy="200"
                r="6"
                fill="#18E888"
                className="drop-shadow-[0_0_8px_#18E888]"
              />
            </svg>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-bacx-text-dim border-t border-bacx-border/20 pt-3 mt-2">
            <span>KM 0 // SALIDA</span>
            <span>KM 8.5 // PUERTO INTERMEDIO</span>
            <span>KM 14.2 // META DE MONTAÑA</span>
          </div>
        </div>
      </div>
    </section>
  );
};
