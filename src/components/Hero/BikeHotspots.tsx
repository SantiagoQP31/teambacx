import React, { useState } from 'react';
import { Shield, Sparkles, Activity } from 'lucide-react';

interface HotspotData {
  id: string;
  top: string;
  left: string;
  title: string;
  category: string;
  desc: string;
  icon: React.ReactNode;
}

export const BikeHotspots: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const hotspots: HotspotData[] = [
    {
      id: 'frame',
      top: '56%',
      left: '42%',
      category: 'TECNOLOGÍA DEPORTIVA',
      title: 'Cuadro Aero de Competición',
      desc: 'Estructura rígida de fibra de carbono para maximizar la transferencia de potencia en ascensos andinos.',
      icon: <Shield className="w-4 h-4 text-bacx-neon-green" />,
    },
    {
      id: 'jersey',
      top: '32%',
      left: '52%',
      category: 'IDENTIDAD & VALORES',
      title: 'Maillot Oficial Team BACX',
      desc: 'El color verde como declaración de sostenibilidad, inclusión femenina y respeto activo por el entorno.',
      icon: <Sparkles className="w-4 h-4 text-bacx-mint" />,
    },
    {
      id: 'crankset',
      top: '68%',
      left: '48%',
      category: 'TELEMETRÍA EN ALTITUD',
      title: 'Potenciómetro & Datos',
      desc: 'Monitoreo biométrico y de vatios para el desarrollo científico de atletas a más de 2.560 MSNM.',
      icon: <Activity className="w-4 h-4 text-bacx-electric-lime" />,
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      {hotspots.map((spot) => {
        const isActive = activeId === spot.id;

        return (
          <div
            key={spot.id}
            className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2"
            style={{ top: spot.top, left: spot.left }}
            onMouseEnter={() => setActiveId(spot.id)}
            onMouseLeave={() => setActiveId(null)}
          >
            {/* Botón Pulsante del Hotspot */}
            <button
              onClick={() => setActiveId(isActive ? null : spot.id)}
              className="relative flex items-center justify-center w-8 h-8 rounded-full focus:outline-none group cursor-pointer"
              aria-label={spot.title}
            >
              <span className="absolute w-8 h-8 rounded-full bg-bacx-neon-green/20 animate-ping" />
              <span className="absolute w-5 h-5 rounded-full bg-bacx-neon-green/40 group-hover:scale-125 transition-transform duration-300" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-bacx-neon-green border-2 border-[#040806]" />
            </button>

            {/* Ficha Técnica Desplegable (Tooltip de Lujo) */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 bg-[#0a1c14]/95 backdrop-blur-xl border border-bacx-border/60 rounded-xl p-4 shadow-2xl transition-all duration-300 pointer-events-none ${
                isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                {spot.icon}
                <span className="font-mono text-[9px] font-bold tracking-widest text-bacx-mint uppercase">
                  {spot.category}
                </span>
              </div>
              <h4 className="font-display font-black text-sm text-bacx-text-white leading-tight mb-1">
                {spot.title}
              </h4>
              <p className="font-sans text-xs text-bacx-text-muted leading-relaxed">
                {spot.desc}
              </p>

              {/* Flechita inferior del tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-[#0a1c14] border-r border-b border-bacx-border/60 transform rotate-45 -translate-y-1" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
