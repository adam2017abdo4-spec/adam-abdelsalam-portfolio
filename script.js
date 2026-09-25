document.addEventListener('DOMContentLoaded', () => {
  const authTabs = document.querySelectorAll('.auth-tab');
  const authForms = {
    login: document.getElementById('loginForm'),
    signup: document.getElementById('signupForm'),
    guest: document.getElementById('guestPanel')
  };

  authTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.authTab;

      authTabs.forEach((btn) => btn.classList.toggle('active', btn === tab));

      Object.entries(authForms).forEach(([key, form]) => {
        if (key === target) {
          form.classList.add('active-auth-form');
        } else {
          form.classList.remove('active-auth-form');
        }
      });

      const authStatus = document.getElementById('authStatus');
      authStatus.textContent = '';
      authStatus.classList.remove('success', 'error');
    });
  });

  const contactForm = document.getElementById('contactForm');
  const contactStatus = document.getElementById('contactStatus');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) {
      setStatus(contactStatus, 'Please complete all fields before sending.', 'error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus(contactStatus, 'Please enter a valid email address.', 'error');
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    try {
      window.location.href = `mailto:adam2017abdo4@gmail.com?subject=${subject}&body=${body}`;
      setStatus(contactStatus, 'Your message was prepared and opened in your email app. Message sent to adam2017abdo4@gmail.com.', 'success');
      contactForm.reset();
    } catch (error) {
      setStatus(contactStatus, 'Something went wrong while preparing your message. Please try again.', 'error');
    }
  });

  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const guestButton = document.getElementById('guestAccessButton');
  const authStatus = document.getElementById('authStatus');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = loginForm.querySelector('[name="loginEmail"]').value.trim();
    const password = loginForm.querySelector('[name="loginPassword"]').value.trim();

    if (!email || !password) {
      setStatus(authStatus, 'Email and password are required to log in.', 'error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus(authStatus, 'Please enter a valid email address.', 'error');
      return;
    }

    setStatus(authStatus, 'Demo login is ready for a real backend integration. Connect a secure auth provider to enable verified logins.', 'success');
    loginForm.reset();
  });

  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = signupForm.querySelector('[name="signupName"]').value.trim();
    const email = signupForm.querySelector('[name="signupEmail"]').value.trim();
    const password = signupForm.querySelector('[name="signupPassword"]').value.trim();

    if (!name || !email || !password) {
      setStatus(authStatus, 'Name, email, and password are required.', 'error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus(authStatus, 'Please enter a valid email address.', 'error');
      return;
    }

    if (password.length < 8) {
      setStatus(authStatus, 'Password must be at least 8 characters long.', 'error');
      return;
    }

    setStatus(authStatus, 'Sign-up form is ready for backend integration. Add a real authentication service to enable secure account creation.', 'success');
    signupForm.reset();
  });

  guestButton.addEventListener('click', () => {
    setStatus(authStatus, 'Guest access enabled. No personal information is required.', 'success');
  });

  function setStatus(element, message, type) {
    element.textContent = message;
    element.classList.remove('success', 'error');
    element.classList.add(type);
  }
});










































































































"path":"script.js"}]}                                                                            
{