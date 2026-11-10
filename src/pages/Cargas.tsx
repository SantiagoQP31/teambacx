import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ShieldCheck, 
  ArrowLeft, 
  FileCode, 
  CheckCircle2, 
  Calendar, 
  ZoomIn, 
  ZoomOut,
  Building2
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

interface DocumentItem {
  id: string;
  name: { ES: string; EN: string };
  category: { ES: string; EN: string };
  format: 'PDF' | 'DOCX';
  date: string;
  size: string;
  entity: string;
  summary: { ES: string; EN: string };
  pages: number;
}

export const CargasPage: React.FC = () => {
  const { language } = useLanguage();
  const [selectedDocId, setSelectedDocId] = useState<string>('rut');
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  const documents: DocumentItem[] = [
    {
      id: 'rut',
      name: {
        ES: 'Registro Único Tributario (RUT)',
        EN: 'Single Tax Registry (RUT - DIAN)',
      },
      category: {
        ES: 'TRIBUTARIO',
        EN: 'TAX REGISTRY',
      },
      format: 'PDF',
      date: 'Enero 2026',
      size: '1.4 MB',
      entity: 'DIAN — Dirección de Impuestos y Aduanas Nacionales',
      summary: {
        ES: 'Identificación tributaria oficial de la Corporación Deportiva BACX bajo el régimen de entidades sin ánimo de lucro.',
        EN: 'Official tax registration of BACX Sports Corporation under the non-profit sports entity framework.',
      },
      pages: 3,
    },
    {
      id: 'camara-comercio',
      name: {
        ES: 'Certificado de Existencia y Representación Legal',
        EN: 'Certificate of Legal Existence & Representation',
      },
      category: {
        ES: 'LEGAL & CORPORATIVO',
        EN: 'LEGAL & CORPORATE',
      },
      format: 'PDF',
      date: 'Actualizado 2026',
      size: '890 KB',
      entity: 'Cámara de Comercio de Bogotá',
      summary: {
        ES: 'Constancia oficial de constitución legal, objeto social deportivo y facultades del representante legal de la corporación.',
        EN: 'Official certification of legal incorporation, sports purpose, and executive powers of the corporation.',
      },
      pages: 4,
    },
    {
      id: 'regimen-especial',
      name: {
        ES: 'Memoria Económica & Régimen Tributario Especial',
        EN: 'Economic Memorandum & Special Tax Regime',
      },
      category: {
        ES: 'RÉGIMEN TRIBUTARIO',
        EN: 'TAX REGIME COMPLIANCE',
      },
      format: 'PDF',
      date: 'Año Fiscal 2025 - 2026',
      size: '2.8 MB',
      entity: 'Ministerio del Deporte & DIAN',
      summary: {
        ES: 'Documentación justificativa de destinación de excedentes a programas deportivos y formativos de ciclismo femenino.',
        EN: 'Documentation evidencing the exclusive allocation of resources into female cycling development programs.',
      },
      pages: 12,
    },
    {
      id: 'estatutos',
      name: {
        ES: 'Estatutos Sociales de la Corporación Deportiva',
        EN: 'Corporate Bylaws & Governance Framework',
      },
      category: {
        ES: 'ESTATUTOS',
        EN: 'BYLAWS',
      },
      format: 'DOCX',
      date: 'Aprobado en Asamblea',
      size: '620 KB',
      entity: 'Asamblea General BACX',
      summary: {
        ES: 'Reglamento interno de gobierno corporativo, admisión de asociados y salvaguarda del patrimonio deportivo.',
        EN: 'Internal corporate governance, membership regulations, and asset preservation bylaws.',
      },
      pages: 18,
    },
  ];

  const selectedDoc = documents.find((d) => d.id === selectedDocId) || documents[0];

  const handleDownload = () => {
    // Generate a clean text file representing the verified document download
    const blob = new Blob(
      [
        `CORPORACIÓN DEPORTIVA TEAM BACX\nDocumento: ${selectedDoc.name[language]}\nEntidad Emisora: ${selectedDoc.entity}\nFecha de Vigencia: ${selectedDoc.date}\nEstado: Documento oficial verificado en portal de transparencia /cargas`,
      ],
      { type: 'text/plain;charset=utf-8' }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedDoc.id}-bacx.${selectedDoc.format.toLowerCase()}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#040806] text-bacx-text-white overflow-x-hidden selection:bg-bacx-neon-green selection:text-bacx-bg-deep flex flex-col justify-between">
      {/* Header institucional */}
      <Navbar />

      {/* Contenido Principal de /cargas */}
      <main className="w-full pt-32 pb-24 px-6 sm:px-12 xl:px-20 relative z-10 flex-1">
        {/* Enlace de regreso al Home */}
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-bacx-text-muted hover:text-bacx-neon-green transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{language === 'ES' ? 'Volver a la página principal' : 'Back to main website'}</span>
          </a>
        </div>

        {/* Encabezado del Portal de Transparencia */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-bacx-border/30 pb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bacx-surface border border-bacx-neon-green/30 mb-4">
              <ShieldCheck className="w-4 h-4 text-bacx-neon-green" />
              <span className="font-mono text-[11px] font-bold tracking-widest text-bacx-neon-green uppercase">
                {language === 'ES'
                  ? 'CORPORACIÓN DEPORTIVA BACX • PORTAL DE TRANSPARENCIA'
                  : 'BACX SPORTS CORPORATION • TRANSPARENCY PORTAL'}
              </span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-bacx-text-white tracking-tight uppercase leading-[1.08]">
              {language === 'ES' ? 'Registros Tributarios & ' : 'Tax Records & '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bacx-mint to-bacx-neon-green">
                {language === 'ES' ? 'Documentación Legal.' : 'Legal Compliance.'}
              </span>
            </h1>

            <p className="font-sans text-xs sm:text-sm md:text-base text-bacx-text-muted mt-5 leading-relaxed max-w-2xl">
              {language === 'ES'
                ? 'Repositorio oficial de cumplimiento normativo y transparencia de la Corporación Deportiva BACX. Este portal pone a disposición de empresas patrocinadoras, entidades aliadas y entes de control la documentación legal, tributaria y contable requerida para la formalización de convenios y la aplicación de incentivos fiscales vigentes.'
                : 'Official compliance and transparency repository of BACX Sports Corporation. This portal provides sponsoring enterprises, institutional partners, and regulatory authorities with legal, fiscal, and accounting documentation required to formalize sponsorship agreements and access applicable tax frameworks.'}
            </p>
          </div>

          {/* Ficha rápida de verificación de la entidad */}
          <div className="bg-bacx-surface/80 border border-bacx-border/40 rounded-2xl p-6 backdrop-blur-md flex flex-col gap-3 min-w-[280px]">
            <span className="font-mono text-[10px] text-bacx-mint uppercase font-bold tracking-wider">
              {language === 'ES' ? 'ESTADO DE PERSONERÍA' : 'LEGAL REGISTRATION STATUS'}
            </span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-bacx-neon-green" />
              <span className="font-display font-black text-base text-bacx-text-white">
                {language === 'ES' ? 'Entidad Activa y Registrada' : 'Active Registered Corporation'}
              </span>
            </div>
            <p className="font-sans text-[11px] text-bacx-text-dim leading-relaxed">
              {language === 'ES'
                ? 'Sede Bogotá D.C., Colombia. Constitución formal sin ánimo de lucro.'
                : 'Headquarters: Bogota D.C., Colombia. Formally registered non-profit sports entity.'}
            </p>
          </div>
        </div>

        {/* ======================================================== */}
        {/* GRID PRINCIPAL: SELECTOR DE ARCHIVOS + VISOR DE DOCUMENTO */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LISTA / SELECTOR DE DOCUMENTOS DISPONIBLES (Cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="font-mono text-xs font-bold tracking-widest text-bacx-text-muted uppercase mb-1">
              {language === 'ES' ? 'DOCUMENTOS DISPONIBLES PARA DESCARGA' : 'AVAILABLE LEGAL DOCUMENTS'}
            </span>

            {documents.map((doc) => {
              const isSelected = selectedDoc.id === doc.id;

              return (
                <div
                  key={doc.id}
                  onClick={() => setSelectedDocId(doc.id)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col gap-2.5 relative group ${
                    isSelected
                      ? 'bg-bacx-surface border-bacx-neon-green/60 shadow-xl'
                      : 'bg-[#06120D] border-bacx-border/30 hover:border-bacx-mint/40 hover:bg-[#081a13]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-wider text-bacx-mint uppercase">
                      {doc.category[language]}
                    </span>
                    <span
                      className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        doc.format === 'PDF'
                          ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                          : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      }`}
                    >
                      {doc.format}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-base sm:text-lg text-bacx-text-white leading-snug">
                    {doc.name[language]}
                  </h3>

                  <p className="font-sans text-xs text-bacx-text-dim leading-relaxed">
                    {doc.summary[language]}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-bacx-border/20 text-[11px] font-mono text-bacx-text-dim mt-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-bacx-text-muted" />
                      {doc.date}
                    </span>
                    <span>{doc.size}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* VISOR DE DOCUMENTO INTERACTIVO (Cols 6-12) */}
          <div className="lg:col-span-7 flex flex-col gap-4 sticky top-28">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold tracking-widest text-bacx-text-muted uppercase">
                {language === 'ES' ? 'VISOR PRELIMINAR DEL DOCUMENTO' : 'DOCUMENT PREVIEW VIEWER'}
              </span>

              {/* Botones de Zoom del Visor */}
              <div className="flex items-center gap-2 bg-[#06120D] border border-bacx-border/30 rounded-lg p-1 text-xs font-mono">
                <button
                  onClick={() => setZoomLevel(Math.max(80, zoomLevel - 10))}
                  className="p-1 hover:text-bacx-neon-green transition-colors cursor-pointer"
                  title="Alejar"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="px-2 text-bacx-text-dim">{zoomLevel}%</span>
                <button
                  onClick={() => setZoomLevel(Math.min(130, zoomLevel + 10))}
                  className="p-1 hover:text-bacx-neon-green transition-colors cursor-pointer"
                  title="Acercar"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Ventana de Inspección del Documento */}
            <div className="w-full rounded-2xl border border-bacx-border/50 bg-[#071710] overflow-hidden shadow-2xl flex flex-col">
              {/* Barra Superior del Visor */}
              <div className="p-4 bg-[#0a2016] border-b border-bacx-border/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 truncate">
                  {selectedDoc.format === 'PDF' ? (
                    <FileText className="w-5 h-5 text-red-400 flex-shrink-0" />
                  ) : (
                    <FileCode className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  )}
                  <div className="truncate">
                    <p className="font-display font-bold text-xs sm:text-sm text-bacx-text-white truncate">
                      {selectedDoc.name[language]}
                    </p>
                    <p className="font-mono text-[10px] text-bacx-text-dim truncate">
                      {selectedDoc.entity}
                    </p>
                  </div>
                </div>

                {/* Botón de Descarga Oficial */}
                <button
                  onClick={handleDownload}
                  className="group flex-shrink-0 flex items-center gap-1.5 bg-bacx-neon-green hover:bg-bacx-mint text-bacx-bg-deep font-sans font-black text-xs px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-md"
                >
                  <Download className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
                  <span>{language === 'ES' ? 'Descargar' : 'Download'}</span>
                </button>
              </div>

              {/* Lienzo del Visor (Simulación de documento oficial de alta fidelidad) */}
              <div className="p-6 sm:p-10 bg-[#05110c] overflow-y-auto max-h-[580px] flex justify-center items-start">
                <div
                  style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
                  className="w-full max-w-[540px] bg-white text-[#111827] rounded-xl p-8 sm:p-12 shadow-2xl flex flex-col justify-between min-h-[640px] transition-transform duration-200"
                >
                  {/* Encabezado del Documento Oficial */}
                  <div>
                    <div className="flex items-center justify-between border-b-2 border-[#111827] pb-4 mb-6">
                      <div className="flex items-center gap-3">
                        <img src="/images/emblem.png" alt="BACX" className="w-8 h-8 object-contain" />
                        <div>
                          <p className="font-black text-xs tracking-wider uppercase">
                            CORPORACIÓN DEPORTIVA TEAM BACX
                          </p>
                          <p className="text-[10px] text-gray-500 font-mono">
                            NIT: 901.8XX.XXX-X • BOGOTÁ D.C., COLOMBIA
                          </p>
                        </div>
                      </div>

                      <div className="text-right font-mono text-[9px] text-gray-400">
                        <p>{selectedDoc.format} OFICIAL</p>
                        <p>PÁG. 1 DE {selectedDoc.pages}</p>
                      </div>
                    </div>

                    {/* Título y Cuerpo del Documento */}
                    <div className="mb-6">
                      <span className="text-[10px] font-bold tracking-wider text-green-700 uppercase bg-green-50 px-2.5 py-1 rounded">
                        {selectedDoc.category[language]}
                      </span>

                      <h2 className="text-lg sm:text-xl font-black text-gray-900 mt-3 leading-snug">
                        {selectedDoc.name[language]}
                      </h2>

                      <p className="text-xs text-gray-600 mt-2 font-mono">
                        Entidad emisora / registro: {selectedDoc.entity}
                      </p>
                    </div>

                    <div className="space-y-3 text-xs text-gray-700 leading-relaxed font-sans border-t border-gray-100 pt-4">
                      <p>
                        Por medio del presente instrumento se certifica que la <strong>Corporación Deportiva BACX</strong> se encuentra debidamente inscrita y constituida conforme a las normas que rigen el Sistema Nacional del Deporte y el régimen de entidades sin ánimo de lucro en la República de Colombia.
                      </p>
                      <p className="text-gray-500 text-[11px]">
                        {selectedDoc.summary[language]}
                      </p>
                      <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-[11px] font-mono text-gray-600 mt-4">
                        <p>• Estado de inspección y vigilancia: Activo y vigente.</p>
                        <p>• Objeto institucional: Fomento, formación y desarrollo del ciclismo femenino.</p>
                        <p>• Domicilio legal: Bogotá Distrito Capital.</p>
                      </div>
                    </div>
                  </div>

                  {/* Pie con Sello de Cumplimiento */}
                  <div className="border-t border-gray-200 pt-6 mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-green-700" />
                      <div>
                        <p className="text-[10px] font-bold text-gray-800">DOCUMENTO DE CUMPLIMIENTO</p>
                        <p className="text-[9px] text-gray-500 font-mono">Verificado para fines tributarios y de patrocinio</p>
                      </div>
                    </div>

                    <div className="w-16 h-16 border-2 border-dashed border-green-700/40 rounded-full flex items-center justify-center p-1 text-center">
                      <span className="text-[8px] font-bold text-green-800 font-mono uppercase leading-tight">
                        SELLO OFICIAL
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Barra Inferior del Visor con Metadatos */}
              <div className="p-3.5 bg-[#06140e] border-t border-bacx-border/30 flex items-center justify-between text-xs font-mono text-bacx-text-dim">
                <span>Página 1 de {selectedDoc.pages}</span>
                <span className="text-bacx-mint">{selectedDoc.format} Verificado</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
