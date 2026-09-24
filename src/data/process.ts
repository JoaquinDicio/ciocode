import { content } from '../i18n';

export interface Step {
  number: string;
  title: string;
  description: string;
}

// Textos desde `src/content/es.json → process.steps`.
export const steps: Step[] = [...content.process.steps];
