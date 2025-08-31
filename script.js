// Typing Effect
const text = "Full-Stack Shinobi 💻 | Chakra Level: High ⚡ | Future Hokage 🚀 | Code. Solve. Evolve. 🚀";
let i = 0;
function typingEffect() {
  const el = document.querySelector(".typing");
  if (!el) return;
  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 75);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const typingEl = document.querySelector(".typing");
  if (typingEl) typingEl.innerHTML = "";
  typingEffect();
});

// Preloader
window.addEventListener("load", () => {
  const pre = document.getElementById("preloader");
  if (pre) pre.style.display = "none";
});

// Scroll to Projects
document.getElementById("go-projects")?.addEventListener("click", () => {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
});

// Scroll Reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("show"); });
}, { threshold: 0.2 });
document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// Rasengan Cursor
const cursor = document.getElementById("cursor");
let mouseX = 0, mouseY = 0;
document.addEventListener("mousemove", e => { mouseX = e.pageX; mouseY = e.pageY; });
function animateCursor() {
  if (cursor) cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

// EmailJS Contact Form
emailjs.init("6jNoXG_gknswadOvJ");
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm("service_c41t03n", "template_ta1rkac", this)
      .then(() => { alert("✅ Message sent successfully 🦅"); form.reset(); })
      .catch(err => { console.error("EmailJS Error:", err); alert("❌ Failed to send message. Check console."); });
  });
}

// Interactive Cards
const aboutCard = document.querySelector('#about .about-card');
aboutCard?.addEventListener('click', () => { aboutCard.classList.toggle('active'); });
document.querySelectorAll('#experience .card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('#experience .card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

