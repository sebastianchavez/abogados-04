(function () {
  'use strict';

  // ======================================================================
  // Navbar (inyectado)
  // ======================================================================
  const navbarHTML = `
    <nav id="navbar" class="navbar navbar-expand-lg py-3">
      <div class="container">
        <a class="navbar-brand p-0" href="index.html" aria-label="Inicio">
          <img src="assets/img/logo-white.svg" alt="Ramírez &amp; Asociados">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#mainNav" aria-controls="mainNav"
                aria-expanded="false" aria-label="Abrir menú">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav ms-auto align-items-lg-center">
            <li class="nav-item"><a class="nav-link" href="index.html" data-page="index.html">Inicio</a></li>
            <li class="nav-item"><a class="nav-link" href="nosotros.html" data-page="nosotros.html">Nosotros</a></li>
            <li class="nav-item"><a class="nav-link" href="servicios.html" data-page="servicios.html">Servicios</a></li>
            <li class="nav-item"><a class="nav-link" href="contacto.html" data-page="contacto.html">Contacto</a></li>
            <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a href="contacto.html" class="btn btn-gold btn-sm">Consulta Gratuita</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  const navContainer = document.getElementById('navbar');
  if (navContainer) navContainer.outerHTML = navbarHTML;

  // ======================================================================
  // Footer (inyectado)
  // ======================================================================
  const footerHTML = `
    <footer class="bg-navy-dark text-light pt-5 pb-3 mt-0">
      <div class="container py-4">
        <div class="row gy-4 mb-4">
          <div class="col-lg-4">
            <img src="assets/img/logo-white.svg" alt="Ramírez &amp; Asociados" class="mb-3" style="height:48px">
            <p class="text-white-50 small mb-4">
              Estudio jurídico con más de 25 años de experiencia, comprometido con la defensa
              de sus derechos y la excelencia profesional.
            </p>
            <div class="d-flex gap-2">
              <a href="#" class="social-btn" aria-label="Facebook">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"/></svg>
              </a>
              <a href="#" class="social-btn" aria-label="Instagram">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" class="social-btn" aria-label="LinkedIn">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <div class="col-6 col-lg-2">
            <h5 class="font-serif h6 mb-3 text-white">Navegación</h5>
            <ul class="list-unstyled small mb-0">
              <li class="mb-2"><a href="index.html" class="footer-link">Inicio</a></li>
              <li class="mb-2"><a href="nosotros.html" class="footer-link">Nosotros</a></li>
              <li class="mb-2"><a href="servicios.html" class="footer-link">Servicios</a></li>
              <li class="mb-2"><a href="contacto.html" class="footer-link">Contacto</a></li>
            </ul>
          </div>

          <div class="col-6 col-lg-3">
            <h5 class="font-serif h6 mb-3 text-white">Servicios</h5>
            <ul class="list-unstyled small mb-0">
              <li class="mb-2"><a href="servicios.html" class="footer-link">Derecho Civil</a></li>
              <li class="mb-2"><a href="servicios.html" class="footer-link">Derecho Penal</a></li>
              <li class="mb-2"><a href="servicios.html" class="footer-link">Derecho Familiar</a></li>
              <li class="mb-2"><a href="servicios.html" class="footer-link">Derecho Mercantil</a></li>
              <li class="mb-2"><a href="servicios.html" class="footer-link">Derecho Laboral</a></li>
            </ul>
          </div>

          <div class="col-lg-3">
            <h5 class="font-serif h6 mb-3 text-white">Contacto</h5>
            <ul class="list-unstyled small mb-0">
              <li class="d-flex gap-2 mb-2">
                <svg width="18" height="18" class="text-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span class="text-white-50">Av. Apoquindo 4711, Piso 12<br>Las Condes, Santiago de Chile</span>
              </li>
              <li class="d-flex gap-2 mb-2">
                <svg width="18" height="18" class="text-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <a href="tel:+56225551234" class="footer-link">+56 2 2555 1234</a>
              </li>
              <li class="d-flex gap-2 mb-2">
                <svg width="18" height="18" class="text-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:contacto@ramirezasociados.cl" class="footer-link">contacto@ramirezasociados.cl</a>
              </li>
              <li class="d-flex gap-2">
                <svg width="18" height="18" class="text-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span class="text-white-50">Lun a Vie · 9:00 - 19:00</span>
              </li>
            </ul>
          </div>
        </div>

        <hr class="border-secondary opacity-25">

        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 pt-3">
          <p class="small text-white-50 mb-0">&copy; <span id="year"></span> Ramírez &amp; Asociados. Todos los derechos reservados.</p>
          <p class="small text-white-50 mb-0">Diseño web de muestra · Sin afiliación real</p>
        </div>
      </div>
    </footer>
  `;

  const footerContainer = document.getElementById('footer');
  if (footerContainer) footerContainer.outerHTML = footerHTML;

  // ======================================================================
  // Link activo según la página actual
  // ======================================================================
  const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-page]').forEach((link) => {
    if ((link.dataset.page || '').toLowerCase() === currentPage) {
      link.classList.add('is-active');
    }
  });

  // ======================================================================
  // Navbar scrolled state
  // ======================================================================
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 50) navbar.classList.add('nav-scrolled');
    else navbar.classList.remove('nav-scrolled');
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ======================================================================
  // Cierre del menú móvil al hacer click en un link
  // ======================================================================
  const collapseEl = document.getElementById('mainNav');
  if (collapseEl) {
    collapseEl.querySelectorAll('.nav-link').forEach((a) => {
      a.addEventListener('click', () => {
        if (collapseEl.classList.contains('show')) {
          const inst = bootstrap.Collapse.getOrCreateInstance(collapseEl, { toggle: false });
          inst.hide();
        }
      });
    });
  }

  // ======================================================================
  // Año dinámico
  // ======================================================================
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ======================================================================
  // Validación del formulario de contacto (lado cliente)
  // ======================================================================
  const form = document.getElementById('contact-form');
  if (form) {
    const showError = (field, message) => {
      const input = document.getElementById(field);
      const error = document.getElementById('err-' + field);
      if (input) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
      }
      if (error) {
        error.textContent = message;
        error.classList.add('is-visible');
      }
    };
    const clearError = (field) => {
      const input = document.getElementById(field);
      const error = document.getElementById('err-' + field);
      if (input) input.classList.remove('is-invalid');
      if (error) error.classList.remove('is-visible');
    };
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone  = (phone) => /^[+\d\s().\-]{8,20}$/.test(phone);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      ['nombre', 'email', 'telefono', 'asunto', 'mensaje'].forEach(clearError);

      const nombre   = form.nombre.value.trim();
      const email    = form.email.value.trim();
      const telefono = form.telefono.value.trim();
      const asunto   = form.asunto.value.trim();
      const mensaje  = form.mensaje.value.trim();

      if (nombre.length < 3)    { showError('nombre', 'Ingrese su nombre completo'); valid = false; }
      if (!validateEmail(email)){ showError('email', 'Email no válido'); valid = false; }
      if (!validatePhone(telefono)){ showError('telefono', 'Teléfono no válido'); valid = false; }
      if (asunto.length < 3)    { showError('asunto', 'Indique el asunto'); valid = false; }
      if (mensaje.length < 10)  { showError('mensaje', 'El mensaje es muy corto'); valid = false; }

      if (!valid) return;

      const success = document.getElementById('form-success');
      if (success) {
        success.classList.remove('d-none');
        form.reset();
        setTimeout(() => success.classList.add('d-none'), 5000);
      }
    });

    form.querySelectorAll('input, textarea, select').forEach((el) => {
      el.addEventListener('input', () => clearError(el.name));
    });
  }
})();