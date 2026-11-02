export function initAccordion(root) {
  if (!root) return;
  root.addEventListener('click', (e) => {
    const btn = e.target.closest('.acc-trigger');
    if (!btn) return;
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    panel.hidden = open;
    btn.closest('.acc-item').classList.toggle('is-open', !open);
  });
}
