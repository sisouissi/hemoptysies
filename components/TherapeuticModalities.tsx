
import React, { useState } from 'react';
import { THERAPEUTIC_MODALITIES } from '../data/hemoptysisData';
import { ChevronRightIcon } from './Icons';

const ModalityAccordion: React.FC<{ modality: typeof THERAPEUTIC_MODALITIES[0] }> = ({ modality }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-red-400 focus-within:border-red-500">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-4">
          <modality.icon className="h-7 w-7 text-red-600" />
          {modality.title}
        </span>
        <ChevronRightIcon className={`h-6 w-6 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-5 border-t-2 border-slate-200 bg-slate-50/70">
          <div className="prose prose-sm max-w-none text-slate-700" dangerouslySetInnerHTML={{ __html: modality.content }} />
        </div>
      )}
    </div>
  );
};

export const TherapeuticModalities: React.FC = () => {
    return (
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 mb-6">
            <p className="text-slate-700">La gestion de l'hémoptysie menaçante est une course contre la montre qui repose sur trois piliers : <strong>la stabilisation du patient, la localisation du saignement, et l'arrêt de l'hémorragie</strong>. Explorez ci-dessous les principales modalités thérapeutiques.</p>
        </div>
        {THERAPEUTIC_MODALITIES.map((modality, index) => (
          <ModalityAccordion key={index} modality={modality} />
        ))}
      </div>
    );
};