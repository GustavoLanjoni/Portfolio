// FAQ toggle
  const faqs = document.querySelectorAll('.faq-item');
  faqs.forEach(faq => {
    faq.addEventListener('click', () => {
      const isActive = faq.classList.contains('active');
      faqs.forEach(f => {
        f.classList.remove('active');
        f.setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        faq.classList.add('active');
        faq.setAttribute('aria-expanded', 'true');
      }
    });
  });