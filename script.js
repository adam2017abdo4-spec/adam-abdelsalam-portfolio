const $ = (selector) => document.querySelector(selector);
$('#year').textContent = new Date().getFullYear();
$('.menu-toggle').addEventListener('click', () => document.querySelector('nav').classList.toggle('open'));
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const projectForm = $('#project-form');
function savedProjects() { try { return JSON.parse(localStorage.getItem('adamProjects') || '[]'); } catch { return []; } }
function safe(value) { const el = document.createElement('div'); el.textContent = value; return el.innerHTML; }
function addProject(project) { const article = document.createElement('article'); article.innerHTML = `<div class="art dark">NEW / PROJECT<strong>✦</strong></div><div class="info"><small>PERSONAL WORK</small><h3>${safe(project.title)}</h3><p>${safe(project.description)}</p><em>${safe(project.tech || 'Project')}</em>${project.link ? `<a href="${project.link.replace(/["'<>]/g, '')}" target="_blank" rel="noopener">View project ↗</a>` : ''}</div>`; document.querySelector('.projects').append(article); }
savedProjects().forEach(addProject);
projectForm.addEventListener('submit', (event) => { event.preventDefault(); const project = { title: $('#title').value.trim(), description: $('#description').value.trim(), link: $('#link').value.trim(), tech: $('#tech').value.trim() }; localStorage.setItem('adamProjects', JSON.stringify([...savedProjects(), project])); addProject(project); projectForm.reset(); projectForm.querySelector('output').textContent = 'Project added in this browser.'; });

// Contact uses the visitor's email app and addresses Adam directly.
$('#contact-form').addEventListener('submit', (event) => { event.preventDefault(); const name = $('#contact-name').value.trim(); const email = $('#contact-email').value.trim(); const body = encodeURIComponent(`${$('#contact-message').value.trim()}\n\nFrom: ${name} (${email})`); window.location.href = `mailto:adam2017abdo4@gmail.com?subject=${encodeURIComponent(`Portfolio message from ${name}`)}&body=${body}`; $('#contact-form output').textContent = 'Opening your email app…'; });

// Front-end access dialog. Real password storage and email verification must be handled server-side.
const modal = $('#auth-modal');
function openAuth(mode = 'login') { modal.hidden = false; setMode(mode); }
function setMode(mode) { document.querySelectorAll('.auth-tabs button').forEach((button) => button.classList.toggle('active', button.dataset.mode === mode)); $('#password-label').hidden = mode === 'signup'; $('#code-label').hidden = mode !== 'signup'; $('#auth-form output').textContent = mode === 'signup' ? 'A real verification email requires a backend email provider.' : ''; }
$('.close-auth').addEventListener('click', () => { modal.hidden = true; });
document.querySelectorAll('.auth-tabs button').forEach((button) => button.addEventListener('click', () => setMode(button.dataset.mode)));
$('#guest-button').addEventListener('click', () => { modal.hidden = true; localStorage.setItem('adamGuest', 'true'); });
$('#auth-form').addEventListener('submit', (event) => { event.preventDefault(); const signup = !$('#code-label').hidden; $('#auth-form output').textContent = signup ? 'Demo only: connect a backend to send the verification code.' : 'Demo only: connect authentication before accepting accounts.'; });
// Optional trigger for a future account button.
window.openPortfolioLogin = openAuth;
