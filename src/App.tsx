import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useLenisSmooth } from './hooks/useLenisSmooth';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero/Hero';
import { Marquee } from './components/UI/Marquee';
import { Manifesto } from './components/About/Manifesto';
import { TeamStructure } from './components/Team/TeamStructure';
import { ImpactPillars } from './components/Pillars/ImpactPillars';
import { PartnershipCTA } from './components/Partners/PartnershipCTA';
import { Footer } from './components/Footer';
import { CargasPage } from './pages/Cargas';

// Componente para la Landing Page Principal
const LandingPage: React.FC = () => {
  // Smooth scroll
  useLenisSmooth();

  return (
    <div className="relative w-full bg-[#040806] text-bacx-text-white overflow-x-hidden selection:bg-bacx-neon-green selection:text-bacx-bg-deep">
      {/* 1. Header Minimalista con selector ES/EN funcional */}
      <Navbar />

      {/* 2. Hero Editorial Sobrio & Técnico (100% Full-Bleed) */}
      <Hero />

      {/* Marquesina de Valores */}
      <Marquee />

      {/* 3. Quiénes Somos / Historia de la Fundadora */}
      <Manifesto />

      {/* 4. Estructura Deportiva & Categorías (Semillero, Sub-23, Élite) */}
      <TeamStructure />

      {/* 5. Sostenibilidad & Compromiso de Ruta */}
      <ImpactPillars />

      {/* 6. Alianzas Corporativas, Marco Fiscal y Formulario Oficial */}
      <PartnershipCTA />

      {/* 7. Footer Institucional */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          {/* Ruta principal de la landing */}
          <Route path="/" element={<LandingPage />} />

          {/* Ruta oficial para los registros tributarios y portal de transparencia */}
          <Route path="/cargas" element={<CargasPage />} />

          {/* Redirección por defecto */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
