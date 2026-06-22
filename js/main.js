(function() {
  'use strict';

  // ----- FADE-IN ON SCROLL -----
  const fadeElements = document.querySelectorAll('.fade-in');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -40px 0px'
  });

  fadeElements.forEach(el => fadeObserver.observe(el));

  // ----- SMOOTH SCROLL BUTTON (Hero) -----
  const scrollBtn = document.getElementById('scrollBtn');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector('#welcome');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
})();