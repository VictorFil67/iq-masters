import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

// faq
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.querySelector('.question').addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// gallery
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    loop: false,
    effect: 'slide',
    slidesPerView: 'auto',
    speed: 600,
    breakpoints: {
      1440: {
        slidesPerView: 2,
        spaceBetween: 48,
      },
    },
  });
});
