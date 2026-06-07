let lastY = 0;
const nav = document.querySelector('.nav-wrap');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.classList.toggle('nav-hidden', y > lastY && y > 80);
  lastY = y;
});
