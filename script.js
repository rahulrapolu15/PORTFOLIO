// ---------------------
// FULL SCRIPT FIXED
// ---------------------

// Wait for full page load (preloader + DOM)
window.addEventListener('load', () => {
  // ---------------------
  // PRELOADER
  // ---------------------
  const preloader = document.getElementById('preloader');
  if (preloader) preloader.style.display = 'none';

  // ---------------------
  // TYPING EFFECT
  // ---------------------
  const text = "Full-Stack Shinobi 💻 | Chakra Level: High ⚡ | Future Hokage 🚀 | Code. Solve. Evolve. 🚀";
  const el = document.querySelector(".typing");
  if (el) {
    let i = 0;
    function typingEffect() {
      if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 50);
      }
    }
    typingEffect();
  }

  // ---------------------
  // RASENGAN CURSOR
  // ---------------------
  const cursor = document.getElementById('cursor');
  if (cursor) {
    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
  }

  // ---------------------
  // SCROLL REVEAL
  // ---------------------
  const hiddenElements = document.querySelectorAll('.hidden');
  if (hiddenElements.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });
    hiddenElements.forEach(el => observer.observe(el));
  }

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
