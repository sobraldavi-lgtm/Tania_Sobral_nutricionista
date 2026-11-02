export function initReveal() {
  const items = document.querySelectorAll('.reveal');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach((el, i) => {
    // pequeno escalonamento entre irmãos
    const siblings = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
    el.style.setProperty('--d', `${Math.min(siblings.indexOf(el), 5) * 80}ms`);
    io.observe(el);
  });

  // Linha do tempo progressiva
  const timeline = document.querySelector('.timeline');
  if (timeline) {
    const tio = new IntersectionObserver(([e]) => { if (e.isIntersecting) { timeline.classList.add('is-drawn'); tio.disconnect(); } }, { threshold: 0.3 });
    tio.observe(timeline);
  }
}
