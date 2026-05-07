<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About — Xperience Finance</title>
  <meta name="description" content="The story of Xav — Xperience Finance. Built on patience, trust, and a couple of laughs along the way.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <style>
    /* PAGE HERO */
    .page-hero {
      position: relative;
      padding: 120px 30px 90px;
      text-align: center; overflow: hidden;
    }
    .page-hero-bg {
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 50% 55%, rgba(42,31,0,0.85) 0%, var(--black) 68%);
    }
    .page-hero-bg::before {
      content: '';
      position: absolute; inset: 0;
      background: repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(201,168,76,0.03) 39px, rgba(201,168,76,0.03) 40px);
    }
    .page-hero-content { position: relative; z-index: 1; }
    .page-hero h1 {
      font-family: var(--font-serif);
      font-size: clamp(2.6rem, 7vw, 4.8rem);
      font-weight: 900; color: var(--cream);
      line-height: 1.05; margin-bottom: 22px;
    }
    .page-hero h1 em { color: var(--gold); font-style: italic; }
    .page-hero .hero-desc {
      font-size: 1rem; color: var(--muted);
      max-width: 480px; margin: 0 auto;
      line-height: 1.8;
    }

    /* SPEECH LAYOUT */
    .speech-wrap {
      max-width: 780px;
      margin: 0 auto;
      padding: 80px 30px 100px;
    }

    .speech-section {
      margin-bottom: 0;
    }

    .speech-label {
      font-size: 0.6rem;
      letter-spacing: 0.45em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 22px;
      display: flex; align-items: center; gap: 14px;
    }
    .speech-label::after {
      content: ''; flex: 1; height: 1px;
      background: var(--gold-border);
    }

    .speech-text {
      font-size: clamp(1rem, 2.2vw, 1.1rem);
      color: var(--text); line-height: 1.95;
    }
    .speech-text p { margin-bottom: 22px; }
    .speech-text p:last-child { margin-bottom: 0; }
    .speech-text strong { color: var(--cream); font-weight: 500; }
    .speech-text em { font-style: italic; color: var(--gold-light); }

    .bold-line {
      display: block;
      font-family: var(--font-serif);
      font-size: clamp(1.15rem, 2.8vw, 1.45rem);
      font-weight: 700; color: var(--cream);
      line-height: 1.45; margin: 30px 0 0;
    }

    .closing-box {
      background: linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.03));
      border: 1px solid var(--gold-border);
      border-radius: 12px;
      padding: 42px 38px; margin-top: 30px;
    }
    .closing-box p {
      font-family: var(--font-serif);
      font-size: clamp(1rem, 2.2vw, 1.15rem);
      font-style: italic; color: var(--cream);
      line-height: 1.8; margin-bottom: 20px;
    }
    .closing-box p:last-child { margin-bottom: 0; }

    /* PROFILE CARD */
    .profile-card {
      background: var(--charcoal);
      border: 1px solid var(--gold-border);
      border-radius: var(--radius-lg);
      padding: 40px;
      display: grid;
      grid-template-columns: 160px 1fr;
      gap: 36px;
      align-items: center;
      margin-bottom: 60px;
    }
    .profile-img {
      width: 160px; height: 160px;
      border-radius: 50%;
      background: var(--mid);
      border: 2px solid var(--gold-border);
      display: flex; align-items: center; justify-content: center;
      color: var(--muted); font-size: 0.65rem;
      letter-spacing: 0.15em; text-transform: uppercase;
      text-align: center; flex-direction: column; gap: 8px;
      flex-shrink: 0;
    }
    .profile-img svg { opacity: 0.3; }
    .profile-name {
      font-family: var(--font-serif);
      font-size: 1.8rem; font-weight: 700;
      color: var(--cream); margin-bottom: 6px;
    }
    .profile-title {
      font-size: 0.72rem; letter-spacing: 0.25em;
      text-transform: uppercase; color: var(--gold);
      margin-bottom: 14px;
    }
    .profile-bio {
      font-size: 0.9rem; color: var(--muted); line-height: 1.75;
    }

    @media (max-width: 640px) {
      .profile-card { grid-template-columns: 1fr; text-align: center; }
      .profile-img { margin: 0 auto; }
      .speech-wrap { padding: 50px 22px 80px; }
      .closing-box { padding: 28px 22px; }
    }
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
      <p class="hero-tag">The Story Behind the Brand</p>
      <h1>I Wasn't<br>Supposed To <em>Win.</em></h1>
      <div class="gold-line"></div>
      <p class="hero-desc">But I did. And that's exactly why you can trust me with what matters most to you.</p>
    </div>
  </section>

  <div class="speech-wrap">

    <!-- Profile -->
    <div class="profile-card reveal">
      <div class="profile-img">
        <!-- Replace with: <img src="images/xav-profile.jpg" alt="Xav - Xperience Finance" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"> -->
        <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
        <span>Add your photo here</span>
      </div>
      <div>
        <div class="profile-name">Xav</div>
        <div class="profile-title">Insurance Advisor · Xperience Finance · Trinidad & Tobago</div>
        <p class="profile-bio">Financial advisor, brand builder, and community developer. Helping entrepreneurs, families, and forward-thinkers protect everything they've worked hard to build — one real conversation at a time.</p>
      </div>
    </div>

    <!-- I -->
    <article class="speech-section reveal">
      <p class="speech-label">I — The Hook</p>
      <div class="speech-text">
        <p>Let me tell you about the most out-of-my-depth moment of my life.</p>
        <p>There was this woman. Smart. Quiet. Well-spoken. Independent. Had her whole life together in a way that made me feel like I needed to go home and rethink some things.</p>
        <p>I had no business even talking to her, if I'm being real. But I didn't lead with all my credentials. I didn't try to impress her in the first five minutes. I just showed up. Consistently. Patiently. I built trust before I built anything else. I shared a laugh before I shared an opinion.</p>
      </div>
      <blockquote class="pull-quote">
        <p>"That woman is now my wife. Yuh boi came out on top."</p>
      </blockquote>
      <div class="speech-text">
        <p>I tell you that story not to brag — well, maybe a little — but because it's the exact same way I work with every single client I've ever had. Patience. Trust. And at least a couple of laughs along the way.</p>
        <p>Because at the end of the day, financial advice isn't really about numbers. It's about relationship. And the right relationship, built the right way, changes everything.</p>
      </div>
    </article>

    <div class="divider"></div>

    <!-- II -->
    <article class="speech-section reveal">
      <p class="speech-label">II — Where I Come From</p>
      <div class="speech-text">
        <p>Growing up, things were comfortable. Not extravagant — comfortable. There was food on the table, clothes on my back, and a sense that things were going to be okay.</p>
        <p>Then death walked through our door — the way it always does, without warning — and just like that, everything shifted. A single-parent household now. Less cushion. More pressure. The kind of pressure that teaches you, very quickly, what money actually means. Not as a luxury. As a lifeline.</p>
        <p>I didn't grow up wanting to be in finance. I grew up understanding what it feels like when the safety net disappears — and deciding I never wanted anyone around me to feel that way if I could help it.</p>
      </div>
      <blockquote class="pull-quote">
        <p>"I didn't choose this industry because it was lucrative. I chose it because I knew what it felt like to need it."</p>
      </blockquote>
    </article>

    <div class="divider"></div>

    <!-- III -->
    <article class="speech-section reveal">
      <p class="speech-label">III — The Turning Point</p>
      <div class="speech-text">
        <p>I didn't arrive here by following a straight path. I arrived here because God closed a door I'd been knocking on for too long — and quietly, almost without me noticing, opened another one.</p>
        <p>Looking back, that redirection was the best thing that ever happened to me. Because the path I was on? It wasn't mine. This one is.</p>
        <p>I've learned not to fight closed doors anymore. I've learned to look for the open window — and when I find it, I walk through it with everything I have.</p>
      </div>
      <strong class="bold-line">Faith is not passive. It's the most strategic force I've ever operated with.</strong>
    </article>

    <div class="divider"></div>

    <!-- IV -->
    <article class="speech-section reveal">
      <p class="speech-label">IV — What I've Built</p>
      <div class="speech-text">
        <p>I want to paint you a picture. Imagine a person standing with their arms stretched wide — not just in front of them, but in every direction. North, south, east, west. Reaching across industries, income brackets, age groups, and life stages.</p>
        <p>That's what I've built. Not a client list — a network of trusted people across every arm of life. Professionals and entrepreneurs. Families and first-timers. People who came to me with one question and left with a plan. People who came to me in crisis and left with clarity.</p>
        <p>My reach isn't wide because I sold hard. It's wide because I served well — and people talk when you do.</p>
      </div>
      <blockquote class="pull-quote">
        <p>"Your network grows when your integrity doesn't shrink under pressure."</p>
      </blockquote>
    </article>

    <div class="divider"></div>

    <!-- V -->
    <article class="speech-section reveal">
      <p class="speech-label">V — What Almost Broke Me</p>
      <div class="speech-text">
        <p>There was a season where everything I thought I'd built felt like it was built on sand. A transition period — moving companies, rebuilding a book of business almost from scratch, wondering if the relationships I'd cultivated would follow me or stay behind.</p>
        <p>Starting over in this industry is humbling. You realise quickly that the business card changes but the trust doesn't transfer automatically. You have to earn it again. Every conversation. Every follow-up. Every time you show up when you said you would.</p>
        <p>That season taught me something I could not have learned any other way — that my value is not in my product. It's not in the company name behind me. It's in me. In what I know. In how I treat people. In the fact that I show up.</p>
      </div>
      <strong class="bold-line">The setback wasn't a full stop. It was a paragraph break.</strong>
    </article>

    <div class="divider"></div>

    <!-- VI -->
    <article class="speech-section reveal">
      <p class="speech-label">VI — I Know Who's in This Room</p>
      <div class="speech-text">
        <p>I look at you and I see people who are not waiting on a salary to feel safe. You've already decided that forward is the only direction. You're savers. Investors. Builders. People with growth on your mind and protection on your to-do list.</p>
        <p>You're asking the right questions — "How do I protect what I'm building? How do I make sure that if something happens, everything doesn't collapse?" That's not fear talking. That's wisdom.</p>
        <p>And I'll be honest with you — I've sat where you're sitting. Wondering who to trust with these conversations. Because in this industry, everybody has a product to sell. Not everybody has your actual interest at heart.</p>
        <p>I get that suspicion. I respect it. And I want to earn past it — the same way I earned my wife's trust. One conversation at a time.</p>
      </div>
    </article>

    <div class="divider"></div>

    <!-- VII -->
    <article class="speech-section reveal">
      <p class="speech-label">VII — What I Actually Believe</p>
      <div class="speech-text">
        <p>Here's something most advisors won't say: <strong>most people are overinsured in the wrong places and completely exposed in the ones that matter.</strong></p>
        <p>The industry is designed to sell you a policy. I'm designed to build you a strategy. There's a difference — and the difference shows up when life gets hard.</p>
        <p>I also believe this: <em>insurance is not about dying</em>. It's about refusing to let dying destroy the people you love. That reframe changes everything about how you think about this conversation.</p>
        <p>And I'll go further — I believe financial security should not be a privilege for people who already have money. It should be accessible to the builder who's still figuring it out. To the entrepreneur who's four months in. To the family that's one medical bill away from a crisis. That's who I get up for.</p>
      </div>
      <blockquote class="pull-quote">
        <p>"A policy is just paperwork. The relationship is the protection."</p>
      </blockquote>
    </article>

    <div class="divider"></div>

    <!-- VIII -->
    <article class="speech-section reveal">
      <p class="speech-label">VIII — What I Won't Do</p>
      <div class="speech-text">
        <p>I've had moments where I could have made a commission by putting someone into a product they didn't need. Comfortable commission. Easy sale. Nobody would have known.</p>
        <p>I walked away from those.</p>
        <p>Not because I don't need the income — I do. But because the day I start prioritising my pocket over your protection, I've stopped doing this job. I've started doing something else entirely. And I'm not interested in that version of this work.</p>
        <p>My name is my brand. And I'd rather build slowly on solid ground than build fast on a foundation that will crack under you when you need it most.</p>
      </div>
    </article>

    <div class="divider"></div>

    <!-- IX -->
    <article class="speech-section reveal">
      <p class="speech-label">IX — The Story That Stays With Me</p>
      <div class="speech-text">
        <p>I had a client — a breadwinner. Family man. The kind of person who thought about everyone else before himself. We had conversations about putting proper coverage in place and, like most of us, life kept moving and he kept putting it off.</p>
        <p>Then one day — without warning — he was gone.</p>
        <p>Because of the work we had done together, his family didn't have to sell the house. His children didn't have to leave their school. His wife didn't have to choose between grief and survival. She could just… grieve.</p>
        <p>I don't share that story for impact. I share it because that is why this work matters. Not the policy. Not the premium. That family, still standing. That's the point.</p>
      </div>
      <blockquote class="pull-quote">
        <p>"The best day to have the right coverage is always before the day you need it."</p>
      </blockquote>
    </article>

    <div class="divider"></div>

    <!-- X -->
    <article class="speech-section reveal">
      <p class="speech-label">X — The Invitation</p>
      <div class="speech-text">
        <p>I'm not here to sell you something today. I'm here to start something — the same way I started with my wife. Patiently. Genuinely. With the understanding that trust is built in layers, not in one conversation.</p>
        <p>But let me be direct with you, because I respect you too much not to be: if you are building something — a business, a family, a legacy — and you don't have the right protection in place, you are operating without a safety net. And safety nets don't matter until they do.</p>
        <p>I am Xav. I operate under <strong>Xperience Finance</strong>. And what I bring to the table isn't just a product — it's perspective. Partnership. And yes, a couple of laughs along the way.</p>
      </div>
      <div class="closing-box">
        <p>If anything I said today landed — if even one sentence made you think about something you've been putting off — let's talk. Not a pitch. A conversation. The same way all the best things in my life started.</p>
        <p>One real conversation at a time.</p>
        <p>I'll leave you with this: I wasn't supposed to win. Too out of my depth. Too early in the process. Too much against me. But I showed up. I was patient. I was consistent. And I brought something real to the table every single time.</p>
        <p>That's not just how I got the girl. That's how I do this work. And it's the only way I know how.</p>
      </div>
      <div style="margin-top: 40px; text-align: center;">
        <a href="contact.html" class="btn btn-gold">Let's Start a Conversation</a>
      </div>
    </article>

  </div><!-- /speech-wrap -->

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
</body>
</html>
