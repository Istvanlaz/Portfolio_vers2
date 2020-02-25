const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navbar-links');
  const navMedia = document.querySelector('.social-media-links');
  const navLinks = document.querySelectorAll('.navbar-item')
  const mediaLinks = document.querySelectorAll('.navbar-social-item')
  burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
    // Toggle Nav Social Media
    navMedia.classList.toggle('nav-active');
    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    // Animate Social Media
    mediaLinks.forEach((media, index) => {
      if (media.style.animation) {
        media.style.animation = '';
      } else {
        media.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    // Burger Animation
    burger.classList.toggle('toggle');
  });
}

navSlide();
