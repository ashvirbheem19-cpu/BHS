// ---- Catering Tabs ----
const tabs = document.querySelectorAll('.catering__tab');
const panels = document.querySelectorAll('.catering__panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    panels.forEach(p => p.classList.remove('active'));
    const target = document.getElementById(`panel-${tab.dataset.tab}`);
    if (target) target.classList.add('active');
  });
});

// ---- Gallery Filter ----
const filterBtns = document.querySelectorAll('.gallery__filter-btn');
const galleryItems = document.querySelectorAll('.gallery__item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    galleryItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// ---- Multi-Step Contact Form ----
const form = document.getElementById('contactForm');
const formSteps = document.querySelectorAll('.form-step');
const nextBtns = document.querySelectorAll('.form__next');
const prevBtns = document.querySelectorAll('.form__prev');
const formContainer = document.querySelector('.contact__form');
const successDiv = document.getElementById('formSuccess');
const resetBtn = document.getElementById('resetForm');
const serviceRadios = document.querySelectorAll('input[name="service"]');
const cateringDetails = document.getElementById('cateringDetails');
const hiringDetails = document.getElementById('hiringDetails');

let currentStep = 1;

function showStep(step) {
  formSteps.forEach(s => s.classList.remove('active'));
  const target = document.querySelector(`.form-step[data-step="${step}"]`);
  if (target) target.classList.add('active');
  currentStep = step;
}

nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const next = parseInt(btn.dataset.next);
    showStep(next);
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const prev = parseInt(btn.dataset.prev);
    showStep(prev);
  });
});

serviceRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.value === 'catering') {
      cateringDetails.style.display = 'block';
      hiringDetails.style.display = 'none';
    } else {
      cateringDetails.style.display = 'none';
      hiringDetails.style.display = 'block';
    }
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (formContainer) formContainer.style.display = 'none';
  if (successDiv) successDiv.style.display = 'block';
});

if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    form.reset();
    if (formContainer) formContainer.style.display = 'block';
    if (successDiv) successDiv.style.display = 'none';
    cateringDetails.style.display = 'none';
    hiringDetails.style.display = 'none';
    showStep(1);
  });
}

// ---- Mobile Menu Toggle ----
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');

if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mainNav.classList.toggle('active');
  });

  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mainNav.classList.remove('active');
    });
  });
}
