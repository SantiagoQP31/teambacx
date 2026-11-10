import React from 'react';
import { ArrowUpRight, Globe, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';

export const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 sm:px-12 xl:px-20 pointer-events-none select-none">
      <nav className="glass-pill pointer-events-auto rounded-full px-6 sm:px-8 py-3 flex items-center justify-between gap-6 w-full transition-all duration-300 hover:border-bacx-neon-green/40 shadow-xl">
        {/* Brand */}
        <a href="/" className="flex items-center gap-2.5 group">
          <img
            src="/images/emblem.png"
            alt="BACX Emblem"
            className="w-6 h-6 object-contain group-hover:rotate-12 transition-transform duration-300"
          />
          <span className="font-display font-black tracking-wider text-sm text-bacx-text-white">
            TEAM <span className="text-bacx-mint">BACX</span>
          </span>
        </a>

        {/* Clean Institutional Links */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-sans font-medium text-bacx-text-muted">
          <a href="/#historia" className="hover:text-bacx-mint transition-colors">
            {t.about}
          </a>
          <a href="/#equipo" className="hover:text-bacx-mint transition-colors">
            {t.team}
          </a>
          <a href="/#sostenibilidad" className="hover:text-bacx-mint transition-colors">
            {t.sustainability}
          </a>
          <a href="/#alianzas" className="hover:text-bacx-mint transition-colors">
            {t.partnerships}
          </a>
        </div>

        {/* Right side: Language Switcher + Registros Tributarios Button + Contact CTA */}
        <div className="flex items-center gap-3">
          {/* Conmutador de Idioma (ES / EN) */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/5 border border-bacx-border/30 text-[11px] font-mono text-bacx-text-muted">
            <Globe className="w-3 h-3 text-bacx-mint" />
            <button
              onClick={() => setLanguage('ES')}
              className={`font-bold transition-colors cursor-pointer ${language === 'ES' ? 'text-bacx-neon-green' : 'text-bacx-text-dim hover:text-white'}`}
            >
              ES
            </button>
            <span className="text-bacx-text-dim">|</span>
            <button
              onClick={() => setLanguage('EN')}
              className={`font-bold transition-colors cursor-pointer ${language === 'EN' ? 'text-bacx-neon-green' : 'text-bacx-text-dim hover:text-white'}`}
            >
              EN
            </button>
          </div>

          {/* Botón Destacado: Portal de Registros Tributarios (/cargas) */}
          <a
            href="/cargas"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0d261b] hover:bg-[#143a29] border border-bacx-neon-green/40 hover:border-bacx-neon-green text-bacx-mint hover:text-white font-sans text-xs font-bold transition-all duration-300 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-bacx-neon-green" />
            <span>{t.taxRecords}</span>
          </a>

          {/* Botón de Contacto Institucional */}
          <a
            href="/#alianzas"
            className="group flex items-center gap-1.5 bg-bacx-neon-green hover:bg-bacx-mint text-bacx-bg-deep font-sans font-black text-xs px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(24,232,136,0.25)]"
          >
            <span>{t.cta}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </nav>
    </header>
  );
};
