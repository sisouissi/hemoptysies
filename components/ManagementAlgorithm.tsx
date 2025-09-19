
import React, { useState, useMemo } from 'react';
import { CheckCircleIcon, ChevronRightIcon, FileTextIcon, SirenIcon } from './Icons';

interface HistoryItem {
    stepId: string;
    question: string;
    answer: string;
    conclusion?: string;
}
interface StepOption {
    label: string;
    nextStep: string | null;
    conclusion?: string;
}
interface Step {
    id: string;
    question: string;
    details?: React.ReactNode;
    options: StepOption[];
}

const steps: Step[] = [
    {
        id: 'start',
        question: "Étape 1 : Évaluation Initiale",
        details: (
            <div className="space-y-2">
                <p><strong>Priorité absolue : Évaluation ABCDE.</strong></p>
                <ul className="list-disc list-inside text-slate-600 text-sm">
                    <li><strong>A (Airway) :</strong> Sécuriser les voies aériennes (la cause de décès est l'asphyxie).</li>
                    <li><strong>B (Breathing) :</strong> Oxygénation pour maintenir la saturation &gt; 90%.</li>
                    <li><strong>C (Circulation) :</strong> Accès veineux, remplissage, transfusion si nécessaire.</li>
                </ul>
                <p>La radiographie thoracique est un premier examen qui peut localiser le saignement dans ~46% des cas, mais ne doit pas retarder la suite de la prise en charge.</p>
            </div>
        ),
        options: [
            { label: 'Instable', nextStep: 'stabilize' },
            { label: 'Stable', nextStep: 'stable_ct' }
        ]
    },
    {
        id: 'stabilize',
        question: "Prise en charge de l'instabilité",
        details: (
            <div className="space-y-2">
                <p>La stabilisation est cruciale pour éviter l'asphyxie et le choc.</p>
                <ul className="list-disc list-inside text-slate-600 text-sm">
                    <li><strong>Intubation :</strong> Utiliser un tube de gros calibre (≥ 8.0 mm) pour permettre une éventuelle bronchoscopie.</li>
                    <li><strong>Positionnement :</strong> Placer le patient en décubitus latéral, <strong>côté qui saigne en bas</strong>, pour protéger le poumon sain.</li>
                    <li><strong>Réanimation :</strong> Correction de toute coagulopathie et réanimation hémodynamique agressive.</li>
                </ul>
            </div>
        ),
        options: [
            { label: 'Procéder à la bronchoscopie souple', nextStep: 'bronchoscopy' }
        ]
    },
    {
        id: 'bronchoscopy',
        question: "Bronchoscopie souple",
        details: (
             <div className="space-y-2">
                <p>La bronchoscopie souple est un <strong>"pont thérapeutique"</strong> essentiel chez le patient instable.</p>
                <ul className="list-disc list-inside text-slate-600 text-sm">
                    <li><strong>Rôle diagnostique :</strong> Localiser précisément le site anatomique du saignement.</li>
                    <li><strong>Rôle thérapeutique temporaire :</strong> Aspirer les caillots, instiller du sérum glacé ou de l'épinéphrine, et mettre en place un bloqueur à ballonnet pour contrôler l'hémorragie en attendant un traitement définitif.</li>
                </ul>
            </div>
        ),
        options: [
            { label: 'Oui, stabilisé', nextStep: 'stable_ct' },
            { label: 'Non, toujours instable', nextStep: 'supportive_care' }
        ]
    },
    {
        id: 'supportive_care',
        question: "Poursuite des soins de support",
        details: "Le patient reste instable malgré la bronchoscopie. Les soins de support doivent être poursuivis.",
        options: [
            { label: 'Envisager des traitements bronchoscopiques avancés', nextStep: null, conclusion: '➡️ Situation critique. Poursuivre les soins de support intensifs. Discuter des traitements bronchoscopiques avancés (tamponnade par ballonnet, laser, stent). La bronchoscopie rigide peut être nécessaire en cas de saignement cataclysmique pour un meilleur contrôle des voies aériennes.' }
        ]
    },
    {
        id: 'stable_ct',
        question: "Angio-TDM thoracique",
        details: (
            <div className="space-y-2">
                <p>L'angio-TDM est <strong>l'examen de choix</strong> chez le patient stable. Sa performance est bien supérieure à la radiographie thoracique.</p>
                <ul className="list-disc list-inside text-slate-600 text-sm">
                    <li><strong>Localisation :</strong> Identifie le site du saignement avec une précision de <strong>70 à 88%</strong>.</li>
                    <li><strong>Diagnostic étiologique :</strong> Peut révéler la cause (ex: DDB, tumeur, aspergillome).</li>
                    <li><strong>Cartographie vasculaire :</strong> Fournit une carte précise des artères bronchiques et non-bronchiques pathologiques, essentielle pour guider l'embolisation.</li>
                </ul>
            </div>
        ),
        options: [
            { label: 'Oui', nextStep: 'thoracic_aortogram' },
            { label: 'Non', nextStep: 'thoracic_aortogram' }
        ]
    },
    {
        id: 'thoracic_aortogram',
        question: "Aortographie thoracique et angiographie sélective",
        details: (
            <div className="space-y-2">
                <p>Cette étape est à la fois diagnostique et thérapeutique. Elle est la porte d'entrée vers l'embolisation, qui est le traitement de première ligne.</p>
                <p className="text-slate-600 text-sm">Le radiologue recherche des signes angiographiques spécifiques :</p>
                <ul className="list-disc list-inside text-slate-600 text-sm">
                    <li>Artères hypertrophiées et tortueuses.</li>
                    <li>Hypervascularisation parenchymateuse.</li>
                    <li>Extravasation active de produit de contraste (saignement actif).</li>
                </ul>
            </div>
        ),
        options: [
            { label: 'Oui', nextStep: 'embolization' },
            { label: 'Non', nextStep: 'pulmonary_angiography' }
        ]
    },
    {
        id: 'embolization',
        question: "Embolisation",
        details: <p>L'embolisation artérielle bronchique (EAB) est le <strong>traitement de première intention</strong>. Elle consiste à occlure sélectivement les vaisseaux responsables à l'aide de microparticules. Le succès technique immédiat est de <strong>70 à 99%</strong>.</p>,
        options: [
            { label: 'Pas de récidive', nextStep: null, conclusion: '✅ Succès de l\'embolisation. Le saignement est contrôlé. Poursuivre la surveillance et planifier le traitement de la cause sous-jacente pour éviter les récidives.' },
            { label: 'Récidive du saignement', nextStep: 'rebleeding' }
        ]
    },
    {
        id: 'pulmonary_angiography',
        question: "Artériographie pulmonaire",
        details: <p>Dans environ 5% des cas, le saignement provient de la circulation pulmonaire à basse pression. Cette étape est réalisée lorsque l'angiographie systémique est négative. On recherche typiquement une cause comme un anévrisme de Rasmussen (associé à la tuberculose) ou une malformation artério-veineuse.</p>,
        options: [
            { label: 'Oui', nextStep: 'embolize_pulmonary' },
            { label: 'Non', nextStep: null, conclusion: '🔴 Source du saignement non trouvée. Continuer l\'observation et le traitement de support. Discuter d\'autres options (chirurgie) au cas par cas.' }
        ]
    },
    {
        id: 'embolize_pulmonary',
        question: "Embolisation de la source pulmonaire",
        details: "La source pulmonaire est embolisée. Surveiller une récidive du saignement.",
        options: [
            { label: 'Pas de récidive', nextStep: null, conclusion: '✅ Succès de l\'embolisation de la source pulmonaire. Le saignement est contrôlé. Poursuivre la surveillance et planifier le traitement de la cause sous-jacente.' },
            { label: 'Récidive du saignement', nextStep: 'rebleeding' }
        ]
    },
    {
        id: 'rebleeding',
        question: "Gestion de la récidive hémorragique",
        details: <p>Le taux de récidive après une première embolisation réussie se situe entre <strong>10 et 57%</strong>. La récidive peut être due à une reperméabilisation des vaisseaux embolisés ou au développement de nouvelles collatérales.</p>,
        options: [
            { label: 'Traiter la récidive', nextStep: null, conclusion: '➡️ Récidive hémorragique. Une nouvelle embolisation endovasculaire est à privilégier. Une discussion chirurgicale est nécessaire, surtout en cas d\'échecs répétés ou de causes spécifiques (anévrisme, etc.).' }
        ]
    }
];

export const ManagementAlgorithm: React.FC = () => {
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [currentStepId, setCurrentStepId] = useState<string | null>('start');
    
    const currentStep = useMemo(() => steps.find(s => s.id === currentStepId), [currentStepId]);
    const finalConclusion = useMemo(() => history[history.length - 1]?.conclusion, [history]);

    const handleAnswer = (step: Step, option: StepOption) => {
        const newHistoryItem: HistoryItem = { stepId: step.id, question: step.question, answer: option.label, conclusion: option.conclusion };
        setHistory(prev => [...prev, newHistoryItem]);
        setCurrentStepId(option.nextStep);
    };
    
    const reset = () => {
        setHistory([]);
        setCurrentStepId('start');
    };

    return (
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-slate-200 space-y-6">
            <p className="text-sm text-slate-600 text-center">Cet outil interactif suit l'algorithme de prise en charge de l'hémoptysie menaçante (Fig. 1 de la publication). Chaque étape vous guide vers la prochaine décision clinique.</p>
            <div className="space-y-4">
                {history.map((item, index) => (
                    <div key={index} className="p-4 bg-slate-100 rounded-lg animate-fade-in">
                        <p className="font-semibold text-slate-600">{item.question}</p>
                        <p className="text-red-700 font-medium flex items-center gap-2 mt-1">
                            <ChevronRightIcon className="h-4 w-4" />
                            Votre réponse : {item.answer}
                        </p>
                    </div>
                ))}
            </div>

            {currentStep && !finalConclusion && (
                <div className="p-5 border-2 border-red-400 rounded-xl bg-red-50/50 animate-fade-in">
                     <div className="flex items-start gap-3">
                        <FileTextIcon className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-bold text-slate-800">{currentStep.question}</h3>
                            {currentStep.details && <div className="text-slate-600 mt-2 text-sm space-y-2">{currentStep.details}</div>}
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                        {currentStep.options.map(option => (
                            <button key={option.label} onClick={() => handleAnswer(currentStep, option)} className="w-full text-center px-4 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition-all shadow-sm">
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            
            {finalConclusion && (
                <div className={`p-5 border-2 rounded-xl animate-fade-in ${finalConclusion.startsWith('✅') ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50'}`}>
                    <h3 className={`font-bold text-lg flex items-center gap-3 ${finalConclusion.startsWith('✅') ? 'text-green-800' : 'text-red-800'}`}>
                        {finalConclusion.startsWith('✅') ? <CheckCircleIcon className="h-6 w-6" /> : <SirenIcon className="h-6 w-6" />}
                        Conclusion de l'Algorithme
                    </h3>
                    <p className={`mt-2 ${finalConclusion.startsWith('✅') ? 'text-green-900' : 'text-red-900'}`}>{finalConclusion}</p>
                </div>
            )}

            {(history.length > 0) && (
                <div className="mt-6 text-center">
                    <button onClick={reset} className="px-6 py-2 bg-slate-600 text-white rounded-md font-semibold hover:bg-slate-700 transition-all text-sm">
                        Recommencer
                    </button>
                </div>
            )}
             <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.4s ease-out forwards;
                }
            `}</style>
        </div>
    );
};
