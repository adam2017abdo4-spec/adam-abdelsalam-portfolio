<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Adam Abdelsalam — technology, innovation and digital design." />
    <title>Adam Abdelsalam | Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <style>
      :root {
        --bg: #546a73;
        --bg-2: #4a5f69;
        --text: rgba(17, 24, 28, 0.92);
        --muted: rgba(17, 24, 28, 0.68);
        --line: rgba(17, 24, 28, 0.12);
        --lime: #d6ef59;
      }

      * { box-sizing: border-box; }
      html, body { height: 100%; }
      body {
        margin: 0;
        background: var(--bg);
        color: var(--text);
        font-family: "Inter", sans-serif;
      }

      .page {
        width: 100%;
        min-height: 100vh;
        padding: 18px 0 2rem;
      }

      .wrap {
        width: min(1280px, calc(100% - 52px));
        margin: 0 auto;
      }

      .site-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0 18px;
      }

      .brand {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: var(--text);
        font-weight: 600;
      }

      .brand-mark {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border: 1.5px solid rgba(17, 24, 28, 0.9);
        border-radius: 8px;
        font-size: 18px;
        font-family: "Cormorant Garamond", serif;
        font-weight: 700;
        transform: translateY(-1px);
      }

      .brand-name {
        font-family: "Cormorant Garamond", serif;
        font-size: 24px;
        letter-spacing: -0.04em;
        font-weight: 600;
      }

      .brand-dot { color: var(--lime); }

      .nav {
        display: flex;
        align-items: center;
        gap: 30px;
        margin-right: 10px;
      }

      .nav a {
        color: rgba(17, 24, 28, 0.8);
        text-decoration: none;
        font-size: 15px;
        font-weight: 500;
      }

      .hero {
        padding-top: 26px;
      }

      .status {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        margin: 4px 0 14px;
        font-size: 12px;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: rgba(17, 24, 28, 0.85);
        font-weight: 700;
      }

      .status::before {
        content: "";
        width: 9px;
        height: 9px;
        border-radius: 50%;
        display: inline-block;
        background: var(--lime);
        box-shadow: 0 0 0 2px rgba(214, 239, 89, 0.22);
      }

      .headline {
        margin: 0;
        font-family: "Cormorant Garamond", serif;
        font-size: clamp(4rem, 7vw, 10rem);
        line-height: 0.72;
        letter-spacing: -0.065em;
        font-weight: 500;
        color: rgba(17, 24, 28, 0.96);
      }

      .headline span {
        display: block;
      }

      .intro {
        max-width: 820px;
        margin-top: 32px;
        font-size: 18px;
        line-height: 1.5;
        color: rgba(17, 24, 28, 0.84);
      }

      .cta-row {
        display: flex;
        align-items: center;
        gap: 28px;
        flex-wrap: wrap;
        margin-top: 28px;
      }

      .cta-link {
        font-size: 18px;
        font-weight: 700;
        color: rgba(17, 24, 28, 0.9);
        text-decoration: none;
      }

      .mini-meta {
        margin-top: 28px;
        font-size: 17px;
        color: rgba(17, 24, 28, 0.82);
      }

      .idea-tag {
        margin-top: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 700;
        color: rgba(17, 24, 28, 0.74);
      }

      .idea-tag .bulb {
        color: var(--lime);
        font-size: 14px;
      }

      .tag-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 18px;
        margin-top: 18px;
        font-size: 17px;
        color: rgba(17, 24, 28, 0.85);
      }

      .tag-list span {
        display: inline-flex;
        align-items: center;
        gap: 10px;
      }

      .tag-list span::before {
        content: "✦";
        color: var(--lime);
        font-size: 14px;
      }

      .subhead {
        margin-top: 68px;
      }

      .subhead .headline {
        font-size: clamp(4rem, 6vw, 8rem);
        line-height: 0.8;
      }

      .subhead-copy {
        max-width: 920px;
        margin-top: 22px;
        font-size: 18px;
        line-height: 1.5;
        color: rgba(17, 24, 28, 0.82);
      }

      @media (max-width: 900px) {
        .wrap { width: min(100% - 28px, 1280px); }
        .nav { display: none; }
        .headline { font-size: clamp(3rem, 10vw, 6rem); }
      }
    </style>
  </head>
  <body>
    <div class="page">
      <header class="site-header wrap">
        <a href="#top" class="brand" aria-label="Adam home">
          <span class="brand-mark">A</span>
          <span class="brand-name">Adam<span class="brand-dot">.</span></span>
        </a>

        <nav class="nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#connect">Connect</a>
        </nav>
      </header>

      <main class="wrap hero">
        <section aria-label="Homepage introduction">
          <div class="status">Student creator • Doha, Qatar</div>

          <h1 class="headline">
            <span>Building ideas.</span>
            <span>Exploring technology.</span>
            <span>Creating for the future.</span>
          </h1>

          <p class="intro">
            I'm Adam — a student interested in technology, digital design, innovation, and turning curious ideas into useful things.
          </p>

          <div class="cta-row">
            <a href="#work" class="cta-link">Explore my work →</a>
            <a href="#contact" class="cta-link">Let's connect →</a>
          </div>

          <div class="mini-meta">Currently learning <strong>Flutter • UI/UX • AI</strong></div>

          <div class="idea-tag">
            <span>Ideas</span>
            <span class="bulb">•</span>
            <span>Into impact</span>
          </div>

          <div class="tag-list" aria-label="Skills">
            <span>Technology</span>
            <span>Digital Design</span>
            <span>Innovation</span>
            <span>Communication</span>
          </div>
        </section>

        <section class="subhead" aria-label="About section preview">
          <h2 class="headline">
            <span>Turning ideas</span>
            <span>into projects.</span>
          </h2>

          <p class="subhead-copy">
            I'm Adam Abdelsalam, a student at Newton International School Lagoon in Doha, Qatar, with a strong interest in technology, digital design, coding, innovation, and public speaking.
          </p>
        </section>
      </main>
    </div>
  </body>
</html>
