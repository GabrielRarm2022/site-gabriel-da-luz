# 0001 – Astro + Vercel

**Contexto:** site pessoal, conteúdo quase todo fixo, precisa ser rápido, barato e fácil de manter por quem está aprendendo.
**Decisão:** Astro (gera páginas estáticas) com CSS puro, hospedado na Vercel (plano grátis).
**Por quê:** carrega muito rápido (bom para Google), não precisa de servidor nem banco, deploy automático a cada merge e prévia em cada PR. Next.js foi considerado, mas é mais complexo e só compensa com login/banco.
