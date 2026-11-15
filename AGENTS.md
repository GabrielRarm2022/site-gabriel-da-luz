# Site pessoal: Gabriel da Luz

Landing page pessoal do Gabriel da Luz (CEO da RARM Contabilidade, Curitiba/PR). Repositório **público**.

## Objetivo
1. Autoridade e marca pessoal. 2. Distribuir conteúdo (newsletter no Substack, YouTube, grupo no WhatsApp). 3. Gerar leads para a RARM.
- Público: donos de pequenas e médias empresas de serviço (ICP da RARM).
- Ação principal: assinar a newsletter **Service as Software** (Substack). Secundárias: YouTube @ogabrieldaluzz, grupo privado no WhatsApp, conhecer a RARM.
- Roteiro de landing page com gatilhos mentais (Érico Rocha): história, autoridade, prova, reciprocidade, comunidade, exclusividade, antecipação.

## Tecnologia
- Astro (site estático) + CSS puro, sem framework de UI. Hospedagem: Vercel (deploy automático a cada merge na `main`; prévia em cada PR).
- Comandos: `npm install`, `npm run dev` (servidor local), `npm run build` (gera `dist/`, tem que passar antes de todo PR).
- Docs do Astro: https://docs.astro.build

## Estrutura
- `src/pages/index.astro`: a landing page.
- `src/data/site.ts`: **todos os textos e links** num lugar só (mudar texto = mexer só aqui).
- `src/styles/global.css`: cores, fontes e espaçamentos.
- `public/`: imagens e ícones.
- `docs/progresso.md` e `docs/decisoes/`: memória do projeto.

## Identidade visual
- Minimalista, muito branco e preto, pouca cor. Referência: pinho.co.
- Cores (marca RARM): fundo branco `#FFFFFF`, texto `#0F0F0F`, cinza `#6B716C`, verde `#19BD5F` (só destaque de palavras e botões), azul `#4119BD` (raríssimo, detalhe).
- Fontes: MuseoModerno (títulos) e Manrope (texto), via Google Fonts.

## Regras
- Fluxo: branch `feat/...` ou `fix/...` → PR → revisão (`revisor-de-codigo`) → o Gabriel aprova e faz o merge. Nunca push direto na `main`.
- Sem segredos no código (repositório público). Sem dados pessoais sensíveis (CPF, endereço, telefone pessoal).
- Números da RARM que **podem** aparecer: nº de clientes, crescimento em %, 7 dígitos alcançados, meta de 8 dígitos. **Proibidos:** margem, caixa, retirada dos sócios, inadimplência.
- Voz do Gabriel: direta, frases curtas, didática, sem frase de coach, sem promessa de dinheiro fácil, sem travessão, sem "não é sobre X, é sobre Y".
- Links externos com `target="_blank" rel="noopener"`. Imagens com `alt`.
