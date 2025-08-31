// ==================== Preloader ====================
window.addEventListener("load", () => {
  const pre = document.getElementById("preloader");
  if (pre) pre.style.display = "none";
});

// ==================== Rasengan Cursor ====================
const cursor = document.getElementById("cursor");
let mouseX = 0, mouseY = 0;
document.addEventListener("mousemove", e => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});
function animateCursor() {
  if (cursor) cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

// ==================== DOMContentLoaded ====================
document.addEventListener("DOMContentLoaded", () => {
  // Typing Effect
  const text = "Full-Stack Shinobi 💻 | Chakra Level: High ⚡ | Future Hokage 🚀 | Code. Solve. Evolve. 🚀";
  let i = 0;
  const typingEl = document.querySelector(".typing");
  if (typingEl) typingEl.innerHTML = "";
  function typingEffect() {
    if (i < text.length) {
      typingEl.innerHTML += text.charAt(i);
      i++;
      setTimeout(typingEffect, 75);
    }
  }
  if (typingEl) typingEffect();

  // Scroll to Projects Button
  const goProjectsBtn = document.getElementById("go-projects");
  if (goProjectsBtn) {
    goProjectsBtn.addEventListener("click", () => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) projectsSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Scroll Reveal
  const observer = new IntersectionObserver(
    entries => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("show"); }); },
    { threshold: 0.2 }
  );
  document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

  // About Card Toggle
  const aboutCard = document.querySelector('#about .about-card');
  if (aboutCard) aboutCard.addEventListener('click', () => { aboutCard.classList.toggle('active'); });

  // Experience Cards Toggle
  const expCards = document.querySelectorAll('#experience .card');
  expCards.forEach(card => {
    card.addEventListener('click', () => {
      expCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  // Education Cards Toggle
  const eduCards = document.querySelectorAll('#education .edu-card');
  eduCards.forEach(card => {
    card.addEventListener('click', () => {
      eduCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  // Achievements Cards Toggle
  const achCards = document.querySelectorAll('#achievements .achievement-card');
  achCards.forEach(card => {
    card.addEventListener('click', () => {
      achCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
});
