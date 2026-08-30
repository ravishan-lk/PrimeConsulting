const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');

const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.classList.toggle('is-open', !open);
  nav.classList.toggle('is-open', !open);
  document.body.classList.toggle('menu-open', !open);
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.classList.remove('is-open');
  nav.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}));

document.querySelectorAll('.service-card').forEach(card => card.addEventListener('toggle', () => {
  if (!card.open) return;
  document.querySelectorAll('.service-card[open]').forEach(other => { if (other !== card) other.removeAttribute('open'); });
}));

document.querySelectorAll('[data-dialog]').forEach(button => button.addEventListener('click', () => document.querySelector(`#${button.dataset.dialog}`).showModal()));
document.querySelectorAll('.case-modal').forEach(dialog => {
  dialog.querySelector('.modal-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
});

const form = document.querySelector('.consult-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const message = form.querySelector('.form-message');
  message.textContent = 'Demo form complete — connect this form to your email, CRM or Google Sheet before launch.';
  message.hidden = false;
});

document.querySelector('#year').textContent = new Date().getFullYear();
