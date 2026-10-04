// Portuguese remains the source content in HTML and the fallback without JavaScript.
// Translate text nodes individually to preserve links, icons and heading line breaks.
(() => {
    const english = {
        'Murillo Alves | Desenvolvimento Full Stack & Robótica': 'Murillo Alves | Full Stack Development & Robotics',
        'Conheça Murillo Alves: desenvolvedor Full Stack, estudante de Engenharia da Computação na UEMA e campeão mundial de robótica. Sistemas web, APIs, dados e IoT.': 'Meet Murillo Alves: Full Stack developer, Computer Engineering student at UEMA and world robotics champion. Web applications, APIs, data and IoT.',
        'Pular para o conteúdo': 'Skip to content',
        'Navegação principal': 'Main navigation',
        'Murillo Alves — início': 'Murillo Alves — home',
        'Software & robótica': 'Software & robotics',
        'Sobre': 'About',
        'Projetos': 'Projects',
        'Trajetória': 'Experience',
        'Robótica': 'Robotics',
        'Contato': 'Contact',
        'Currículo': 'Résumé',
        'Baixar currículo em português': 'Download résumé in Portuguese',
        'Ativar tema claro': 'Switch to light theme',
        'Ativar tema escuro': 'Switch to dark theme',
        'Abrir menu': 'Open menu',
        'Fechar menu': 'Close menu',
        'Olá, sou Murillo Alves': "Hi, I'm Murillo Alves",
        'Transformo ideias': 'I turn ideas',
        'em': 'into',
        'soluções reais.': 'real solutions.',
        'Desenvolvedor Full Stack': 'Full Stack Developer',
        'Engenharia da Computação': 'Computer Engineering',
        'Posso ajudar a tirar seu sistema do papel: desenvolver interfaces web, construir APIs e integrar bancos de dados. Conecto software e hardware para resolver problemas com tecnologia.': 'I can help bring your application to life: developing web interfaces, building APIs and integrating databases. I connect software and hardware to solve problems through technology.',
        'Explore meus projetos': 'Explore my projects',
        'Vamos conversar': "Let's talk",
        '(abre em nova aba)': '(opens in a new tab)',
        'ENTRE CÓDIGO & CIRCUITOS': 'BETWEEN CODE & CIRCUITS',
        'Murillo Alves segurando o troféu de primeiro lugar da Roboworld Cup FIRA 2024': 'Murillo Alves holding the first-place trophy from the FIRA Roboworld Cup 2024',
        'Curiosidade para aprender.': 'Curiosity to learn.',
        'Iniciativa para construir.': 'Initiative to build.',
        'Campeão mundial de robótica': 'World robotics champion',
        'Conhecer as conquistas em robótica': 'Explore robotics achievements',
        'DA IDEIA À PRÁTICA': 'FROM IDEA TO REALITY',
        'Desenvolvimento web': 'Web development',
        'APIs & dados': 'APIs & data',
        'Sistemas embarcados': 'Embedded systems',
        'Robótica competitiva': 'Competitive robotics',
        'Sobre mim': 'About me',
        'Software na prática.': 'Software in practice.',
        'Curiosidade por natureza.': 'Curious by nature.',
        'Minhas competências': 'My skills',
        'Minha formação': 'My education',
        'Sou desenvolvedor Full Stack e estudante de Engenharia da Computação na UEMA. Gosto de entender como as coisas funcionam — e de construir o que vem depois.': "I'm a Full Stack developer and a Computer Engineering student at UEMA. I enjoy understanding how things work — and building what comes next.",
        'Na Plus Media Ads, desenvolvo sistemas com PHP, SQL e React. Meu foco atual de estudo e projetos é o backend com Java e Spring Boot, aprofundando conhecimentos em APIs REST, modelagem de dados e arquitetura de software.': 'At Plus Media Ads, I develop applications with PHP, SQL and React. My current studies and projects focus on backend development with Java and Spring Boot, deepening my knowledge of REST APIs, data modeling and software architecture.',
        'Essa vontade de experimentar também me levou à robótica competitiva e à Vórtex Racing, onde atuo como trainee em sistemas embarcados e telemetria. Do banco de dados ao circuito, busco soluções que façam sentido na prática.': 'That drive to experiment also led me to competitive robotics and Vórtex Racing, where I work as an embedded systems and telemetry trainee. From databases to circuits, I look for solutions that work in practice.',
        'Aprendizado contínuo': 'Continuous learning',
        'Visão de produto': 'Product thinking',
        'Colaboração': 'Collaboration',
        'Seu sistema, do início ao fim': 'Your application, start to finish',
        'Posso desenvolver aplicações web com interfaces responsivas e regras de negócio para organizar processos.': 'I can develop web applications with responsive interfaces and business logic to organize workflows.',
        'Dados que trabalham juntos': 'Data that works together',
        'Posso construir APIs, modelar bancos relacionais e integrar informações entre as partes de um sistema.': 'I can build APIs, design relational databases and integrate information across an application.',
        'Conexão com o mundo físico': 'Connecting to the physical world',
        'Posso contribuir com protótipos de IoT, coleta de dados e soluções embarcadas com Arduino e ESP32.': 'I can contribute to IoT prototypes, data collection and embedded solutions using Arduino and ESP32.',
        'Competências': 'Skills',
        'As ferramentas': 'The tools',
        'por trás das soluções.': 'behind the solutions.',
        'Uma stack em evolução, construída com estudo e aplicação prática.': 'An evolving stack, built through study and practical experience.',
        'Interfaces web': 'Web interfaces',
        'Experiências responsivas, acessíveis e bem estruturadas.': 'Responsive, accessible and well-structured experiences.',
        'Tecnologias de frontend': 'Frontend technologies',
        'Backend & dados': 'Backend & data',
        'APIs, regras de negócio, modelagem relacional e persistência de dados.': 'APIs, business logic, relational modeling and data persistence.',
        'Tecnologias de backend': 'Backend technologies',
        'APIs REST': 'REST APIs',
        'POO': 'OOP',
        'Spring Boot · em evolução': 'Spring Boot · learning',
        'Sistemas embarcados, telemetria, automação e desenvolvimento de placas.': 'Embedded systems, telemetry, automation and circuit board design.',
        'Tecnologias de sistemas embarcados': 'Embedded systems technologies',
        'Telemetria': 'Telemetry',
        'Ferramentas & práticas': 'Tools & practices',
        'Versionamento, serviços de dados e organização do fluxo de desenvolvimento.': 'Version control, data services and development workflow organization.',
        'Ferramentas e práticas': 'Tools and practices',
        'Metodologias ágeis': 'Agile methodologies',
        'Projetos selecionados': 'Selected projects',
        'Ideias que ganham': 'Ideas taking',
        'forma em código.': 'shape in code.',
        'Explorar meu GitHub': 'Explore my GitHub',
        'Filtrar projetos': 'Filter projects',
        'Todos': 'All',
        'Plataforma de feedback / MVP': 'Feedback platform / MVP',
        'Visão geral': 'Overview',
        'Avaliações': 'Reviews',
        'Satisfação': 'Satisfaction',
        'Representação visual do projeto': 'Visual representation of the project',
        'Web & backend · Projeto acadêmico': 'Web & backend · Academic project',
        'Plataforma de feedback': 'Feedback platform',
        'MVP para coletar avaliações de clientes e apresentar métricas. Desenvolvi o backend em Java e colaborei no frontend.': 'An MVP for collecting customer reviews and displaying metrics. I developed the Java backend and collaborated on the frontend.',
        'Ver código no GitHub': 'View code on GitHub',
        'HARDWARE + CONECTIVIDADE': 'HARDWARE + CONNECTIVITY',
        'Sistemas embarcados · Internet das coisas': 'Embedded systems · Internet of Things',
        'Monitoramento com ESP32, detecção de quedas e envio de alertas. Uma aplicação de hardware conectado à web.': 'ESP32 monitoring with fall detection and alerts. A project connecting hardware to the web.',
        'Conversar sobre o projeto': 'Discuss this project',
        'Full Stack · Projeto profissional': 'Full Stack · Professional project',
        'Plataforma de gestão': 'Management platform',
        'Cadastro e controle de avaliações, regras de negócio e persistência de dados. Projeto desenvolvido na Plus Media Ads.': 'Review registration and management, business logic and data persistence. A project developed at Plus Media Ads.',
        'Aplicação desktop': 'Desktop application',
        'Gerenciador de Estoque': 'Inventory Manager',
        'Sistema para controle de produtos, vendas e unidades, reunindo uma interface desktop e um banco de dados relacional.': 'A system for managing products, sales and units, combining a desktop interface with a relational database.',
        'Desenvolvimento web · PHP': 'Web development · PHP',
        'Site de portifolio e agendamento': 'Portfolio and booking website',
        'Projeto web em PHP com estrutura organizada em aplicação, rotas, configuração e banco de dados.': 'A PHP web project organized into application code, routes, configuration and database components.',
        'Aprender, construir.': 'Learn. Build.',
        'Evoluir a cada desafio.': 'Grow with every challenge.',
        'Atuação em desenvolvimento Full Stack, sistemas embarcados, telemetria e suporte técnico.': 'Experience in Full Stack development, embedded systems, telemetry and technical support.',
        'Plus Media Ads · 2026 — atual': 'Plus Media Ads · 2026 — present',
        'Desenvolvimento de aplicações web completas, integrando back-end em PHP, bancos de dados SQL e interfaces em React.': 'Developing complete web applications, integrating PHP backends, SQL databases and React interfaces.',
        'Vórtex Racing · 2026 — atual': 'Vórtex Racing · 2026 — present',
        'Trainee em Sistemas Embarcados e Telemetria': 'Embedded Systems & Telemetry Trainee',
        'Desenvolvimento de hardware para telemetria, sistemas de injeção e placas de circuito impresso para projetos automotivos.': 'Developing telemetry hardware, fuel injection systems and printed circuit boards for automotive projects.',
        'Viva Procon · ago — out 2025': 'Viva Procon · Aug — Oct 2025',
        'Estagiário de Suporte em TI': 'IT Support Intern',
        'Suporte a sistemas, manutenção de hardware, configuração de computadores e apoio à infraestrutura de rede.': 'Systems support, hardware maintenance, computer setup and network infrastructure support.',
        'FORMAÇÃO /': 'EDUCATION /',
        'Uma base técnica.': 'A technical foundation.',
        'Novas possibilidades.': 'New possibilities.',
        'Formação superior em andamento, apoiada por uma base técnica em desenvolvimento de sistemas.': 'An undergraduate degree in progress, supported by a technical background in systems development.',
        'UEMA · Em andamento': 'UEMA · In progress',
        'Universidade Estadual do Maranhão. Previsão de conclusão em 2031.': 'State University of Maranhão. Expected graduation: 2031.',
        'IEMA · Concluído em 2025': 'IEMA · Completed in 2025',
        'Técnico em Desenvolvimento de Sistemas': 'Technical Diploma in Systems Development',
        'Formação técnica voltada ao desenvolvimento de software e à construção de soluções digitais.': 'Technical education focused on software development and building digital solutions.',
        'Certificação profissional': 'Professional certification',
        'Fundamentos da linguagem Java e princípios de programação orientada a objetos.': 'Java language fundamentals and object-oriented programming principles.',
        'IBM — Análise de Dados': 'IBM — Data Analysis',
        'Fundamentos de tratamento, interpretação e análise de dados.': 'Fundamentals of data processing, interpretation and analysis.',
        'Robótica & conquistas': 'Robotics & achievements',
        'A tecnologia também': 'Technology also',
        'entra em campo.': 'takes the field.',
        'A robótica faz parte da minha história. Entre programação, montagem e competições, aprendi a resolver problemas em equipe e a transformar tentativas em resultados.': 'Robotics is part of my story. Through programming, assembly and competitions, I learned to solve problems as a team and turn experiments into results.',
        'DO BRASIL PARA O MUNDO': 'FROM BRAZIL TO THE WORLD',
        'Campeão mundial.': 'World champion.',
        '2026 · Olimpíada MOVIEMA de Robótica': '2026 · MOVIEMA Robotics Olympiad',
        'Vice-campeão nacional': 'National runner-up',
        '2º lugar na etapa nacional da competição de robótica.': 'Second place at the national stage of the robotics competition.',
        '2025 · FIRA · Etapa estadual': '2025 · FIRA · State stage',
        'Campeão — TJR Estadual': 'State TJR champion',
        'Título estadual conquistado em competição de robótica da FIRA.': 'State title won in a FIRA robotics competition.',
        '2025 · Feira de Ciências do IEMA': '2025 · IEMA Science Fair',
        '3º lugar': '3rd place',
        'Premiação por projeto apresentado na feira científica da instituição.': "Award for a project presented at the institution's science fair.",
        '2024 e 2025 · Olimpíada Brasileira de Robótica': '2024 & 2025 · Brazilian Robotics Olympiad',
        'Participação na OBR': 'OBR participation',
        'Participação em duas edições da competição nacional de robótica.': 'Participation in two editions of the national robotics competition.',
        '2024 · FIRA Brasil · Etapa nacional': '2024 · FIRA Brazil · National stage',
        'Campeão — categoria DRC': 'DRC category champion',
        'Título nacional conquistado na FIRA Brasil.': 'National title won at FIRA Brazil.',
        '2024 · Robótica internacional': '2024 · International robotics',
        'Campeão mundial — Roboworld Cup FIRA': 'World champion — FIRA Roboworld Cup',
        'Título mundial conquistado em competição internacional de robótica e tecnologia.': 'World title won in an international robotics and technology competition.',
        '2024 · Feira de Ciências do IEMA': '2024 · IEMA Science Fair',
        '1º lugar': '1st place',
        '2023 · FIRA Brasil · Etapa estadual': '2023 · FIRA Brazil · State stage',
        '2º lugar — categoria Cabo de Guerra': '2nd place — Tug of War category',
        'Premiação conquistada na etapa estadual da FIRA Brasil.': 'Award won at the state stage of FIRA Brazil.',
        'Tem uma ideia?': 'Have an idea?',
        'Vamos construir.': "Let's build it.",
        'Estou aberto a oportunidades de estágio, projetos e boas conversas sobre tecnologia. Me conte como posso contribuir.': "I'm open to internship opportunities, projects and great conversations about technology. Tell me how I can contribute.",
        'Entre em contato': 'Get in touch',
        'Baixar meu currículo em PDF': 'Download my résumé (PDF, Portuguese)',
        'Localização': 'Location',
        'São Luís — MA, Brasil': 'São Luís — MA, Brazil',
        'E-mail': 'Email',
        'Código & projetos': 'Code & projects',
        'Conexões profissionais': 'Professional connections',
        'Feito com código, curiosidade e propósito.': 'Made with code, curiosity and purpose.',
        'Voltar ao início': 'Back to top',
        'Quero conhecer o Fall Alert': "I'd like to learn about Fall Alert",
        'Projeto de gestão': 'Management platform project',
        'projeto exibido': 'project displayed',
        'projetos exibidos': 'projects displayed'
    };

    let language = 'pt';
    try { if (localStorage.getItem('language') === 'en') language = 'en'; } catch { /* Portuguese is the default. */ }
    const t = (text) => language === 'en' ? (english[text] ?? text) : text;
    const button = document.getElementById('language-button');
    const textBindings = [];
    const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            return node.parentElement.closest('script, style, noscript, #language-button')
                ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }
    });
    while (walker.nextNode()) {
        const node = walker.currentNode;
        const key = node.nodeValue.trim();
        if (Object.hasOwn(english, key)) textBindings.push({ node, original: node.nodeValue, key });
    }
    const attributeBindings = [];
    document.querySelectorAll('[aria-label], [alt], [title], meta[name="description"]').forEach((element) => {
        // Menu and theme labels depend on both language and current control state.
        if (['menu-button', 'theme-button', 'language-button'].includes(element.id)) return;
        ['aria-label', 'alt', 'title', 'content'].forEach((attribute) => {
            const original = element.getAttribute(attribute);
            if (Object.hasOwn(english, original)) attributeBindings.push({ element, attribute, original });
        });
    });
    const emailBindings = [...document.querySelectorAll('a[href^="mailto:"]')].map((element) => {
        const original = element.getAttribute('href');
        return { element, original, subject: new URL(original).searchParams.get('subject') };
    }).filter(({ subject }) => subject);

    function applyLanguage(nextLanguage) {
        language = nextLanguage === 'en' ? 'en' : 'pt';
        document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR';
        textBindings.forEach(({ node, original, key }) => {
            node.nodeValue = language === 'en' ? original.replace(key, english[key]) : original;
        });
        attributeBindings.forEach(({ element, attribute, original }) => element.setAttribute(attribute, t(original)));
        emailBindings.forEach(({ element, original, subject }) => {
            const url = new URL(original);
            url.searchParams.set('subject', t(subject));
            element.setAttribute('href', language === 'en' ? url.href : original);
        });
        document.querySelectorAll('a[download]').forEach((link) => {
            link.setAttribute('aria-label', t('Baixar currículo em português'));
            link.setAttribute('title', t('Baixar currículo em português'));
            link.setAttribute('hreflang', 'pt-BR');
        });
        button.textContent = language === 'en' ? 'PT' : 'EN';
        button.lang = language === 'en' ? 'pt-BR' : 'en';
        const label = language === 'en' ? 'Mudar para português' : 'Switch to English';
        button.setAttribute('aria-label', label);
        button.setAttribute('title', label);
        document.dispatchEvent(new Event('languagechange'));
    }

    window.portfolioI18n = { t, get language() { return language; } };
    button.hidden = false;
    button.addEventListener('click', () => {
        applyLanguage(language === 'en' ? 'pt' : 'en');
        try { localStorage.setItem('language', language); } catch { /* Switching still works. */ }
    });
    applyLanguage(language);
})();
