# 🌿 Tânia Sobral — Nutricionista Materno-Infantil

Site oficial de **Tânia Sobral**, nutricionista com atuação em nutrição materno-infantil: gestação, introdução alimentar, seletividade alimentar, nutrição infantil e educação alimentar familiar.

> *"Nutrir com carinho é cuidar de cada fase da vida."*

## Sobre o projeto

Landing page institucional, pensada para gestantes, mães, pais e responsáveis que buscam orientação nutricional com acolhimento. O objetivo é transmitir **confiança, cuidado e profissionalismo** e facilitar o **agendamento de consultas**.

- **Tecnologias:** HTML5 semântico, CSS3 (Grid, Flexbox e variáveis) e JavaScript modular (ES Modules), sem frameworks
- **Tipografia:** Playfair Display (títulos), Poppins (textos) e Caveat (detalhes manuscritos)
- **Requisitos:** responsivo do celular ao desktop, acessível (teclado, contraste, `prefers-reduced-motion`), SEO e Open Graph configurados, de acordo com a LGPD

## Identidade visual

| Cor | Hex |
| --- | --- |
| Verde-oliva | `#596B3D` |
| Verde-sálvia | `#A9BE95` |
| Verde-claro | `#EAF3DF` |
| Vinho | `#782650` |
| Rosa-claro | `#F5DFE7` |
| Creme | `#FAF8F2` |
| Grafite | `#30332E` |

## Seções do site

1. Topo fixo com menu (hambúrguer no celular)
2. Abertura: *"Nutrir com carinho é cuidar de cada fase da vida."*
3. Sobre: *Prazer, sou Tânia Sobral!*
4. Especialidades (cards)
5. Como funciona: linha do tempo em 4 etapas
6. Seletividade alimentar
7. Conteúdos (estrutura de blog)
8. Perguntas frequentes
9. Contato e agendamento (WhatsApp e formulário)
10. Rodapé, com a [Política de Privacidade](privacidade.html) em página própria

## Estrutura de pastas

```
index.html            Página principal
privacidade.html      Política de Privacidade (LGPD)
css/style.css         Estilos; cores e espaçamentos como variáveis no :root
js/main.js            Ponto de entrada
js/config.js          WhatsApp, e-mail e endpoint do formulário
js/data/              Conteúdo editável: areas.js, posts.js, faq.js
js/modules/           nav, reveal, accordion, contact, render, photos
assets/img/           Logo, favicon e fotografias (ver assets/img/README.md)
```

## Como rodar localmente

O site usa ES Modules, então precisa ser aberto por um servidor (abrir o arquivo direto não funciona):

```bash
python3 -m http.server 8000
```

Depois acesse http://localhost:8000. Para publicar, qualquer hospedagem estática serve (GitHub Pages, Netlify, Vercel), sem etapa de build.

## Como editar o conteúdo

| Quero… | Onde |
| --- | --- |
| Publicar um novo conteúdo | adicionar um objeto em `js/data/posts.js` |
| Alterar uma especialidade | `js/data/areas.js` |
| Editar as perguntas frequentes | `js/data/faq.js` |
| Trocar a mensagem do WhatsApp | `js/config.js` |
| Adicionar as fotos | salvar `assets/img/tania-hero.webp` e `assets/img/tania-sobre.webp` (aparecem sozinhas) |

## Formulário de contato

Defina `formEndpoint` em `js/config.js` com um serviço real, como o [Formspree](https://formspree.io). Enquanto estiver vazio, o formulário **não envia nada pela internet**: abre o aplicativo de e-mail do visitante com a mensagem preenchida, e o site avisa isso na tela.

## Pendências (aguardando a profissional)

- [ ] Logotipo original (o atual é provisório)
- [ ] Fotografias profissionais
- [ ] Biografia, formação, número do CRN e experiência (marcados como `[a confirmar]`)
- [ ] Respostas das perguntas frequentes entre colchetes
- [ ] Endpoint do formulário
- [ ] Domínio final (`canonical` e `og:url`) e `assets/img/og-image.jpg` (1200×630)
- [ ] Revisão jurídica da Política de Privacidade

## Contato

- **WhatsApp:** [(11) 97262-5998](https://wa.me/5511972625998)
- **Instagram:** [@nutri.taniassobral](https://www.instagram.com/nutri.taniassobral/)
- **E-mail:** [taniasobralnutri@gmail.com](mailto:taniasobralnutri@gmail.com)

---

© Tânia Sobral. Todos os direitos reservados. O conteúdo deste site tem caráter educativo e não substitui uma consulta individual.
