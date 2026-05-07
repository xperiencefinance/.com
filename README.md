<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gallery — Xperience Finance</title>
  <meta name="description" content="Photos and videos from Xperience Finance — insurance, construction, community, and more.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <style>
    /* PAGE HERO */
    .page-hero {
      position: relative;
      padding: 120px 30px 80px;
      text-align: center; overflow: hidden;
    }
    .page-hero-bg {
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 50% 55%, rgba(42,31,0,0.85) 0%, var(--black) 68%);
    }
    .page-hero-bg::before {
      content: ''; position: absolute; inset: 0;
      background: repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(201,168,76,0.03) 39px, rgba(201,168,76,0.03) 40px);
    }
    .page-hero-content { position: relative; z-index: 1; }
    .page-hero h1 {
      font-family: var(--font-serif);
      font-size: clamp(2.4rem, 6vw, 4rem);
      font-weight: 900; color: var(--cream); margin-bottom: 16px;
    }
    .page-hero h1 em { color: var(--gold); font-style: italic; }
    .page-hero p {
      font-size: 1rem; color: var(--muted);
      max-width: 500px; margin: 0 auto; line-height: 1.8;
    }

    /* FILTER TABS */
    .filter-bar {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 8px;
      padding: 36px 30px 0;
    }
    .filter-btn {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--muted);
      background: var(--charcoal);
      border: 1px solid rgba(255,255,255,0.06);
      padding: 10px 20px;
      border-radius: 40px;
      cursor: pointer;
      transition: color var(--transition), border-color var(--transition), background var(--transition);
    }
    .filter-btn:hover { color: var(--gold-light); border-color: var(--gold-border); }
    .filter-btn.active {
      color: var(--gold);
      border-color: var(--gold-border);
      background: var(--gold-faint);
    }

    /* MASONRY / GALLERY GRID */
    .gallery-grid {
      columns: 3;
      column-gap: 16px;
      padding: 40px 30px 80px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .gallery-item {
      break-inside: avoid;
      margin-bottom: 16px;
      position: relative;
      border-radius: var(--radius-lg);
      overflow: hidden;
      cursor: pointer;
      background: var(--charcoal);
      border: 1px dashed var(--gold-border);
      transition: border-color var(--transition), transform var(--transition);
    }
    .gallery-item:hover {
      border-color: var(--gold);
      transform: scale(1.01);
    }

    /* PLACEHOLDER CELLS — varying heights for masonry feel */
    .gallery-placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: var(--muted);
      font-size: 0.68rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 20px;
      text-align: center;
    }
    .gallery-placeholder svg { opacity: 0.28; }

    .h-sm  { min-height: 180px; }
    .h-md  { min-height: 260px; }
    .h-lg  { min-height: 340px; }
    .h-xl  { min-height: 420px; }

    /* When you add real images, replace .gallery-placeholder with: */
    /* <img src="images/photo.jpg" alt="Description" style="width:100%;display:block;"> */

    /* GALLERY ITEM OVERLAY */
    .gallery-item .overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
      opacity: 0;
      transition: opacity var(--transition);
      display: flex;
      align-items: flex-end;
      padding: 18px;
    }
    .gallery-item:hover .overlay { opacity: 1; }
    .overlay-label {
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--gold-light);
    }

    /* VIDEO BADGE */
    .video-badge {
      position: absolute;
      top: 12px; right: 12px;
      background: rgba(0,0,0,0.7);
      border: 1px solid var(--gold-border);
      border-radius: 20px;
      padding: 4px 10px;
      font-size: 0.6rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--gold);
      display: flex; align-items: center; gap: 5px;
    }

    /* LIGHTBOX */
    .lightbox {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.92);
      z-index: 9000;
      align-items: center;
      justify-content: center;
      padding: 40px;
    }
    .lightbox.open { display: flex; }
    .lightbox-inner {
      position: relative;
      max-width: 900px;
      width: 100%;
      text-align: center;
    }
    .lightbox-close {
      position: absolute;
      top: -44px; right: 0;
      background: none; border: none;
      color: var(--muted); font-size: 1.4rem;
      cursor: pointer; line-height: 1;
      transition: color var(--transition);
    }
    .lightbox-close:hover { color: var(--gold); }
    .lightbox-img {
      max-height: 80vh;
      max-width: 100%;
      border-radius: var(--radius-lg);
      border: 1px solid var(--gold-border);
    }

    /* INSTAGRAM ROW */
    .instagram-row {
      background: var(--black);
      border-top: 1px solid var(--gold-border);
      padding: 60px 30px;
      text-align: center;
    }
    .insta-handle {
      font-family: var(--font-serif);
      font-size: 1.5rem;
      color: var(--gold);
      margin-top: 20px;
      display: block;
    }

    /* Upload instructions card */
    .upload-card {
      background: var(--charcoal);
      border: 1px solid var(--gold-border);
      border-radius: var(--radius-lg);
      padding: 32px 36px;
      max-width: 680px;
      margin: 0 auto 60px;
      text-align: left;
    }
    .upload-card h3 {
      font-family: var(--font-serif);
      font-size: 1.15rem;
      color: var(--cream);
      margin-bottom: 12px;
    }
    .upload-card p {
      font-size: 0.88rem;
      color: var(--muted);
      line-height: 1.8;
      margin-bottom: 8px;
    }
    .upload-card code {
      background: var(--mid);
      padding: 2px 7px;
      border-radius: 4px;
      font-size: 0.82rem;
      color: var(--gold-light);
    }

    @media (max-width: 900px) { .gallery-grid { columns: 2; } }
    @media (max-width: 540px) { .gallery-grid { columns: 1; } }
  </style>
</head>
<body>

<div id="progress-bar"></div>

<nav class="nav" role="navigation" aria-label="Main navigation">
  <a href="index.html" class="nav-logo">
    <span class="nav-logo-x">Xperience Finance</span>
    <span class="nav-logo-sub">With Xav</span>
  </a>
  <ul class="nav-links" id="nav-links" role="list">
    <li><a href="index.html">Home</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="gallery.html">Gallery</a></li>
    <li><a href="contact.html" class="nav-cta">Contact</a></li>
  </ul>
  <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>

<main class="page-wrap">

  <section class="page-hero">
    <div class="page-hero-bg"></div>
    <div class="page-hero-content reveal">
      <p class="hero-tag">Behind the Scenes</p>
      <h1>Real Work.<br><em>Real People.</em></h1>
      <div class="gold-line"></div>
      <p>A visual record of the work, the clients, the sites, and the moments that make this business worth building.</p>
    </div>
  </section>

  <!-- FILTER BAR -->
  <div class="filter-bar" role="navigation" aria-label="Gallery filters">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="insurance">Insurance</button>
    <button class="filter-btn" data-filter="construction">Construction</button>
    <button class="filter-btn" data-filter="community">Community</button>
    <button class="filter-btn" data-filter="video">Videos</button>
  </div>

  <!-- GALLERY GRID -->
  <!-- HOW TO ADD YOUR OWN IMAGES:
       1. Save your image to the images/ folder (e.g. images/site-001.jpg)
       2. Replace a .gallery-placeholder div with:
          <img src="images/site-001.jpg" alt="Description" style="width:100%;display:block;">
       3. Remove the .gallery-placeholder and all its child elements
  -->
  <div class="gallery-grid" id="gallery-grid">

    <!-- ITEM 1 — Construction, Large -->
    <div class="gallery-item h-xl reveal" data-category="construction">
      <div class="gallery-placeholder h-xl">
        <svg width="36" height="36" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><path d="M2 20h20M4 20V10l8-6 8 6v10"/></svg>
        <span>Construction Site<br>Photo</span>
      </div>
      <div class="overlay"><span class="overlay-label">Construction</span></div>
    </div>

    <!-- ITEM 2 — Insurance, Medium -->
    <div class="gallery-item h-md reveal" data-category="insurance">
      <div class="gallery-placeholder h-md">
        <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        <span>Insurance<br>Photo</span>
      </div>
      <div class="overlay"><span class="overlay-label">Insurance</span></div>
    </div>

    <!-- ITEM 3 — Community, Small -->
    <div class="gallery-item h-sm reveal" data-category="community">
      <div class="gallery-placeholder h-sm">
        <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
        <span>Community<br>Event</span>
      </div>
      <div class="overlay"><span class="overlay-label">Community</span></div>
    </div>

    <!-- ITEM 4 — Video, Large -->
    <div class="gallery-item h-lg reveal" data-category="video">
      <div class="gallery-placeholder h-lg">
        <svg width="36" height="36" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M10 9l5 3-5 3V9z"/></svg>
        <span>Feature Video</span>
      </div>
      <div class="video-badge">
        <svg width="8" height="8" fill="currentColor" viewBox="0 0 8 8"><path d="M2 1l5 3-5 3V1z"/></svg>
        Video
      </div>
      <div class="overlay"><span class="overlay-label">Watch Video</span></div>
    </div>

    <!-- ITEM 5 — Construction, Medium -->
    <div class="gallery-item h-md reveal" data-category="construction">
      <div class="gallery-placeholder h-md">
        <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        <span>Construction<br>Photo</span>
      </div>
      <div class="overlay"><span class="overlay-label">Construction</span></div>
    </div>

    <!-- ITEM 6 — Insurance, Small -->
    <div class="gallery-item h-sm reveal" data-category="insurance">
      <div class="gallery-placeholder h-sm">
        <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        <span>Insurance<br>Photo</span>
      </div>
      <div class="overlay"><span class="overlay-label">Insurance</span></div>
    </div>

    <!-- ITEM 7 — Community, Large -->
    <div class="gallery-item h-lg reveal" data-category="community">
      <div class="gallery-placeholder h-lg">
        <svg width="36" height="36" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        <span>Community<br>Photo</span>
      </div>
      <div class="overlay"><span class="overlay-label">Community</span></div>
    </div>

    <!-- ITEM 8 — Video, Medium -->
    <div class="gallery-item h-md reveal" data-category="video">
      <div class="gallery-placeholder h-md">
        <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M10 9l5 3-5 3V9z"/></svg>
        <span>Video</span>
      </div>
      <div class="video-badge">
        <svg width="8" height="8" fill="currentColor" viewBox="0 0 8 8"><path d="M2 1l5 3-5 3V1z"/></svg>
        Video
      </div>
      <div class="overlay"><span class="overlay-label">Watch Video</span></div>
    </div>

    <!-- ITEM 9 — Construction, Small -->
    <div class="gallery-item h-xl reveal" data-category="construction">
      <div class="gallery-placeholder h-xl">
        <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        <span>Construction<br>Photo</span>
      </div>
      <div class="overlay"><span class="overlay-label">Construction</span></div>
    </div>

  </div><!-- /gallery-grid -->

  <!-- HOW TO ADD IMAGES CARD -->
  <div class="section" style="padding-top: 0;">
    <div class="upload-card reveal">
      <h3>📸 How to Add Your Own Photos</h3>
      <p>1. Save your image files into the <code>images/</code> folder in your project.</p>
      <p>2. Open <code>gallery.html</code> and find a <code>.gallery-placeholder</code> block.</p>
      <p>3. Replace the entire <code>&lt;div class="gallery-placeholder"&gt;</code> block with:<br>
        <code>&lt;img src="images/your-photo.jpg" alt="Your description" style="width:100%;display:block;"&gt;</code>
      </p>
      <p>4. Keep the <code>.overlay</code> div — it adds the hover label effect over your real photo.</p>
      <p style="color: var(--gold); margin-top: 12px;">Tip: Use <strong>JPG</strong> for photos, <strong>PNG</strong> for logos, and keep files under 1MB for fast loading.</p>
    </div>
  </div>

  <!-- INSTAGRAM SECTION -->
  <section class="instagram-row reveal">
    <p class="section-tag" style="justify-content:center;">Follow Along</p>
    <p style="color: var(--muted); font-size: 0.9rem; max-width: 400px; margin: 0 auto 20px;">Stay connected for updates, tips, and behind-the-scenes moments.</p>
    <a href="https://instagram.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
      <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
      Follow on Instagram
    </a>
    <span class="insta-handle">@YOUR_HANDLE</span>
  </section>

</main>

<footer class="footer">
  <div class="footer-logo">Xperience Finance</div>
  <p class="footer-tagline">With Xav · Building Trust · One Conversation at a Time</p>
  <nav class="footer-links" aria-label="Footer navigation">
    <a href="index.html">Home</a><span>·</span>
    <a href="services.html">Services</a><span>·</span>
    <a href="about.html">About</a><span>·</span>
    <a href="gallery.html">Gallery</a><span>·</span>
    <a href="contact.html">Contact</a>
  </nav>
  <p class="footer-copy">&copy; 2025 Xperience Finance. All rights reserved. Trinidad & Tobago.</p>
</footer>

<!-- LIGHTBOX -->
<div class="lightbox" id="lightbox" role="dialog" aria-label="Image preview" aria-modal="true">
  <div class="lightbox-inner">
    <button class="lightbox-close" id="lightbox-close" aria-label="Close preview">✕</button>
    <img src="" alt="" class="lightbox-img" id="lightbox-img">
  </div>
</div>

<script src="js/main.js"></script>
<script>
  // --- Gallery filter ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        item.style.display = match ? 'block' : 'none';
      });
    });
  });

  // --- Lightbox (works with real <img> tags) ---
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
</script>
</body>
</html>
