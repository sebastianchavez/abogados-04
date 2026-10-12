# Abogados-04 · Landing Page Estudio Jurídico

Sitio web profesional multi-página para estudio jurídico ficticio **"Ramírez & Asociados"**, construido con HTML, CSS, JavaScript nativo y **Bootstrap 5 + Bootswatch**.

## Stack Técnico

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de páginas |
| Bootstrap 5.3.3 | Framework CSS principal (grid, navbar, cards, forms, alerts…) |
| Bootswatch Lux | Tema visual elegante con tipografía serif |
| CSS3 (`styles.css`) | Overrides de paleta, animaciones, FAQ, navbar scrolled, hero |
| JavaScript nativo | Componentes, validaciones, animaciones (sin frameworks) |
| Bootstrap Bundle JS | Toggle de navbar móvil, collapse, etc. |
| Google Fonts | Playfair Display + Inter |
| OpenStreetMap | Mapa embebido en contacto (sin tracking) |

## Estructura

```
abogados-04/
├── index.html              → Inicio (hero, stats, servicios, "por qué", testimonios, CTA)
├── nosotros.html           → Sobre nosotros + equipo + timeline
├── servicios.html          → Áreas de práctica + proceso + FAQ
├── contacto.html           → Formulario + datos + mapa
├── README.md
└── assets/
    ├── css/styles.css      → Overrides sobre Bootstrap + estilos custom
    ├── js/
    │   ├── main.js         → Navbar (Bootstrap collapse), footer, validación form
    │   └── animations.js   → Reveal, contadores, FAQ
    └── img/                → Logo SVG y avatares SVG
```

## Paleta (CSS variables en `styles.css`)

- **Azul marino** `#0f1e3d` (`--ab-navy`)
- **Dorado** `#d4af37` (`--ab-gold`)
- **Crema** `#f8f5ec` (`--ab-cream`)
- Utilidades: `.bg-navy`, `.bg-gold`, `.bg-cream`, `.text-navy`, `.text-gold`, `.border-gold`

## Cómo abrir

1. Abrir `index.html` directamente en el navegador (doble clic) **o**
2. Servir con un servidor local:
   ```bash
   # Python
   python -m http.server 8000
   # Node
   npx serve .
   ```
   Luego visitar `http://localhost:8000`

## Características

- Diseño responsive (mobile, tablet, desktop) — grid de Bootstrap
- Navbar fijo de Bootstrap (`navbar-expand-lg`) con cambio de estilo al hacer scroll
- Menú móvil con `navbar-toggler` + `collapse` de Bootstrap
- Animaciones `reveal` al hacer scroll (IntersectionObserver)
- Contadores numéricos animados
- FAQ con acordeón (sólo uno abierto a la vez)
- Validación de formulario de contacto (cliente)
- Mapa embebido (OpenStreetMap, sin tracking)
- Componentes compartidos (navbar/footer) inyectados vía JS
- Navegación con `data-page` para marcar el link activo
- Clases utility de Bootstrap: `display-*`, `row/col`, `card`, `shadow-sm`, `d-none d-md-block`, etc.

## Notas

- Plantilla de **muestra**: dirección, teléfonos y correos son ficticios
- Imágenes de hero/testimonios cargadas desde Unsplash CDN (placeholder)
- Sin dependencias de Node.js ni build step
- Cambiar el tema Bootswatch es tan simple como sustituir el CDN:
  `https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/{lux|cerulean|darkly|flatly}/bootstrap.min.css`