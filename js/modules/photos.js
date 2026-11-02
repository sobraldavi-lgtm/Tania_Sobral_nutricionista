// Carrega a fotografia real se o arquivo existir; caso contrário mantém o espaço reservado.
export function initPhotos() {
  document.querySelectorAll('.photo-frame[data-photo]').forEach((fig) => {
    const img = new Image();
    img.alt = fig.dataset.alt || '';
    img.decoding = 'async';
    img.onload = () => { fig.replaceChildren(img); fig.classList.add('has-photo'); };
    img.src = fig.dataset.photo;
  });
}
