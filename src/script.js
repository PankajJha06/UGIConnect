document.addEventListener('DOMContentLoaded', function () {
  // Slideshow Logic
  const slides = Array.from(document.querySelectorAll('.slideshow .slide'));
  const prevBtn = document.querySelector('.slide-nav.prev');
  const nextBtn = document.querySelector('.slide-nav.next');

  if (slides.length && prevBtn && nextBtn) {
    let current = 0;
    let timerId = null;
    const DURATION_MS = 5000;

    function show(index) {
      slides[current].classList.remove('active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('active');
    }

    function next() { show(current + 1); }
    function prev() { show(current - 1); }

    function start() {
      stop();
      timerId = setInterval(next, DURATION_MS);
    }
    function stop() {
      if (timerId) clearInterval(timerId);
      timerId = null;
    }

    nextBtn.addEventListener('click', () => { next(); start(); });
    prevBtn.addEventListener('click', () => { prev(); start(); });

    // Pause on hover for desktop
    const slideshow = document.querySelector('.slideshow');
    slideshow.addEventListener('mouseenter', stop);
    slideshow.addEventListener('mouseleave', start);

    start();
  }





  // Hamburger Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      mainNav.classList.toggle('active');
    });

    // Close menu when clicking a link
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mainNav.classList.remove('active');
      });
    });
  }

});
