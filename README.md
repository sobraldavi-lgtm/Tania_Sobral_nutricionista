# Site — Tânia Sobral | Nutricionista Materno-Infantil

Landing page estática (HTML5 + CSS3 + JavaScript modular, sem frameworks).

## Estrutura
```
index.html            Página principal (todas as seções)
privacidade.html      Política de Privacidade
css/style.css         Estilos (variáveis de cores/espaçamentos no :root)
js/main.js            Ponto de entrada
js/config.js          WhatsApp, e-mail e endpoint do formulário
js/data/              Conteúdo editável: areas.js, posts.js, faq.js
js/modules/           nav, reveal (animações), accordion, contact, render, photos
assets/img/           Logo, favicon e fotografias (ver assets/img/README.md)
```

## Como visualizar
Por usar módulos ES, abra via servidor local:
```
python3 -m http.server 8000
```
e acesse http://localhost:8000.

## Pendências (aguardando a profissional)
- Logotipo original (o atual é **provisório**) e fotografias profissionais (`assets/img/tania-hero.webp`, `tania-sobre.webp`) — aparecem automaticamente ao adicionar os arquivos.
- Biografia, formação, CRN e experiência (marcados como `[a confirmar]` em `index.html`).
- Respostas do FAQ entre colchetes em `js/data/faq.js`.
- Formulário: definir `formEndpoint` em `js/config.js` (ex.: Formspree). Sem ele, o formulário abre o e-mail do visitante com a mensagem preenchida — nada é "simulado".
- Domínio final (atualizar `canonical`/`og:url`) e `assets/img/og-image.jpg` (1200×630).

## Novos conteúdos
Adicione um objeto em `js/data/posts.js` — nenhuma outra alteração é necessária.
