const traducoes = {
  pt: {
    'menu.sobre': 'Sobre Mim',
    'menu.projetos': 'Projetos',
    'menu.experiencias': 'Experiências',
    'menu.contato': 'Contato',
    'sobre.titulo': 'Sobre Mim',
    'sobre.texto': 'Olá! Sou Gabriela Schaper, estudante de Ciência da Computação na PUC Minas. Sempre gostei de lógica, e foi durante o curso técnico no Cotemig que percebi que a tecnologia era o meu caminho. Hoje busco atuar no desenvolvimento de novas tecnologias aliado à pesquisa.',
    'projetos.titulo': 'PROJETOS',
    'projetos.subtitulo': 'Apenas alguns dos meus principais projetos!',
'proj.tabela.desc': 'Tabela periódica criada para praticar tabelas HTML e efeitos de hover com CSS.\nLinguagens: HTML, CSS\nTecnologias: GitHub Pages',
'proj.sushi.desc': 'Site que simula um serviço de entrega de sushi, com navegação entre várias páginas HTML.\nLinguagens: HTML, CSS',
'proj.grene.desc': 'App e site que mostram o estado de uma planta por meio de uma animação.\nLinguagens: Python, Dart\nTecnologias: Django, Flutter',    'btn.github': 'Ver no GitHub',
    'btn.preview': 'Ver site',
    'exp.titulo': 'EXPERIÊNCIAS',
    'exp.sapiens.desc': 'Estágio em que desenvolvi agentes de IA com n8n para atendimento a clientes, redes sociais e outras demandas da empresa.',
    'contato.titulo': 'CONTATO',
    'contato.sub': 'Vamos conversar? Mande uma mensagem.',
    'form.nome': 'Nome',
    'form.email': 'E-mail',
    'form.mensagem': 'Mensagem',
    'form.enviar': 'Enviar',
  },
  en: {
    'menu.sobre': 'About Me',
    'menu.projetos': 'Projects',
    'menu.experiencias': 'Experiences',
    'menu.contato': 'Contact',
    'sobre.titulo': 'About Me',
    'sobre.texto': "Hi! I'm Gabriela Schaper, a Computer Science student at PUC Minas. I've always enjoyed logic, and it was during my technical course at Cotemig that I realized technology was the right path for me. Today, I aim to work on developing new technologies alongside research.",
    'projetos.titulo': 'PROJECTS',
    'projetos.subtitulo': 'Just a few of my main projects!',
'proj.tabela.desc': 'Periodic table built to practice HTML tables and CSS hover effects.\nLanguages: HTML, CSS\nTechnologies: GitHub Pages',
'proj.sushi.desc': 'Website that simulates a sushi delivery service, with navigation across multiple HTML pages.\nLanguages: HTML, CSS',
'proj.grene.desc': "App and website that show a plant's condition through an animation.\nLanguages: Python, Dart\nTechnologies: Django, Flutter",    'btn.github': 'View on GitHub',
    'btn.preview': 'View site',
    'exp.titulo': 'EXPERIENCES',
    'exp.sapiens.desc': 'Internship where I built AI agents with n8n for customer support, social media, and other company needs.',
    'contato.titulo': 'CONTACT',
    'contato.sub': "Let's talk? Send me a message.",
    'form.nome': 'Name',
    'form.email': 'Email',
    'form.mensagem': 'Message',
    'form.enviar': 'Send',
  },
}

export function iniciarIdioma() {
  const botao = document.querySelector('#btn-idioma')
  let idioma = 'pt'

  try {
    idioma = localStorage.getItem('idioma') || 'pt'
  } catch (e) {}

  function aplicar(lang) {
    idioma = lang
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const texto = traducoes[lang][el.dataset.i18n]
      if (texto) el.textContent = texto
    })

    // o botão mostra o idioma PARA O QUAL você vai trocar
    botao.textContent = lang === 'pt' ? 'EN' : 'PT'

    try {
      localStorage.setItem('idioma', lang)
    } catch (e) {}
  }

  botao.addEventListener('click', (e) => {
    e.preventDefault()
    aplicar(idioma === 'pt' ? 'en' : 'pt')
  })

  aplicar(idioma)
}
