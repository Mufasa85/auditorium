/**
 * UPC RÉSERVATIONS — MAIN SCRIPT
 * Université Pédagogique du Congo
 * ES6+ Vanilla JavaScript
 */

/* =====================================================================
   1. DATA
   ===================================================================== */

const ROOMS = [
  {
    id: 1, slug: "l1-fase", name: "L1 FASE", faculty: "FASE",
    filter: "fase", capacity: 350,
    status: "available",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=600&q=80",
    description: "Grand auditoire principal de la Faculté des Arts, Sciences et Éducation. Équipé d'un système audio-visuel moderne et d'une scène conférencier.",
    amenities: ["Projecteur HD", "Micro sans fil", "Climatisation", "Wi-Fi"],
  },
  {
    id: 2, slug: "l2-fase", name: "L2 FASE", faculty: "FASE",
    filter: "fase", capacity: 280,
    status: "available",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80",
    description: "Salle de deuxième cycle FASE avec rangées inclinées pour une visibilité parfaite depuis chaque place.",
    amenities: ["Tableau interactif", "Prise électrique par rangée", "Climatisation"],
  },
  {
    id: 3, slug: "l3-fase", name: "L3 FASE", faculty: "FASE",
    filter: "fase", capacity: 200,
    status: "busy",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&q=80",
    description: "Auditoire du troisième cycle, idéal pour des séminaires, soutenances et formations avancées.",
    amenities: ["Conférence vidéo", "Projecteur 4K", "Wi-Fi haut débit"],
  },
  {
    id: 4, slug: "l1-droit", name: "L1 Droit", faculty: "Droit",
    filter: "droit", capacity: 400,
    status: "available",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80",
    description: "Le plus grand auditoire de la faculté de Droit, utilisé pour les cours magistraux et cérémonies officielles.",
    amenities: ["Système son professionnel", "Estrade", "Projecteur double", "Climatisation"],
  },
  {
    id: 5, slug: "l2-droit", name: "L2 Droit", faculty: "Droit",
    filter: "droit", capacity: 320,
    status: "soon",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&q=80",
    description: "Salle moderne de deuxième cycle Droit avec box individuels et système de vote électronique.",
    amenities: ["Vote électronique", "Micro individuel", "Enregistrement audio"],
  },
  {
    id: 6, slug: "gestion-a", name: "Sc. Gestion — Salle A", faculty: "Sciences de Gestion",
    filter: "gestion", capacity: 180,
    status: "available",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
    description: "Première salle du département Sciences de Gestion, parfaite pour les cours de comptabilité et finance.",
    amenities: ["Tableau blanc", "Projecteur", "Wi-Fi"],
  },
  {
    id: 7, slug: "gestion-b", name: "Sc. Gestion — Salle B", faculty: "Sciences de Gestion",
    filter: "gestion", capacity: 150,
    status: "available",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    description: "Salle B orientée vers les séances pratiques et les travaux de groupe en gestion d'entreprise.",
    amenities: ["Tables modulables", "Prises USB", "Climatisation"],
  },
  {
    id: 8, slug: "gestion-c", name: "Sc. Gestion — Salle C", faculty: "Sciences de Gestion",
    filter: "gestion", capacity: 160,
    status: "busy",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=600&q=80",
    description: "Auditoire dédié au marketing et à la gestion des ressources humaines.",
    amenities: ["Télévision 85 pouces", "Système son", "Wi-Fi 5G"],
  },
  {
    id: 9, slug: "gestion-d", name: "Sc. Gestion — Salle D", faculty: "Sciences de Gestion",
    filter: "gestion", capacity: 140,
    status: "available",
    image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=600&q=80",
    description: "Salle de simulation commerciale avec équipements spéciaux pour jeux de rôles et négociations.",
    amenities: ["Simulation vidéo", "Micro-casques", "Tableau interactif"],
  },
  {
    id: 10, slug: "gestion-e", name: "Sc. Gestion — Salle E", faculty: "Sciences de Gestion",
    filter: "gestion", capacity: 170,
    status: "available",
    image: "https://images.unsplash.com/photo-1594312915251-48db9280c8f1?w=600&q=80",
    description: "Espace hybride alliant cours magistraux et ateliers pratiques pour les sciences de gestion.",
    amenities: ["Deux écrans", "Espace atelier", "Wi-Fi"],
  },
  {
    id: 11, slug: "gestion-f", name: "Sc. Gestion — Salle F", faculty: "Sciences de Gestion",
    filter: "gestion", capacity: 130,
    status: "soon",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
    description: "La plus récente salle du département, équipée d'une technologie de pointe pour l'enseignement innovant.",
    amenities: ["AR/VR Ready", "Mobilier ergonomique", "Climatisation"],
  },
  {
    id: 12, slug: "eco-a", name: "Sc. Économiques — Salle A", faculty: "Sciences Économiques",
    filter: "eco", capacity: 250,
    status: "available",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=80",
    description: "Principal auditoire des Sciences Économiques avec amphithéâtre à gradins et vue sur le campus.",
    amenities: ["Amphithéâtre", "Son Dolby", "Enregistrement vidéo"],
  },
  {
    id: 13, slug: "eco-b", name: "Sc. Économiques — Salle B", faculty: "Sciences Économiques",
    filter: "eco", capacity: 200,
    status: "available",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=600&q=80",
    description: "Salle B orientée macroéconomie avec accès aux bases de données économiques en ligne.",
    amenities: ["Internet haut débit", "Postes informatiques", "Projecteur"],
  },
  {
    id: 14, slug: "eco-c", name: "Sc. Économiques — Salle C", faculty: "Sciences Économiques",
    filter: "eco", capacity: 180,
    status: "busy",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    description: "Espace dédié à l'économétrie et à la statistique avec logiciels spécialisés.",
    amenities: ["Logiciels éco", "Tableau digital", "Climatisation"],
  },
  {
    id: 15, slug: "eco-d", name: "Sc. Économiques — Salle D", faculty: "Sciences Économiques",
    filter: "eco", capacity: 160,
    status: "available",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80",
    description: "Salle de travail collaboratif pour les projets de recherche économique.",
    amenities: ["Tables rondes", "Prises multiples", "Wi-Fi premium"],
  },
  {
    id: 16, slug: "eco-e", name: "Sc. Économiques — Salle E", faculty: "Sciences Économiques",
    filter: "eco", capacity: 140,
    status: "available",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
    description: "Petite salle pour les séminaires exclusifs et les cours à effectif réduit.",
    amenities: ["Configuration séminaire", "Écran 65 pouces"],
  },
  {
    id: 17, slug: "info-a", name: "Sc. Informatiques — Salle A", faculty: "Sciences Informatiques",
    filter: "info", capacity: 120,
    status: "available",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    description: "Laboratoire informatique principale avec postes PC dernière génération, idéal pour les TP de programmation.",
    amenities: ["60 postes PC", "Serveur local", "IDE préinstallés", "Wi-Fi 5G"],
  },
  {
    id: 18, slug: "info-b", name: "Sc. Informatiques — Salle B", faculty: "Sciences Informatiques",
    filter: "info", capacity: 80,
    status: "available",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
    description: "Salle de développement avancé pour les projets de fin d'études et les cours de cybersécurité.",
    amenities: ["Postes haute performance", "Environnement sandbox", "Climatisation"],
  },
];

const FAQS = [
  {
    q: "Comment créer un compte sur la plateforme ?",
    a: "Rendez-vous sur la section 'Créer son compte', remplissez le formulaire avec vos informations universitaires (nom, faculté, promotion, email) et créez votre mot de passe. L'accès est immédiat après validation."
  },
  {
    q: "Qui peut réserver un auditoire ?",
    a: "Tous les membres de la communauté UPC peuvent effectuer des réservations : étudiants, délégués de classe, enseignants et membres de l'administration. Chacun doit disposer d'un compte actif sur la plateforme."
  },
  {
    q: "Comment annuler une réservation ?",
    a: "Vous pouvez annuler votre réservation depuis votre espace personnel jusqu'à 2 heures avant le début du créneau. Passé ce délai, l'annulation n'est plus possible et le créneau reste bloqué."
  },
  {
    q: "Que se passe-t-il en cas de conflit de réservation ?",
    a: "Le système fonctionne en temps réel : dès qu'un créneau est réservé, il devient indisponible pour les autres utilisateurs. Les conflits sont donc techniquement impossibles. En cas de problème, contactez l'administration."
  },
  {
    q: "Combien de temps à l'avance puis-je réserver ?",
    a: "Vous pouvez réserver jusqu'à 30 jours à l'avance. Les réservations de moins de 30 minutes avant le début du créneau ne sont pas acceptées par le système."
  },
  {
    q: "Est-il possible de prolonger une réservation en cours ?",
    a: "Si la salle est libre après votre créneau, vous pouvez demander une prolongation via la plateforme ou directement auprès du gardien de salle. La prolongation est accordée uniquement si aucune autre réservation ne suit."
  },
];

/* =====================================================================
   2. LOADER
   ===================================================================== */
const loader = document.getElementById('loader');
const progress = document.getElementById('loaderProgress');
let loadVal = 0;

const loaderInterval = setInterval(() => {
  loadVal += Math.random() * 15 + 5;
  if (loadVal >= 100) {
    loadVal = 100;
    clearInterval(loaderInterval);
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.classList.remove('loading');
    }, 300);
  }
  progress.style.width = loadVal + '%';
}, 100);

document.body.classList.add('loading');

/* =====================================================================
   3. CUSTOM CURSOR
   ===================================================================== */
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;
});

(function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  cursorFollower.style.transform = `translate(${followerX - 16}px, ${followerY - 16}px)`;
  requestAnimationFrame(animateFollower);
})();

// Cursor effects on interactive elements
document.querySelectorAll('a, button, .room-card, .adv-card, .faq-question, .filter-btn').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform += ' scale(1.5)';
    cursorFollower.style.transform += ' scale(1.8)';
    cursorFollower.style.opacity = '0.3';
  });
  el.addEventListener('mouseleave', () => {
    cursorFollower.style.opacity = '0.5';
  });
});

/* =====================================================================
   4. NAVBAR
   ===================================================================== */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Scroll behaviour
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveNavLink();
  updateBackToTop();
});

// Mobile menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Active nav link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
}

/* =====================================================================
   5. BACK TO TOP
   ===================================================================== */
const backToTop = document.getElementById('backToTop');

function updateBackToTop() {
  if (window.scrollY > 400) backToTop.classList.add('visible');
  else backToTop.classList.remove('visible');
}

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =====================================================================
   6. PARTICLES (hero background)
   ===================================================================== */
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      background: rgba(255,255,255,${Math.random() * 0.4 + 0.1});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: particleFloat ${Math.random() * 10 + 8}s ease-in-out infinite;
      animation-delay: ${Math.random() * -10}s;
    `;
    container.appendChild(p);
  }

  // Inject keyframe if not present
  if (!document.getElementById('particleStyle')) {
    const style = document.createElement('style');
    style.id = 'particleStyle';
    style.textContent = `
      @keyframes particleFloat {
        0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
        25% { transform: translate(${rand(-30,30)}px, ${rand(-30,30)}px) scale(1.1); }
        50% { transform: translate(${rand(-30,30)}px, ${rand(-30,30)}px) scale(0.9); opacity: 0.9; }
        75% { transform: translate(${rand(-30,30)}px, ${rand(-30,30)}px) scale(1.05); }
      }
    `;
    document.head.appendChild(style);
  }
}

function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
createParticles();

/* =====================================================================
   7. SCROLL REVEAL
   ===================================================================== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-zoom').forEach(el => {
  revealObserver.observe(el);
});

/* =====================================================================
   8. ANIMATED COUNTERS
   ===================================================================== */
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const step = timestamp => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString('fr-FR');
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString('fr-FR');
  };
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      animateCounter(el, target);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));

/* =====================================================================
   9. RIPPLE EFFECT
   ===================================================================== */
document.querySelectorAll('.ripple').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2;
    const ripple = document.createElement('span');
    ripple.className = 'ripple-wave';
    ripple.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x - size / 2}px;
      top: ${y - size / 2}px;
    `;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
});

/* =====================================================================
   10. ROOMS — RENDER & FILTER
   ===================================================================== */
function getStatusBadge(status) {
  const map = {
    available: ['badge-available', 'Disponible'],
    busy: ['badge-busy', 'Occupé'],
    soon: ['badge-soon', 'Bientôt libre'],
  };
  const [cls, label] = map[status] || ['badge-available', 'Disponible'];
  return `<span class="room-badge ${cls}">${label}</span>`;
}

function renderRooms(filter = 'all') {
  const grid = document.getElementById('roomsGrid');
  grid.innerHTML = '';

  const filtered = filter === 'all' ? ROOMS : ROOMS.filter(r => r.filter === filter);

  filtered.forEach((room, i) => {
    const card = document.createElement('div');
    card.className = 'room-card reveal-up';
    card.style.setProperty('--delay', `${i * 0.06}s`);
    card.dataset.filter = room.filter;
    card.innerHTML = `
      <div class="room-img-wrap">
        <img src="${room.image}" alt="${room.name}" class="room-img" loading="lazy" />
        ${getStatusBadge(room.status)}
      </div>
      <div class="room-body">
        <div class="room-faculty">${room.faculty}</div>
        <h3 class="room-name">${room.name}</h3>
        <p class="room-desc">${room.description}</p>
        <div class="room-meta">
          <div class="room-meta-item">
            <i class="fas fa-users"></i>
            <span>${room.capacity} places</span>
          </div>
          <div class="room-meta-item">
            <i class="fas fa-circle" style="color:${room.status === 'available' ? 'var(--success)' : room.status === 'busy' ? 'var(--error)' : 'var(--warning)'}; font-size:0.5rem"></i>
            <span>${room.status === 'available' ? 'Libre' : room.status === 'busy' ? 'Occupé' : 'Bientôt libre'}</span>
          </div>
        </div>
        <div class="room-actions">
          <button class="btn-outline" onclick="openRoomModal(${room.id})">
            <i class="fas fa-info-circle"></i> Détails
          </button>
          <button class="btn btn-primary ripple${room.status === 'busy' ? ' disabled-btn' : ''}"
            onclick="${room.status !== 'busy' ? `reserveRoom('${room.name}')` : 'alert(\"Cet auditoire est actuellement occupé.\")'}"
            style="${room.status === 'busy' ? 'opacity:0.5;cursor:not-allowed' : ''}">
            <i class="fas fa-calendar-plus"></i> Réserver
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Re-observe new cards for scroll reveal
  grid.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el));

  // Re-attach ripple
  grid.querySelectorAll('.ripple').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const size = Math.max(rect.width, rect.height) * 2;
      const ripple = document.createElement('span');
      ripple.className = 'ripple-wave';
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${x - size/2}px;top:${y - size/2}px;`;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderRooms(btn.dataset.filter);
  });
});

renderRooms();

/* =====================================================================
   11. ROOM DETAIL MODAL
   ===================================================================== */
function openRoomModal(id) {
  const room = ROOMS.find(r => r.id === id);
  if (!room) return;
  const content = document.getElementById('roomModalContent');
  content.innerHTML = `
    <img src="${room.image}" alt="${room.name}" class="room-modal-img" />
    <div class="room-modal-body">
      <div class="room-faculty">${room.faculty}</div>
      <h3>${room.name}</h3>
      <p>${room.description}</p>
      <div class="room-meta" style="flex-wrap:wrap;gap:1rem;margin-bottom:1.25rem">
        <div class="room-meta-item"><i class="fas fa-users"></i> ${room.capacity} places</div>
        ${room.amenities.map(a => `<div class="room-meta-item"><i class="fas fa-check-circle" style="color:var(--success)"></i> ${a}</div>`).join('')}
      </div>
      <div style="display:flex;gap:.75rem;flex-wrap:wrap">
        <button class="btn btn-primary btn-lg ripple" onclick="reserveRoom('${room.name}')">
          <i class="fas fa-calendar-plus"></i> Réserver cet auditoire
        </button>
        <button class="btn-outline btn-lg" onclick="closeModal('roomModal')">
          <i class="fas fa-times"></i> Fermer
        </button>
      </div>
    </div>
  `;
  openModal('roomModal');
}

function reserveRoom(name) {
  closeModal('roomModal');
  const resRoom = document.getElementById('resRoom');
  if (resRoom) {
    for (let opt of resRoom.options) {
      if (opt.value === name || opt.value.includes(name.split(' ')[0])) {
        resRoom.value = opt.value;
        break;
      }
    }
  }
  document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' });
}

/* =====================================================================
   12. MODAL HELPERS
   ===================================================================== */
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

// Close on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

// ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id));
  }
});

/* =====================================================================
   13. FAQ ACCORDION
   ===================================================================== */
function renderFAQ() {
  const list = document.getElementById('faqList');
  list.innerHTML = FAQS.map((faq, i) => `
    <div class="faq-item reveal-up" style="--delay:${i * 0.05}s">
      <button class="faq-question" aria-expanded="false">
        <span>${faq.q}</span>
        <span class="faq-icon"><i class="fas fa-chevron-down"></i></span>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-inner">${faq.a}</div>
      </div>
    </div>
  `).join('');

  list.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all
      list.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  list.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el));
}

renderFAQ();

/* =====================================================================
   14. RESERVATION FORM
   ===================================================================== */
const reservationForm = document.getElementById('reservationForm');

// Set minimum date to today
const resDateInput = document.getElementById('resDate');
if (resDateInput) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  resDateInput.min = `${yyyy}-${mm}-${dd}`;
}

reservationForm.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!validateForm(this)) return;

  const btn = document.getElementById('resSubmitBtn');
  setLoadingState(btn, true);

  setTimeout(() => {
    setLoadingState(btn, false);
    const room = document.getElementById('resRoom').value;
    const date = document.getElementById('resDate').value;
    const time = document.getElementById('resTime').value;
    const duration = document.querySelector('input[name="duration"]:checked')?.value || '2h';
    const purpose = document.getElementById('resPurpose').value;

    document.getElementById('modalTitle').textContent = 'Réservation confirmée !';
    document.getElementById('modalDesc').textContent = 'Votre auditoire a été réservé avec succès. Un email de confirmation vous sera envoyé dans quelques instants.';
    document.getElementById('modalDetails').innerHTML = `
      <div style="display:grid;gap:.5rem">
            <div class="booking-detail">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#0B5CFF" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
                </svg>
                <strong>Salle :</strong> ${room}
            </div>

            <div class="booking-detail">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#0B5CFF" viewBox="0 0 24 24">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V9h14z"/>
                </svg>
                <strong>Date :</strong> ${formatDate(date)}
            </div>

            <div class="booking-detail">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#0B5CFF" viewBox="0 0 24 24">
                    <path d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1zm1 11.41V6h-2v7h6v-2z"/>
                </svg>
                <strong>Heure :</strong> ${time} (Durée : ${duration})
            </div>

            <div class="booking-detail">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#0B5CFF" viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4zm2 2v12h12V6zm2 2h8v2H8zm0 4h8v2H8z"/>
                </svg>
                <strong>Motif :</strong> ${purpose}
            </div>
        <div style="margin-top:.5rem;padding:.5rem;background:var(--blue-light);border-radius:6px;font-size:.75rem;color:var(--primary)">
           Code de réservation : <strong>UPC-${Math.random().toString(36).substr(2, 8).toUpperCase()}</strong>
        </div>
      </div>
    `;
    openModal('successModal');
    reservationForm.reset();
  }, 1500);
});

/* =====================================================================
   15. REGISTER FORM
   ===================================================================== */
const registerForm = document.getElementById('registerForm');
const pwInput = document.getElementById('regPassword');
const pwFill = document.getElementById('pwFill');
const pwLabel = document.getElementById('pwLabel');

// Password strength
if (pwInput) {
  pwInput.addEventListener('input', () => {
    const val = pwInput.value;
    const strength = getPasswordStrength(val);
    const colors = ['', '#ef4444', '#f59e0b', '#10b981', '#0B5CFF'];
    const labels = ['', 'Très faible', 'Faible', 'Bon', 'Excellent'];
    const widths = ['0%', '25%', '50%', '75%', '100%'];
    pwFill.style.width = widths[strength];
    pwFill.style.background = colors[strength];
    pwLabel.textContent = labels[strength];
    pwLabel.style.color = colors[strength];
  });
}

function getPasswordStrength(pw) {
  if (!pw) return 0;
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return Math.min(score, 4);
}

// Toggle password visibility
document.querySelectorAll('.toggle-pw').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const input = document.getElementById(targetId);
    const icon = btn.querySelector('i');
    if (input.type === 'password') {
      input.type = 'text';
      icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
      input.type = 'password';
      icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
  });
});

registerForm.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!validateForm(this)) return;

  const pw = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regConfirm').value;
  if (pw !== confirm) {
    showFieldError(document.getElementById('regConfirm'), 'Les mots de passe ne correspondent pas.');
    return;
  }

  const btn = this.querySelector('button[type="submit"]');
  setLoadingState(btn, true);

  setTimeout(() => {
    setLoadingState(btn, false);
    const firstname = document.getElementById('regFirstname').value;
    const lastname = document.getElementById('regLastname').value;
    document.getElementById('modalTitle').textContent = 'Compte créé !';
    document.getElementById('modalDesc').textContent = `Bienvenue ${firstname} ${lastname} ! Votre compte UPC Réservations est maintenant actif. Vous pouvez commencer à réserver vos auditoires.`;
    document.getElementById('modalDetails').innerHTML = `
      <div style="display:grid;gap:.5rem">
            <div class="booking-detail">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#0B5CFF" viewBox="0 0 24 24">
                    <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z"/>
                </svg>
                <strong>Nom :</strong> ${firstname} ${lastname}
            </div>

            <div class="booking-detail">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#0B5CFF" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm-7.2 8.8V16L12 20l7.2-4v-4.2L12 16l-7.2-4.2z"/>
                </svg>
                <strong>Faculté :</strong> ${document.getElementById('regFaculty').value}
            </div>

            <div class="booking-detail">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#0B5CFF" viewBox="0 0 24 24">
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5z"/>
                </svg>
                <strong>Email :</strong> ${document.getElementById('regEmail').value}
            </div>
      </div>
    `;
    openModal('successModal');
    this.reset();
    if (pwFill) { pwFill.style.width = '0'; pwLabel.textContent = 'Force du mot de passe'; }
  }, 1500);
});

/* =====================================================================
   16. CONTACT FORM
   ===================================================================== */
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!validateForm(this)) return;

  const btn = this.querySelector('button[type="submit"]');
  setLoadingState(btn, true);

  setTimeout(() => {
    setLoadingState(btn, false);
    document.getElementById('modalTitle').textContent = ' Message envoyé !';
    document.getElementById('modalDesc').textContent = 'Votre message a bien été transmis à notre équipe. Nous vous répondrons dans un délai de 24 à 48 heures ouvrables.';
    document.getElementById('modalDetails').innerHTML = `
      <div><strong>Sujet :</strong> ${document.getElementById('ctSubject').value}</div>
    `;
    openModal('successModal');
    this.reset();
  }, 1200);
});

/* =====================================================================
   17. FORM VALIDATION HELPERS
   ===================================================================== */
function validateForm(form) {
  let valid = true;
  // Clear previous errors
  form.querySelectorAll('.field-error').forEach(e => e.remove());
  form.querySelectorAll('.input-error').forEach(e => e.classList.remove('input-error'));

  form.querySelectorAll('[required]').forEach(field => {
    if (!field.value.trim()) {
      showFieldError(field, 'Ce champ est requis.');
      valid = false;
    } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
      showFieldError(field, 'Adresse email invalide.');
      valid = false;
    }
  });

  return valid;
}

function showFieldError(field, message) {
  field.classList.add('input-error');
  const err = document.createElement('span');
  err.className = 'field-error';
  err.textContent = message;
  err.style.cssText = 'display:block;color:var(--error);font-size:.72rem;margin-top:.3rem;font-weight:500;animation:fadeIn .2s ease';
  field.closest('.form-group')?.appendChild(err);

  // Shake animation
  field.style.animation = 'shake .3s ease';
  field.addEventListener('animationend', () => field.style.animation = '', { once: true });

  // Remove on input
  field.addEventListener('input', () => {
    err.remove();
    field.classList.remove('input-error');
  }, { once: true });
}

// Add shake & input-error styles if not present
(function addFormStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .input-error { border-color: var(--error) !important; box-shadow: 0 0 0 3px rgba(239,68,68,0.15) !important; }
    @keyframes shake {
      0%,100% { transform: translateX(0); }
      20%,60% { transform: translateX(-4px); }
      40%,80% { transform: translateX(4px); }
    }
  `;
  document.head.appendChild(style);
})();

/* =====================================================================
   18. LOADING STATE FOR BUTTONS
   ===================================================================== */
function setLoadingState(btn, loading) {
  if (loading) {
    btn.dataset.originalHtml = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Traitement…';
    btn.disabled = true;
    btn.style.opacity = '0.8';
  } else {
    btn.innerHTML = btn.dataset.originalHtml || btn.innerHTML;
    btn.disabled = false;
    btn.style.opacity = '1';
  }
}

/* =====================================================================
   19. HELPERS
   ===================================================================== */
function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

/* =====================================================================
   20. PARALLAX EFFECT (hero)
   ===================================================================== */
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const scrolled = window.scrollY;
  const heroContent = hero.querySelector('[data-parallax]');
  if (heroContent) {
    const factor = parseFloat(heroContent.dataset.parallax || 0.3);
    heroContent.style.transform = `translateY(${scrolled * factor}px)`;
  }
});

/* =====================================================================
   21. SMOOTH SCROLL for anchor links
   ===================================================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

/* =====================================================================
   22. INIT — trigger initial scroll check
   ===================================================================== */
window.dispatchEvent(new Event('scroll'));

console.log('%cUPC Réservations v1.0', 'color:#0B5CFF;font-size:1.5rem;font-weight:900;font-family:Poppins,sans-serif');
console.log('%cUniversité Pédagogique du Congo', 'color:#64748B;font-size:0.9rem');