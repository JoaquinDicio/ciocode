import { content } from '../i18n';

// Configuración del sitio (no copy). Los textos viven en `src/content/es.json`.
export const siteConfig = {
  name: content.site.name,
  // TODO: completar con el dominio final. Placeholder intencional.
  siteUrl: 'https://ciocode.com',
  locale: content.site.locale,
  // TODO: completar datos reales de contacto. Dejar vacío hasta tenerlos.
  contact: {
    whatsappNumber: '5491126655209',
    email: '',
    instagram: 'ciocode',
    instagramUrl: 'https://www.instagram.com/ciocode/',
  },
} as const;

export function whatsappUrl(message: string = content.whatsapp.defaultMessage): string {
  const text = encodeURIComponent(message);
  if (!siteConfig.contact.whatsappNumber) return `https://wa.me/?text=${text}`;
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
}
