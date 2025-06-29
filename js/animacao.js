  const revealOptions = {
    origin: 'bottom',
    distance: '40px',
    duration: 900,
    easing: 'ease-in-out',
    reset: false,           
    opacity: 0,             
    scale: 0.95,            
    interval: 100           
  };

  ScrollReveal().reveal('.card-preco, .motivo-card, .faq-item, .projeto-card, .servico-card, .section-motivo, .cta-banner, #sobre, #contato, footer', revealOptions);


  function smoothScrollTo(target, duration = 1000) {
    const start = window.scrollY || window.pageYOffset;
    const end = typeof target === "number" ? target : target.offsetTop - 60;
    const distance = end - start;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);

      window.scrollTo(0, start + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    function easeInOutQuad(t) {
      return t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t;
    }

    requestAnimationFrame(animation);
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        smoothScrollTo(target, 1500); // 1500ms = 1.5s de rolagem
      }
    });
  });