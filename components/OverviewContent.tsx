import React, { useState } from 'react';
import { OVERVIEW_CARDS, REFERENCES } from '../data/hemoptysisData';
import type { OverviewCard } from '../types';
import { Modal } from './Modal';
import { QuoteIcon } from './Icons';

const InfoCard: React.FC<{ card: OverviewCard; onMoreInfoClick: () => void }> = ({ card, onMoreInfoClick }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 h-full flex flex-col">
    <div className="flex-grow">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-red-100 p-2 rounded-full">
            <card.icon className="h-6 w-6 text-red-700" />
        </div>
        <h4 className="text-lg font-bold text-slate-800">{card.title}</h4>
      </div>
      <div className="text-slate-600 text-sm leading-relaxed space-y-2" dangerouslySetInnerHTML={{ __html: card.content }} />
    </div>
    <div className="mt-4 pt-4 border-t border-slate-200">
      <button 
        onClick={onMoreInfoClick} 
        className="w-full text-center px-4 py-2 bg-red-50 text-red-700 rounded-md font-semibold hover:bg-red-100 transition-all text-sm">
        En savoir plus
      </button>
    </div>
  </div>
);

export const OverviewContent: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<OverviewCard | null>(null);

  const handleMoreInfo = (card: OverviewCard) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div>
      <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 mb-8">
        <p className="text-slate-700 text-lg">
          L'hémoptysie menaçante (ou grave, massive) est une urgence médicale associée à une mortalité significative. Elle nécessite une approche diagnostique et thérapeutique rapide, structurée et multidisciplinaire.
        </p>
        <p className="text-slate-600 mt-4">
          Cette application fournit un guide basé sur la littérature pour la stabilisation initiale, la localisation de la source de saignement et les options de traitement, incluant l'embolisation d'artère bronchique, la bronchoscopie interventionnelle et la chirurgie.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {OVERVIEW_CARDS.map(card => (
          <InfoCard key={card.title} card={card} onMoreInfoClick={() => handleMoreInfo(card)} />
        ))}
      </div>

      <div className="mt-12">
        <div className="flex items-center gap-3 mb-4">
            <div className="text-red-600"><QuoteIcon className="h-6 w-6" /></div>
            <h3 className="text-2xl font-bold text-slate-700">Références Principales</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 space-y-4">
            {REFERENCES.map((ref, index) => (
              <div key={ref.id} className={index > 0 ? "pt-4 border-t border-slate-200" : ""}>
                <p className="text-sm text-slate-600 italic">{ref.citation}</p>
                {ref.link && <a href={ref.link} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 hover:underline text-sm font-medium mt-2 inline-block">Consulter la publication</a>}
              </div>
            ))}
        </div>
      </div>

      {selectedCard && (
        <Modal 
          isOpen={!!selectedCard} 
          onClose={handleCloseModal} 
          title={selectedCard.title}
        >
          <div 
            className="prose prose-sm max-w-none text-slate-700" 
            dangerouslySetInnerHTML={{ __html: selectedCard.detailedContent }} 
          />
        </Modal>
      )}
    </div>
  );
};