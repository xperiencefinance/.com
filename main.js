<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Services — Xperience Finance</title>
  <meta name="description" content="Insurance and financial services by Xperience Finance — life, motor, property, construction, and business protection in Trinidad & Tobago.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <style>
    /* --- PAGE HERO (shorter) --- */
    .page-hero {
      position: relative;
      padding: 110px 30px 80px;
      text-align: center;
      overflow: hidden;
    }
    .page-hero-bg {
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 50% 60%, rgba(42,31,0,0.8) 0%, var(--black) 70%);
    }
    .page-hero-bg::before {
      content: '';
      position: absolute; inset: 0;
      background: repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(201,168,76,0.03) 39px, rgba(201,168,76,0.03) 40px);
    }
    .page-hero-content { position: relative; z-index: 1; }
    .page-hero h1 {
      font-family: var(--font-serif);
      font-size: clamp(2.4rem, 6vw, 4rem);
      font-weight: 900;
      color: var(--cream);
      margin-bottom: 16px;
    }
    .page-hero h1 em { color: var(--gold); font-style: italic; }
    .page-hero p {
      font-size: 1rem; color: var(--muted);
      max-width: 520px; margin: 0 auto;
      line-height: 1.8;
    }

    /* --- SERVICE DETAIL CARDS --- */
    .service-detail {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      align-items: center;
      padding: 70px 0;
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    .service-detail:last-child { border-bottom: none; }
    .service-detail.reverse .sd-text { order: 2; }
    .service-detail.reverse .sd-visual { order: 1; }

    .sd-tag {
      font-size: 0.6rem; letter-spacing: 0.4em;
      text-transform: uppercase; color: var(--gold);
      margin-bottom: 14px;
    }
    .sd-title {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 3vw, 2.1rem);
      font-weight: 700; color: var(--cream);
      line-height: 1.2; margin-bottom: 16px;
    }
    .sd-title em { color: var(--gold); font-style: italic; }
    .sd-body {
      font-size: 0.95rem; color: var(--text);
      line-height: 1.9; margin-bottom: 24px;
    }
    .sd-body p { margin-bottom: 14px; }
    .sd-body p:last-child { margin-bottom: 0; }

    .sd-features {
      list-style: none;
      display: flex; flex-direction: column; gap: 10px;
      margin-bottom: 28px;
    }
    .sd-features li {
      font-size: 0.85rem; color: var(--muted);
      display: flex; align-items: flex-start; gap: 10px;
    }
    .sd-features li::before {
      content: '';
      width: 5px; height: 5px; border-radius: 50%;
      background: var(--gold); flex-shrink: 0;
      margin-top: 7px;
    }

    .sd-visual {
      background: var(--charcoal);
      border: 1px dashed var(--gold-border);
      border-radius: var(--radius-lg);
      aspect-ratio: 4/3;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      gap: 12px;
      color: var(--muted); font-size: 0.72rem;
      letter-spacing: 0.1em; text-transform: uppercase;
      text-align: center; padding: 20px;
    }
    .sd-visual svg { opacity: 0.3; }
    .sd-visual span { max-width: 180px; line-height: 1.6; }

    /* --- FAQ --- */
    .faq-list { margin-top: 40px; display: flex; flex-direction: column; gap: 12px; }
    .faq-item {
      background: var(--charcoal);
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: var(--radius);
      overflow: hidden;
      transition: border-color var(--transition);
    }
    .faq-item:hover { border-color: var(--gold-border); }
    .faq-q {
      width: 100%; text-align: left;
      background: none; border: none; cursor: pointer;
      padding: 20px 24px;
      display: flex; align-items: center; justify-content: space-between; gap: 16px;
      font-family: var(--font-sans); font-size: 0.95rem;
      font-weight: 400; color: var(--cream);
    }
    .faq-q .faq-icon {
      width: 20px; height: 20px; flex-shrink: 0;
      border: 1px solid var(--gold-border); border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      color: var(--gold); transition: transform var(--transition);
    }
    .faq-item.open .faq-q .faq-icon { transform: rotate(45deg); }
    .faq-a {
      display: none; padding: 0 24px 20px;
      font-size: 0.88rem; color: var(--muted); line-height: 1.8;
    }
    .faq-item.open .faq-a { display: block; }

    @media (max-width: 768px) {
      .service-detail { grid-template-columns: 1fr; gap: 28px; }
      .service-detail.reverse .sd-text { order: 1; }
      .service-detail.reverse .sd-visual { order: 2; }
    }
  </style>
</head>
<body>

<div id="progress-bar"></div>

<!-- NAV -->
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
  <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>

<main class="page-wrap">

  <!-- PAGE HERO -->
  <section class="page-hero">
    <div class="page-hero-bg"></div>
    <div class="page-hero-content reveal">
      <p class="hero-tag">What We Offer</p>
      <h1>Services Built for<br><em>Real Life</em></h1>
      <div class="gold-line"></div>
      <p>Every product we offer is selected for one reason: it protects what you've worked hard to build.</p>
    </div>
  </section>

  <!-- SERVICES DETAIL -->
  <div class="section">

    <div class="service-detail reveal">
      <div class="sd-text">
        <p class="sd-tag">01 — Life Insurance</p>
        <h2 class="sd-title">Your Family<br>Deserves <em>Certainty.</em></h2>
        <div class="sd-body">
          <p>A life policy isn't about dying. It's about refusing to let dying destroy the people you love. We build life coverage strategies that match your income, your dependents, and your goals.</p>
        </div>
        <ul class="sd-features">
          <li>Term life and whole life options</li>
          <li>Critical illness riders available</li>
          <li>Tailored coverage amounts</li>
          <li>Mortgage protection planning</li>
        </ul>
        <a href="contact.html" class="btn btn-outline">Get Covered</a>
      </div>
      <div class="sd-visual">
        <!-- Replace with: <img src="images/life-insurance.jpg" alt="Life Insurance"> -->
        <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        <span>Add life insurance photo here</span>
      </div>
    </div>

    <div class="service-detail reverse reveal">
      <div class="sd-text">
        <p class="sd-tag">02 — Motor Insurance</p>
        <h2 class="sd-title">On the Road,<br><em>Fully Protected.</em></h2>
        <div class="sd-body">
          <p>Whether it's your personal vehicle or a commercial fleet, we find the right motor cover fast — so you're never on the road without a safety net.</p>
        </div>
        <ul class="sd-features">
          <li>Comprehensive and third-party cover</li>
          <li>Quick claims support</li>
          <li>Commercial vehicle options</li>
          <li>Competitive premium comparison</li>
        </ul>
        <a href="contact.html" class="btn btn-outline">Get a Quote</a>
      </div>
      <div class="sd-visual">
        <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        <span>Add motor insurance photo here</span>
      </div>
    </div>

    <div class="service-detail reveal">
      <div class="sd-text">
        <p class="sd-tag">03 — Property & Home</p>
        <h2 class="sd-title">Your Home.<br><em>Our Priority.</em></h2>
        <div class="sd-body">
          <p>Fire, flood, theft, storm — property risk in Trinidad & Tobago is real. We structure home and property cover that gives you peace of mind, not a stack of exclusions.</p>
        </div>
        <ul class="sd-features">
          <li>Homeowners and renters policies</li>
          <li>Landlord protection available</li>
          <li>Contents and structural cover</li>
          <li>Catastrophe and hurricane riders</li>
        </ul>
        <a href="contact.html" class="btn btn-outline">Protect Your Property</a>
      </div>
      <div class="sd-visual">
        <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        <span>Add property photo here</span>
      </div>
    </div>

    <div class="service-detail reverse reveal">
      <div class="sd-text">
        <p class="sd-tag">04 — Construction Risk</p>
        <h2 class="sd-title">Build With<br><em>Confidence.</em></h2>
        <div class="sd-body">
          <p>Construction sites are high-risk environments. Whether you're a contractor, developer, or homeowner building your dream, we ensure your project is covered from day one to handover.</p>
        </div>
        <ul class="sd-features">
          <li>Contractors all-risk policies</li>
          <li>Public liability coverage</li>
          <li>Plant and equipment cover</li>
          <li>Professional indemnity options</li>
        </ul>
        <a href="contact.html" class="btn btn-outline">Cover Your Project</a>
      </div>
      <div class="sd-visual">
        <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><path d="M2 20h20M4 20V10l8-6 8 6v10"/><rect x="9" y="14" width="6" height="6"/></svg>
        <span>Add construction photo here</span>
      </div>
    </div>

  </div><!-- /section -->

  <!-- FAQ -->
  <div style="background: var(--black); padding: 1px 0;">
    <div class="section reveal">
      <p class="section-tag">Common Questions</p>
      <h2 class="section-title">You Asked,<br><em>We Answer.</em></h2>

      <div class="faq-list">

        <div class="faq-item">
          <button class="faq-q" aria-expanded="false">
            How do I know which coverage I actually need?
            <span class="faq-icon"><svg width="10" height="10" stroke="currentColor" stroke-width="2" viewBox="0 0 10 10"><line x1="5" y1="0" x2="5" y2="10"/><line x1="0" y1="5" x2="10" y2="5"/></svg></span>
          </button>
          <div class="faq-a">That's exactly what we work out together. I'll ask about your life stage, your assets, your income, and your dependents — then recommend only what makes sense for you. No upselling, no pressure.</div>
        </div>

        <div class="faq-item">
          <button class="faq-q" aria-expanded="false">
            Is it expensive to get started?
            <span class="faq-icon"><svg width="10" height="10" stroke="currentColor" stroke-width="2" viewBox="0 0 10 10"><line x1="5" y1="0" x2="5" y2="10"/><line x1="0" y1="5" x2="10" y2="5"/></svg></span>
          </button>
          <div class="faq-a">Good coverage is more affordable than most people think — and far cheaper than the cost of going unprotected. We'll find a plan that works for your actual budget.</div>
        </div>

        <div class="faq-item">
          <button class="faq-q" aria-expanded="false">
            What happens when I need to make a claim?
            <span class="faq-icon"><svg width="10" height="10" stroke="currentColor" stroke-width="2" viewBox="0 0 10 10"><line x1="5" y1="0" x2="5" y2="10"/><line x1="0" y1="5" x2="10" y2="5"/></svg></span>
          </button>
          <div class="faq-a">You call me. I walk you through the process, help with documentation, and advocate on your behalf. You're not alone in the claims process — that's part of the service.</div>
        </div>

        <div class="faq-item">
          <button class="faq-q" aria-expanded="false">
            Can I get covered even if I've been declined before?
            <span class="faq-icon"><svg width="10" height="10" stroke="currentColor" stroke-width="2" viewBox="0 0 10 10"><line x1="5" y1="0" x2="5" y2="10"/><line x1="0" y1="5" x2="10" y2="5"/></svg></span>
          </button>
          <div class="faq-a">Often yes. We work with multiple insurers and can often find options that weren't available through whoever declined you. Book a consultation and let's look at your situation specifically.</div>
        </div>

      </div>
    </div>
  </div>

  <!-- CTA -->
  <section class="cta-band reveal">
    <h2>Ready to <em>Get Protected?</em></h2>
    <p>A 20-minute conversation can change the entire financial trajectory of your family. Let's start one.</p>
    <div class="btn-group">
      <a href="contact.html" class="btn btn-gold">Book a Free Consultation</a>
    </div>
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

<script src="js/main.js"></script>
<script>
  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
      btn.setAttribute('aria-expanded', !isOpen);
    });
  });
</script>
</body>
</html>
