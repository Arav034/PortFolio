/* ==================================================================
   MAIN.JS
   Renders dynamic content from data.js and wires up every
   interactive feature. Organized into small, commented functions —
   search for the numbered section headers to find what you need.
   ================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. LOADING SCREEN ---------- */
  const loadingScreen = document.getElementById('loading-screen');
  const loaderFill = document.querySelector('.loader-bar-fill');
  let loadProgress = 0;
  const loadTimer = setInterval(() => {
    loadProgress += Math.random() * 18;
    if (loadProgress >= 100) {
      loadProgress = 100;
      clearInterval(loadTimer);
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
        document.body.style.overflow = '';
        startPageAnimations();
      }, 350);
    }
    if (loaderFill) loaderFill.style.width = loadProgress + '%';
  }, 140);
  document.body.style.overflow = 'hidden';

  /* ---------- 2. RENDER DYNAMIC CONTENT FROM data.js ---------- */
  renderNav();
  renderHero();
  renderAbout();
  renderServices();
  renderPortfolio();
  renderTestimonials();
  renderWhyChooseMe();
  renderProcess();
  renderPricing();
  renderContactSide();
  renderFooter();
  renderStats();

  /* ---------- 3. NAVBAR ---------- */
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navLinksEl = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
    updateScrollProgress();
    toggleBackToTop();
    highlightActiveNav();
  });

  navToggle.addEventListener('click', () => {
    navLinksEl.classList.toggle('open');
  });
  navLinksEl.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') navLinksEl.classList.remove('open');
  });

  function highlightActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 140;
      if (window.scrollY >= top) current = sec.id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  /* ---------- 4. THEME TOGGLE (dark default / light optional) ---------- */
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const savedTheme = 'dark'; // in-memory only, no localStorage per artifact sandbox rules
  let currentTheme = savedTheme;

  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme === 'light' ? 'light' : '');
    themeIcon.className = currentTheme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  });

  /* ---------- 5. SCROLL PROGRESS BAR ---------- */
  const progressBar = document.getElementById('scroll-progress');
  function updateScrollProgress() {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    progressBar.style.width = scrolled + '%';
  }

  /* ---------- 6. BACK TO TOP ---------- */
  const backToTop = document.getElementById('back-to-top');
  function toggleBackToTop() {
    backToTop.classList.toggle('visible', window.scrollY > 600);
  }
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- 7. CUSTOM CURSOR + MOUSE GLOW ---------- */
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');
  const glow = document.querySelector('.mouse-glow');
  window.addEventListener('mousemove', (e) => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
    cursorRing.style.left = e.clientX + 'px';
    cursorRing.style.top = e.clientY + 'px';
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .service-card, .project-card, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('active'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('active'));
  });

  /* ---------- 8. TYPING EFFECT (hero sub heading) ---------- */
  const typeTarget = document.getElementById('typing-text');
  const phrase = SITE_DATA.personal.tagline;
  let ti = 0;
  function typeLoop() {
    if (ti <= phrase.length) {
      typeTarget.textContent = phrase.slice(0, ti);
      ti++;
      setTimeout(typeLoop, 35);
    }
  }
  typeLoop();

  /* ---------- 9. AOS INIT ---------- */
  if (window.AOS) {
    AOS.init({ duration: 800, once: true, offset: 60, easing: 'ease-out-cubic' });
  }

  /* ---------- 10. GSAP HERO / SCROLL ANIMATIONS ---------- */
  function startPageAnimations() {
    if (!window.gsap) return;
    gsap.from('.hero-badge', { y: 20, opacity: 0, duration: .8, delay: .1 });
    gsap.from('.hero-title', { y: 40, opacity: 0, duration: 1, delay: .2, ease: 'power3.out' });
    gsap.from('.hero-desc', { y: 20, opacity: 0, duration: .8, delay: .5 });
    gsap.from('.hero-actions', { y: 20, opacity: 0, duration: .8, delay: .65 });
    gsap.from('.hero-scrubber', { y: 20, opacity: 0, duration: .8, delay: .8 });

    if (window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      // process connecting line fill
      gsap.to('.process-line-fill', {
        width: '100%',
        scrollTrigger: { trigger: '.process-track', start: 'top 70%', end: 'bottom 80%', scrub: 1 }
      });
      // parallax glows
      gsap.utils.toArray('.hero-glow').forEach((el, i) => {
        gsap.to(el, { y: i % 2 === 0 ? 60 : -60, scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: 1 } });
      });
    }
  }

  /* ---------- 11. SKILL BARS (animate on view) ---------- */
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.level + '%';
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.skill-bar-fill').forEach(el => skillObserver.observe(el));

  /* ---------- 12. PROCESS STEP HIGHLIGHT ON SCROLL ---------- */
  const procObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => e.target.classList.toggle('in-view', e.isIntersecting));
  }, { threshold: 0.5 });
  document.querySelectorAll('.process-step').forEach(el => procObserver.observe(el));

  /* ---------- 13. STATISTICS COUNTER ---------- */
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-num').forEach(el => statObserver.observe(el));

  function animateCounter(el) {
    const raw = el.dataset.value;
    const numMatch = raw.match(/[\d.]+/);
    if (!numMatch) { el.textContent = raw; return; }
    const target = parseFloat(numMatch[0]);
    const suffix = raw.replace(numMatch[0], '');
    let current = 0;
    const duration = 1400;
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      current = target * (1 - Math.pow(1 - progress, 3));
      el.textContent = (Number.isInteger(target) ? Math.floor(current) : current.toFixed(1)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- 14. PORTFOLIO FILTER + SEARCH ---------- */
  const filterGroup = document.getElementById('filter-group');
  const searchInput = document.getElementById('project-search');
  let activeFilter = 'All';

  filterGroup.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filterGroup.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    applyPortfolioFilters();
  });
  searchInput.addEventListener('input', applyPortfolioFilters);

  function applyPortfolioFilters() {
    const query = searchInput.value.trim().toLowerCase();
    document.querySelectorAll('.project-card').forEach(card => {
      const matchesFilter = activeFilter === 'All' || card.dataset.category === activeFilter;
      const matchesSearch = card.dataset.title.toLowerCase().includes(query);
      card.style.display = (matchesFilter && matchesSearch) ? '' : 'none';
    });
  }

  /* ---------- 15. VIDEO MODAL ---------- */
  const modal = document.getElementById('video-modal');
  document.getElementById('portfolio-grid').addEventListener('click', (e) => {
    const watchTrigger = e.target.closest('[data-watch-url]');
    if (watchTrigger) {
      const project = SITE_DATA.projects.find(p => p.id === Number(watchTrigger.dataset.id));
      if (project) openModal(project, true);
      return;
    }

    const trigger = e.target.closest('[data-open-modal]');
    if (!trigger) return;
    const project = SITE_DATA.projects.find(p => p.id === Number(trigger.dataset.id));
    openModal(project);
  });
  document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  function getEmbedUrl(url) {
    const youTubeId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/i);
    if (youTubeId) return `https://www.youtube.com/embed/${youTubeId[1]}?rel=0&autoplay=1`;

    const driveId = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([\w-]+)/i);
    if (driveId) return `https://drive.google.com/file/d/${driveId[1]}/preview`;

    return url;
  }

  function getEmbedMarkup(embedUrl, originalUrl) {
    if (/youtube\.com\/embed\//.test(embedUrl) || /drive\.google\.com\/file\/d\//.test(embedUrl)) {
      return `<iframe src="${embedUrl}" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    }

    if (/(?:\.mp4|\.webm|\.ogg)(?:\?|$)/i.test(originalUrl)) {
      return `<video controls playsinline src="${originalUrl}"></video>`;
    }

    return `<div class="modal-player-fallback"><a href="${originalUrl}" target="_blank" rel="noopener" class="btn btn-primary"><i class="fa-solid fa-play"></i> Open full video</a></div>`;
  }

  function openModal(project, inlineWatch = false) {
    const embedUrl = getEmbedUrl(project.videoLink);
    const player = document.getElementById('modal-player');
    if (inlineWatch) {
      player.innerHTML = getEmbedMarkup(embedUrl, project.videoLink);
    } else {
      player.innerHTML = '';
    }
    document.getElementById('modal-thumb-img').src = project.thumbnail;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-case').textContent = project.caseStudy;
    document.getElementById('modal-duration').textContent = project.duration;
    document.getElementById('modal-software').textContent = project.software;
    document.getElementById('modal-category').textContent = project.category;
    document.getElementById('modal-watch').href = project.videoLink;
    modal.classList.toggle('watch-only', inlineWatch);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.classList.remove('open');
    modal.classList.remove('watch-only');
    const player = document.getElementById('modal-player');
    if (player) {
      const iframe = player.querySelector('iframe');
      const video = player.querySelector('video');
      if (video) {
        video.pause();
        video.removeAttribute('src');
        video.load();
      }
      if (iframe) {
        iframe.src = 'about:blank';
      }
      player.innerHTML = '';
    }
    document.body.style.overflow = '';
  }

  /* ---------- 16. TESTIMONIALS SWIPER ---------- */
  if (window.Swiper) {
    new Swiper('.testimonial-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: { delay: 4200, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: {
        768: { slidesPerView: 2 },
        1100: { slidesPerView: 3 }
      }
    });
  }

  /* ---------- 17. CONTACT FORM ---------- */
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const details = form.details.value.trim();
    const budget = form.budget.value;
    const statusEl = document.getElementById('form-status');

    if (!name || !email || !details) {
      statusEl.textContent = 'Please fill in your name, email, and project details.';
      statusEl.style.color = 'var(--danger)';
      return;
    }
    // Opens the user's email client pre-filled — replace with a form backend (Formspree, etc.) if preferred.
    const subject = encodeURIComponent(`New project inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nBudget: ${budget}\n\nProject details:\n${details}`);
    window.location.href = `mailto:${SITE_DATA.personal.email}?subject=${subject}&body=${body}`;
    statusEl.textContent = 'Opening your email client…';
    statusEl.style.color = 'var(--teal-bright)';
    form.reset();
  });

  /* ---------- 18. PARTICLES BACKGROUND (hero) ---------- */
  initParticles();
  function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, particles;
    function resize() {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }
    function createParticles() {
      particles = Array.from({ length: 46 }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.5 + 0.15
      }));
    }
    function tick() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(205,164,95,${p.alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(tick);
    }
    resize(); createParticles(); tick();
    window.addEventListener('resize', () => { resize(); createParticles(); });
  }

  /* ---------- 19. REVEAL FALLBACK (for elements not covered by AOS) ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

});

/* ==================================================================
   RENDER FUNCTIONS — build DOM from SITE_DATA (data.js)
   ================================================================== */

function renderNav() {
  document.getElementById('nav-links').innerHTML = SITE_DATA.navLinks
    .map(l => `<a href="${l.href}">${l.label}</a>`).join('');
  document.querySelectorAll('[data-brand-name]').forEach(el => {
    const brand = SITE_DATA.personal.brandName || SITE_DATA.personal.name.split(' ')[0];
    const parts = brand.split(/[_\s]+/);
    if (parts.length >= 2) {
      el.innerHTML = `<span class="brand-name-part part-1">${parts[0]}</span> <span class="brand-name-part part-2">${parts.slice(1).join(' ')}</span>`;
    } else {
      el.textContent = brand;
    }
  });
}

function renderHero() {
  document.getElementById('hero-heading').innerHTML = SITE_DATA.personal.role.replace(
    'Video', '<span class="text-gradient">Video</span>'
  );
}

function renderAbout() {
  document.getElementById('about-paragraph').textContent = SITE_DATA.personal.aboutParagraph;
  document.getElementById('about-years').textContent = SITE_DATA.personal.yearsExperience + '+';

  document.getElementById('skills-list').innerHTML = SITE_DATA.skills.map(s => `
    <div class="skill-row">
      <div class="skill-top"><span>${s.name}</span><span>${s.level}%</span></div>
      <div class="skill-bar"><div class="skill-bar-fill" data-level="${s.level}"></div></div>
    </div>
  `).join('');
}

function renderServices() {
  document.getElementById('services-grid').innerHTML = SITE_DATA.services.map((s, i) => `
    <div class="service-card glass" data-aos="fade-up" data-aos-delay="${(i % 4) * 80}">
      <div class="service-icon"><i class="${s.icon}"></i></div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join('');
}

function renderPortfolio() {
  const categories = ['All', ...new Set(SITE_DATA.projects.map(p => p.category))];
  document.getElementById('filter-group').innerHTML = categories.map((c, i) => `
    <button class="filter-btn ${i === 0 ? 'active' : ''}" data-filter="${c}">${c}</button>
  `).join('');

  document.getElementById('portfolio-grid').innerHTML = SITE_DATA.projects.map((p, i) => `
    <div class="project-card" data-category="${p.category}" data-title="${p.title}" data-aos="fade-up" data-aos-delay="${(i % 3) * 90}">
      <div class="project-thumb">
        <img src="${p.thumbnail}" alt="${p.title} thumbnail" loading="lazy">
        <span class="project-duration">${p.duration}</span>
        <div class="project-play"><span><i class="fa-solid fa-play"></i></span></div>
      </div>
      <div class="project-info">
        <span class="project-cat">${p.category}</span>
        <h3>${p.title}</h3>
        <p class="project-software">${p.software}</p>
        <div class="project-actions">
          <button class="btn btn-primary" data-watch-url="${p.videoLink}" data-id="${p.id}"><i class="fa-solid fa-play"></i> Watch</button>
          <button class="btn btn-ghost" data-open-modal data-id="${p.id}">Case Study</button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  document.getElementById('testimonial-wrapper').innerHTML = SITE_DATA.testimonials.map(t => `
    <div class="swiper-slide">
      <div class="testimonial-card glass">
        <div class="t-stars">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>
        <p class="t-review">"${t.review}"</p>
        <div class="t-person">
          <img src="${t.image}" alt="${t.name}" loading="lazy">
          <div><b>${t.name}</b><span>${t.role}</span></div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderWhyChooseMe() {
  document.getElementById('why-grid').innerHTML = SITE_DATA.whyChooseMe.map((w, i) => `
    <div class="why-card glass" data-aos="fade-up" data-aos-delay="${(i % 3) * 80}">
      <div class="why-icon"><i class="${w.icon}"></i></div>
      <div><h3>${w.title}</h3><p>${w.desc}</p></div>
    </div>
  `).join('');
}

function renderProcess() {
  document.getElementById('process-track').innerHTML = `
    <div class="process-line"><div class="process-line-fill"></div></div>
    ${SITE_DATA.process.map(p => `
      <div class="process-step">
        <div class="process-num">${p.step}</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>
    `).join('')}
  `;
}

function renderPricing() {
  document.getElementById('pricing-grid').innerHTML = SITE_DATA.pricing.map(p => `
    <div class="price-card glass ${p.highlighted ? 'highlight' : ''}">
      ${p.highlighted ? '<span class="price-tag">Most Popular</span>' : ''}
      <div class="price-tier">${p.tier}</div>
      <div class="price-amount">${p.price}<span>${p.unit}</span></div>
      <ul class="price-features">
        ${p.features.map(f => `<li><i class="fa-solid fa-circle-check"></i>${f}</li>`).join('')}
      </ul>
      <a href="#contact" class="btn ${p.highlighted ? 'btn-primary' : 'btn-ghost'}">Hire Me</a>
    </div>
  `).join('');
}

function renderContactSide() {
  const s = SITE_DATA.socials;
  const p = SITE_DATA.personal;
  document.getElementById('contact-email').textContent = p.email;
  document.getElementById('contact-email').href = 'mailto:' + p.email;
  document.getElementById('contact-location').textContent = p.location;

  const socialIcons = [
    { icon: 'fa-brands fa-instagram', link: s.instagram },
    { icon: 'fa-brands fa-linkedin-in', link: s.linkedin },
    { icon: 'fa-brands fa-youtube', link: s.youtube },
    { icon: 'fa-brands fa-whatsapp', link: s.whatsapp },
    { icon: 'fa-brands fa-discord', link: s.discord },
    { icon: 'fa-solid fa-envelope', link: 'mailto:' + p.email }
  ];

  // Footer "Connect" row: company logo first, then LinkedIn, then the rest — centered in circles.
  const footerIcons = [
    { logo: 'logo.png', link: '#home', alt: 'Aravinth Cuts logo' },
    { icon: 'fa-brands fa-linkedin-in', link: s.linkedin },
    ...socialIcons.filter(si => si.icon !== 'fa-brands fa-linkedin-in')
  ];

  document.querySelectorAll('.social-links').forEach(container => {
    const isFooterRow = !!container.closest('footer');
    const icons = isFooterRow ? footerIcons : socialIcons;
    container.innerHTML = icons.map(si => si.logo
      ? `<a href="${si.link}"><img src="${si.logo}" alt="${si.alt}" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;margin:auto;"></a>`
      : `<a href="${si.link}" target="_blank" rel="noopener"><i class="${si.icon}"></i></a>`
    ).join('');
  });
}

function renderFooter() {
  document.getElementById('footer-year').textContent = new Date().getFullYear();
}

function renderStats() {
  const p = SITE_DATA.personal;
  const stats = [
    { label: 'Years Experience', value: p.yearsExperience + '+' },
    { label: 'Projects Completed', value: p.projectsCompleted + '+' },
    { label: 'Happy Clients', value: p.happyClients + '+' },
    { label: 'Views Generated', value: p.viewsGenerated }
  ];
  document.getElementById('stats-strip').innerHTML = stats.map(s => `
    <div class="stat-box glass">
      <div class="stat-num" data-value="${s.value}">0</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
}
