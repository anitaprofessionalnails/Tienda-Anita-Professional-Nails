# PRD — Tienda Shopify de Anita Professional Nails

## 1. Objetivo
Lanzar una tienda que posicione a Anita Professional Nails como marca premium de manicura, con acabado de salón y estética editorial, y que convierta tráfico frío de redes sociales en móvil.

KPIs de lanzamiento (primeros 90 días):
- Tasa de conversión objetivo: 2 %
- Ticket medio objetivo: un único producto, el pack de 6 esmaltes. 79,98 € en preventa, después 99,98 €.
- LCP móvil < 2,5 s en home y ficha de producto.

## 2. Marca y cliente
- **Qué vende:** pack de 6 esmaltes luminiscentes. Término técnico: **"ojo de gato luminiscente"**.
- **Hero product:** el pack es el único producto.
- **Diferencial real:** la luminiscencia y una calidad de esmalte superior a lo que hay en el mercado.
- **Cliente ideal:** mujeres de 24 a 54 años, solo en España por ahora. **Importante:** el producto está orientado a profesionales de uñas con salón propio.
- **Precio:** 79,98 € en preventa, después 99,98 €. Envío gratis **solo para quien se suscribe a la newsletter** (pop-up de Klaviyo). IVA incluido en ambos precios.
- **Voz:** cercana, profesional dentro del nicho, amigable.

## 3. Filosofía de diseño
- **Concepto:** no hay uno formal, pero la caja de envío lleva el lema **"Tu arte inspira el nuestro"**.
- **La pieza memorable:** el **selector de tonos**. En la home y en la ficha, los colores se muestran grandes y táctiles, como una carta de color física. Ese es el momento de marca; el resto de la web es sobrio.
- **Referencias** (guardar capturas desktop + móvil y el HTML en `docs/design-reference/`):
  - https://jimenanails.com/
  - https://ioanacristescu.com/
  - Qué tomar de cada una: [pendiente: ritmo de secciones, tratamiento de fotos, ficha de producto…]
- **Evitar:** la estética genérica de "tienda de belleza" (rosa pastel distinto del de la marca, script dorado, corazones), los fondos crema con acento terracota, las tarjetas redondeadas idénticas con sombra gris, las mayúsculas espaciadas encima de cada título y las animaciones de entrada en cada sección.

### Tokens (a cerrar en la v2)
| Rol | Nombre | Hex |
|---|---|---|
| Fondo | [ ] | [ ] |
| Texto | [ ] | [ ] |
| Superficie secundaria | [ ] | [ ] |
| Acento marca | Rosa Anita | `#f48ba0` |
| Estado (stock bajo / oferta) | [ ] | [ ] |

- Tipografía display: sin definir; se busca una elegante.
- Escala tipográfica: sin definir.
- Fotografía: la aporta la marca.

## 4. Estructura del sitio
- Home, centrada en el único producto (el pack de 6 esmaltes).
- Ficha de producto (plantilla estándar) + plantilla alternativa para **kits/bundles**.
- Página "Cómo aplicarlo" (tutoriales).
- FAQ.
- Sobre nosotros (historia de Anita).
- Contacto.
- Carrito (cajón lateral) + página de carrito.
- Legales: aviso legal, privacidad, cookies, condiciones de venta, envíos y devoluciones.
- 404 y búsqueda con sugerencias.

## 5. Home (orden de secciones)
1. **Barra de anuncio:** envío en 24/48 h / precio de lanzamiento.
2. **Header:** logo, menú, búsqueda, cuenta y carrito. Sticky y compacto en móvil.
3. **Hero:** imagen o vídeo de manos + producto. Un titular corto y un CTA "Ver colores".
4. **Carta de color interactiva:** fila de tonos grandes; al tocar uno se muestran la foto de la mano aplicada, el nombre y el botón de añadir.
5. **Más vendidos** (colección destacada, 4–8 productos).
6. **Kits / bundle de inicio:** "Todo lo que necesitas para tu primera manicura en casa".
7. **Por qué Anita Nails:** 3 argumentos reales y verificables.
8. **Prueba social:** reseñas con foto (app de reseñas) + UGC de Instagram.
9. **Cómo aplicarlo en 3 pasos:** enlaza al tutorial (aquí sí hay una secuencia real).
10. **Newsletter** con incentivo.
11. **Footer:** menús, legales, redes, métodos de pago y datos de la empresa.

## 6. Ficha de producto (la página más importante)
- Galería: bote, swatch, mano aplicada, textura macro y un vídeo corto de aplicación. Deslizable en móvil, con miniaturas en desktop.
- Título, precio, precio unitario si aplica y valoración con estrellas enlazada a las reseñas.
- **Selector de tono con swatches** (círculos o gotas grandes). Al elegir un tono cambia la galería.
- Selector de cantidad + botón "Añadir al carrito", sticky en móvil.
- Mensajes de confianza bajo el botón: envío en 24/48 h, devoluciones, pago seguro, y Bizum/PayPal si aplica.
- **Cross-sell obligatorio:** "Completa tu manicura" → base + top coat del tono elegido (bloque de productos complementarios o app de bundles).
- Acordeones: Descripción · Cómo se aplica · Duración y acabado · Ingredientes (INCI completo) · Advertencias de uso · Envíos y devoluciones.
- Reseñas con fotos de clientas.
- "Otros tonos de la familia [nude/rojo…]".

## 7. Plantilla de kit / bundle
Hero del kit, bloque "qué incluye" con miniaturas de cada producto, precio del kit frente a la suma por separado (ahorro visible), tutorial en vídeo y FAQs del kit.

## 8. Carrito
Cajón lateral (sin barra de envío gratis: el envío gratis es solo para suscriptoras de la newsletter), upsell de 1 producto (top coat / quitaesmalte), nota de regalo opcional y botón de checkout destacado. Checkout estándar de Shopify con la marca aplicada (logo, colores y tipografía desde el editor de checkout).

## 9. FAQ, contacto, sobre nosotros
- FAQ con acordeones agrupados: Producto y aplicación · Duración · Cómo se aplica el ojo de gato luminiscente (se aplica distinto al resto de esmaltes) · Envíos · Devoluciones · Pago.
- Contacto: formulario nativo + WhatsApp + email + horario.
- Sobre nosotros: historia real de los fundadores, fotos suyas y valores.

## 10. Requisitos técnicos y legales
- Todo editable desde el personalizador (schema completo, presets).
- Swatches nativos de Shopify por metafield de color.
- SEO: títulos y metadescripciones únicos, datos estructurados de producto (Sense ya los incluye; verificar), URLs limpias, alt en imágenes.
- Rendimiento y accesibilidad según CLAUDE.md.
- Banner de cookies conforme al RGPD (app Customer Privacy de Shopify o similar).
- Idioma: español.

## 11. Fuera de alcance v1
Programa de fidelización, suscripción, configurador de manicura y multiidioma.

## 12. Contenido que debe entregar la marca antes de construir
Logo en SVG, paleta y tipografías (si existen), fotos de producto por tono (bote + swatch + mano), textos de producto, INCI y advertencias, políticas legales, 10+ reseñas o UGC e historia de los fundadores.

## Decisiones tomadas (24/09/2026) — prevalecen sobre el resto del documento
1. **Público doble:** profesionales con salón **y** clientas particulares que se hacen la manicura en casa. Mensaje: "calidad de salón profesional, también en casa".
2. **Un único producto:** el kit de 6 esmaltes ojo de gato luminiscente. No hay base, top coat, quitaesmalte ni otros productos. Consecuencias:
   - Home: se eliminan "Más vendidos" y "Kits / bundle de inicio". En su lugar va el bloque "Qué incluye el kit".
   - Ficha: se eliminan el cross-sell "Completa tu manicura" y "Otros tonos de la familia".
   - La plantilla de kit (§7) se fusiona con la ficha: el kit ES el producto.
   - Carrito: sin upsell.
3. **Los tonos no se venden por separado.** La carta de color **muestra** los 6 tonos (foto aplicada, nombre, efecto luminiscente), no selecciona una variante. El producto no tiene variantes de color. Los tonos se guardan como metaobjetos "Tono" para editarlos en un solo sitio y usarlos en home y ficha.
4. **Envío en 24/48 h desde el primer día.** "Preventa" significa **precio de lanzamiento** (79,98 € frente a 99,98 €), no envío diferido. En la web se dirá "precio de lanzamiento" para no dar a entender que el envío se retrasa.
5. **Paleta:** Rosa Anita `#f48ba0` + blanco, priorizando siempre la elegancia. El Rosa profundo `#C2476A` solo en detalles sobre fondo blanco, nunca predominante. Detalle de tokens en CLAUDE.md.
6. **Tipografía:** opción B, Cormorant + Inter.
7. **Carta de color:** con interruptor Luz / Oscuridad. Uñas en forma **almendra**.
8. **Tonos:** Nebulosa Roseta `#C61F6B`, Nebulosa Esmeralda `#1D7B42`, Capella `#98B41D`, Andrómeda `#15698A`, Nebulosa de Orión `#D0419E`, Supernova `#D7442E`.
9. **Comparador de diseño (29/09/2026):** ver elecciones en CLAUDE.md. Los corazones de línea en la barra de anuncios los ha elegido Miguel expresamente (sustituye a "evitar corazones" en ese elemento).
10. **Sin caja de código de descuento en la ficha.** El incentivo será envío gratis al suscribirse a la newsletter, con un pop-up de Klaviyo (pendiente). **Confirmado (29/09/2026):** el envío gratis es solo para suscriptoras de la newsletter. En la web nunca se promete "envío gratis" en general; los textos dicen "Envío en 24/48 h".
