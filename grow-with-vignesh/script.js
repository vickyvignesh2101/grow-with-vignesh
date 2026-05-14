// Smooth Reveal Animation

const cards = document.querySelectorAll(
  '.glass-card, .skill-card'
);

const revealCards = () => {

  cards.forEach(card => {

    const windowHeight = window.innerHeight;

    const cardTop =
      card.getBoundingClientRect().top;

    if(cardTop < windowHeight - 100){

      card.style.opacity = '1';

      card.style.transform =
        'translateY(0px)';
    }

  });

};

window.addEventListener('scroll', revealCards);

window.addEventListener('load', revealCards);

// Initial State

cards.forEach(card => {

  card.style.opacity = '0';

  card.style.transform =
    'translateY(50px)';

  card.style.transition =
    'all 0.8s ease';

});

// Navbar Blur Effect

const navbar =
  document.querySelector('.navbar');

window.addEventListener('scroll', () => {

  if(window.scrollY > 50){

    navbar.style.background =
      'rgba(5,5,10,0.75)';

    navbar.style.backdropFilter =
      'blur(30px)';

  }

  else{

    navbar.style.background =
      'rgba(5,5,10,0.55)';
  }

});