
const footer = document.querySelector('.footer-banner');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    footer.style.display = 'flex';
  } else {
    footer.style.display = 'none';
  }
});