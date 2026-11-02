import { CONFIG } from '../config.js';

export function initWhatsApp() {
  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
  document.querySelectorAll('.js-whatsapp').forEach((a) => { a.href = url; });
}

export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('form-status');
  const note = document.getElementById('form-note');
  const hasEndpoint = Boolean(CONFIG.formEndpoint);

  note.textContent = hasEndpoint
    ? 'Seus dados são usados apenas para retornar o contato.'
    : 'Envio on-line ainda não configurado: ao enviar, seu aplicativo de e-mail será aberto com a mensagem preenchida para você concluir o envio.';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.className = 'form-status';
    if (!form.checkValidity()) {
      const first = form.querySelector(':invalid');
      status.textContent = 'Por favor, preencha todos os campos corretamente e aceite a Política de Privacidade.';
      status.classList.add('is-error');
      first?.focus();
      return;
    }
    const data = Object.fromEntries(new FormData(form));

    if (!hasEndpoint) {
      const body = `Nome: ${data.nome}\nE-mail: ${data.email}\n\n${data.mensagem}`;
      window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(data.assunto)}&body=${encodeURIComponent(body)}`;
      status.textContent = 'Abrimos seu aplicativo de e-mail. A mensagem só será enviada quando você confirmar o envio por lá.';
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    status.textContent = 'Enviando…';
    try {
      const res = await fetch(CONFIG.formEndpoint, {
        method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      status.textContent = 'Mensagem enviada! Em breve retornarei o contato.';
      status.classList.add('is-success');
    } catch {
      status.textContent = 'Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.';
      status.classList.add('is-error');
    } finally {
      btn.disabled = false;
    }
  });
}
