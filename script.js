/* RESET & BASE */
* { margin:0; padding:0; box-sizing:border-box; font-family:'Poppins',sans-serif; }
body { background:#0f172a; color:#f1f5f9; line-height:1.6; scroll-behavior:smooth; }

/* NAVBAR */
nav { display:flex; justify-content:space-between; align-items:center; padding:1rem 2rem;
      background:rgba(15,23,42,.9); position:sticky; top:0; z-index:1000; }
nav .logo { font-size:1.5rem; font-weight:700; color:#f97316; }
nav ul { list-style:none; display:flex; gap:1.1rem; flex-wrap:wrap; }
nav ul li a { color:#fff; text-decoration:none; transition:.3s; font-size:.95rem; }
nav ul li a:hover { color:#f97316; }

/* HERO */
/* HERO SECTION */

/* Hero Section */
#hero {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 2rem;
}

#hero .side-image {
  flex: 0 0 250px;  /* fixed width for image */
}

#hero .side-image img {
  width: 100%;
  display: block;
  border-radius: 12px; /* optional soft corners */
}

#hero .hero-content {
  flex: 1;
  max-width: 600px;
}

#hero h1 {
  font-size: 2.4rem;
  margin-bottom: 0.6rem;
}

#hero .typing {
  font-size: 1.15rem;
  color: #60a5fa;
  margin-bottom: 1rem;
}

#hero .btn-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.8rem;
}

#hero .btn {
  padding: 0.8rem 1.4rem;
  border: none;
  background: #f97316;
  color: #fff;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

#hero .btn:hover,
#hero .btn:active {
  background: #dc2626;
  box-shadow: 0 0 12px #dc2626;
}

#hero .subline {
  font-size: 0.95rem;
  opacity: 0.8;
  text-align: left;  /* aligns with the text above */
  margin-top: 0.5rem;
}

/* Responsive */
@media (max-width:768px) {
  #hero {
    flex-direction: column;
    text-align: center;
  }
  #hero .side-image {
    width: 180px;
  }
  #hero .hero-content {
    max-width: 100%;
  }
  #hero .subline {
    text-align: center;
  }
}



/* ABOUT ME - TWO COLUMN LAYOUT */
/* ABOUT ME - CARD WITH TITLE ON TOP */
#about {
  display: flex;
  flex-direction: row; /* content + image */
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 2rem;
}

#about .about-card {
  flex: 1;
  background: rgba(255,255,255,0.05);
  border: 2px solid #f97316;
  border-radius: 12px;
  padding: 1.5rem 1.8rem;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  cursor: pointer;
}

#about .about-card h2 {
  margin-bottom: 1rem;
  text-align: left;
  color: #f97316;
  font-size: 2rem;
}

#about .about-card p {
  text-align: left;
  margin-top: 0.5rem;
}

#about .about-card.active {
  border-color: #60a5fa;
  box-shadow: 0 0 20px #60a5fa;
  transform: scale(1.02);
}

#about .side-image {
  flex: 0 0 220px;
}

#about .side-image img {
  width: 100%;
  display: block;
  border-radius: 12px;
}


#about .about-card:hover {
  transform: scale(1.02);
  box-shadow: 0 0 20px #3b82f6;
}




/* GENERIC SECTION LAYOUT */
section {
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: center;
  gap:2rem;
  padding:4rem 2rem;
}
section .side-image {
  flex: 0 0 220px; 
  opacity: 1; 
}
section .side-image img {
  width: 100%;
  display: block;
  border-radius:12px; 
  animation: none; /* static image */
}
section > *:not(.side-image) {
  flex:1;
  max-width:700px;
}

/* SECTION TITLES & TEXT */
section h2 { text-align:center; color:#f97316; font-size:2rem; margin-bottom:1.2rem; }
section p { max-width:900px; margin:0.5rem auto; text-align:center; }
.chakra { color:#22d3ee; font-weight:700; }

/* EXPERIENCE */
/* ABOUT ME CARDS */
#about .about-card {
  background: rgba(255,255,255,0.05);
  border: 2px solid #f97316;
  border-radius: 12px;
  padding: 1.5rem 1.8rem;
  transition: transform 0.4s, box-shadow 0.4s;
  cursor: pointer;
  text-align: left;
}


#about .about-card:hover {
  box-shadow: 0 0 20px #3b82f6;
  transform: scale(1.02);
}

/* EXPERIENCE CARDS */
#experience .card {
  background: rgba(255,255,255,0.05);
  border: 2px solid #f97316;
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
  transition: transform 0.4s, box-shadow 0.4s;
  cursor: pointer;
  text-align: left;
}
/* Tags inside Experience cards */
#experience .tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.6rem;
}

#experience .tags span {
  background: #1e293b;
  border: 1px solid #334155;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-size: 0.85rem;
  color: #f1f5f9;
}


#experience .card:hover {
  box-shadow: 0 0 20px #3b82f6;
  transform: scale(1.02);
}


/* PROJECTS */
.project-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1.2rem; margin-top:1rem; }
.project-card { background:rgba(255,255,255,.05); border:2px solid #f97316; border-radius:12px; padding:1.2rem;
                transition:transform .4s, box-shadow .4s; cursor:pointer; text-align:left; }
.project-card:hover {  box-shadow:0 0 20px #3b82f6;  transform: scale(1.02);}
.project-card h3 { margin-bottom:.4rem; }


 .tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.6rem;
}

.tags span {
  background: #1e293b;
  border: 1px solid #334155;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-size: 0.85rem;
  color: #f1f5f9;
}
.link { display:inline-block; margin-top:.6rem; color:#60a5fa; text-decoration:none; border-bottom:1px dashed #60a5fa; }

.link:hover { opacity:.85; }

/* SKILLS */
/* Skills Section */
#skills {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 2rem;
  flex-wrap: wrap;
}

#skills .side-image {
  flex: 0 0 250px;
}

#skills .side-image img {
  width: 100%;
  
 
}

#skills .content {
  flex: 1;
  max-width: 700px;
}

#skills h2 {
  color: #f97316;
  margin-bottom: 1.5rem;
  text-align: left;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.2rem;
}

.skills-card {
  background: rgba(255,255,255,.05);
  border: 2px solid #f97316;
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.3s, box-shadow 0.3s;
}

.skills-card:hover {
  transform: scale(1.03);
  box-shadow: 0 0 20px #3b82f6;
}

.skills-card h3 {
  margin-bottom: 0.8rem;
}

.pill-grid {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
}

.pill {
  background: #0b1222;
  border: 1px solid #334155;
  padding: .35rem .7rem;
  border-radius: 999px;
  font-size: .85rem;
  transition: all 0.3s;
}

.pill:hover {
  border-color: #f97316;
  box-shadow: 0 0 10px #f97316;
}

/* Responsive */
@media (max-width:768px) {
  #skills {
    flex-direction: column;
    align-items: center;
  }

  #skills .side-image {
    margin-bottom: 2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  #skills h2 {
    text-align: center;
  }
}


/* EDUCATION */
/* EDUCATION SECTION */
#education {
  padding: 4rem 2rem;
}

#education h2 {
  text-align: center;
  color: #f97316;
  margin-bottom: 2rem;
}

.edu-grid {
  display: flex;          /* Use flexbox for single row */
  justify-content: space-between; /* Spread cards evenly */
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  width:100%;
  flex-wrap: nowrap;      /* Force single row */
}

.edu-card {
  flex: 1;                /* Equal width cards */
  background: rgba(255,255,255,0.05);
  border: 2px solid #f97316;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.edu-card:hover {
  transform: scale(1.03);
  box-shadow: 0 0 20px #3b82f6;
}

.edu-card h3 {
  margin-bottom: 0.8rem;
  color: #f97316;
}

.meta {
  color: #94a3b8;
  font-size: 0.95rem;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .edu-grid {
    flex-direction: column; /* Stack cards on smaller screens */
    gap: 1rem;
  }
}

/* ACHIEVEMENTS */
.achievement-card {
  background: rgba(255,255,255,0.05);
  border: 2px solid #f97316;
  border-radius: 12px;
  padding: 1.2rem;
  margin-bottom: 1rem;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}
@media (max-width: 600px) {
  .achievement-card {
    padding: 1rem;
    font-size: 0.95rem;
  }
  #achievements {
    padding: 2rem 1rem;
  }
}

.achievement-card:hover {
  transform: scale(1.02);
  box-shadow: 0 0 15px #3b82f6;
}

.achievement-card p {
  margin: 0;
  color: #fff;
}

/* Side image */
#achievements .side-image {
  flex: 0 0 220px;
  margin-right: 2rem;
}

#achievements .side-image img {
  width: 100%;
  display: block;
  border-radius: 12px;
}

/* Content */
#achievements .content {
  flex: 1;
}

/* Grid layout for section */
#achievements {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 4rem 2rem;
}

/* Responsive */
@media (max-width: 900px) {
  #achievements {
    flex-direction: column;
  }
  #achievements .side-image {
    margin-right: 0;
    margin-bottom: 2rem;
  }
}

/* CERTIFICATIONS */
#certifications {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 2rem;
}

#certifications .side-image {
  flex: 0 0 220px;
  order: 2; /* image on the right */
}

#certifications .side-image img {
  width: 100%;
  display: block;
  border-radius: 12px;
}

#certifications .content {
  flex: 1;
  order: 1; /* content on the left */
}

#certifications .content h2 {
  color: #f97316;
  font-size: 2rem;
  margin-bottom: 1.2rem;
}

.cert-card {
  background: rgba(255,255,255,0.05);
  border: 2px solid #f97316;
  border-radius: 12px;
  padding: 1rem 1.2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.cert-card:hover {
  box-shadow: 0 0 20px #3b82f6;
  transform: scale(1.02);
}


/* CONTACT */
/* Contact Section */
#contact {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

#contact .content {
  flex: 1;
}

#contact .side-image {
  flex: 0.8;
  display: flex;
  justify-content: center;
}

#contact .side-image img {
  max-width: 180px;   /* smaller size */
  transition: transform 0.4s ease, filter 0.4s ease;
}


/* Contact cards */
#contact .contact-cards { 
  display:flex; 
  gap:.8rem; 
  justify-content:center; 
  flex-wrap:wrap; 
  margin: .5rem 0 1.2rem; 
}

.contact-card { 
  background:#0b1222; 
  border:2px solid #334155; 
  border-radius:10px; 
  padding:.6rem .9rem; 
  text-decoration:none; 
  color:#fff; 
  transition: transform 0.4s, box-shadow 0.4s;
  cursor: pointer;
}

.contact-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px #3b82f6;
}

/* Contact form */
#contact form { 
  display:flex; 
  flex-direction:column; 
  gap:1rem; 
  max-width:420px; 
  margin:0 auto; 
}

#contact input, 
#contact textarea { 
  padding:.8rem; 
  border:2px solid #f97316; 
  border-radius:8px; 
  background:#1e293b; 
  color:#fff; 
  font-size:.95rem; 
}

#contact input:focus, 
#contact textarea:focus { 
  outline:none; 
  border-color:#3b82f6; 
  box-shadow:0 0 8px #3b82f6; 
}

#contact textarea { 
  resize:none; 
  height:120px; 
}

#contact button { 
  background:#f97316; 
  color:#fff; 
  border:none; 
  padding:.8rem; 
  border-radius:8px; 
  cursor:pointer; 
  font-size:1rem; 
  transition:.3s; 
}

#contact button:hover { 
  background:#dc2626; 
  box-shadow:0 0 15px #dc2626; 
}
.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.2rem;
}

.social {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #0b1222;
  border: 2px solid #334155;
  color: #fff;
  font-size: 1.4rem;
  transition: 0.3s;
  text-decoration: none;
}

.social:hover {
  transform: scale(1.1);
  background: #f97316;
  border-color: #f97316;
  box-shadow: 0 0 12px #f97316;
}

/* Specific hover colors */
.social.linkedin:hover { background: #0077b5; border-color: #0077b5; }
.social.github:hover   { background: #333; border-color: #333; }
.social.leetcode:hover { background: #ffa116; border-color: #ffa116; }

/* LeetCode image fix */
.leetcode-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
}

/* FOOTER */
footer { padding:1rem; text-align:center; background:#1e293b; margin-top:2rem; color:#94a3b8; }

/* PRELOADER */
#preloader { position:fixed; inset:0; background:#0f172a; display:flex; justify-content:center; align-items:center; z-index:9999; }
.sharingan { width:80px; height:80px; border:5px solid #dc2626; border-radius:50%; border-top-color:transparent;
             animation:spin 1s linear infinite; box-shadow:0 0 20px #dc2626; }
@keyframes spin { 0% { transform:rotate(0);} 100% { transform:rotate(360deg);} }

/* SCROLL REVEAL */
.hidden { opacity:0; transform:translateY(50px); transition:all .8s ease-out; }
.show   { opacity:1; transform:translateY(0); }

/* RASENGAN CURSOR */
#cursor {
  position: fixed;
  top: 0; left: 0;
  width: 25px; height: 25px;
  border-radius: 50%;
  background: radial-gradient(circle, #60a5fa, #1e3a8a);
  pointer-events: none;
  mix-blend-mode: screen;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 20px #60a5fa, 0 0 40px #3b82f6;
  z-index: 99999;
}

/* RESPONSIVE */
@media (max-width:768px){
  section { flex-direction:column; text-align:center; }
  section > *:not(.side-image) { max-width:100%; }
  section .side-image { flex: 0 0 auto; width:180px; margin-bottom:1rem; }
  #hero { flex-direction:column; gap:1.5rem; }
}
/* CONTACT SIDE IMAGE */
#contact .side-image img {
  max-width: 120px;   /* smaller size, was 180px */
  transition: transform 0.4s ease, filter 0.4s ease;
}
