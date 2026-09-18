/**
 * Shiv Jani - Personal Brand Website Core Engine
 * Handcrafted vanilla JavaScript with zero frameworks or external dependencies.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const config = window.SITE_CONFIG || (typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG : {});

  /* ==========================================================================
     1. SVG ICON REGISTRY
     ========================================================================== */
  const ICONS = {
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/></svg>`,
    email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    terminal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
    cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    container: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M6 7V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"/></svg>`,
    layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    git: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 9v12"/><path d="M18 15a9 9 0 0 0-9-9H6"/></svg>`,
    play: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
    settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
    activity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  };

  /* ==========================================================================
     2. THEME CONTROLLER (LIGHT / DARK MODE)
     ========================================================================== */
  const themeBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-toggle-icon');

  function updateThemeUI(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeIcon) {
      themeIcon.innerHTML = theme === 'dark' ? ICONS.sun : ICONS.moon;
    }
    if (themeBtn) {
      themeBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`);
    }
  }

  let currentTheme = localStorage.getItem('theme');
  if (!currentTheme) {
    currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  updateThemeUI(currentTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', currentTheme);
      updateThemeUI(currentTheme);
      if (window.Analytics) {
        window.Analytics.trackEvent('theme_toggle', { theme: currentTheme });
      }
    });
  }

  /* ==========================================================================
     3. PROFILE SECTION RENDERER
     ========================================================================== */
  function renderProfile() {
    const p = config.personal;
    if (!p) return;

    const avatarEl = document.getElementById('profile-avatar-img');
    const avatarFallback = document.getElementById('profile-avatar-fallback');
    
    if (avatarEl && p.avatar) {
      avatarEl.src = p.avatar;
      avatarEl.alt = `${p.name} Profile Picture`;
      avatarEl.onerror = () => {
        avatarEl.style.display = 'none';
        if (avatarFallback) {
          avatarFallback.textContent = p.avatarFallbackText || 'SJ';
          avatarFallback.style.display = 'flex';
        }
      };
    }

    const nameEl = document.getElementById('profile-name');
    if (nameEl) nameEl.textContent = p.name || 'Shiv Jani';

    const badgeEl = document.getElementById('profile-badge');
    if (badgeEl) badgeEl.textContent = p.badge || 'CHAPTER LEADER @ ELASTIC USER GROUP GUJARAT';

    const bioEl = document.getElementById('profile-bio');
    if (bioEl) bioEl.textContent = p.title || p.bio || 'DevOps Engineer • Cloud • Kubernetes • Linux • AI';

    const summaryText = document.getElementById('profile-summary-text');
    if (summaryText && p.summary) {
      summaryText.textContent = p.summary;
    }

    const statusText = document.getElementById('status-text');
    if (statusText && p.status) {
      statusText.textContent = p.status.text || 'Open to opportunities';
    }
  }

  /* ==========================================================================
     4. SOCIAL ICONS RENDERER
     ========================================================================== */
  function renderSocials() {
    const socialsContainer = document.getElementById('social-bar-container');
    if (!socialsContainer || !config.socials) return;

    socialsContainer.innerHTML = '';

    Object.keys(config.socials).forEach(key => {
      const item = config.socials[key];
      if (!item || !item.url || item.url.trim() === '') return;

      const a = document.createElement('a');
      a.className = 'social-icon-btn';
      a.href = item.url;
      a.target = item.url.startsWith('mailto:') || item.url.startsWith('tel:') ? '_self' : '_blank';
      if (!item.url.startsWith('mailto:') && !item.url.startsWith('tel:')) {
        a.rel = 'noopener noreferrer';
      }
      a.setAttribute('aria-label', item.label || key);
      a.setAttribute('data-tooltip', item.label || key);
      
      const iconSvg = ICONS[key] || ICONS.email;
      a.innerHTML = iconSvg;

      a.addEventListener('click', () => {
        if (window.Analytics) {
          window.Analytics.trackEvent('social_click', { platform: key, url: item.url });
        }
      });

      socialsContainer.appendChild(a);
    });
  }

  /* ==========================================================================
     5. PRIMARY LINKS CARDS RENDERER
     ========================================================================== */
  function renderPrimaryLinks() {
    const container = document.getElementById('primary-links-container');
    if (!container || !Array.isArray(config.primaryLinks)) return;

    container.innerHTML = '';

    config.primaryLinks.forEach((link, idx) => {
      if (!link.url || link.url.trim() === '') return;

      const card = document.createElement('a');
      card.className = `link-card ${link.featured ? 'featured-card' : ''}`;
      card.href = link.url;
      
      if (!link.isAnchor && !link.url.startsWith('mailto:') && !link.url.startsWith('tel:')) {
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
      }

      const content = document.createElement('div');
      content.className = 'link-card-content';

      const numSpan = document.createElement('span');
      numSpan.className = 'link-number';
      numSpan.textContent = link.number || String(idx + 1).padStart(2, '0');
      content.appendChild(numSpan);

      const iconBox = document.createElement('div');
      iconBox.className = 'link-icon-box';
      iconBox.innerHTML = ICONS[link.icon] || ICONS.briefcase;
      content.appendChild(iconBox);

      const details = document.createElement('div');
      details.className = 'link-details';

      const titleRow = document.createElement('div');
      titleRow.className = 'link-title-row';

      const titleSpan = document.createElement('span');
      titleSpan.className = 'link-title';
      titleSpan.textContent = link.title;
      titleRow.appendChild(titleSpan);

      if (link.badge) {
        const badgeSpan = document.createElement('span');
        badgeSpan.className = 'link-badge';
        badgeSpan.textContent = link.badge;
        titleRow.appendChild(badgeSpan);
      }

      details.appendChild(titleRow);

      if (link.description) {
        const descSpan = document.createElement('span');
        descSpan.className = 'link-description';
        descSpan.textContent = link.description;
        details.appendChild(descSpan);
      }

      content.appendChild(details);
      card.appendChild(content);

      const arrowDiv = document.createElement('div');
      arrowDiv.className = 'link-arrow';
      arrowDiv.innerHTML = ICONS.arrowRight;
      card.appendChild(arrowDiv);

      card.addEventListener('click', () => {
        if (window.Analytics) {
          window.Analytics.trackEvent('link_card_click', { id: link.id || link.title, url: link.url });
        }
      });

      container.appendChild(card);
    });
  }

  /* ==========================================================================
     6. WORK EXPERIENCE TIMELINE RENDERER
     ========================================================================== */
  function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container || !Array.isArray(config.experience)) return;

    container.innerHTML = '';

    config.experience.forEach(exp => {
      const card = document.createElement('div');
      card.className = 'timeline-card';

      const header = document.createElement('div');
      header.className = 'timeline-header';

      const role = document.createElement('div');
      role.className = 'timeline-role';
      role.textContent = exp.role;
      header.appendChild(role);

      const meta = document.createElement('div');
      meta.className = 'timeline-meta';

      const company = document.createElement('span');
      company.className = 'timeline-company';
      company.textContent = `${exp.company} • ${exp.location}`;
      meta.appendChild(company);

      const period = document.createElement('span');
      period.className = 'timeline-period';
      period.textContent = exp.period;
      meta.appendChild(period);

      header.appendChild(meta);
      card.appendChild(header);

      if (exp.description) {
        const desc = document.createElement('p');
        desc.className = 'timeline-description';
        desc.textContent = exp.description;
        card.appendChild(desc);
      }

      if (Array.isArray(exp.highlights) && exp.highlights.length > 0) {
        const ul = document.createElement('ul');
        ul.className = 'timeline-bullet-list';
        exp.highlights.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
        });
        card.appendChild(ul);
      }

      if (Array.isArray(exp.technologies) && exp.technologies.length > 0) {
        const techDiv = document.createElement('div');
        techDiv.className = 'timeline-tech-tags';
        exp.technologies.forEach(t => {
          const chip = document.createElement('span');
          chip.className = 'timeline-tech-chip';
          chip.textContent = t;
          techDiv.appendChild(chip);
        });
        card.appendChild(techDiv);
      }

      container.appendChild(card);
    });
  }

  /* ==========================================================================
     7. EDUCATION RENDERER
     ========================================================================== */
  function renderEducation() {
    const container = document.getElementById('education-container');
    if (!container || !Array.isArray(config.education)) return;

    container.innerHTML = '';

    config.education.forEach(edu => {
      const card = document.createElement('div');
      card.className = 'edu-card';

      const degree = document.createElement('div');
      degree.className = 'edu-degree';
      degree.textContent = edu.degree;
      card.appendChild(degree);

      const inst = document.createElement('div');
      inst.className = 'edu-institution';
      inst.textContent = `${edu.institution} (${edu.location})`;
      card.appendChild(inst);

      const period = document.createElement('div');
      period.className = 'edu-period';
      period.textContent = edu.period;
      card.appendChild(period);

      container.appendChild(card);
    });
  }

  /* ==========================================================================
     8. CERTIFICATIONS RENDERER
     ========================================================================== */
  function renderCertifications() {
    const container = document.getElementById('certifications-container');
    if (!container || !Array.isArray(config.certifications)) return;

    container.innerHTML = '';

    config.certifications.forEach(cert => {
      const card = document.createElement('div');
      card.className = 'cert-card';

      const badge = document.createElement('span');
      badge.className = 'cert-badge';
      badge.textContent = cert.badge || 'Certified';
      card.appendChild(badge);

      const name = document.createElement('div');
      name.className = 'cert-name';
      name.textContent = cert.name;
      card.appendChild(name);

      const issuer = document.createElement('div');
      issuer.className = 'cert-issuer';
      issuer.textContent = cert.issuer;
      card.appendChild(issuer);

      container.appendChild(card);
    });
  }

  /* ==========================================================================
     9. LANGUAGES RENDERER
     ========================================================================== */
  function renderLanguages() {
    const container = document.getElementById('languages-container');
    if (!container || !Array.isArray(config.languages)) return;

    container.innerHTML = '';

    config.languages.forEach(lang => {
      const chip = document.createElement('div');
      chip.className = 'lang-chip';
      chip.innerHTML = `<span>${lang.name}</span> <span class="lang-level">(${lang.level})</span>`;
      container.appendChild(chip);
    });
  }

  /* ==========================================================================
     10. "MY ALL TECH LIFE" PHOTO GALLERY RENDERER & LIGHTBOX
     ========================================================================== */
  function renderGallery() {
    const container = document.getElementById('gallery-grid-container');
    const gal = config.gallery;
    if (!container || !gal || !Array.isArray(gal.items)) return;

    container.innerHTML = '';

    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const modalCaption = document.getElementById('lightbox-caption');
    const modalClose = document.getElementById('lightbox-close');

    function openLightbox(src, captionText) {
      if (!modal || !modalImg) return;
      modalImg.src = src;
      if (modalCaption) modalCaption.textContent = captionText;
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
    }

    function closeLightbox() {
      if (!modal) return;
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }

    if (modalClose) {
      modalClose.addEventListener('click', closeLightbox);
    }
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeLightbox();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeLightbox();
      }
    });

    gal.items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'gallery-card bento-glass-card';

      const img = document.createElement('img');
      img.className = 'gallery-img';
      img.src = item.src;
      img.alt = item.title;
      img.loading = 'lazy';

      const overlay = document.createElement('div');
      overlay.className = 'gallery-overlay';

      const meta = document.createElement('div');
      meta.className = 'gallery-card-meta';
      meta.textContent = `${item.category} • ${item.date}`;

      const title = document.createElement('div');
      title.className = 'gallery-card-title';
      title.textContent = item.title;

      overlay.appendChild(meta);
      overlay.appendChild(title);

      card.appendChild(img);
      card.appendChild(overlay);

      card.addEventListener('click', () => {
        openLightbox(item.src, `${item.title} (${item.category}, ${item.date})`);
        if (window.Analytics) {
          window.Analytics.trackEvent('gallery_view', { title: item.title, src: item.src });
        }
      });

      container.appendChild(card);
    });
  }

  /* ==========================================================================
     11. TECH STACK CHIPS RENDERER
     ========================================================================== */
  function renderTechStack() {
    const container = document.getElementById('tech-chips-container');
    if (!container || !Array.isArray(config.skills)) return;

    container.innerHTML = '';

    config.skills.forEach(t => {
      const chip = document.createElement('div');
      chip.className = 'tech-chip';
      
      const iconSvg = ICONS[t.icon] || ICONS.code;
      chip.innerHTML = `${iconSvg} <span>${t.name}</span>`;
      container.appendChild(chip);
    });
  }

  /* ==========================================================================
     12. PERSONAL BRAND CTA RENDERER
     ========================================================================== */
  function renderCTA() {
    const container = document.getElementById('cta-container');
    const cta = config.callToAction;
    if (!container || !cta) return;

    container.innerHTML = '';

    const banner = document.createElement('div');
    banner.className = 'cta-banner';

    const head = document.createElement('h2');
    head.className = 'cta-headline';
    head.textContent = cta.headline || "Let's Build & Collaborate.";
    banner.appendChild(head);

    if (cta.description) {
      const desc = document.createElement('p');
      desc.className = 'cta-description';
      desc.textContent = cta.description;
      banner.appendChild(desc);
    }

    const btnRow = document.createElement('div');
    btnRow.className = 'cta-buttons';

    if (cta.primaryBtn && cta.primaryBtn.url) {
      const btn1 = document.createElement('a');
      btn1.className = 'cta-btn-primary';
      btn1.href = cta.primaryBtn.url;
      btn1.textContent = cta.primaryBtn.text || "Send Email";
      btnRow.appendChild(btn1);
    }

    if (cta.secondaryBtn && cta.secondaryBtn.url) {
      const btn2 = document.createElement('a');
      btn2.className = 'cta-btn-secondary';
      btn2.href = cta.secondaryBtn.url;
      btn2.target = '_blank';
      btn2.rel = 'noopener noreferrer';
      btn2.textContent = cta.secondaryBtn.text || "LinkedIn Profile";
      btnRow.appendChild(btn2);
    }

    banner.appendChild(btnRow);
    container.appendChild(banner);
  }

  /* ==========================================================================
     13. DYNAMIC JSON-LD STRUCTURED DATA GENERATOR
     ========================================================================== */
  function generateStructuredData() {
    const p = config.personal || {};
    const s = config.socials || {};

    const sameAsList = [];
    Object.keys(s).forEach(key => {
      if (s[key] && s[key].url && !s[key].url.startsWith('mailto:') && !s[key].url.startsWith('tel:')) {
        sameAsList.push(s[key].url);
      }
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": p.name || "Shiv Jani",
      "jobTitle": "Chapter Leader @ Elastic User Group Gujarat | DevOps Engineer",
      "description": p.bio || "Building with Cloud, DevOps, Kubernetes, and AI.",
      "knowsAbout": ["Cloud Infrastructure", "Kubernetes", "DevOps", "Linux", "Elasticsearch", "Kibana", "AWS", "Terraform", "Docker"],
      "sameAs": sameAsList
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema, null, 2);
    document.head.appendChild(script);
  }

  /* ==========================================================================
     INITIALIZATION EXECUTOR
     ========================================================================== */
  renderProfile();
  renderSocials();
  renderPrimaryLinks();
  renderExperience();
  renderGallery();
  renderCertifications();
  renderEducation();
  renderTechStack();
  renderLanguages();
  renderCTA();
  generateStructuredData();
});
