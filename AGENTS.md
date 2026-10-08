# AGENTS.md — ciocode-landing

Landing institucional de CIOCODE. Single-page en español (es_AR).

## Stack
- Astro 7 (`astro.config.mjs`, `site: https://ciocode.com`) + Tailwind CSS v4 (`@tailwindcss/vite`) + TypeScript.
- Carrusel: `embla-carousel` + `embla-carousel-autoplay`. Iconos: `@lucide/astro`. Animaciones: `aos`.
- Sin router ni i18n multi-idioma: todo el copy vive en un solo archivo.

## Fuente única de verdad
- `src/content/es.json` → todo el copy del sitio (site, nav, hero, services, work, prototype, process, webOffer, about, finalCta, faq, footer, whatsapp).
- `src/i18n.ts` solo re-exporta ese JSON (`export const content = es`). Para cambiar textos, editar `es.json`, no los `.astro`.
- `src/config/site.ts` → config no-copy (siteUrl, whatsappNumber, email, instagram). Tiene TODOs intencionales si faltan datos reales.
- `src/data/projects.ts` → mapea `content.work.items` a `Project[]`. No agregar lógica ahí.
- `src/data/services.ts`, `src/data/process.ts` → lo mismo para sus secciones.

## Estructura
- `src/pages/index.astro` → orden de secciones: Hero, Marquee, Services, WebOffer, Work, Process, About, Faq, FinalCTA.
- `src/components/` → un `.astro` por sección + `SectionHeading.astro`, `ProjectCard.astro`.
- `src/layouts/Layout.astro` → head/SEO/OG (`public/og-image.*`, `favicon.svg`, `robots.txt`).
- `public/projects/` → capturas de proyectos (~1432×760 JPEG, quality ~82). `placeholder.png` (1200×800) es fallback cuando un proyecto no tiene `image` (`ProjectCard.astro`).
- `public/logos/`, `public/instagram/` → assets estáticos.

## Trabajos (sección clave)
Orden del array `work.items` = orden del carrusel (`Work.astro` usa `loop: true`, autoplay 3.5s). Orden actual intencional:
1. `blackstar-logistics` 2. `vita-global-cargo` 3. `clinica-dental-serranos` 4. `resticy` 5. `marketplace-scrapper`.

Schema por item: `slug, name, description, type, features?[], technologies?[], image?, url?`.
Reglas:
- Solo landings públicas llevan `url`. Sistemas privados/automatizaciones no se enlazan.
- `image` → `/projects/<slug>.jpeg`. Si no hay captura, omitir (usa placeholder).
- No inventar métricas, clientes ni tecnologías no verificadas.
- `visitLabel` es global (`work.visitLabel`).

## Imágenes
- Reales: Chrome headless `google-chrome --headless --disable-gpu --no-sandbox --hide-scrollbars --window-size=1440,810 --screenshot=... <url>`, luego resize a ~1432px ancho y guardar JPEG q82 optimize (ver historial: `vita-global-cargo.jpeg` 133KB).
- Inventadas/mockups (ej. `resticy.jpeg`, sistema sin link público): generar con PIL 1432×760, UI oscura, datos genéricos coherentes con `features` (mesas, QR, MercadoPago). No usar fotos reales ni marcas de terceros.
- Mantener 16:9 porque la card usa `aspect-video object-cover`.

## Comandos
- `npm run dev` → desarrollo. `npm run build` → build Astro (verificar siempre tras tocar `es.json` o imágenes). `npm run preview` → previsualizar build.
- Validar JSON antes de commitear: `python3 -c "import json; json.load(open('src/content/es.json'))"`.
- Verificar slugs únicos e imágenes existentes: cruzar `work.items[].image` con `ls public/projects/`.

## Convenciones
- Español rioplatense, tono directo. No agregar inglés salvo nombres propios.
- Estilos con Tailwind en los `.astro`; paleta `night-*` / `brand-*` definida en `src/styles/`.
- No crear rutas/páginas nuevas sin pedirlo: es una landing de una sola página.
- Commits pequeños; si se reordena `work.items`, decirlo explícito en el mensaje.
