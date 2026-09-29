# CLAUDE.md — Tema Shopify de Anita Professional Nails

Lee este archivo entero al inicio de cada sesión. Es la fuente de verdad del proyecto.

## Qué es este proyecto
Estamos construyendo el tema de Shopify de Anita Professional Nails, una marca española de esmaltes de uñas fundada por Miguel y Anita. Vende un único producto: un pack de 6 esmaltes "ojo de gato luminiscente", dirigido a profesionales de uñas y a clientas que se hacen la manicura en casa. El objetivo es una tienda premium, editorial y con personalidad propia que NO parezca un tema de Shopify por defecto, y que convierta bien en móvil (más del 75 % del tráfico vendrá de Instagram/TikTok en móvil).

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
- Tipografía (validada): **Cormorant** (display) + **Inter** (texto), desde el `font_picker` de Shopify. Escala modular [pendiente].
- Forma de las uñas en muestrarios: **almendra** real de manicura: larga y estilizada, laterales casi rectos desde la cutícula y afinado progresivo en el último tercio hasta una punta suave redondeada. Nada de óvalos ni formas de huevo.
- Acabado del esmalte al representarlo: **micro-shimmer muy fino** (polvo diminuto plateado / blanco perlado, uniforme, que destella al moverse) + ligero veteado aterciopelado dentro del color. Nunca glitter grueso ni escamas: "polvo de estrellas", no "fiesta".
- Radio, sombras y espaciados: tokens en `assets/nb-tokens.css`.
- Una sola "pieza memorable": la **carta de color** con interruptor **Luz / Oscuridad** (home y ficha). En Oscuridad el fondo pasa a Noche y cada tono muestra su foto brillando. Es el único momento oscuro de la web; el resto, silencioso y disciplinado.
- Tonos del kit (nombres exactos de la etiqueta): Nebulosa Roseta `#C61F6B`, Capella `#98B41D`, Nebulosa Esmeralda `#1D7B42`, Andrómeda `#15698A`, Nebulosa de Orión `#D0419E`, Supernova `#D7442E`.
- Fotos de marca en `docs/fotos/` (fuera de git; se suben a Shopify, no a `assets/`): bote por tono, pincel macro por tono, bote brillando en oscuridad por tono, caja abierta/cerrada y grupo de 6.
- Maqueta de referencia validada: https://claude.ai/artifact/34PpY8NivUVGFGwPRrMpyZ

## Voz de marca
Cercana, amigable y profesional dentro del nicho: hablamos de tú a una colega del oficio. Usamos el vocabulario técnico con naturalidad ("ojo de gato luminiscente"). Lema, tal como va impreso en la caja: "Tu arte inspira el nuestro". Evitamos el tono cursi de "tienda de belleza" genérica. Palabras prohibidas: [pendiente].

## Skills y herramientas
- Para cualquier decisión visual, primero se propone el plan de tokens (color, tipografía, espaciado) y se valida conmigo antes de maquetar secciones.
