// Todos os textos e links do site ficam aqui.
// Para mudar um texto ou link, mude só este arquivo.
// Base: plano do perfil pessoal (15/11/2026) e persona do Gabriel (14/11/2026).

// Marca de origem nos links (UTM). Serve para o Odoo saber que o lead veio do "Perfil Gabriel".
const utm = (meio: string) => `utm_source=perfil-gabriel&utm_medium=${meio}&utm_campaign=service-as-software`;

// PENDENTE: o Gabriel precisa passar os links que ainda estão com '#'.
// Enquanto o link começar com '#', o botão some ou aparece como "Em breve".
export const links = {
  newsletter: '#newsletter', // PENDENTE: link do Substack "Service as Software"
  newsletterEmbed: '', // PENDENTE: ex. https://NOME.substack.com/embed
  whatsappGrupo: '#comunidade', // PENDENTE: link de convite do grupo de avisos
  linkedin: '#linkedin', // PENDENTE: perfil do Gabriel no LinkedIn
  tiktok: '#tiktok', // PENDENTE: perfil no TikTok (sugestão: @ogabrieldaluz)
  youtube: 'https://www.youtube.com/@ogabrieldaluzz',
  instagram: 'https://www.instagram.com/ogabrieldaluz/',
  rarm: `https://rarmcontabilidade.com.br/?${utm('site')}`,
};

export const seo = {
  titulo: 'Gabriel da Luz | Service as Software',
  descricao:
    'Como escalar uma empresa de serviços: processo, IA e gente no lugar certo. Bastidores reais da RARM, construída em público rumo aos 8 dígitos.',
};

export const hero = {
  selo: 'Gabriel da Luz · CEO da RARM',
  titulo: ['Service as Software:', 'como escalar uma', 'empresa de serviços.'],
  subtitulo:
    'Estou transformando uma contabilidade numa empresa de serviço que roda como software. Mostro tudo em público: as decisões, os números que posso abrir e os erros. Rumo aos 8 dígitos.',
  cta: 'Assinar a newsletter',
  ctaSecundario: 'Ver os vídeos no YouTube',
  gratis: 'Tudo aqui é de graça: conteúdo, bastidores e materiais práticos.',
  fotoAlt: 'Foto de Gabriel da Luz, de óculos e camisa polo preta da RARM, numa reunião',
};

export const conceito = {
  selo: 'A ideia',
  titulo: 'Serviço que escala como software.',
  texto:
    'Empresa de serviço costuma crescer contratando mais gente para fazer mais do mesmo. A margem não acompanha e o dono vira o gargalo. Service as Software é o caminho contrário:',
  itens: [
    { numero: '01', nome: 'Processo vira sistema', texto: 'O que hoje está na cabeça de alguém vira passo escrito, depois vira fluxo automático.' },
    { numero: '02', nome: 'IA faz a tarefa de robô', texto: 'Conferir, copiar, cobrar, organizar. A máquina faz para sobrar tempo ao humano.' },
    { numero: '03', nome: 'Gente cuida da relação', texto: 'Relação entre pessoas não se automatiza. É onde o time faz diferença e o cliente fica.' },
  ],
};

export const paraQuem = {
  titulo: 'Para quem é',
  intro: 'Donos de empresas de serviço que querem crescer sem virar refém da própria operação.',
  itens: [
    { nome: 'SaaS e microSaaS', texto: 'Produto rodando, mas suporte, onboarding e financeiro ainda no braço.' },
    { nome: 'Agências', texto: 'Cada cliente novo pede mais uma pessoa no time.' },
    { nome: 'Consultorias de marketing e IA', texto: 'Vendem eficiência, mas a própria operação ainda é manual.' },
    { nome: 'Profissionais liberais', texto: 'Trabalham mais do que na CLT e, no fim do mês, sobra menos.' },
  ],
  fecho: 'Eu já estive exatamente aí.',
};

export const historia = {
  titulo: 'Minha história',
  paragrafos: [
    'Abri a RARM porque queria ganhar dinheiro. Simples assim.',
    'No começo eu trabalhava o dobro do que trabalhava na CLT e ganhava metade. Pensei em desistir mais de uma vez.',
    'Foi aí que entendi uma coisa: contador costuma ser profissional liberal, não empreendedor. Eu decidi construir uma empresa de verdade. De empreendedor para empreendedor.',
    'Tomei decisões difíceis. Desliguei pessoas, projetos e fornecedores. Errei, ajustei e segui.',
    'Hoje a RARM passou dos 7 dígitos e usa agentes de IA na operação. O próximo objetivo está escrito: 8 dígitos. E eu vou mostrar o caminho inteiro.',
  ],
  frase: 'As coisas não vão ficar mais fáceis. A gente é que vai ficar mais forte.',
  fotoAlt: 'Gabriel da Luz gravando vídeo no escritório, de óculos e blusa cinza',
};

export const numeros = [
  { valor: '+270', legenda: 'empresas atendidas pela RARM' },
  { valor: '7 dígitos', legenda: 'de faturamento alcançados' },
  { valor: '8 dígitos', legenda: 'é a próxima meta, construída em público' },
];

// PENDENTE: o Gabriel confirmar e completar (acelerações, prêmios, marcos).
export const marcos: { ano: string; texto: string }[] = [];

export const temas = {
  titulo: 'Sobre o que eu escrevo e falo',
  itens: [
    { nome: 'Build in public', texto: 'Decisões, números e erros reais de uma empresa de serviço crescendo.' },
    { nome: 'Gestão e gente', texto: 'Contratar, desligar, liderar e montar time que roda sem o dono.' },
    { nome: 'IA na operação', texto: 'Agentes e automações que eu uso de verdade, com o que deu certo e o que não deu.' },
    { nome: 'Startups e crescimento', texto: 'O que empresa de serviço pode aprender com quem constrói software.' },
  ],
};

export const ecossistema = {
  titulo: 'Construído junto com o ecossistema',
  texto:
    'Aceleração, eventos e troca com outros fundadores fazem parte do caminho. Muito do que eu publico nasce dessas conversas.',
  fotoAlt: 'Gabriel da Luz com um grupo de empreendedores em um evento do ecossistema de startups',
};

export const canais = {
  titulo: 'Escolha onde quer me acompanhar',
  itens: [
    {
      nome: 'Newsletter',
      destaque: 'Service as Software',
      texto: 'Um e-mail por semana com a versão completa do que eu aprendi construindo a RARM. De graça.',
      cta: 'Assinar a newsletter',
      chave: 'newsletter',
    },
    {
      nome: 'YouTube',
      destaque: '@ogabrieldaluzz',
      texto: 'Um vídeo longo por semana. É o centro de tudo: o resto nasce dele.',
      cta: 'Ver o canal',
      chave: 'youtube',
    },
    {
      nome: 'Instagram',
      destaque: '@ogabrieldaluz',
      texto: 'Cortes, carrosséis e bastidor do dia.',
      cta: 'Seguir no Instagram',
      chave: 'instagram',
    },
    {
      nome: 'LinkedIn',
      destaque: 'Gabriel da Luz',
      texto: 'Reflexões da semana sobre gestão, IA e crescimento.',
      cta: 'Seguir no LinkedIn',
      chave: 'linkedin',
    },
  ],
};

export const comunidade = {
  selo: 'Comunidade',
  titulo: 'Grupo de avisos no WhatsApp',
  texto:
    'Quem está no grupo recebe os conteúdos primeiro. Por enquanto é só de avisos. Quando chegar a 100 membros, o grupo abre para debate entre os donos de empresa.',
  cta: 'Entrar no grupo',
  meta: 100,
};

export const rarm = {
  titulo: 'A RARM é onde eu aplico tudo isso',
  texto:
    'A RARM Contabilidade é o meu principal projeto e o laboratório do Service as Software. Contabilidade feita por empreendedores para empresas de serviço: cuidamos do imposto, da folha e dos números para você focar no que faz a sua empresa crescer. Se a sua empresa é do tipo que eu descrevi aqui, fale com o nosso time.',
  cta: 'Falar com a RARM',
};

export const final = {
  titulo: 'Receba os bastidores toda semana',
  texto: 'Um e-mail curto, direto, com o que funcionou e o que não funcionou. Sempre grátis. Se não gostar, sai com um clique.',
  cta: 'Assinar de graça',
  assinatura: 'É nisso que eu acredito, é isso que eu prego, é isso que eu vivo.',
};
