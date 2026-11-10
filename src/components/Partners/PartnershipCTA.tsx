import React, { useState } from 'react';
import { ShieldCheck, FileText, Handshake, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/content';

export const PartnershipCTA: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].partners;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    empresa: '',
    email: '',
    interes: 'Patrocinio Deportivo',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="alianzas" className="relative w-full py-28 px-6 sm:px-12 xl:px-20 bg-[#040806] border-t border-bacx-border/20 overflow-hidden select-none">
      <div className="w-full">
        <div className="relative rounded-3xl border border-bacx-border/40 bg-gradient-to-br from-[#0c261b] via-[#071710] to-[#040907] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Resplandor decorativo de fondo */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bacx-neon-green/8 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Texto y Propuesta Institucional (Cols 1-7) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bacx-surface border border-bacx-neon-green/30 w-fit">
                <ShieldCheck className="w-4 h-4 text-bacx-neon-green" />
                <span className="font-mono text-[11px] font-bold tracking-widest text-bacx-neon-green uppercase">
                  {t.tag}
                </span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-5xl text-bacx-text-white leading-[1.1] tracking-tight">
                {t.title}
              </h2>

              <p className="font-sans text-sm sm:text-base text-bacx-text-muted leading-relaxed">
                {t.subtitle}
              </p>

              {/* Puntos clave con lenguaje legal y formalmente prudente */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-bacx-mint flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-bacx-text-white">{t.b1Title}</h4>
                    <p className="font-sans text-xs text-bacx-text-dim leading-relaxed">
                      {t.b1Desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Handshake className="w-5 h-5 text-bacx-neon-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-bacx-text-white">{t.b2Title}</h4>
                    <p className="font-sans text-xs text-bacx-text-dim leading-relaxed">
                      {t.b2Desc}
                    </p>
                  </div>
                </div>
              </div>

              <p className="font-sans text-[11px] text-bacx-text-dim border-t border-bacx-border/20 pt-4 mt-2">
                {t.disclaimer}
              </p>
            </div>

            {/* Formulario Institucional para Empresas (Cols 8-12) */}
            <div className="lg:col-span-5 bg-bacx-surface/90 border border-bacx-border/40 rounded-2xl p-6 sm:p-8 backdrop-blur-md flex flex-col gap-5 shadow-2xl">
              <div>
                <h3 className="font-display font-black text-xl text-bacx-text-white">
                  {t.formTitle}
                </h3>
                <p className="font-sans text-xs text-bacx-text-muted mt-1 leading-relaxed">
                  {t.formDesc}
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#092215] border border-bacx-neon-green/40 flex flex-col items-center text-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-bacx-neon-green" />
                  <p className="font-display font-bold text-base text-bacx-text-white">
                    {t.successTitle}
                  </p>
                  <p className="font-sans text-xs text-bacx-text-muted leading-relaxed">
                    {t.successDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block font-mono text-[10px] text-bacx-text-dim uppercase mb-1">
                      {t.lblCompany}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.phCompany}
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="w-full bg-[#05110c] border border-bacx-border/40 rounded-lg px-3.5 py-2.5 text-xs text-bacx-text-white placeholder:text-bacx-text-dim/60 focus:outline-none focus:border-bacx-neon-green transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-bacx-text-dim uppercase mb-1">
                      {t.lblEmail}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.phEmail}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#05110c] border border-bacx-border/40 rounded-lg px-3.5 py-2.5 text-xs text-bacx-text-white placeholder:text-bacx-text-dim/60 focus:outline-none focus:border-bacx-neon-green transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-bacx-text-dim uppercase mb-1">
                      {t.lblInterest}
                    </label>
                    <select
                      value={formData.interes}
                      onChange={(e) => setFormData({ ...formData, interes: e.target.value })}
                      className="w-full bg-[#05110c] border border-bacx-border/40 rounded-lg px-3.5 py-2.5 text-xs text-bacx-text-white focus:outline-none focus:border-bacx-neon-green transition-colors"
                    >
                      <option value="Patrocinio Deportivo">{t.opt1}</option>
                      <option value="Alianza Ambiental">{t.opt2}</option>
                      <option value="Apoyo al Semillero">{t.opt3}</option>
                      <option value="Información General">{t.opt4}</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="group mt-2 w-full flex items-center justify-center gap-2 bg-bacx-neon-green hover:bg-bacx-mint text-bacx-bg-deep font-sans font-black text-xs tracking-wider py-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.01] shadow-[0_0_20px_rgba(24,232,136,0.25)] cursor-pointer"
                  >
                    <span>{t.btnSubmit}</span>
                    <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}

              <div className="border-t border-bacx-border/20 pt-3 flex items-center justify-between text-[10px] font-mono text-bacx-text-dim">
                <span>{t.directChannel}</span>
                <span className="text-bacx-mint">alianzas@teambacx.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
