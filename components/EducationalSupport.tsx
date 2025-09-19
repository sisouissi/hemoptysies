import React from 'react';
import { KEY_POINTS, REFERENCES } from '../data/hemoptysisData';
import type { ClinicalPoint, Reference } from '../types';
import { CheckCircleIcon, StarIcon, QuoteIcon } from './Icons';

const SubSection: React.FC<{title: string, icon: React.ReactNode, children: React.ReactNode}> = ({title, icon, children}) => (
    <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
            <div className="text-red-600">{icon}</div>
            <h3 className="text-2xl font-bold text-slate-700">{title}</h3>
        </div>
        {children}
    </div>
);


const ClinicalPointCard: React.FC<{ item: ClinicalPoint }> = ({ item }) => {
    return (
        <div className="bg-white p-5 rounded-xl shadow-lg border border-slate-200">
            <h3 className="font-bold text-lg text-red-700 mb-3 flex items-center gap-3">
                <StarIcon className="h-5 w-5 fill-current text-amber-400" />
                {item.category}
            </h3>
            <ul className="space-y-2">
                {item.points.map((point, i) => (
                    <li key={i} className="flex items-start text-sm">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600" dangerouslySetInnerHTML={{ __html: point }}></span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const ReferenceCard: React.FC<{ reference: Reference }> = ({ reference }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
            <p className="text-sm text-slate-600">{reference.citation}</p>
            {reference.link && <a href={reference.link} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 hover:underline text-sm">Consulter la publication</a>}
        </div>
    );
}

export const EducationalSupport: React.FC = () => {
  return (
    <div className="space-y-12">
      <SubSection title="Points Clés de Pratique Clinique" icon={<StarIcon className="h-6 w-6" />}>
        <div className="grid md:grid-cols-2 gap-6">
          {KEY_POINTS.map((item, index) => (
             <ClinicalPointCard key={index} item={item} />
          ))}
        </div>
      </SubSection>

      <SubSection title="Références Principales" icon={<QuoteIcon className="h-6 w-6" />}>
        <div className="space-y-4">
          {REFERENCES.map((ref) => (
            <ReferenceCard key={ref.id} reference={ref} />
          ))}
        </div>
      </SubSection>
    </div>
  );
};