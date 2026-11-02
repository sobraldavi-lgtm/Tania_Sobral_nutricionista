import { areas } from '../data/areas.js';
import { posts } from '../data/posts.js';
import { faq } from '../data/faq.js';

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const icon = (id) => `<svg class="icon" aria-hidden="true"><use href="#${id}"/></svg>`;

const illustrations = {
  bowl: '<path class="f-cream" d="M8 34h48a24 24 0 0 1-48 0z"/><circle class="f-red" cx="24" cy="30" r="5"/><circle class="f-green" cx="34" cy="28" r="5"/><circle class="f-red" cx="42" cy="31" r="4"/>',
  carrot: '<path class="f-orange" d="M40 18 12 54c-2 3 1 5 4 3l34-28z"/><path class="f-leaf" d="M42 18c2-8 8-12 14-12-2 6-6 10-14 12zM44 22c6-2 12 0 14 4-6 2-10 0-14-4z"/>',
  apple: '<path class="f-red" d="M32 18c-6-4-20-3-22 12-2 14 8 28 16 28 3 0 4-2 6-2s3 2 6 2c8 0 18-14 16-28-2-15-16-16-22-12z"/><path class="f-leaf" d="M34 12c4-6 12-6 14-4-4 6-10 6-14 4z"/>',
  pear: '<path class="f-green" d="M32 12c-5 0-6 8-8 14-3 8-10 12-10 20 0 8 8 14 18 14s18-6 18-14c0-8-7-12-10-20-2-6-3-14-8-14z"/><path class="f-stem" d="M32 12c0-4 1-6 3-8"/>',
  leaf: '<path class="f-leaf" d="M10 54C10 30 26 12 54 10c0 28-18 44-44 44z"/><path class="f-stem" d="M10 54 38 26"/>',
};

export function renderAreas(el) {
  if (!el) return;
  el.innerHTML = areas.map((a) => `
    <li class="area-card reveal">
      <span class="card-icon card-icon--${a.tone}">${icon(a.icon)}</span>
      <h3>${esc(a.title)}</h3>
      <p>${esc(a.text)}</p>
      <a href="#contato" class="link-more">Saiba mais<span class="sr-only"> sobre ${esc(a.title)}</span>${icon('i-arrow')}</a>
    </li>`).join('');
}

export function renderPosts(el) {
  if (!el) return;
  el.innerHTML = posts.map((p) => `
    <article class="post-card reveal">
      <div class="post-media">
        ${p.image
          ? `<img src="${esc(p.image)}" alt="${esc(p.imageAlt || '')}" loading="lazy" width="400" height="260">`
          : `<svg viewBox="0 0 64 64" aria-hidden="true">${illustrations[p.illustration] || illustrations.leaf}</svg>`}
      </div>
      <div class="post-body">
        <span class="post-cat">${esc(p.category)}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.excerpt)}</p>
        <a href="${esc(p.url)}" class="link-more">Ler conteúdo<span class="sr-only">: ${esc(p.title)}</span>${icon('i-arrow')}</a>
      </div>
    </article>`).join('');
}

export function renderFaq(el) {
  if (!el) return;
  el.innerHTML = faq.map((f, i) => `
    <div class="acc-item">
      <h3>
        <button class="acc-trigger" aria-expanded="false" aria-controls="faq-${i}" id="faq-btn-${i}">
          <span>${esc(f.q)}</span>${icon('i-plus')}
        </button>
      </h3>
      <div class="acc-panel" id="faq-${i}" role="region" aria-labelledby="faq-btn-${i}" hidden>
        <p>${esc(f.a)}</p>
      </div>
    </div>`).join('');
}
