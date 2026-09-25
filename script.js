/* Original portfolio styling */
:root {
  --bg: #171b1d;
  --panel: #20272a;
  --panel-soft: #1a1f22;
  --panel-2: #111517;
  --text: #edf0ee;
  --muted: #b9c2be;
  --line: rgba(255,255,255,0.08);
  --lime: #d5f35f;
  --peach: #f1d4b5;
  --blue: #bfe3ff;
  --shadow: rgba(0,0,0,0.25);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: "DM Sans", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.5;
}

a { color: inherit; text-decoration: none; }
button, input, textarea { font: inherit; }

.wrap {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1380px, calc(100% - 20px));
  margin: 10px auto 0;
  padding: 16px 18px;
  background: rgba(20, 25, 27, 0.9);
  border: 1px solid var(--line);
  backdrop-filter: blur(10px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 1.2rem;
  font-weight: 700;
}

.brand b {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border: 1px solid rgba(255,255,255,.3);
  border-radius: 8px;
  font-size: 1rem;
}

.brand span { color: var(--lime); }

.site-header nav {
  display: flex;
  align-items: center;
  gap: 22px;
  font-size: 0.9rem;
}

.site-header nav a {
  opacity: 0.82;
}

.account-button {
  border: 1px solid rgba(255,255,255,0.18);
  background: transparent;
  color: var(--text);
  border-radius: 999px;
  padding: 9px 18px;
  cursor: pointer;
}

.menu-toggle {
  display: none;
}

.hero {
  display: grid;
  grid-template-columns: 1.5fr 0.9fr;
  gap: 42px;
  padding: 80px 0 40px;
  align-items: end;
}

.hero-copy small,
section small,
.connect small,
.contact-section small {
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  font-size: 0.7rem;
}

h1, h2, h3 { font-family: "Space Grotesk", sans-serif; }

.hero-copy h1 {
  margin: 20px 0 16px;
  font-size: clamp(3.1rem, 6vw, 7rem);
  line-height: 0.88;
  letter-spacing: -0.06em;
  font-weight: 500;
}

.hero-copy h1 i,
section h2 i,
.contact-section h2 i,
.connect h2 i {
  font-style: normal;
  color: rgba(255,255,255,.7);
}

.hero-copy h1 span,
section h2 span,
.connect h2 span { color: var(--lime); }

.hero-copy p {
  max-width: 640px;
  font-size: 1.08rem;
  color: rgba(255,255,255,0.75);
  margin: 0;
}

.hero-links {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.hero-links a {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 12px 20px;
  background: rgba(255,255,255,0.02);
}

.hero-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 22px 20px;
  box-shadow: 0 20px 40px var(--shadow);
}

.card-top {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.7rem;
}

.dot {
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--lime);
}

.hero-card h3 {
  margin: 18px 0 10px;
  font-size: clamp(1.8rem, 2.6vw, 2.6rem);
  font-weight: 500;
}

.hero-card ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  display: grid;
  gap: 10px;
}

.marquee {
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 16px 0;
  margin: 12px 0 40px;
  white-space: nowrap;
  color: rgba(255,255,255,0.8);
  letter-spacing: 0.08em;
  font-size: 0.8rem;
  text-transform: uppercase;
}

.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: start;
}

section h2 {
  margin: 18px 0 0;
  font-size: clamp(2.7rem, 5vw, 5rem);
  line-height: 0.9;
  letter-spacing: -0.06em;
  font-weight: 500;
}

section h3 {
  margin: 0;
  font-size: clamp(1.4rem, 2vw, 2rem);
  font-weight: 500;
  color: rgba(255,255,255,0.85);
}

section p,
#contact p,
#connect p {
  color: rgba(255,255,255,0.75);
  font-size: 1.05rem;
}

.grid.four {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.grid article,
.project-list article,
.contact-form,
.project-form,
.auth-box {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  border-radius: 18px;
}

.grid article {
  padding: 20px 18px;
}

.grid b {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.grid h3 {
  margin-bottom: 12px;
}

#work, #skills, #about, #contact, #connect, #add-work {
  padding-top: 90px;
}

.heading p { max-width: 540px; }

.project-list {
  margin-top: 32px;
  display: grid;
  gap: 18px;
}

.project-list article {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 198px;
  overflow: hidden;
}

.art {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--text);
  padding: 24px;
}

.art strong {
  color: rgba(255,255,255,0.88);
}

.art.peach { background: var(--peach); color: #171b1d; }
.art.blue { background: var(--blue); color: #171b1d; }
.art.dark { background: rgba(255,255,255,0.08); }

.info {
  padding: 26px 26px 24px;
}

.info small {
  color: var(--muted);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 0.7rem;
}

.info h3 {
  margin: 12px 0 12px;
}

.github {
  margin-top: 90px;
  padding: 24px 0 0;
  border-top: 1px solid var(--line);
}

.github a {
  display: inline-block;
  margin-top: 16px;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 12px 18px;
}

.highlights {
  margin-top: 28px;
}

.leadership {
  margin-top: 76px;
  padding: 30px 0 0;
  border-top: 1px solid var(--line);
}

.lead-grid {
  margin-top: 26px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.lead-grid span {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 18px 14px;
  text-align: center;
  color: rgba(255,255,255,0.8);
}

.add {
  align-items: center;
}

.project-form,
.contact-form {
  padding: 18px;
}

.project-form,
.contact-form {
  display: grid;
  gap: 14px;
}

.project-form label,
.contact-form label,
#auth-form label {
  display: grid;
  gap: 7px;
  color: rgba(255,255,255,0.8);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-form input,
.project-form textarea,
.contact-form input,
.contact-form textarea,
#auth-form input {
  width: 100%;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 12px 14px;
  color: var(--text);
  font-size: 1rem;
}

.project-form button,
.contact-form button,
#auth-form button {
  appearance: none;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.05);
  color: var(--text);
  border-radius: 12px;
  padding: 13px 18px;
  cursor: pointer;
  font-weight: 600;
}

#auth-form button.secondary {
  background: transparent;
}

output {
  min-height: 20px;
  color: rgba(255,255,255,0.7);
  font-size: 0.8rem;
}

.contact-section h2 {
  margin-top: 18px;
}

.connect {
  padding: 90px 0 120px;
}

.socials {
  margin-top: 22px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.socials a {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 11px 18px;
}

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 26px 0 64px;
  border-top: 1px solid var(--line);
  color: rgba(255,255,255,0.72);
}

.auth-modal {
  position: fixed;
  inset: 0;
  background: rgba(7,10,11,0.68);
  display: grid;
  place-items: center;
  z-index: 100;
}

.auth-box {
  position: relative;
  width: min(560px, calc(100% - 32px));
  padding: 30px 26px 22px;
  background: rgba(15, 18, 19, 0.95);
}

.close-auth {
  position: absolute;
  top: 16px;
  right: 16px;
  border: 0;
  background: transparent;
  color: rgba(255,255,255,.8);
  font-size: 2rem;
  cursor: pointer;
}

.auth-box small {
  color: rgba(255,255,255,0.7);
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.auth-box h2 {
  margin: 12px 0 18px;
  font-size: clamp(2.8rem, 4vw, 4.4rem);
  line-height: 0.9;
  letter-spacing: -0.05em;
}

.auth-tabs {
  display: flex;
  gap: 18px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 18px;
}

.auth-tabs button {
  border: 0;
  background: transparent;
  color: rgba(255,255,255,0.7);
  padding: 10px 0 12px;
  cursor: pointer;
}

.auth-tabs button.active {
  color: var(--text);
  border-bottom: 2px solid rgba(255,255,255,0.8);
}

#auth-form {
  display: grid;
  gap: 14px;
}

#auth-form label {
  display: grid;
  gap: 9px;
}

#auth-form output {
  display: block;
  margin-top: 4px;
  min-height: 18px;
  color: rgba(255,255,255,.75);
}

[hidden] { display: none !important; }

@media (max-width: 900px) {
  .hero,
  .split,
  .project-list article,
  .grid.four,
  .lead-grid,
  footer {
    grid-template-columns: 1fr;
    display: grid;
  }

  .site-header nav {
    display: none;
  }

  .menu-toggle {
    display: block;
    background: transparent;
    border: 1px solid var(--line);
    color: var(--text);
    border-radius: 8px;
    padding: 8px 10px;
  }

  .site-header {
    width: min(100% - 16px, 1380px);
  }

  .hero {
    padding-top: 44px;
  }

  .grid.four,
  .lead-grid {
    display: grid;
    gap: 16px;
  }
}

@media (max-width: 640px) {
  .wrap {
    width: min(100% - 24px, 1180px);
  }

  .site-header {
    padding: 12px 14px;
  }

  .hero-copy h1 {
    font-size: 3rem;
  }

  section h2 {
    font-size: 2.7rem;
  }

  .project-list article {
    grid-template-columns: 1fr;
  }

  .art {
    min-height: 120px;
  }
}

