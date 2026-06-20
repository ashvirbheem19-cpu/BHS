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

// ---- Contact Form Success State ----
const formContainer = document.querySelector('.contact__form');
const successDiv = document.getElementById('formSuccess');

if (window.location.hash === '#success') {
  if (formContainer) formContainer.style.display = 'none';
  if (successDiv) successDiv.style.display = 'block';
  window.location.hash = '';
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
