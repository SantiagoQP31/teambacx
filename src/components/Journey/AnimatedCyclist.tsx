import React from 'react';

interface AnimatedCyclistProps {
  className?: string;
}

export const AnimatedCyclist: React.FC<AnimatedCyclistProps> = ({ className = '' }) => {
  return (
    <div className={`relative select-none pointer-events-none ${className}`}>
      {/* SVG Vector de Ciclista Profesional con Uniforme Oficial Team BACX y Animación de Pedaleo */}
      <svg
        viewBox="0 0 320 220"
        className="w-full h-auto drop-shadow-[0_20px_25px_rgba(0,0,0,0.85)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Degradado Verde Menta Oficial BACX para el Maillot */}
          <linearGradient id="bacxJerseyGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A4DFD6" />
            <stop offset="60%" stopColor="#18E888" />
            <stop offset="100%" stopColor="#0E8F55" />
          </linearGradient>

          {/* Degradado Cuadro de Carbono */}
          <linearGradient id="carbonGrad" x1="0" y1="0" x2="1" y2="0.8">
            <stop offset="0%" stopColor="#1E2822" />
            <stop offset="50%" stopColor="#0B120E" />
            <stop offset="100%" stopColor="#050806" />
          </linearGradient>

          {/* Estilos de Animación CSS Inline */}
          <style>{`
            @keyframes wheelSpin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes crankRotate {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes pedalRight {
              0% { transform: translateY(0px) rotate(0deg); }
              25% { transform: translateY(8px) rotate(-10deg); }
              50% { transform: translateY(14px) rotate(0deg); }
              75% { transform: translateY(6px) rotate(10deg); }
              100% { transform: translateY(0px) rotate(0deg); }
            }
            @keyframes pedalLeft {
              0% { transform: translateY(14px) rotate(0deg); }
              25% { transform: translateY(6px) rotate(10deg); }
              50% { transform: translateY(0px) rotate(0deg); }
              75% { transform: translateY(8px) rotate(-10deg); }
              100% { transform: translateY(14px) rotate(0deg); }
            }
            @keyframes subtleBounce {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-1.5px); }
            }
            .spin-rear {
              transform-origin: 65px 145px;
              animation: wheelSpin 0.6s linear infinite;
            }
            .spin-front {
              transform-origin: 255px 145px;
              animation: wheelSpin 0.6s linear infinite;
            }
            .crank-spin {
              transform-origin: 155px 145px;
              animation: crankRotate 0.8s linear infinite;
            }
            .leg-right {
              transform-origin: 135px 85px;
              animation: pedalRight 0.8s ease-in-out infinite;
            }
            .leg-left {
              transform-origin: 135px 85px;
              animation: pedalLeft 0.8s ease-in-out infinite;
            }
            .torso-bounce {
              animation: subtleBounce 0.4s ease-in-out infinite;
            }
          `}</style>
        </defs>

        {/* ======================================================== */}
        {/* 1. BICICLETA: RUEDAS AERO (Carbono + Resplandor Menta)     */}
        {/* ======================================================== */}
        {/* Rueda Trasera */}
        <g className="spin-rear">
          <circle cx="65" cy="145" r="50" stroke="#060907" strokeWidth="8" />
          <circle cx="65" cy="145" r="44" stroke="#121C16" strokeWidth="10" />
          <circle cx="65" cy="145" r="39" stroke="#18E888" strokeWidth="1" opacity="0.4" />
          {/* Rayos */}
          <line x1="65" y1="105" x2="65" y2="185" stroke="#3A5445" strokeWidth="1.2" opacity="0.6" />
          <line x1="25" y1="145" x2="105" y2="145" stroke="#3A5445" strokeWidth="1.2" opacity="0.6" />
          <line x1="37" y1="117" x2="93" y2="173" stroke="#3A5445" strokeWidth="1.2" opacity="0.6" />
          <line x1="37" y1="173" x2="93" y2="117" stroke="#3A5445" strokeWidth="1.2" opacity="0.6" />
          <circle cx="65" cy="145" r="8" fill="#4A6B58" />
        </g>

        {/* Rueda Delantera */}
        <g className="spin-front">
          <circle cx="255" cy="145" r="50" stroke="#060907" strokeWidth="8" />
          <circle cx="255" cy="145" r="44" stroke="#121C16" strokeWidth="10" />
          <circle cx="255" cy="145" r="39" stroke="#18E888" strokeWidth="1" opacity="0.4" />
          {/* Rayos */}
          <line x1="255" y1="105" x2="255" y2="185" stroke="#3A5445" strokeWidth="1.2" opacity="0.6" />
          <line x1="215" y1="145" x2="295" y2="145" stroke="#3A5445" strokeWidth="1.2" opacity="0.6" />
          <line x1="227" y1="117" x2="283" y2="173" stroke="#3A5445" strokeWidth="1.2" opacity="0.6" />
          <line x1="227" y1="173" x2="283" y2="117" stroke="#3A5445" strokeWidth="1.2" opacity="0.6" />
          <circle cx="255" cy="145" r="8" fill="#4A6B58" />
        </g>

        {/* ======================================================== */}
        {/* 2. CUADRO AERO TEAM BACX                                 */}
        {/* ======================================================== */}
        {/* Vainas traseras (Chainstays & Seatstays) */}
        <line x1="65" y1="145" x2="155" y2="145" stroke="url(#carbonGrad)" strokeWidth="6" strokeLinecap="round" />
        <line x1="65" y1="145" x2="135" y2="92" stroke="url(#carbonGrad)" strokeWidth="5" strokeLinecap="round" />

        {/* Tubo de sillín */}
        <line x1="155" y1="145" x2="130" y2="78" stroke="url(#carbonGrad)" strokeWidth="8" strokeLinecap="round" />
        <line x1="130" y1="78" x2="125" y2="68" stroke="#18E888" strokeWidth="5" strokeLinecap="round" />
        {/* Sillín */}
        <path d="M 108 67 C 115 65, 142 66, 148 70 C 144 73, 115 72, 108 67 Z" fill="#0A100D" stroke="#18E888" strokeWidth="1" />

        {/* Tubo inferior (Down Tube aerodinámico con branding sutil) */}
        <line x1="155" y1="145" x2="230" y2="85" stroke="url(#carbonGrad)" strokeWidth="11" strokeLinecap="round" />
        {/* Calca verde BACX en el cuadro */}
        <line x1="175" y1="130" x2="215" y2="98" stroke="#18E888" strokeWidth="2.5" strokeLinecap="round" />

        {/* Tubo superior (Top Tube) */}
        <line x1="132" y1="82" x2="228" y2="80" stroke="url(#carbonGrad)" strokeWidth="8" strokeLinecap="round" />

        {/* Tubo de dirección & Horquilla */}
        <line x1="228" y1="76" x2="232" y2="90" stroke="url(#carbonGrad)" strokeWidth="9" strokeLinecap="round" />
        <line x1="230" y1="88" x2="255" y2="145" stroke="url(#carbonGrad)" strokeWidth="7" strokeLinecap="round" />
        <line x1="235" y1="100" x2="250" y2="135" stroke="#18E888" strokeWidth="2" strokeLinecap="round" />

        {/* Potencia & Manillar Drop Aerodinámico */}
        <path d="M 228 76 L 244 72 L 254 75 C 258 78, 258 88, 252 92 L 246 90" stroke="#080D0A" strokeWidth="5" strokeLinecap="round" fill="none" />

        {/* Plato & Bielas Animadas */}
        <g className="crank-spin">
          <circle cx="155" cy="145" r="14" fill="#1A2920" stroke="#18E888" strokeWidth="1.5" />
          <line x1="155" y1="145" x2="168" y2="132" stroke="#4A6B58" strokeWidth="4" strokeLinecap="round" />
          <circle cx="168" cy="132" r="3.5" fill="#A4DFD6" />
          <line x1="155" y1="145" x2="142" y2="158" stroke="#4A6B58" strokeWidth="4" strokeLinecap="round" />
          <circle cx="142" cy="158" r="3.5" fill="#A4DFD6" />
        </g>

        {/* ======================================================== */}
        {/* 3. ATLETA BACX: PIERNAS EN PEDALEO ANIMADO (Culotte Pro)   */}
        {/* ======================================================== */}
        {/* Pierna Izquierda (Fondo) */}
        <g className="leg-left" opacity="0.75">
          {/* Muslo izquierdo */}
          <path d="M 134 82 C 146 95, 155 110, 160 120" stroke="#0B130E" strokeWidth="14" strokeLinecap="round" />
          {/* Pantorrilla & Pie izquierdo */}
          <path d="M 160 120 L 144 156" stroke="#C59B7D" strokeWidth="9" strokeLinecap="round" />
          {/* Zapatilla menta */}
          <ellipse cx="142" cy="158" rx="8" ry="4" fill="#18E888" />
        </g>

        {/* Pierna Derecha (Primer Plano) */}
        <g className="leg-right">
          {/* Muslo derecho con Culotte Negro Team BACX */}
          <path d="M 134 82 C 148 90, 162 102, 172 115" stroke="#0B130E" strokeWidth="15" strokeLinecap="round" />
          {/* Franja menta en el culotte */}
          <path d="M 160 102 C 166 108, 170 112, 172 116" stroke="#18E888" strokeWidth="3.5" strokeLinecap="round" />
          {/* Pantorrilla derecha (Tono atlético bronceado) */}
          <path d="M 172 115 L 168 135" stroke="#D1A788" strokeWidth="9.5" strokeLinecap="round" />
          {/* Calcetín blanco aero */}
          <path d="M 168 132 L 168 138" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
          {/* Zapatilla ciclismo menta BACX */}
          <ellipse cx="168" cy="134" rx="9" ry="4.5" fill="#18E888" />
        </g>

        {/* ======================================================== */}
        {/* 4. TORSO: MAILLOT OFICIAL TEAM BACX + EMBLEMA HOJA       */}
        {/* ======================================================== */}
        <g className="torso-bounce">
          {/* Espalda y Torso en posición aerodinámica de ruta */}
          <path
            d="M 125 78 C 130 68, 150 56, 185 54 C 208 53, 218 64, 214 74 C 185 82, 155 86, 125 78 Z"
            fill="url(#bacxJerseyGrad)"
          />

          {/* Calca Oficial del Emblema BACX en el Maillot (Hoja + Tipografía) */}
          <g transform="translate(162, 58) scale(0.75)">
            {/* Hoja verde estilizada de BACX */}
            <path
              d="M 10 2 C 16 0, 22 4, 24 10 C 22 16, 14 18, 8 16 C 4 14, 2 8, 10 2 Z"
              fill="#062917"
            />
            <path
              d="M 10 2 Q 15 10 22 14"
              stroke="#A4DFD6"
              strokeWidth="1.2"
              fill="none"
            />
            {/* Texto BACX en el uniforme */}
            <text x="5" y="24" fill="#061D11" fontSize="6.5" fontFamily="Montserrat" fontWeight="900" fontStyle="italic">
              BACX
            </text>
          </g>

          {/* Brazo en posición aerodinámica hacia el manillar */}
          {/* Hombro y manga verde */}
          <ellipse cx="206" cy="67" rx="8" ry="6" fill="#18E888" />
          {/* Brazo atlético */}
          <path d="M 206 67 L 230 78 L 248 84" stroke="#D1A788" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Guante de ciclismo negro con acento menta */}
          <circle cx="248" cy="84" r="5" fill="#0B130E" />
          <circle cx="248" cy="84" r="2.5" fill="#18E888" />

          {/* Cuello y Cabeza */}
          <path d="M 212 62 L 222 56" stroke="#D1A788" strokeWidth="6" strokeLinecap="round" />

          {/* Casco Aero Team BACX (Menta / Carbono) */}
          <path
            d="M 215 54 C 218 42, 235 38, 245 44 C 252 48, 250 58, 242 62 C 230 65, 218 62, 215 54 Z"
            fill="#0B130E"
          />
          {/* Cubierta menta del casco BACX */}
          <path
            d="M 218 50 C 222 42, 235 39, 244 44 C 240 48, 230 52, 220 53 Z"
            fill="#18E888"
          />

          {/* Gafas deportivas oscuras / Visor */}
          <path d="M 238 52 Q 248 54 252 58 L 244 60 Z" fill="#0A1810" stroke="#A4DFD6" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
};
