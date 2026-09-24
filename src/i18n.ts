import es from './content/es.json';

// Fuente única de textos del sitio (español).
// Para cambiar cualquier copy de la web, editar `src/content/es.json`.
export const content = es;

export type Content = typeof es;
export type ServiceIcon = 'globe' | 'layers' | 'zap' | 'cloud' | 'cpu';
