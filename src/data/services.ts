import { content, type ServiceIcon } from '../i18n';

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  featured?: boolean;
}

// Textos desde `src/content/es.json`. El icono se mapea a Lucide en `Services.astro`.
export const services: Service[] = content.services.items.map((item) => ({
  slug: item.slug,
  title: item.title,
  description: item.description,
  icon: item.icon as ServiceIcon,
  featured: 'featured' in item ? Boolean(item.featured) : false,
}));
