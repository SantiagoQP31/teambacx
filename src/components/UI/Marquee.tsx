import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/content';

interface MarqueeProps {
  speed?: number;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  className = '',
}) => {
  const { language } = useLanguage();
  const text = translations[language].marquee;
  return (
    <div className={`relative w-full overflow-hidden py-4 border-y border-bacx-border/30 bg-[#06120D] select-none ${className}`}>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
        {/* Render twice for seamless loop */}
        {[...text, ...text].map((item, idx) => (
          <div key={idx} className="flex items-center gap-12">
            <span className="font-display font-black text-xl sm:text-2xl tracking-wider text-bacx-text-white/40 hover:text-bacx-neon-green transition-colors cursor-default">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-bacx-neon-green/60" />
          </div>
        ))}
      </div>
    </div>
  );
};
