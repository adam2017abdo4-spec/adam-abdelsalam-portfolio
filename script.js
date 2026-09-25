document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const form = document.querySelector('#contactForm');
  const status = document.querySelector('#formStatus');

  menuButton?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton?.setAttribute('aria-expanded', 'false');
    });
  });

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !email || !message) {
      status.textContent = 'Please complete all fields.';
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    status.textContent = 'Opening your email app…';
    window.location.href = `mailto:adam2017abdo4@gmail.com?subject=${subject}&body=${body}`;
    form.reset();
  });
});
