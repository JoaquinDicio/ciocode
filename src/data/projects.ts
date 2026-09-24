import { content } from '../i18n';

export interface Project {
  slug: string;
  name: string;
  description: string;
  type: string;
  features?: string[];
  technologies?: string[];
  image?: string;
  url?: string;
}

// Proyectos reales desde `src/content/es.json`. No agregar métricas, clientes
// ni tecnologías no verificadas.
// Para agregar uno nuevo: sumar un objeto en `es.json → work.items` con
// `features` opcionales. Solo las landings públicas llevan `url`
// (los sistemas privados no se enlazan). Si existe captura, ponerla en
// `public/projects/` y agregar `image`: '/projects/resticy.png'.
type RawProject = {
  slug: string;
  name: string;
  description: string;
  type: string;
  features?: string[];
  technologies?: string[];
  image?: string;
  url?: string;
};

export const projects: Project[] = (content.work.items as RawProject[]).map((item) => ({
  slug: item.slug,
  name: item.name,
  description: item.description,
  type: item.type,
  features: item.features ?? [],
  technologies: item.technologies ?? [],
  image: item.image,
  url: item.url,
}));
