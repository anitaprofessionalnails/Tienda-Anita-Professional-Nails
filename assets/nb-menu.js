// Menú lateral en acordeón: los submenús se abren en el mismo panel.
// Sense escucha el clic en cada <summary> para deslizar un panel nuevo; aquí lo interceptamos
// antes (fase de captura) para los submenús y dejamos que <details> se abra y cierre de forma nativa.
(() => {
  const iniciar = () => {
    document.querySelectorAll('.nb-menu-acordeon').forEach((nav) => {
      if (nav.dataset.nbListo) return;
      nav.dataset.nbListo = 'true';

      nav.addEventListener(
        'click',
        (evento) => {
          const resumen = evento.target.closest('summary');
          if (!resumen || !nav.contains(resumen)) return;
          evento.stopPropagation();
        },
        true
      );

      // Un enlace a un tono de la misma página (#tono-...) cierra el menú para que se vea la carta
      nav.addEventListener('click', (evento) => {
        const enlace = evento.target.closest('a[href*="#"]');
        if (!enlace || enlace.pathname !== window.location.pathname) return;
        const cajon = nav.closest('header-drawer, menu-drawer');
        if (cajon && typeof cajon.closeMenuDrawer === 'function') cajon.closeMenuDrawer(evento);
      });

      nav.querySelectorAll('details').forEach((detalle) => {
        const resumen = detalle.querySelector(':scope > summary');
        if (resumen) resumen.setAttribute('aria-expanded', String(detalle.open));
        detalle.addEventListener('toggle', () => {
          if (resumen) resumen.setAttribute('aria-expanded', String(detalle.open));
          detalle.classList.toggle('menu-opening', detalle.open);
        });
      });
    });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
  document.addEventListener('shopify:section:load', iniciar);
})();
