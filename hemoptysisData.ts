
import {
    SirenIcon,
    AlertTriangleIcon,
    UsersIcon,
    FileTextIcon,
    ActivityIcon,
    HeartPulseIcon,
    ShieldAlertIcon,
    PillIcon,
    HomeIcon
} from '../components/Icons';
import type { OverviewCard, TherapeuticModality, ClinicalPoint, Reference } from '../types';

export const OVERVIEW_CARDS: OverviewCard[] = [
    {
        title: "Définition et Gravité",
        icon: SirenIcon,
        content: "<p>L'hémoptysie menaçante est définie moins par le volume que par la <strong>conséquence physiologique</strong>. Le risque principal est l'asphyxie, avec une mortalité de 9 à 38%.</p>",
        detailedContent: `
            <h3>Définition Classique vs. Moderne</h3>
            <p>Historiquement, l'hémoptysie massive était définie par des seuils de volume variables :</p>
            <ul>
                <li>Débit > 100 mL/h</li>
                <li>Volume total > 500 mL en 24h</li>
                <li>Selon la SFAR, > 200 mL en une fois ou > 500 mL en 24h</li>
            </ul>
            <p>Cependant, la définition moderne, plus clinique, d'hémoptysie <strong>menaçante (ou grave)</strong> repose sur la présence d'une <strong>conséquence physiologique</strong>, indépendamment du volume :</p>
            <ul>
                <li><strong>Instabilité Hémodynamique :</strong> Hypotension, tachycardie, signes de choc.</li>
                <li><strong>Anomalie des Échanges Gazeux :</strong> Hypoxémie, nécessité d'une ventilation.</li>
                <li><strong>Obstruction des Voies Aériennes :</strong> Risque d'asphyxie, qui est la <strong>première cause de mortalité</strong>.</li>
            </ul>
            <p>Ainsi, un faible volume peut être "massif" chez un patient fragile (ex: BPCO sévère), tandis qu'un grand volume peut être mieux toléré par un patient sans comorbidités. <strong>On traite le patient, pas un chiffre.</strong> La mortalité rapportée pour l'hémoptysie menaçante varie de <strong>9 à 38%</strong>.</p>
        `
    },
    {
        title: "Étiologies et Sources",
        icon: FileTextIcon,
        content: "<p>Les causes sont variées (<strong>BATTLE CAMP</strong>). Le saignement provient de la circulation <strong>bronchique</strong> (haute pression) dans 90% des cas.</p>",
        detailedContent: `
            <h3>Origine du Saignement</h3>
             <ul>
                <li><strong>Circulation Artérielle Bronchique (90% des cas) :</strong> Ces artères naissent de l'aorte et sont à haute pression (pression systémique). L'inflammation chronique les rend dilatées, tortueuses et fragiles, expliquant les saignements abondants.</li>
                <li><strong>Circulation Artérielle Pulmonaire (5% des cas) :</strong> Système à basse pression. Le saignement est souvent moins grave, sauf dans des cas spécifiques comme la rupture d'un anévrisme de Rasmussen (associé à la tuberculose).</li>
                 <li><strong>Artères Systémiques Non-Bronchiques (5% des cas) :</strong> Artères intercostales, mammaires internes, etc.</li>
            </ul>
            <h3>Mnémonique des Étiologies : BATTLE CAMP</h3>
            <p>Cette mnémonique aide à couvrir le large spectre des causes possibles :</p>
            <ul>
                <li><strong>B</strong> - Bronchite / Bronchectasie (DDB) - <em>Cause très fréquente</em></li>
                <li><strong>A</strong> - Aspergillome / Causes Auto-immunes (ex: vascularites)</li>
                <li><strong>T</strong> - Tumeur (cancer bronchique primitif ou métastases)</li>
                <li><strong>T</strong> - Tuberculose (active ou séquellaire) - <em>Cause majeure dans les zones d'endémie</em></li>
                <li><strong>L</strong> - Abcès pulmonaire (Lung Abscess)</li>
                <li><strong>E</strong> - Embolie pulmonaire</li>
                <li><strong>C</strong> - Coagulopathie / Cathéter (ex: Swan-Ganz)</li>
                <li><strong>A</strong> - Malformation Artério-Veineuse (MAV) / Fistule Aorto-bronchique</li>
                <li><strong>M</strong> - Sténose Mitrale (Mitral Stenosis)</li>
                <li><strong>P</strong> - Pneumonie nécrosante</li>
            </ul>
        `
    },
    {
        title: "Prise en Charge Pré-Hospitalière",
        icon: HomeIcon,
        content: "<p>Avant même l'arrivée à l'hôpital, des gestes simples peuvent être vitaux : <strong>positionnement, oxygénation et orientation rapide</strong> vers un centre adapté.</p>",
        detailedContent: `
            <h3>Objectifs en Pré-Hospitalier</h3>
            <p>La prise en charge débute sur les lieux de l'événement. Les objectifs sont d'éviter l'asphyxie et de transporter le patient dans les meilleures conditions possibles.</p>
            <ul>
                <li><strong>Position de sécurité :</strong> Mettre le patient en <strong>décubitus latéral strict</strong>, du côté du saignement si connu, sinon en position latérale de sécurité standard.</li>
                <li><strong>Oxygénothérapie :</strong> Administrer de l'oxygène à haut débit au masque à haute concentration pour maintenir une SpO2 > 92%.</li>
                <li><strong>Avis spécialisé et orientation :</strong> Contacter le SAMU/SMUR pour une médicalisation et un transport rapide vers un <strong>centre hospitalier doté d'un plateau technique complet</strong> (réanimation, radiologie interventionnelle, chirurgie thoracique).</li>
                 <li><strong>Voie veineuse :</strong> Si possible, poser une voie veineuse périphérique de bon calibre en vue d'une réanimation.</li>
            </ul>
        `
    },
    {
        title: "Évaluation Initiale à l'Hôpital",
        icon: AlertTriangleIcon,
        content: "<p>Priorité à la <strong>sécurisation ABCDE</strong>. Attention au piège de la pseudo-hémoptysie (saignement ORL ou digestif). Le positionnement du patient reste une étape clé.</p>",
        detailedContent: `
            <h3>Actions Immédiates : L'Approche ABCDE</h3>
            <p>Une évaluation structurée est essentielle. <strong>Piège à éviter : la pseudo-hémoptysie</strong>. Examinez toujours le nez, la bouche et le pharynx et demandez au patient si le sang a été vomi (hématémèse, souvent plus sombre, "marc de café") ou toussé (hémoptysie, souvent rouge vif, spumeux).</p>
            <ol>
                <li><strong>A - Airway (Voies Aériennes) :</strong> Priorité absolue. Intubation si nécessaire avec un tube de gros calibre (≥ 8.0 mm) pour permettre une bronchoscopie. Envisager une intubation sélective si le côté du saignement est connu.</li>
                <li><strong>B - Breathing (Respiration) :</strong> Oxygénothérapie à haut débit (objectif Sat O2 > 90%).</li>
                <li><strong>C - Circulation (Hémodynamique) :</strong> Deux voies veineuses de gros calibre, remplissage, transfusion (objectif Hb > 7-8 g/dL), correction rapide de la coagulopathie.</li>
                <li><strong>D - Disability (Neurologique) :</strong> Évaluer l'état de conscience (score de Glasgow).</li>
                <li><strong>E - Exposure / Environment (Positionnement) :</strong> <strong>Maintenir le patient en décubitus latéral du côté du saignement identifié ou suspecté</strong> pour protéger le poumon sain par gravité.</li>
            </ol>
        `
    },
    {
        title: "Imagerie Diagnostique",
        icon: ActivityIcon,
        content: "<p>L'<strong>angio-TDM thoracique</strong> est l'examen de choix. Il localise le saignement avec une précision de 70-88% et planifie l'embolisation.</p>",
        detailedContent: `
            <h3>Le Rôle Central de l'Angio-TDM Thoracique</h3>
            <p>Une fois le patient stabilisé, l'<strong>angio-scanner (TDM) thoracique avec injection de produit de contraste</strong> est l'examen clé. Il est supérieur à la radiographie thoracique qui ne localise le site que dans 46% des cas.</p>
            <p>L'angio-TDM a un triple objectif :</p>
            <ul>
                <li><strong>Diagnostique :</strong> Il peut révéler la cause du saignement (tumeur, DDB, aspergillome, MAV...). Il détermine la cause dans 77% des cas (contre 8% pour la bronchoscopie).</li>
                <li><strong>Localisateur :</strong> Il identifie le site précis du saignement avec une efficacité de <strong>70 à 88%</strong> (signes de remplissage alvéolaire, hyperdensité spontanée).</li>
                <li><strong>Cartographique :</strong> C'est son rôle le plus important. Il fournit une cartographie détaillée des artères bronchiques et systémiques non-bronchiques, guidant ainsi le radiologue interventionnel pour une embolisation plus rapide et plus sûre.</li>
            </ul>
        `
    },
    {
        title: "Approche Multidisciplinaire",
        icon: UsersIcon,
        content: "<p>La prise en charge optimale nécessite une collaboration étroite et immédiate entre <strong>réanimateurs, pneumologues, radiologues interventionnels et chirurgiens thoraciques</strong>.</p>",
        detailedContent: `
            <p>Une prise en charge réussie repose sur une collaboration rapide et efficace entre plusieurs spécialités. Le "hemoptysis team" doit être mobilisé sans délai.</p>
            <h3>Rôles Clés des Spécialistes</h3>
            <ul>
                <li><strong>Le Réanimateur / Urgentiste :</strong> Il est le chef d'orchestre initial. Il assure la <strong>stabilisation ABCDE</strong>.</li>
                <li><strong>Le Pneumologue Interventionnel :</strong> Son rôle est de réaliser la <strong>bronchoscopie souple</strong> pour localiser et potentiellement contrôler temporairement le saignement, surtout si le patient est instable ou si le TDM n'est pas localisateur.</li>
                <li><strong>Le Radiologue Interventionnel :</strong> Il réalise l'<strong>artériographie et l'embolisation</strong>, qui est le traitement de première intention.</li>
                <li><strong>Le Chirurgien Thoracique :</strong> Il intervient en <strong>dernier recours</strong>, en cas d'échec de l'embolisation ou pour certaines étiologies spécifiques (traumatisme, aspergillome...).</li>
            </ul>
        `
    }
];


export const THERAPEUTIC_MODALITIES: TherapeuticModality[] = [
    {
        title: "Embolisation d'Artère Bronchique (EAB)",
        icon: ActivityIcon,
        content: `
            <h3>Principe</h3>
            <p>Considérée comme le <strong>traitement de référence (gold standard)</strong>, l'EAB vise à occlure de manière sélective l'artère responsable du saignement. Le radiologue interventionnel navigue via un cathéter jusqu'aux artères bronchiques (ou autres artères systémiques pathologiques), les identifie, puis injecte des agents d'embolisation (microparticules, colle, etc.) pour bloquer le flux sanguin.</p>
            
            <h3>Efficacité et Récidive</h3>
            <ul>
                <li><strong>Taux de succès immédiat élevé :</strong> Le contrôle de l'hémorragie est obtenu dans <strong>70 à 99%</strong> des cas.</li>
                <li><strong>Caractère mini-invasif :</strong> Évite une chirurgie lourde en urgence.</li>
                <li><strong>Récidive :</strong> Le saignement peut récidiver chez <strong>10 à 57%</strong> des patients (médiane de 6 mois à 1 an), souvent par revascularisation ou développement de collatérales. Une nouvelle embolisation est alors généralement possible.</li>
            </ul>
        `
    },
    {
        title: "Bronchoscopie Interventionnelle",
        icon: HeartPulseIcon,
        content: `
            <h3>Rôle Diagnostique et Thérapeutique</h3>
            <p>La bronchoscopie souple est un outil polyvalent, particulièrement chez le patient instable. Son premier rôle est de <strong>localiser l'origine du saignement</strong>. Elle sert aussi de <strong>pont thérapeutique</strong> en attendant le traitement définitif (embolisation ou chirurgie).</p>
            
            <h3>Techniques Hémostatiques Locales</h3>
            <ul>
                <li><strong>Lavage au sérum physiologique glacé.</strong></li>
                <li><strong>Instillation de vasoconstricteurs</strong> (Adrénaline 1:20 000).</li>
                <li><strong>Tamponnade par ballonnet (Fogarty) :</strong> La technique la plus efficace pour un contrôle temporaire, en isolant le segment qui saigne.</li>
                <li><strong>Bronchoscopie Rigide :</strong> Peut être nécessaire en cas d'hémorragie cataclysmique pour un meilleur contrôle des voies aériennes et une meilleure aspiration.</li>
            </ul>
        `
    },
     {
        title: "Traitements Médicaux (Acide Tranexamique)",
        icon: PillIcon,
        content: `
            <h3>Mécanisme d'Action</h3>
            <p>L'acide tranexamique (TXA) est un agent <strong>anti-fibrinolytique</strong>. Il empêche la dégradation des caillots sanguins en inhibant l'activation du plasminogène en plasmine, stabilisant ainsi le caillot et aidant à contrôler le saignement.</p>
            
            <h3>Posologie et Administration</h3>
            <p>Le TXA peut être utilisé comme traitement d'appoint, en particulier pour les hémoptysies submassives ou en attendant un traitement définitif pour une hémoptysie massive.</p>
            <ul>
                <li><strong>Voie Intraveineuse (IV) :</strong> <strong>1g sur 10 minutes</strong>, suivi potentiellement par une perfusion de 1g sur 8 heures.</li>
                <li><strong>Voie Nébulisée/Inhalée :</strong> <strong>500mg à 1g</strong> (dans 5-20 mL de sérum physiologique), nébulisé sur 15 minutes. Peut être répété jusqu'à 4 fois par jour. Cette voie semble prometteuse pour agir localement avec moins d'effets systémiques.</li>
            </ul>
            
            <h3>Précautions</h3>
            <p>Le TXA est généralement bien toléré. Les contre-indications incluent une histoire de thrombose artérielle ou veineuse active et une hypersensibilité connue.</p>
        `
    },
    {
        title: "Chirurgie d'Hémostase",
        icon: ShieldAlertIcon,
        content: `
            <h3>Un Traitement de Dernier Recours</h3>
            <p>La chirurgie d'hémostase en urgence est grevée d'une <strong>mortalité et morbidité très élevées</strong> (jusqu'à 40%, contre 0-18% pour la chirurgie élective). Elle est donc réservée à des situations bien précises où les autres options ont échoué ou sont impossibles.</p>

            <h3>Indications Clés</h3>
            <ul>
                <li><strong>Échec du contrôle par embolisation</strong> (après une ou plusieurs tentatives).</li>
                <li>Contre-indication ou impossibilité technique de l'embolisation.</li>
                <li>Source de saignement non accessible à l'embolisation (ex: traumatisme thoracique majeur, certaines fistules).</li>
                <li>Pathologie localisée nécessitant une résection (ex: aspergillome symptomatique, tumeur résécable).</li>
            </ul>
        `
    }
];

export const KEY_POINTS: ClinicalPoint[] = [
    {
        category: "Évaluation & Stabilisation",
        points: [
            "La priorité absolue est la <strong>sécurisation des voies aériennes</strong> ; l'asphyxie est la principale cause de mortalité.",
            "Positionner le patient en <strong>décubitus latéral</strong> du côté du saignement suspecté pour protéger le poumon sain.",
            "Envisager une <strong>intubation sélective</strong> ou l'utilisation d'un bloqueur bronchique si le côté est connu.",
            "Corriger rapidement toute coagulopathie et discuter l'antagonisation des anticoagulants."
        ]
    },
    {
        category: "Diagnostic & Localisation",
        points: [
            "L'<strong>Angio-TDM thoracique</strong> est l'examen clé pour localiser la source et guider le traitement.",
            "Chez un patient stable, <strong>ne pas retarder l'angio-TDM</strong> pour une bronchoscopie, qui devient un examen de seconde intention.",
            "La bronchoscopie souple est un pont thérapeutique pour localiser et contrôler temporairement le saignement chez le patient <strong>instable</strong>.",
            "Penser à l'<strong>embolie pulmonaire</strong> comme cause potentielle d'hémoptysie."
        ]
    },
    {
        category: "Traitement",
        points: [
            "L'<strong>embolisation d'artère bronchique (EAB)</strong> est le traitement de première intention avec un taux de succès immédiat élevé.",
            "L'<strong>acide tranexamique (TXA)</strong> IV ou nébulisé peut être utilisé en appoint.",
            "La chirurgie est un traitement de dernier recours en raison de sa mortalité élevée en urgence."
        ]
    },
    {
        category: "Critères de Sortie",
        intro: "Le patient peut être considéré pour une sortie si tous les critères suivants sont remplis :",
        points: [
            "Saignement résolu depuis <strong>plus de 24-48h</strong>.",
            "Stabilité hémodynamique sans support.",
            "Absence d'hypoxie.",
            "Bilan biologique stable (NFS, coagulation).",
            "Possibilité d'un suivi rapproché en externe."
        ]
    }
];

export const REFERENCES: Reference[] = [
    {
        id: "kathuria2020",
        citation: "Kathuria, H., Hollingsworth, H.M., Vilvendhan, R. et al. Management of life-threatening hemoptysis. j intensive care 8, 23 (2020).",
        link: "https://doi.org/10.1186/s40560-020-00441-8"
    },
    {
        id: "emcases2018",
        citation: "Helman, A. Weingart, S. Tillmann, B. Hemoptysis – ED Approach and Management. Emergency Medicine Cases. November, 2023.",
        link: "https://emergencymedicinecases.com/hemoptysis/"
    },
    {
        id: "sfar2014",
        citation: "Perinel S, Le-Guen G, Le-Beller M, Darmon M. Prise en charge de l’hémoptysie grave. Société Française d'Anesthésie et de Réanimation (SFAR). Mis en ligne le 13 Août 2014.",
        link: "https://sfar.org/prise-en-charge-de-lhemoptysie-grave/"
    }
];