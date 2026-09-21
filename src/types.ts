export interface CohortPillar {
  number: string;
  category: string;
  title: string;
  description: string;
}

export interface RoadmapPhase {
  phase: string;
  duration: string;
  title: string;
  description: string;
  isHighlight?: boolean;
}

export interface EcosystemPartner {
  name: string;
  role: string;
  description: string;
}

export interface TeamMember {
  number: string;
  role: string;
  name: string;
  location: string;
  description: string;
}

export interface TeamMandate {
  number: string;
  title: string;
  description: string;
}

export interface ApplicationFormData {
  companyName: string;
  founderName: string;
  founderEmail: string;
  country: string;
  website: string;
  arrStage: string;
  usRationale: string;
}
