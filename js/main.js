import { renderAreas, renderPosts, renderFaq } from './modules/render.js';
import { initNav } from './modules/nav.js';
import { initReveal } from './modules/reveal.js';
import { initAccordion } from './modules/accordion.js';
import { initWhatsApp, initContactForm } from './modules/contact.js';
import { initPhotos } from './modules/photos.js';

renderAreas(document.getElementById('areas-list'));
renderPosts(document.getElementById('posts-list'));
renderFaq(document.getElementById('faq-list'));

initNav();
initReveal();
initAccordion(document.getElementById('faq-list'));
initWhatsApp();
initContactForm();
initPhotos();

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
