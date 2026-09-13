// VALIK BAJÍO - Interactive Scripts
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFaqAccordion();
  initRoiCalculator();
  initLeadForm();
  initHeaderScroll();
  registerServiceWorker();
});

// Mobile Service Worker Registration
function registerServiceWorker() {
  if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }
}

/* ==========================================================
   1. MOBILE MENU TOGGLE
   ========================================================== */
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // Close menu when a link is clicked
  const mobileLinks = menu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

/* ==========================================================
   2. FAQ ACCORDION
   ========================================================== */
function initFaqAccordion() {
  const toggles = document.querySelectorAll('.faq-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const indicator = toggle.querySelector('span:last-child');
      const isCurrentlyOpen = !content.classList.contains('hidden');

      // Close all other accordions for clean UX
      document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.faq-toggle span:last-child').forEach(ind => {
        ind.textContent = '+';
        ind.classList.remove('rotate-45');
      });

      if (!isCurrentlyOpen) {
        content.classList.remove('hidden');
        if (indicator) {
          indicator.textContent = '−';
        }
      }
    });
  });
}

/* ==========================================================
   3. INTERACTIVE ROI & SAVINGS CALCULATOR
   ========================================================== */
function initRoiCalculator() {
  const areaRange = document.getElementById('areaRange');
  const forkliftRange = document.getElementById('forkliftRange');
  const areaDisplay = document.getElementById('areaValueDisplay');
  const forkliftDisplay = document.getElementById('forkliftValueDisplay');
  
  const resMantenimiento = document.getElementById('resMantenimiento');
  const resMontacargas = document.getElementById('resMontacargas');
  const resTotal5A = document.getElementById('resTotal5A');

  if (!areaRange || !forkliftRange) return;

  function formatCurrencyMXN(amount) {
    return '$' + Math.round(amount).toLocaleString('es-MX') + ' MXN';
  }

  function updateCalculations() {
    const area = parseFloat(areaRange.value) || 8000;
    const forklifts = parseInt(forkliftRange.value, 10) || 8;

    // Display values
    areaDisplay.textContent = area.toLocaleString('es-MX') + ' m²';
    forkliftDisplay.textContent = forklifts + (forklifts === 1 ? ' unidad' : ' unidades');

    // Business Formulas for B2B Plant Managers:
    // 1. Joint maintenance savings:
    // Conventional floors have ~0.40 linear meters of cut joints per m².
    // Annual resealing, cleaning, and epoxy joint-edge patching in industrial plants: ~$75 MXN per linear meter/year.
    const linearMeters = area * 0.40;
    const annualJointSavings = linearMeters * 75;

    // 2. Forklift damage savings:
    // Traditional joints cause wheel chipping, bearing blowouts and mast strain.
    // Estimated average wheel + suspension repair cost avoided: ~$24,000 MXN per forklift/year.
    const annualForkliftSavings = forklifts * 24000;

    // 3. Total 5-year cumulative ROI savings:
    const total5Year = (annualJointSavings + annualForkliftSavings) * 5;

    // Update DOM
    resMantenimiento.textContent = formatCurrencyMXN(annualJointSavings);
    resMontacargas.textContent = formatCurrencyMXN(annualForkliftSavings);
    resTotal5A.textContent = formatCurrencyMXN(total5Year);
  }

  areaRange.addEventListener('input', updateCalculations);
  forkliftRange.addEventListener('input', updateCalculations);

  // Initial calculation
  updateCalculations();
}

/* ==========================================================
   4. B2B LEAD CAPTURE FORM & SUCCESS MODAL
   ========================================================== */
function initLeadForm() {
  const form = document.getElementById('leadFormB2B');
  const modal = document.getElementById('successModal');
  const modalCard = document.getElementById('modalCard');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const submitBtn = document.getElementById('submitLeadBtn');

  if (!form || !modal) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const empresa = document.getElementById('empresa').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const ubicacion = document.getElementById('ubicacion').value;
    const tipoProyecto = document.getElementById('tipoProyecto').value;
    const m2 = document.getElementById('m2Estimados').value.trim() || 'No especificado';
    const detalles = document.getElementById('detalles').value.trim() || 'Sin comentarios adicionales';

    // Show loading state on submit button
    const originalBtnHTML = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-950 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>Procesando solicitud técnica...</span>
    `;

    // Simulate sending lead data (async)
    setTimeout(() => {
      // Restore button
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHTML;

      // Populate confirmation modal
      document.getElementById('modalEmpresa').textContent = empresa;
      document.getElementById('modalUbicacion').textContent = ubicacion;
      document.getElementById('modalContacto').textContent = `${nombre} (${telefono} / ${email})`;

      // Prepare WhatsApp quick link
      const waText = encodeURIComponent(
        `*SOLICITUD DE PRESUPUESTO DE PISO POSTENSADO*\n\n` +
        `👤 *Nombre:* ${nombre}\n` +
        `🏭 *Empresa:* ${empresa}\n` +
        `📍 *Ubicación Bajío:* ${ubicacion}\n` +
        `📐 *Tipo Proyecto:* ${tipoProyecto} (${m2})\n` +
        `📞 *Contacto:* ${telefono} | ${email}\n` +
        `📝 *Detalles:* ${detalles}`
      );
      const waUrl = `https://wa.me/524428007476?text=${waText}`;
      const waBtn = document.getElementById('modalWhatsAppBtn');
      if (waBtn) waBtn.href = waUrl;

      // Open Modal with smooth animation
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      setTimeout(() => {
        modalCard.classList.remove('scale-95', 'opacity-0');
        modalCard.classList.add('scale-100', 'opacity-100');
      }, 10);

      // Reset form
      form.reset();
    }, 700);
  });

  // Close Modal Handler
  function closeModal() {
    modalCard.classList.remove('scale-100', 'opacity-100');
    modalCard.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }, 200);
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

/* ==========================================================
   5. HEADER SCROLL STATE
   ========================================================== */
function initHeaderScroll() {
  const header = document.getElementById('mainHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('shadow-lg', 'bg-brand-navy/98');
    } else {
      header.classList.remove('shadow-lg');
    }
  });
}
