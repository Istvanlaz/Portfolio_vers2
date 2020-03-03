const navSlide = () => {
  const body = document.body;
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navbar-links');
  const navMedia = document.querySelector('.social-media-links');
  const navLinks = document.querySelectorAll('.navbar-item');
  const mediaLinks = document.querySelectorAll('.navbar-social-item');
  const navBg = document.querySelector('.navbar-northern-lights');
  burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
    // Toggle Nav Social Media
    navMedia.classList.toggle('nav-active');
    //Animate Background-colour
      if (nav.style.animation) {
        nav.style.animation = '';
      } else {
        nav.style.animation = 'colorTransition 1.5s ease forwards 0s';
      }
    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    // Disable scrolling
    body.classList.toggle('noscroll-class');

    // Fix Background Colour of Navbar
    navBg.classList.toggle('nav-background');

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
