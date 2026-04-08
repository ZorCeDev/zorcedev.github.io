const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const contactForm = document.querySelector('.form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = 'Sent ✓';
    btn.style.background = '#5a9a5a';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.style.background = '';
      btn.disabled = false;
      e.target.reset();
    }, 3000);
  });
}
