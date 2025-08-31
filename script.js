// ---------------------
// PRELOADER
// ---------------------
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');

  // Hide preloader after a short delay
  window.addEventListener('load', () => {
    if (preloader) preloader.style.display = 'none';
  });

  // ---------------------
  // TYPING EFFECT
  // ---------------------
  const text = "Full-Stack Shinobi 💻 | Chakra Level: High ⚡ | Future Hokage 🚀 | Code. Solve. Evolve. 🚀";
  let i = 0;
  const el = document.querySelector(".typing");
  function typingEffect() {
    if (!el) return;
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typingEffect, 50);
    }
  }
  typingEffect();

  // ---------------------
  // RASENGAN CURSOR
  // ---------------------
  const cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', e => {
    if (cursor) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    }
  });

  // ---------------------
  // SCROLL REVEAL
  // ---------------------
  const hiddenElements = document.querySelectorAll('.hidden');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });
  hiddenElements.forEach(el => observer.observe(el));

  // ---------------------
  // BUTTON NAVIGATION
  // ---------------------
  const goProjectsBtn = document.getElementById('go-projects');
  if (goProjectsBtn) {
    goProjectsBtn.addEventListener('click', () => {
      const projects = document.getElementById('projects');
      if (projects) projects.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
