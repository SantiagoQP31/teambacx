import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ArrowUpRight, Leaf, ShieldCheck } from 'lucide-react';
import { AnimatedCyclist } from './AnimatedCyclist';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export const JourneySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cyclistWrapperRef = useRef<HTMLDivElement>(null);
  const roadPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const cyclist = cyclistWrapperRef.current;
    const path = roadPathRef.current;

    if (!container || !cyclist || !path) return;

    // GSAP Timeline to animate the cyclist travelling along the road path
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
      },
    });

    // Move along road path, auto-rotate according to curve tangent, and scale up in Z-perspective
    tl.to(cyclist, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.7],
        autoRotate: true,
      },
      scale: 2.1, // Grows from 0.7 in the distance to 2.1 in heroic close-up!
      ease: 'none',
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-[#040B08] text-bacx-text-white overflow-hidden">
      {/* ======================================================== */}
      {/* 1. EL CAMINO SERPENTEANTE EN VERDE TENUE (Full-Bleed SVG) */}
      {/* ======================================================== */}
      <div className="absolute inset-0 pointer-events-none w-full h-full z-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 4000"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Degradado Verde Tenue Auténtico para el Asfalto */}
            <linearGradient id="roadRibbonGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1C402E" />
              <stop offset="30%" stopColor="#143224" />
              <stop offset="70%" stopColor="#102A1E" />
              <stop offset="100%" stopColor="#0B1E15" />
            </linearGradient>

            {/* Resplandor Atmosférico Sutil */}
            <filter id="roadGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="16" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Halo sutil de fondo */}
          <path
            d="M 720 640 C 720 980, 260 1250, 260 1700 C 260 2150, 1180 2400, 1180 2900 C 1180 3400, 720 3550, 720 3950"
            stroke="#18E888"
            strokeWidth="56"
            opacity="0.08"
            filter="url(#roadGlow)"
          />

          {/* Cinta Asfáltica (Amplitud moderada de 38px, verde tenue) */}
          <path
            d="M 720 640 C 720 980, 260 1250, 260 1700 C 260 2150, 1180 2400, 1180 2900 C 1180 3400, 720 3550, 720 3950"
            stroke="url(#roadRibbonGrad)"
            strokeWidth="38"
            strokeLinecap="round"
          />

          {/* Bordes delimitadores de la ruta */}
          <path
            d="M 720 640 C 720 980, 260 1250, 260 1700 C 260 2150, 1180 2400, 1180 2900 C 1180 3400, 720 3550, 720 3950"
            stroke="#2B6B4C"
            strokeWidth="1.8"
          />

          {/* Línea Central Discontinua en Verde Menta */}
          <path
            d="M 720 640 C 720 980, 260 1250, 260 1700 C 260 2150, 1180 2400, 1180 2900 C 1180 3400, 720 3550, 720 3950"
            stroke="#A4DFD6"
            strokeWidth="2"
            strokeDasharray="14 18"
            opacity="0.65"
          />

          {/* Path Invisible de Referencia para el MotionPath de GSAP */}
          <path
            ref={roadPathRef}
            id="road-path"
            d="M 720 640 C 720 980, 260 1250, 260 1700 C 260 2150, 1180 2400, 1180 2900 C 1180 3400, 720 3550, 720 3950"
            stroke="transparent"
            fill="none"
          />
        </svg>
      </div>

      {/* ======================================================== */}
      {/* 2. LA CICLISTA ANIMADA PEDALEANDO EN RUTA (Z-Space / Motion) */}
      {/* ======================================================== */}
      <div className="absolute inset-0 pointer-events-none w-full h-full z-20">
        <div
          ref={cyclistWrapperRef}
          className="absolute top-0 left-0 w-44 md:w-56 -translate-x-1/2 -translate-y-1/2 will-change-transform"
          style={{ transform: 'scale(0.7)' }}
        >
          <AnimatedCyclist />
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. NARRATIVA CONTINUA (Full-Bleed, Sin Cajas, Editorial) */}
      {/* ======================================================== */}

      {/* ACTO 1: HERO / EL PUNTO DE PARTIDA (h-screen) */}
      <section className="relative w-full min-h-screen flex flex-col justify-between px-6 md:px-16 pt-32 pb-16 z-30">
        {/* Tipografía Colosal de Fondo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <span className="font-display font-black text-[22vw] leading-none tracking-tighter text-white/[0.04] select-none">
            TEAM BACX
          </span>
        </div>

        {/* Declaración Humana Principal */}
        <div className="max-w-4xl mx-auto text-center relative z-10 my-auto">
          <h1 className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-bacx-text-white leading-[1.15] tracking-tight">
            El equipo de ciclismo femenino que pedalea para abrir camino a las mujeres y cuidar el planeta.
          </h1>

          <p className="font-sans text-sm md:text-base text-bacx-text-muted max-w-xl mx-auto mt-6 leading-relaxed">
            Una corporación deportiva nacida desde la experiencia en el alto rendimiento para transformar vidas y construir un futuro sostenible.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="w-2 h-2 rounded-full bg-bacx-neon-green animate-ping" />
            <span className="font-mono text-xs font-bold tracking-widest text-bacx-mint uppercase">
              Desliza para recorrer la etapa
            </span>
          </div>
        </div>

        {/* Espacio reservado para que la ciclista empiece en el centro */}
        <div className="w-full h-36" />
      </section>

      {/* ACTO 2: EL IMPULSO & EL SEMILLERO (Curva Izquierda) */}
      <section className="relative w-full min-h-screen flex items-center px-6 md:px-16 py-24 z-30">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Espacio izquierdo reservado para la curva de la ciclista (Cols 1-5) */}
          <div className="md:col-span-5 h-64 md:h-auto pointer-events-none" />

          {/* Narrativa a la derecha (Cols 6-12) */}
          <div className="md:col-span-7 flex flex-col gap-6 md:pl-12">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-bacx-neon-green" />
              <span className="font-mono text-xs font-bold tracking-widest text-bacx-mint uppercase">
                EL ORIGEN &amp; EL SEMILLERO FORMATIVO
              </span>
            </div>

            <h2 className="font-display font-black text-3xl md:text-5xl text-bacx-text-white leading-[1.1] tracking-tight">
              Nacimos para cambiar las reglas del juego en el deporte.
            </h2>

            <div className="w-20 h-0.5 bg-bacx-neon-green" />

            <p className="font-sans text-sm md:text-base text-bacx-text-muted leading-relaxed">
              Durante décadas, el talento de las mujeres en el ciclismo ha competido en desventaja: la falta de patrocinio digno, la invisibilidad en los medios y la escasez de semilleros estructurados han frenado a generaciones de deportistas.
            </p>

            <p className="font-sans text-sm md:text-base text-bacx-text-muted leading-relaxed">
              BACX nace de la trayectoria de ciclistas profesionales que decidieron pasar de la queja a la construcción: estructuramos una corporación para formar, acompañar y proyectar internacionalmente a las jóvenes ciclistas con respaldo integral.
            </p>

            <blockquote className="border-l-2 border-bacx-mint pl-4 py-1 italic font-sans text-base md:text-lg text-bacx-text-white">
              «No se trata solo de ganar carreras: se trata de que ninguna mujer tenga que pedalear sola para cumplir sus sueños.»
            </blockquote>
          </div>
        </div>
      </section>

      {/* ACTO 3: CONCIENCIA AMBIENTAL (Curva Derecha) */}
      <section className="relative w-full min-h-screen flex items-center px-6 md:px-16 py-24 z-30">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Narrativa a la izquierda (Cols 1-7) */}
          <div className="md:col-span-7 flex flex-col gap-6 md:pr-12">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-bacx-neon-green" />
              <span className="font-mono text-xs font-bold tracking-widest text-bacx-mint uppercase">
                SOSTENIBILIDAD &amp; CUIDADO DEL ENTORNO
              </span>
            </div>

            <h2 className="font-display font-black text-3xl md:text-5xl text-bacx-text-white leading-[1.1] tracking-tight">
              Cuidar las carreteras y paisajes que nos ven crecer.
            </h2>

            <div className="w-20 h-0.5 bg-bacx-mint" />

            <p className="font-sans text-sm md:text-base text-bacx-text-muted leading-relaxed">
              El ciclismo es el deporte que más íntimamente convive con la naturaleza. Sin embargo, a menudo las competencias dejan una huella ambiental nociva de plásticos y residuos que ensucian los puertos y montañas.
            </p>

            <p className="font-sans text-sm md:text-base text-bacx-text-muted leading-relaxed">
              En BACX asumimos la sostenibilidad desde la acción honesta y diaria: entrenamientos sin plásticos de un solo uso, prácticas de ruta limpia y educación comunitaria en cada municipio que recorre nuestro equipo.
            </p>

            {/* Métricas desnudas sin cajas */}
            <div className="flex items-center gap-12 pt-4">
              <div>
                <p className="font-display font-black text-3xl md:text-4xl text-bacx-neon-green">0%</p>
                <p className="font-mono text-xs text-bacx-text-dim mt-1">Plásticos de un solo uso en ruta</p>
              </div>
              <div className="w-px h-12 bg-bacx-border" />
              <div>
                <p className="font-display font-black text-3xl md:text-4xl text-bacx-text-white">100%</p>
                <p className="font-mono text-xs text-bacx-text-dim mt-1">Compromiso ético de conservación</p>
              </div>
            </div>
          </div>

          {/* Espacio derecho reservado para la curva de la ciclista (Cols 8-12) */}
          <div className="md:col-span-5 h-64 md:h-auto pointer-events-none" />
        </div>
      </section>

      {/* ACTO 4: LA META & ALIANZAS CORPORATIVAS (Llegada al frente) */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-16 py-24 z-30 text-center">
        {/* Espacio superior para la llegada de la ciclista a escala máxima */}
        <div className="w-full h-48 md:h-72 pointer-events-none" />

        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-bacx-neon-green" />
            <span className="font-mono text-xs font-bold tracking-widest text-bacx-neon-green uppercase">
              CORPORACIÓN DEPORTIVA CONSTITUIDA // ALIANZAS CONCRETAS
            </span>
          </div>

          <h2 className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-bacx-text-white leading-[1.1] tracking-tight">
            El futuro del ciclismo femenino se construye con aliados.
          </h2>

          <p className="font-sans text-sm md:text-base text-bacx-text-muted leading-relaxed max-w-2xl">
            Team BACX no es solo una idea: es una corporación deportiva constituida legalmente. Ofrecemos a empresas patrocinadoras y aliados institucionales una vía estructurada de vinculación con beneficios tributarios reales, retorno en visibilidad y el orgullo de impulsar a las mujeres deportistas de Colombia y la región.
          </p>

          <a
            href="mailto:alianzas@teambacx.com"
            className="group mt-4 inline-flex items-center gap-3 bg-bacx-neon-green hover:bg-bacx-mint text-bacx-bg-deep font-sans font-black text-sm md:text-base tracking-wider px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(24,232,136,0.35)]"
          >
            <span>VINCULAR MI EMPRESA COMO ALIADA</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </section>
    </div>
  );
};
