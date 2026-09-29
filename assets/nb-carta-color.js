if (!customElements.get('nb-carta-color')) {
  customElements.define(
    'nb-carta-color',
    class NbCartaColor extends HTMLElement {
      connectedCallback() {
        this.tonos = Array.from(this.querySelectorAll('[data-tono]'));
        this.paneles = Array.from(this.querySelectorAll('[data-panel]'));
        this.botonesModo = Array.from(this.querySelectorAll('[data-modo-btn]'));

        this.tonos.forEach((boton) => {
          boton.addEventListener('click', () => this.seleccionar(Number(boton.dataset.tono)));
          boton.addEventListener('keydown', (evento) => this.navegar(evento, boton));
        });

        this.botonesModo.forEach((boton) => {
          boton.addEventListener('click', () => this.cambiarModo(boton.dataset.modoBtn));
        });

        // En el personalizador, al elegir un bloque de tono se muestra ese tono
        this.alSeleccionarBloque = (evento) => {
          const boton = this.tonos.find((b) => b === evento.target || b.contains(evento.target));
          if (boton) this.seleccionar(Number(boton.dataset.tono));
        };
        document.addEventListener('shopify:block:select', this.alSeleccionarBloque);

        // Enlaces del menú del tipo /products/...#tono-capella abren la carta en ese tono
        this.alCambiarHash = () => this.abrirDesdeHash();
        window.addEventListener('hashchange', this.alCambiarHash);
        this.abrirDesdeHash();
      }

      disconnectedCallback() {
        document.removeEventListener('shopify:block:select', this.alSeleccionarBloque);
        window.removeEventListener('hashchange', this.alCambiarHash);
      }

      abrirDesdeHash() {
        const slug = decodeURIComponent(window.location.hash.slice(1));
        if (!slug.startsWith('tono-')) return;
        const boton = this.tonos.find((b) => b.dataset.tonoSlug === slug);
        if (!boton) return;
        this.seleccionar(Number(boton.dataset.tono));
        const suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.scrollIntoView({ behavior: suave ? 'smooth' : 'auto', block: 'start' });
      }

      seleccionar(indice) {
        this.tonos.forEach((boton, i) => boton.setAttribute('aria-pressed', String(i === indice)));
        this.paneles.forEach((panel, i) => {
          panel.hidden = i !== indice;
        });
      }

      navegar(evento, boton) {
        const siguiente = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[evento.key];
        if (!siguiente) return;
        evento.preventDefault();
        const total = this.tonos.length;
        const destino = (Number(boton.dataset.tono) + siguiente + total) % total;
        this.seleccionar(destino);
        this.tonos[destino].focus();
      }

      cambiarModo(modo) {
        this.dataset.modo = modo;
        this.botonesModo.forEach((boton) => boton.setAttribute('aria-pressed', String(boton.dataset.modoBtn === modo)));
      }
    }
  );
}
