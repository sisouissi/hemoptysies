
import React, { useState } from 'react';
import { ManagementAlgorithm } from './components/ManagementAlgorithm';
import { EducationalSupport } from './components/EducationalSupport';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookOpenIcon, InfoIcon, ActivityIcon, ShieldAlertIcon } from './components/Icons';
import { TherapeuticModalities } from './components/TherapeuticModalities';
import { OverviewContent } from './components/OverviewContent';

const SectionWrapper: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <section>
    <div className="flex items-center gap-3 mb-6">
      <div className="bg-white p-2 rounded-full shadow-md">
        {icon}
      </div>
      <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
    </div>
    {children}
  </section>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Accueil', icon: <InfoIcon className="h-5 w-5 mr-2" /> },
    { id: 'algorithm', name: 'Algorithme de Prise en Charge', icon: <ActivityIcon className="h-5 w-5 mr-2" /> },
    { id: 'therapies', name: 'Modalités Thérapeutiques', icon: <ShieldAlertIcon className="h-5 w-5 mr-2" /> },
    { id: 'resources', name: 'Points Clés & Ressources', icon: <BookOpenIcon className="h-5 w-5 mr-2" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 flex flex-col">
      <Header />
      <main className="flex-grow w-full max-w-7xl mx-auto py-8 px-4 sm:px-6">
        <div className="mb-8">
          <div className="border-b border-slate-300">
            <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center transition-colors ${
                    activeTab === tab.id
                      ? 'border-red-500 text-red-600'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-400'
                  }`}
                  aria-current={activeTab === tab.id ? 'page' : undefined}
                >
                  {tab.icon}
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="mt-8">
          {activeTab === 'overview' && (
            <SectionWrapper title="Évaluation & Prise en Charge Initiale" icon={<InfoIcon className="h-7 w-7 text-red-600" />}>
              <OverviewContent />
            </SectionWrapper>
          )}
          {activeTab === 'algorithm' && (
            <SectionWrapper title="Algorithme de Prise en Charge" icon={<ActivityIcon className="h-7 w-7 text-red-600" />}>
              <ManagementAlgorithm />
            </SectionWrapper>
          )}
           {activeTab === 'therapies' && (
            <SectionWrapper title="Modalités Thérapeutiques" icon={<ShieldAlertIcon className="h-7 w-7 text-red-600" />}>
              <TherapeuticModalities />
            </SectionWrapper>
          )}
          {activeTab === 'resources' && (
            <SectionWrapper title="Points Clés & Ressources" icon={<BookOpenIcon className="h-7 w-7 text-red-600" />}>
              <EducationalSupport />
            </SectionWrapper>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
