export interface OverviewCard {
  title: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  content: string;
  detailedContent: string;
}

export interface TherapeuticModality {
  title: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  content: string;
}

export interface ClinicalPoint {
  category: string;
  points: string[];
}

export interface Reference {
  id: string;
  citation: string;
  link?: string;
}