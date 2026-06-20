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
const serviceCheckboxes = document.querySelectorAll('.service-checkbox');
const equipmentFields = document.getElementById('equipmentFields');
const cateringFields = document.getElementById('cateringFields');

let currentStep = 1;

function showStep(step) {
  formSteps.forEach(s => s.classList.remove('active'));
  const target = document.querySelector(`.form-step[data-step="${step}"]`);
  if (target) target.classList.add('active');
  currentStep = step;
}

function updateFields() {
  const eqChecked = document.querySelector('.service-checkbox[value="equipment"]').checked;
  const catChecked = document.querySelector('.service-checkbox[value="catering"]').checked;
  if (equipmentFields) equipmentFields.style.display = eqChecked ? 'block' : 'none';
  if (cateringFields) cateringFields.style.display = catChecked ? 'block' : 'none';
}

serviceCheckboxes.forEach(cb => {
  cb.addEventListener('change', updateFields);
});

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
    if (equipmentFields) equipmentFields.style.display = 'none';
    if (cateringFields) cateringFields.style.display = 'none';
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
