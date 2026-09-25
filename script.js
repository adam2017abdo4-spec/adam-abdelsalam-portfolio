const form = document.querySelector('#project-form');
const projectGrid = document.querySelector('.project-grid');
const message = document.querySelector('#form-message');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

// Reveal sections as they enter the viewport.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

// Small, subtle pointer glow on larger screens.
const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));
document.querySelector('#year').textContent = new Date().getFullYear();

function getProjects() {
  try { return JSON.parse(localStorage.getItem('adamProjects')) || []; } catch { return []; }
}
function saveProjects(projects) { localStorage.setItem('adamProjects', JSON.stringify(projects)); }
function addProjectCard(project) {
  const card = document.createElement('article');
  card.className = 'project-card reveal visible';
  const tags = project.technologies.split(',').map((tag) => tag.trim()).filter(Boolean);
  const image = project.image ? `<img src="${project.image}" alt="" style="width:100%;height:100%;object-fit:cover">` : '<div class="code-symbol">✦</div><div class="code-lines"><i></i><i></i><i></i></div>';
  card.innerHTML = `<div class="project-visual visual-code"><span class="visual-label">New / Project</span>${image}</div><div class="project-info"><p class="project-type">Personal work</p><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.description)}</p><div class="tag-list">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div>${project.link ? `<a class="project-link" href="${escapeAttribute(project.link)}" target="_blank" rel="noopener">View project <span>↗</span></a>` : ''}</div>`;
  projectGrid.appendChild(card);
}
function escapeHtml(value) { const div = document.createElement('div'); div.textContent = value; return div.innerHTML; }
function escapeAttribute(value) { return value.replace(/["'<>]/g, ''); }
getProjects().forEach(addProjectCard);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const project = {
    title: document.querySelector('#project-title').value.trim(),
    description: document.querySelector('#project-description').value.trim(),
    link: document.querySelector('#project-link').value.trim(),
    image: document.querySelector('#project-image').value.trim(),
    technologies: document.querySelector('#project-tech').value.trim()
  };
  const projects = getProjects();
  projects.push(project);
  saveProjects(projects);
  addProjectCard(project);
  form.reset();
  message.textContent = 'Project added to your portfolio in this browser.';
  setTimeout(() => { message.textContent = ''; }, 5000);
});
