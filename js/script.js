// js/script.js

// Profile picture upload
function loadImage(event) {
  const image = document.getElementById('profile-pic');
  image.src = URL.createObjectURL(event.target.files[0]);
  image.style.display = 'block';
}


// Animate sections on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -100px 0px'
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
