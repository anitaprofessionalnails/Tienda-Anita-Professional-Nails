# CLAUDE.md — Tema Shopify de Anita Professional Nails

Lee este archivo entero al inicio de cada sesión. Es la fuente de verdad del proyecto.

## Qué es este proyecto
Estamos construyendo el tema de Shopify de Anita Professional Nails, una marca española de esmaltes de uñas fundada por Miguel Ángel y Ana (Anita Professional Nails S.L.). Vende un único producto: un pack de 6 esmaltes "ojo de gato luminiscente", dirigido a profesionales de uñas y a clientas que se hacen la manicura en casa. El objetivo es una tienda premium, editorial y con personalidad propia que NO parezca un tema de Shopify por defecto, y que convierta bien en móvil (más del 75 % del tráfico vendrá de Instagram/TikTok en móvil).

Documentos de referencia (léelos antes de tocar código):
- `docs/PRD.md`: requisitos completos de diseño, estructura y páginas. Si algo del PRD choca con una petición mía, pregúntame antes de decidir.
- `docs/BRAND.md`: posicionamiento, cliente ideal y voz de marca.
- `docs/design-reference/`: capturas y HTML de las webs de inspiración. Úsalas como referencia de ritmo, espaciado y jerarquía, nunca para copiar textos, logos ni imágenes.

## Stack técnico
- Shopify Online Store 2.0, **Liquid**, JSON templates, secciones y bloques.
- Base: **Sense 16.0.0** (tema de referencia de Shopify, construido sobre Dawn).
- CSS propio en `assets/` con custom properties (tokens). Sin frameworks CSS ni jQuery. JavaScript vanilla con Web Components, igual que Sense.
- Shopify CLI para desarrollo local: `shopify theme dev --store 07qy1j-xs.myshopify.com`.
- Git + GitHub. Shopify lee el tema desde la rama conectada mediante la integración oficial de GitHub.

## Reglas de trabajo
1. **Todo editable desde el personalizador.** Cada sección nueva lleva un `{% schema %}` completo con settings, bloques y `presets`, para que Miguel pueda cambiar textos, imágenes y colores sin tocar código. Nada de textos de marca hardcodeados en Liquid.
2. **Textos de interfaz en `locales/es.json`** (y en `en.default.json` si se añade inglés). Usa `{{ 'clave' | t }}`.
3. **No rompas Sense por dentro.** Crea las secciones nuevas con el prefijo `nb-` (ej. `sections/nb-hero.liquid`, `assets/nb-base.css`) en lugar de reescribir las originales, salvo que el PRD lo pida. Así las actualizaciones y los diffs quedan limpios.
4. **Los tonos no son variantes.** El producto es un kit único de 6 tonos que no se venden por separado. Los tonos son **bloques "Tono"** de la sección `nb-carta-color` (nombre, descripción, color con luz, color del brillo, foto con luz, foto en oscuridad), editables desde el personalizador. Si la carta se pone en home y en ficha, cada una tiene sus propios bloques. (Descartado de momento: metaobjetos, por ser más difíciles de editar para Miguel.)
5. **Rendimiento:** imágenes con `image_url` + `image_tag` con `widths` y `sizes`, y `loading="lazy"` salvo en la primera imagen visible. Nada de librerías pesadas para animaciones. Objetivo: Lighthouse móvil ≥ 85 en home y ficha.
6. **Accesibilidad:** contraste AA, foco visible, `prefers-reduced-motion`, textos alternativos y botones con nombre accesible.
7. **Calidad:** ejecuta `shopify theme check` antes de cada commit y arregla los errores.
8. **Git:** commits pequeños y descriptivos en español (`feat: ficha de producto con swatches`). Nunca hagas push a `main` sin que yo lo pida. Trabaja en `develop`; `main` es la rama conectada al tema publicado.
9. **`config/settings_data.json` y `templates/*.json`** pueden cambiar desde el editor de Shopify (la integración de GitHub hace commits automáticos). Antes de empezar cada sesión haz `git pull` y, si hay conflicto en esos archivos, pregúntame.
10. Cuando termines una tarea, resume qué archivos tocaste y qué debo revisar en el preview.

## Sistema de diseño (resumen; el detalle está en el PRD)
- Paleta (validada 24/09/2026):
  - Blanco `#FFFFFF`: fondo general.
  - Tinta `#1F1A1C`: textos y titulares.
  - Rosa Anita `#F48BA0`: botones y detalles. **Nunca como color de texto sobre blanco** (contraste 2,3). Los botones rosa llevan texto Tinta.
  - Rosa profundo `#C2476A`: solo en detalles pequeños (etiquetas, ahorro, enlaces) sobre fondo blanco. **Nunca predominante.**
  - Rubor `#FDF1F4`: fondos suaves, con moderación.
  - Noche `#0E0B0D`: solo para el modo Oscuridad de la carta de color.
- Tipografía (validada 02/10/2026, sustituye a Cormorant): **Playfair Display** (títulos, `playfair_display_n5`) + **Montserrat** (texto), desde el `font_picker` de Shopify. **Allura** (caligráfica, `assets/nb-allura.woff2`) solo para el lema "Tu arte inspira el nuestro" en la sección `nb-lema`. Escala modular [pendiente].
- Botones: **redondeados (pastilla)**. En la ficha, "Añadir al carrito" con contorno fino y pago rápido debajo en negro.
- Forma de las uñas en muestrarios: **almendra** real de manicura: larga y estilizada, laterales casi rectos desde la cutícula y afinado progresivo en el último tercio hasta una punta suave redondeada. Nada de óvalos ni formas de huevo.
- Acabado del esmalte al representarlo: **micro-shimmer muy fino** (polvo diminuto plateado / blanco perlado, uniforme, que destella al moverse) + ligero veteado aterciopelado dentro del color. Nunca glitter grueso ni escamas: "polvo de estrellas", no "fiesta".
- Radio, sombras y espaciados: tokens en `assets/nb-tokens.css`.
- Una sola "pieza memorable": la **carta de color** con interruptor **Luz / Oscuridad** (home y ficha). En Oscuridad el fondo pasa a Noche y cada tono muestra su foto brillando. Es el único momento oscuro de la web; el resto, silencioso y disciplinado.
- Tonos del kit (nombres exactos de la etiqueta): Nebulosa Roseta `#C61F6B`, Capella `#98B41D`, Nebulosa Esmeralda `#1D7B42`, Andrómeda `#15698A`, Nebulosa de Orión `#D0419E`, Supernova `#D7442E`.
- Fotos de marca en `docs/fotos/` (fuera de git; se suben a Shopify, no a `assets/`): bote por tono, pincel macro por tono, bote brillando en oscuridad por tono, caja abierta/cerrada y grupo de 6.
- Maqueta de referencia validada: https://claude.ai/artifact/34PpY8NivUVGFGwPRrMpyZ
- Comparador de diseño (elecciones de Miguel, 29/09/2026): https://claude.ai/artifact/FYGkRYDxtwBcSvJPx4qLLi. Se eligió: tipografía C, colores A, botones B, anuncios B (marquee con corazones), cabecera A, menú B (acordeón con miniaturas), tonos A (carta de color en inicio y ficha), ficha B (estrellas, precio grande, cantidad), galería A (miniaturas), sin caja de descuento, confianza B (iconos), desplegables B (+/–).

## Voz de marca
**Fuente de verdad: `docs/BRAND.md` (identidad de marca y voz de Miguel Ángel, 02/10/2026). Prevalece sobre lo anterior de este archivo y del PRD en público, voz y claims.** Resumen:
1. De tú a una **profesional de las uñas** (manicurista o técnica), con calidez y gratitud: "Tu arte inspira el nuestro". No escribimos para "hacerte las uñas en casa".
2. Lujo minimalista estilo Apple, nunca "choni": frases cortas, una idea por frase. Como mucho un ❤️ al cierre.
3. Exclusividad con datos reales: 500 cajas, sin reposición, pack indivisible de 6. Nunca escasez inventada.
4. Solo claims demostrables (brillo y ojo de gato, con vídeo real, sin cuantificar). Nada de "sin TPO", "vegano" ni "conseguirás más clientas".
5. Precio claro y completo; base, top e imán **no** van incluidos.
Paleta, tipografía y envío del documento chocan con lo validado antes: ver "Conflictos abiertos" en `docs/BRAND.md` y no cambiar el diseño sin confirmarlo.

## Skills y herramientas
- Para cualquier decisión visual, primero se propone el plan de tokens (color, tipografía, espaciado) y se valida conmigo antes de maquetar secciones.
