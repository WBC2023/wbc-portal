
export interface FAQItem {
  question: string;
  answer: string;
}

export interface DownloadItem {
  name: string;
  category: string;
  description: string;
}

export interface ClaimRequirement {
  type: string;
  items: string[];
}

export interface ServiceForm {
  requestType: string;
  formName: string;
  notes?: string;
}

export enum AppSection {
  HOME = 'home',
  CLAIMS = 'claims',
  SERVICE = 'service',
  ECONNECT = 'econnect',
  FAQ = 'faq',
  DOWNLOADS = 'downloads',
  CONTACT = 'contact'
}
