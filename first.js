// Scroll to Top Logic
const scrollTopBtn = document.querySelector('.scroll-top');

const heroSection = document.querySelector('.hero-section');

scrollTopBtn.addEventListener('click', function(){
  heroSection.scrollIntoView({behavior: 'smooth'});
});


// SIDE BAR JS
const navToggle = document.getElementById('nav-toggle');
const sideNav = document.getElementById('sideNav');
const openIcon = document.getElementById('openIcon');
const closeIcon = document.getElementById('closeIcon');

navToggle.addEventListener('click', () => {
  sideNav.classList.toggle('active');

  if(sideNav.classList.contains('active')){
    openIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    openIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
});