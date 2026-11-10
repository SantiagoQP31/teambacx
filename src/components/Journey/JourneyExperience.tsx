import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ArrowUpRight, Leaf, ShieldCheck } from 'lucide-react';
import { AnimatedCyclist } from './AnimatedCyclist';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export const JourneyExperience: React.FC = () => {
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const roadPathRef = useRef<SVGPathElement>(null);
  const cyclistRef = useRef<HTMLDivElement>(null);

  // Scene references
  const scene1Ref = useRef<HTMLDivElement>(null);
  const scene2Ref = useRef<HTMLDivElement>(null);
  const scene3Ref = useRef<HTMLDivElement>(null);
  const scene4Ref = useRef<HTMLDivElement>(null);

  // Background atmosphere layers
  const bgRoutePhotoRef = useRef<HTMLDivElement>(null);

  // Live route telemetry state
  const [telemetry, setTelemetry] = useState({
    km: '0.0',
    altitude: 1800,
    stage: 'Salida',
    progress: 0,
  });

  useEffect(() => {
    const pinSection = pinSectionRef.current;
    const roadPath = roadPathRef.current;
    const cyclist = cyclistRef.current;
    const s1 = scene1Ref.current;
    const s2 = scene2Ref.current;
    const s3 = scene3Ref.current;
    const s4 = scene4Ref.current;
    const bgPhoto = bgRoutePhotoRef.current;

    if (!pinSection || !roadPath || !cyclist || !s1 || !s2 || !s3 || !s4) return;

    // Set initial states
    gsap.set(s1, { opacity: 1, y: 0 });
    gsap.set(s2, { opacity: 0, y: 40 });
    gsap.set(s3, { opacity: 0, y: 40 });
    gsap.set(s4, { opacity: 0, y: 40 });
    if (bgPhoto) gsap.set(bgPhoto, { opacity: 0 });

    // GSAP Pinned Master Timeline
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: pinSection,
        start: 'top top',
        end: '+=3800',
        pin: true,
        scrub: 1.1,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = self.progress;
          const currentKm = (p * 28.5).toFixed(1);
          const currentAlt = Math.round(1800 + p * 760);
          let currentStage = 'Salida de Etapa';
          if (p > 0.25 && p <= 0.55) currentStage = 'Curva Semillero';
          else if (p > 0.55 && p <= 0.82) currentStage = 'Puerto Ecológico';
          else if (p > 0.82) currentStage = 'Cumbre & Alianzas';

          setTelemetry({
            km: currentKm,
            altitude: currentAlt,
            stage: currentStage,
            progress: Math.round(p * 100),
          });
        },
      },
    });

    // 1. Move cyclist along the road path with auto-rotation and progressive scale (1.0 -> 1.7)
    masterTl.to(
      cyclist,
      {
        motionPath: {
          path: roadPath,
          align: roadPath,
          alignOrigin: [0.5, 0.75],
          autoRotate: true,
        },
        scale: 1.7, // Smooth Z-perspective growth without starting as a tiny speck!
        ease: 'power1.inOut',
        duration: 10,
      },
      0
    );

    // 2. Scene Transitions (Crossfading cleanly at designated milestones)
    // Scene 1 fades out as cyclist moves past initial straight
    masterTl.to(s1, { opacity: 0, y: -40, duration: 1.5, ease: 'power2.in' }, 1.2);

    // Scene 2 (Semillero) reveals on the right (progress ~25% to 50%)
    if (bgPhoto) {
      masterTl.to(bgPhoto, { opacity: 0.14, duration: 1.5 }, 2.0);
    }
    masterTl.to(s2, { opacity: 1, y: 0, duration: 1.8, ease: 'power2.out' }, 2.2);
    masterTl.to(s2, { opacity: 0, y: -30, duration: 1.4, ease: 'power2.in' }, 4.6);

    // Scene 3 (Sostenibilidad) reveals on the left (progress ~55% to 80%)
    masterTl.to(s3, { opacity: 1, y: 0, duration: 1.8, ease: 'power2.out' }, 5.2);
    masterTl.to(s3, { opacity: 0, y: -30, duration: 1.4, ease: 'power2.in' }, 7.4);

    // Scene 4 (Meta / Alianzas) reveals in center (progress ~82% to 100%)
    if (bgPhoto) {
      masterTl.to(bgPhoto, { opacity: 0.05, duration: 1.5 }, 7.5);
    }
    masterTl.to(s4, { opacity: 1, y: 0, duration: 1.8, ease: 'power2.out' }, 8.0);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={pinSectionRef} className="relative w-full h-screen bg-[#040B08] text-bacx-text-white overflow-hidden select-none">
      {/* ======================================================== */}
      {/* 0. CAPAS ATMOSFÉRICAS DE FONDO (Elimina el vacío negro)   */}
      {/* ======================================================== */}
      {/* Halo de luz cenital */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-bacx-neon-green/10 via-transparent to-transparent blur-[120px] pointer-events-none" />

      {/* Marca de agua colosal "TEAM BACX" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="font-display font-black text-[24vw] leading-none tracking-tighter text-white/[0.035] select-none">
          TEAM BACX
        </span>
      </div>

      {/* Fotografía de ruta en baja opacidad para textura ambiental */}
      <div
        ref={bgRoutePhotoRef}
        className="absolute inset-0 z-0 pointer-events-none bg-cover bg-center filter contrast-125 transition-opacity"
        style={{ backgroundImage: `url('/images/cyclist-studio.png')` }}
      />

      {/* Líneas topográficas de montaña sutiles en el fondo */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none">
          <path d="M 0 300 Q 360 260 720 340 T 1440 280" stroke="#18E888" strokeWidth="1" strokeDasharray="3 6" opacity="0.3" />
          <path d="M 0 550 Q 400 500 800 600 T 1440 520" stroke="#18E888" strokeWidth="1" strokeDasharray="3 6" opacity="0.2" />
          <path d="M 0 780 Q 420 720 840 820 T 1440 750" stroke="#18E888" strokeWidth="1" strokeDasharray="3 6" opacity="0.15" />
        </svg>
      </div>

      {/* ======================================================== */}
      {/* 1. LA RUTA SERPENTEANTE EN VERDE TENUE (Full-Bleed)       */}
      {/* ======================================================== */}
      <div className="absolute inset-0 pointer-events-none w-full h-full z-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Degradado para el asfalto en verde tenue */}
            <linearGradient id="roadToneGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E4733" />
              <stop offset="35%" stopColor="#153626" />
              <stop offset="70%" stopColor="#112B1F" />
              <stop offset="100%" stopColor="#0B1E15" />
            </linearGradient>

            <filter id="roadSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Resplandor suave exterior */}
          <path
            d="M 720 340 C 720 460, 320 460, 320 600 C 320 760, 1120 680, 1120 800 C 1120 880, 720 860, 720 900"
            stroke="#18E888"
            strokeWidth="50"
            opacity="0.09"
            filter="url(#roadSoftGlow)"
          />

          {/* Cinta Asfáltica (Amplitud moderada 34px, verde tenue) */}
          <path
            d="M 720 340 C 720 460, 320 460, 320 600 C 320 760, 1120 680, 1120 800 C 1120 880, 720 860, 720 900"
            stroke="url(#roadToneGrad)"
            strokeWidth="34"
            strokeLinecap="round"
          />

          {/* Bordillo delimitador en verde salvia */}
          <path
            d="M 720 340 C 720 460, 320 460, 320 600 C 320 760, 1120 680, 1120 800 C 1120 880, 720 860, 720 900"
            stroke="#2F6E4F"
            strokeWidth="1.8"
          />

          {/* Línea Central Discontinua en Verde Menta */}
          <path
            d="M 720 340 C 720 460, 320 460, 320 600 C 320 760, 1120 680, 1120 800 C 1120 880, 720 860, 720 900"
            stroke="#A4DFD6"
            strokeWidth="2"
            strokeDasharray="12 16"
            opacity="0.75"
          />

          {/* Path Invisible para la trayectoria de la ciclista con GSAP */}
          <path
            ref={roadPathRef}
            id="scrolly-road-path"
            d="M 720 340 C 720 460, 320 460, 320 600 C 320 760, 1120 680, 1120 800 C 1120 880, 720 860, 720 900"
            stroke="transparent"
            fill="none"
          />
        </svg>
      </div>

      {/* ======================================================== */}
      {/* 2. LA CICLISTA EN MOVIMIENTO ANIMADO (Team BACX Kit)      */}
      {/* ======================================================== */}
      <div className="absolute inset-0 pointer-events-none w-full h-full z-20">
        <div
          ref={cyclistRef}
          className="absolute top-0 left-0 w-64 md:w-72 -translate-x-1/2 -translate-y-1/2 will-change-transform"
        >
          <AnimatedCyclist />
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. MONITOR LATERAL DE RUTA (HUD DE TELEMETRÍA EN VIVO)    */}
      {/* ======================================================== */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-3 pointer-events-none">
        <div className="bg-bacx-bg-deep/80 backdrop-blur-md border border-bacx-border/40 p-4 rounded-2xl flex flex-col gap-2 min-w-[170px] shadow-2xl">
          <div className="flex items-center justify-between gap-4 border-b border-bacx-border/30 pb-2">
            <span className="font-mono text-[10px] text-bacx-text-dim uppercase tracking-wider">ETAPA VIVA</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-bacx-neon-green animate-pulse" />
              <span className="font-mono text-[10px] font-bold text-bacx-mint">{telemetry.progress}%</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-bacx-text-dim">DISTANCIA</span>
            <span className="font-display font-black text-xl text-bacx-text-white leading-tight">
              {telemetry.km} <span className="text-xs text-bacx-mint font-bold">KM</span>
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-bacx-text-dim">ALTITUD</span>
            <span className="font-display font-black text-lg text-bacx-mint leading-tight">
              {telemetry.altitude} <span className="text-xs text-bacx-text-dim font-bold">MSNM</span>
            </span>
          </div>

          <div className="pt-1">
            <span className="font-mono text-[9px] text-bacx-neon-green font-bold uppercase tracking-wider block truncate">
              {telemetry.stage}
            </span>
          </div>
        </div>

        {/* Barra de Progreso Vertical Fina */}
        <div className="w-1.5 h-36 bg-bacx-border/40 rounded-full overflow-hidden mr-2">
          <div
            className="w-full bg-gradient-to-b from-bacx-mint to-bacx-neon-green rounded-full transition-all duration-75"
            style={{ height: `${telemetry.progress}%` }}
          />
        </div>
      </div>

      {/* ======================================================== */}
      {/* 4. ESCENAS EDITORIALES NARRATIVAS (Secuencia Pinned)     */}
      {/* ======================================================== */}

      {/* ESCENA 1: EL PUNTO DE PARTIDA (HERO INICIAL CON PRESENCIA DOMINANTE) */}
      <div
        ref={scene1Ref}
        className="absolute inset-0 z-30 flex flex-col justify-between px-6 md:px-16 pt-28 pb-12 pointer-events-none"
      >
        <div className="w-full max-w-4xl mx-auto text-center pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d2218]/80 border border-bacx-border/40 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-bacx-neon-green animate-ping" />
            <span className="font-mono text-[11px] font-bold tracking-widest text-bacx-mint uppercase">
              CORPORACIÓN DEPORTIVA // CICLISMO FEMENINO Y SOSTENIBILIDAD
            </span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-bacx-text-white leading-[1.12] tracking-tight">
            El equipo de ciclismo femenino que pedalea para abrir camino a las mujeres y cuidar el planeta.
          </h1>

          <p className="font-sans text-sm md:text-base text-bacx-text-muted max-w-2xl mx-auto mt-6 leading-relaxed">
            Una iniciativa deportiva nacida de la experiencia profesional para estructurar formación digna, equidad de género y conciencia ambiental en cada ruta.
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-widest text-bacx-neon-green uppercase">
            <span>↓ Desliza para iniciar el recorrido de la etapa</span>
          </div>
        </div>

        {/* Coordenadas en el pie del Hero */}
        <div className="w-full flex justify-between items-center text-[10px] font-mono text-bacx-text-dim border-t border-bacx-border/30 pt-3">
          <span>BOGOTÁ — COLOMBIA // COTA 1.800M - 2.560M</span>
          <span>ENTRENAMIENTO DE ALTO RENDIMIENTO</span>
        </div>
      </div>

      {/* ESCENA 2: EL ORIGEN & EL SEMILLERO FORMATIVO (Curva Izquierda) */}
      <div
        ref={scene2Ref}
        className="absolute inset-0 z-30 flex items-center px-6 md:px-16 pointer-events-none"
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Espacio izquierdo para el paso de la ciclista (Cols 1-5) */}
          <div className="md:col-span-5 h-24 md:h-auto" />

          {/* Narrativa a la derecha (Cols 6-12) */}
          <div className="md:col-span-7 flex flex-col gap-6 md:pl-10 pointer-events-auto">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-bacx-neon-green" />
              <span className="font-mono text-xs font-bold tracking-widest text-bacx-mint uppercase">
                EL ORIGEN &amp; EL SEMILLERO FORMATIVO
              </span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-bacx-text-white leading-[1.1] tracking-tight">
              Nacimos para cambiar las reglas del juego en el deporte.
            </h2>

            <div className="w-20 h-0.5 bg-bacx-neon-green" />

            <p className="font-sans text-sm md:text-base text-bacx-text-muted leading-relaxed">
              Durante décadas, el talento de las mujeres en el ciclismo ha competido en desventaja: la falta de patrocinio formal, la invisibilidad en los medios y la escasez de semilleros estructurados han frenado a generaciones de deportistas.
            </p>

            <p className="font-sans text-sm md:text-base text-bacx-text-muted leading-relaxed">
              BACX nace de la trayectoria de su fundadora —ciclista profesional por un periodo prolongado y licenciada en Educación Física— con una sola determinación: estructurar un semillero de alto nivel para acompañar a las jóvenes atletas desde sus inicios formativos hasta el profesionalismo internacional.
            </p>

            <blockquote className="border-l-2 border-bacx-neon-green pl-4 py-1 italic font-sans text-base md:text-lg text-bacx-text-white">
              «No se trata solo de ganar carreras: se trata de que ninguna mujer tenga que pedalear sola para cumplir sus metas.»
            </blockquote>
          </div>
        </div>
      </div>

      {/* ESCENA 3: CONCIENCIA & CUIDADO DEL ENTORNO (Curva Derecha) */}
      <div
        ref={scene3Ref}
        className="absolute inset-0 z-30 flex items-center px-6 md:px-16 pointer-events-none"
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Narrativa a la izquierda (Cols 1-7) */}
          <div className="md:col-span-7 flex flex-col gap-6 md:pr-10 pointer-events-auto">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-bacx-neon-green" />
              <span className="font-mono text-xs font-bold tracking-widest text-bacx-mint uppercase">
                SOSTENIBILIDAD &amp; CUIDADO DEL ENTORNO
              </span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-bacx-text-white leading-[1.1] tracking-tight">
              Cuidar las carreteras y paisajes que nos ven crecer.
            </h2>

            <div className="w-20 h-0.5 bg-bacx-mint" />

            <p className="font-sans text-sm md:text-base text-bacx-text-muted leading-relaxed">
              El ciclismo es el deporte que más íntimamente convive con la naturaleza. Sin embargo, a menudo las carreras y entrenamientos dejan una huella silenciosa de plásticos y residuos en los páramos y puertos de montaña.
            </p>

            <p className="font-sans text-sm md:text-base text-bacx-text-muted leading-relaxed">
              En BACX asumimos el compromiso ambiental desde la práctica real: entrenamientos sin plásticos de un solo uso, pedagogía ecológica en las comunidades que visitamos y respeto absoluto por los ecosistemas que recorremos.
            </p>

            {/* Métricas tipográficas desnudas sin cajas */}
            <div className="flex items-center gap-12 pt-2">
              <div>
                <p className="font-display font-black text-3xl sm:text-4xl text-bacx-neon-green">0%</p>
                <p className="font-mono text-xs text-bacx-text-dim mt-1">Plásticos de un solo uso en ruta</p>
              </div>
              <div className="w-px h-12 bg-bacx-border/40" />
              <div>
                <p className="font-display font-black text-3xl sm:text-4xl text-bacx-text-white">100%</p>
                <p className="font-mono text-xs text-bacx-text-dim mt-1">Compromiso ético de conservación</p>
              </div>
            </div>
          </div>

          {/* Espacio derecho para el paso de la ciclista (Cols 8-12) */}
          <div className="md:col-span-5 h-24 md:h-auto" />
        </div>
      </div>

      {/* ESCENA 4: LA META & ALIANZAS CORPORATIVAS (Llegada Frontal en Primer Plano) */}
      <div
        ref={scene4Ref}
        className="absolute inset-0 z-30 flex flex-col justify-center items-center px-6 md:px-16 pointer-events-none text-center"
      >
        {/* Espacio superior para la llegada de la ciclista a escala máxima (1.7x) */}
        <div className="w-full h-48 md:h-64" />

        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d2218]/90 border border-bacx-neon-green/40 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-bacx-neon-green" />
            <span className="font-mono text-[11px] font-bold tracking-widest text-bacx-neon-green uppercase">
              CORPORACIÓN DEPORTIVA CONSTITUIDA // ALIANZAS INSTITUCIONALES
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-bacx-text-white leading-[1.1] tracking-tight">
            El futuro del ciclismo femenino se construye con aliados.
          </h2>

          <p className="font-sans text-sm md:text-base text-bacx-text-muted leading-relaxed max-w-2xl">
            BACX está constituida legalmente como corporación deportiva. Ofrecemos a empresas patrocinadoras y aliados institucionales una vía estructurada de vinculación con beneficios tributarios reales, retorno en visibilidad y el orgullo de transformar vidas a través del deporte.
          </p>

          <a
            href="mailto:alianzas@teambacx.com"
            className="group mt-2 inline-flex items-center gap-3 bg-bacx-neon-green hover:bg-bacx-mint text-bacx-bg-deep font-sans font-black text-sm md:text-base tracking-wider px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_35px_rgba(24,232,136,0.4)]"
          >
            <span>VINCULAR MI EMPRESA COMO ALIADA</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </div>
  );
};
