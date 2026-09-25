:root {
  --bg: #475861;
  --bg-deep: #3b4d58;
  --text: #111a22;
  --muted: rgba(17, 26, 34, 0.8);
  --panel: rgba(255, 255, 255, 0.08);
  --panel-strong: rgba(255, 255, 255, 0.15);
  --line: rgba(255, 255, 255, 0.18);
  --lime: #cfe65b;
  --soft-white: rgba(245, 245, 242, 0.96);
}

* { box-sizing: border-box; }
html, body { height: 100%; }
body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02));
  pointer-events: none;
  z-index: 0;
}

.page-shell {
  position: relative;
  z-index: 1;
  min-height: 100vh;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 28px 10px 26px;
  gap: 20px;
}

.brand-row {
  display: flex;
  align-items: center;
  gap: 10px;
  line-height: 1;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 2px solid rgba(16, 26, 34, 0.95);
  border-radius: 8px;
  font-size: 22px;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
}

.brand-name {
  font-family: "Cormorant Garamond", serif;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.04em;
}

.brand-dot { color: #b8d53d; }

.nav-links {
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 14px;
  font-weight: 500;
}

.nav-links a {
  color: rgba(16,26,34,0.92);
  text-decoration: none;
}

.nav-links a:hover { opacity: 0.7; }

.menu-button {
  width: 28px;
  height: 22px;
  border: 0;
  background: transparent;
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.menu-button::before,
.menu-button::after,
.menu-button span {
  content: "";
  position: absolute;
  width: 20px;
  height: 2px;
  background: rgba(16,26,34,0.9);
  border-radius: 2px;
}
.menu-button::before { transform: translateY(-7px); }
.menu-button::after { transform: translateY(7px); }

.content-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 30px;
  padding: 10px 0 0;
}

.left-panel {
  padding: 5px 0 0 24px;
}

.status {
  margin: 5px 0 20px;
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 700;
  color: rgba(16, 26, 34, 0.92);
}

.status::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--lime);
  margin-right: 10px;
  vertical-align: middle;
  box-shadow: 0 0 0 2px rgba(217, 240, 93, 0.35);
}

.headline {
  font-family: "Cormorant Garamond", serif;
  font-weight: 600;
  font-size: clamp(3.2rem, 5vw, 5.2rem);
  line-height: 0.84;
  letter-spacing: -0.06em;
  margin: 0 0 18px;
}

.intro {
  font-size: 18px;
  color: rgba(16,26,34,0.82);
  max-width: 760px;
  margin: 0 0 24px;
}

.cta-row {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin: 18px 0 24px;
}

.cta-link {
  font-size: 16px;
  color: rgba(16,26,34,0.9);
  text-decoration: none;
  font-weight: 600;
}

.mini-meta {
  font-size: 14px;
  color: rgba(16,26,34,0.8);
  margin-bottom: 18px;
}

.idea-tag {
  display: inline-block;
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(16,26,34,0.8);
  margin-top: 8px;
}

.idea-tag .dot {
  color: #b7d44b;
  margin-left: 8px;
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 18px;
  margin-top: 18px;
  font-size: 16px;
  color: rgba(16,26,34,0.92);
}

.tag-cloud span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.tag-cloud span::before {
  content: "✦";
  color: #a8c937;
}

.sub-heading {
  margin-top: 52px;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2.8rem, 4vw, 4.2rem);
  line-height: 0.9;
  letter-spacing: -0.06em;
  font-weight: 600;
}

.about-copy {
  margin-top: 18px;
  font-size: 17px;
  color: rgba(16,26,34,0.83);
  max-width: 930px;
}

.right-panel {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-right: 28px;
}

.member-modal {
  width: min(600px, 90%);
  min-height: 470px;
  padding: 26px 26px 22px;
  background: rgba(19, 27, 30, 0.24);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px;
  margin-top: 28px;
  backdrop-filter: blur(4px);
}

.member-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.member-label {
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.72);
}

.close-btn {
  border: 0;
  background: transparent;
  color: rgba(255,255,255,0.8);
  font-size: 30px;
  cursor: pointer;
}

.welcome-title {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(3rem, 4vw, 5rem);
  font-weight: 600;
  color: rgba(255,255,255,0.98);
  line-height: 0.9;
  letter-spacing: -0.05em;
  margin: 12px 0 16px;
}

.welcome-title .dot {
  color: var(--lime);
}

.auth-tabs {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}

.tab-button {
  background: transparent;
  color: rgba(255,255,255,0.76);
  border: 0;
  font-size: 15px;
  font-weight: 600;
  padding: 8px 0;
  cursor: pointer;
}

.tab-button.active {
  color: rgba(255,255,255,0.98);
  border-bottom: 2px solid rgba(255,255,255,0.65);
}

.auth-form {
  display: grid;
  gap: 18px;
}

.field {
  display: grid;
  gap: 8px;
}

.field.hidden {
  display: none;
}

.field label {
  display: block;
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.82);
}

.field input {
  width: 100%;
  border: 1px solid rgba(255,255,255,0.24);
  border-radius: 8px;
  background: rgba(255,255,255,0.08);
  color: white;
  font-size: 18px;
  padding: 15px 14px;
  outline: none;
}

.field input::placeholder {
  color: rgba(255,255,255,0.42);
}

.auth-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.primary-btn,
.ghost-btn {
  padding: 12px 18px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.22);
  font-size: 16px;
  cursor: pointer;
}

.primary-btn {
  background: rgba(255,255,255,0.10);
  color: rgba(255,255,255,0.96);
}

.ghost-btn {
  background: transparent;
  color: rgba(255,255,255,0.85);
}

.auth-message {
  min-height: 20px;
  margin: 0;
  font-size: 12px;
  color: rgba(255,255,255,0.7);
}

.auth-message.error {
  color: #ffd3d3;
}

.auth-message.success {
  color: #dff7a5;
}

@media (max-width: 900px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .right-panel {
    padding-right: 0;
    padding-left: 24px;
  }

  .member-modal {
    width: 100%;
    margin-top: 10px;
  }

  .nav-links {
    display: none;
  }
}

