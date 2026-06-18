import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

type Language = 'pt' | 'en';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

interface SkillGroup {
  category: string;
  skills: Array<{ name: string; level: number }>;
}

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

type Dictionary = Record<string, string>;

const translations: Record<Language, Dictionary> = {
  pt: {
    navHome: 'Início',
    navAbout: 'Sobre',
    navProjects: 'Projetos',
    navSkills: 'Skills',
    navExperience: 'Experiência',
    navContact: 'Contato',
    navMainLabel: 'Navegação principal',
    navSideLabel: 'Navegação lateral',
    logoHomeLabel: 'Ir para o início',
    logoHomePageLabel: 'Ir para a página inicial',

    heroSubtitle: 'Engenharia Back-End • Automação • Dados • IA',
    heroDivider: 'Transformo processos complexos em sistemas eficientes, automatizados e escaláveis.',
    heroDescription:
      'Bacharelando em Ciência da Computação, atuo no desenvolvimento de aplicações orientadas a dados, automação de processos e construção de soluções SaaS, com foco em reduzir esforço operacional e aumentar previsibilidade em sistemas reais.',
    heroProjects: 'Ver Projetos',
    heroContact: 'Entrar em Contato',
    statProjects: 'Projetos<br>Concluídos',
    statExperience: 'Anos de<br>Experiência',
    statTechnologies: 'Tecnologias<br>Dominadas',
    statFocus: 'Focado em<br>Resultados',

    featureEngineeringTitle: 'Engenharia',
    featureEngineeringText: 'Arquitetura escalável e código limpo para produtos robustos',
    featureAutomationTitle: 'Automação',
    featureAutomationText: 'Processos inteligentes que reduzem custos operacionais',
    featureSaasTitle: 'SaaS',
    featureSaasText: 'Produtos escaláveis e monetizáveis para o mercado',

    aboutTitle: 'Sobre',
    aboutParagraph1:
      'Sou estudante de Ciência da Computação e atuo no desenvolvimento de software com foco em backend, automação de processos e sistemas orientados a dados.',
    aboutParagraph2:
      'Minha atuação está concentrada na construção de aplicações robustas utilizando Django e APIs REST, combinadas com automação e processamento de dados através de ferramentas como Pandas e OpenPyxl. Trabalho também com aplicações que integram inteligência artificial e RPA para otimizar fluxos operacionais.',
    aboutParagraph3:
      'Tenho experiência prática em projetos institucionais, desenvolvendo soluções que transformam tarefas manuais em processos automatizados, estruturados e escaláveis.',
    aboutParagraph4:
      'Busco sempre construir sistemas simples, eficientes e confiáveis, priorizando clareza na arquitetura e impacto real no problema que está sendo resolvido.',
    aboutDifferentials: 'Diferenciais',
    aboutDiff1: 'Experiência em projetos reais com órgãos públicos',
    aboutDiff2: 'Liderança técnica em equipe de desenvolvimento',
    aboutDiff3: 'Forte atuação em automação e dados',
    aboutDiff4: 'Construção de sistemas SaaS e APIs escaláveis',
    aboutDiff5: 'Integração de IA em fluxos operacionais',

    projectsTitle: 'Projetos',
    projectsSubtitle: 'Soluções desenvolvidas com foco em automação, dados e sistemas escaláveis.',
    projectOpen: 'Abrir',
    projectButton: 'Ver projeto',
    projectAria: 'Ver detalhes de',

    skillsTitle: 'Skills',
    skillsSubtitle: 'Tecnologias e ferramentas utilizadas no desenvolvimento de sistemas e automações.',

    experienceTitle: 'Experiência',
    experienceSubtitle: 'Trajetória profissional e projetos relevantes',
    highlights: 'Destaques',

    contactTitle: 'Contato',
    contactSubtitle:
      'Se você precisa automatizar processos, estruturar dados ou desenvolver um sistema escalável, podemos conversar.',
    contactEmail: 'Email',
    contactPhone: 'Telefone',
    contactLocation: 'Localização',
    contactLocationValue: 'João Pessoa, PB - Brasil',
    formName: 'Nome',
    formNamePlaceholder: 'Seu nome completo',
    formEmail: 'Email',
    formEmailPlaceholder: 'seu@email.com',
    formSubject: 'Assunto',
    formSubjectPlaceholder: 'Assunto da mensagem',
    formMessage: 'Mensagem',
    formMessagePlaceholder: 'Sua mensagem aqui...',
    formSending: 'Enviando...',
    formSubmit: 'Enviar Mensagem',
    formSuccess: 'Mensagem enviada com sucesso. Entrarei em contato em breve.',

    footerQuickLinks: 'Links Rápidos',
    footerSocial: 'Redes Sociais',
    footerContact: 'Contato',
    footerRights: 'Todos os direitos reservados.',
    footerCredit: 'Engenharia de Software, Automação e Sistemas Orientados a Dados',
    githubLabel: 'GitHub de Rafael Cirne',
    linkedinLabel: 'LinkedIn de Rafael Cirne',

    notFoundTitle: 'Página não encontrada',
    notFoundText: 'A página que você está procurando não existe ou foi movida.',
    notFoundBack: 'Voltar ao Início',
  },
  en: {
    navHome: 'Home',
    navAbout: 'About',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navExperience: 'Experience',
    navContact: 'Contact',
    navMainLabel: 'Main navigation',
    navSideLabel: 'Side navigation',
    logoHomeLabel: 'Go to home',
    logoHomePageLabel: 'Go to homepage',

    heroSubtitle: 'Back-End Engineering • Automation • Data • AI',
    heroDivider: 'I turn complex processes into efficient, automated, scalable systems.',
    heroDescription:
      'Computer Science undergraduate working on data-driven applications, process automation, and SaaS solutions, focused on reducing operational effort and increasing predictability in real systems.',
    heroProjects: 'View Projects',
    heroContact: 'Get in Touch',
    statProjects: 'Completed<br>Projects',
    statExperience: 'Years of<br>Experience',
    statTechnologies: 'Core<br>Technologies',
    statFocus: 'Focused on<br>Results',

    featureEngineeringTitle: 'Engineering',
    featureEngineeringText: 'Scalable architecture and clean code for reliable products',
    featureAutomationTitle: 'Automation',
    featureAutomationText: 'Intelligent workflows that reduce operational costs',
    featureSaasTitle: 'SaaS',
    featureSaasText: 'Scalable, market-ready products built for growth',

    aboutTitle: 'About',
    aboutParagraph1:
      'I am a Computer Science student working in software development with a focus on backend engineering, process automation, and data-oriented systems.',
    aboutParagraph2:
      'My work is centered on building robust applications with Django and REST APIs, combined with automation and data processing using tools such as Pandas and OpenPyxl. I also build applications that integrate artificial intelligence and RPA to optimize operational workflows.',
    aboutParagraph3:
      'I have hands-on experience in institutional projects, developing solutions that turn manual tasks into automated, structured, and scalable processes.',
    aboutParagraph4:
      'I aim to build simple, efficient, and reliable systems, prioritizing architectural clarity and real impact on the problem being solved.',
    aboutDifferentials: 'Differentials',
    aboutDiff1: 'Experience in real projects with public institutions',
    aboutDiff2: 'Technical leadership in development teams',
    aboutDiff3: 'Strong focus on automation and data',
    aboutDiff4: 'Development of scalable SaaS systems and APIs',
    aboutDiff5: 'AI integration in operational workflows',

    projectsTitle: 'Projects',
    projectsSubtitle: 'Solutions built with a focus on automation, data, and scalable systems.',
    projectOpen: 'Open',
    projectButton: 'View project',
    projectAria: 'View details for',

    skillsTitle: 'Skills',
    skillsSubtitle: 'Technologies and tools used to build systems and automation workflows.',

    experienceTitle: 'Experience',
    experienceSubtitle: 'Professional background and relevant projects',
    highlights: 'Highlights',

    contactTitle: 'Contact',
    contactSubtitle:
      'If you need to automate processes, structure data, or build a scalable system, let’s talk.',
    contactEmail: 'Email',
    contactPhone: 'Phone',
    contactLocation: 'Location',
    contactLocationValue: 'João Pessoa, PB - Brazil',
    formName: 'Name',
    formNamePlaceholder: 'Your full name',
    formEmail: 'Email',
    formEmailPlaceholder: 'you@email.com',
    formSubject: 'Subject',
    formSubjectPlaceholder: 'Message subject',
    formMessage: 'Message',
    formMessagePlaceholder: 'Write your message here...',
    formSending: 'Sending...',
    formSubmit: 'Send Message',
    formSuccess: 'Message sent successfully. I will get back to you soon.',

    footerQuickLinks: 'Quick Links',
    footerSocial: 'Social Networks',
    footerContact: 'Contact',
    footerRights: 'All rights reserved.',
    footerCredit: 'Software Engineering, Automation, and Data-Oriented Systems',
    githubLabel: 'Rafael Cirne on GitHub',
    linkedinLabel: 'Rafael Cirne on LinkedIn',

    notFoundTitle: 'Page not found',
    notFoundText: 'The page you are looking for does not exist or has been moved.',
    notFoundBack: 'Back to Home',
  },
};

const projects: Record<Language, Project[]> = {
  pt: [
    {
      id: 1,
      title: 'Sistema de Monitoramento de Dados Públicos',
      description: 'Coleta, processamento e organização de dados para geração de insights automatizados.',
      technologies: ['Python', 'Pandas', 'IA', 'Automação'],
      link: 'https://github.com/RafaelCirn3',
    },
    {
      id: 2,
      title: 'Plataforma SaaS de Gestão',
      description: 'Sistema web com autenticação, APIs REST e controle de dados estruturados.',
      technologies: ['Django', 'DRF', 'PostgreSQL', 'APIs'],
      link: 'https://github.com/RafaelCirn3',
    },
    {
      id: 3,
      title: 'Automação de Processos com RPA',
      description: 'Scripts e aplicações voltadas à eliminação de tarefas repetitivas e aumento de eficiência.',
      technologies: ['Python', 'RPA', 'OpenPyxl', 'Automação'],
      link: 'https://github.com/RafaelCirn3',
    },
  ],
  en: [
    {
      id: 1,
      title: 'Public Data Monitoring System',
      description: 'Collection, processing, and organization of data to generate automated insights.',
      technologies: ['Python', 'Pandas', 'AI', 'Automation'],
      link: 'https://github.com/RafaelCirn3',
    },
    {
      id: 2,
      title: 'SaaS Management Platform',
      description: 'Web system with authentication, REST APIs, and structured data management.',
      technologies: ['Django', 'DRF', 'PostgreSQL', 'APIs'],
      link: 'https://github.com/RafaelCirn3',
    },
    {
      id: 3,
      title: 'RPA Process Automation',
      description: 'Scripts and applications designed to eliminate repetitive tasks and increase efficiency.',
      technologies: ['Python', 'RPA', 'OpenPyxl', 'Automation'],
      link: 'https://github.com/RafaelCirn3',
    },
  ],
};

const skills: Record<Language, SkillGroup[]> = {
  pt: [
    { category: 'Backend & APIs', skills: [{ name: 'Python', level: 90 }, { name: 'Django / DRF', level: 90 }, { name: 'PHP', level: 80 }, { name: 'Laravel', level: 80 }] },
    { category: 'Dados & Automação', skills: [{ name: 'Pandas', level: 90 }, { name: 'OpenPyxl', level: 85 }, { name: 'RPA', level: 85 }, { name: 'Processamento de dados', level: 90 }] },
    { category: 'Banco de Dados', skills: [{ name: 'PostgreSQL', level: 90 }, { name: 'MySQL', level: 85 }, { name: 'MongoDB', level: 80 }] },
    { category: 'Infraestrutura', skills: [{ name: 'Docker', level: 80 }, { name: 'APIs REST', level: 90 }, { name: 'Integrações', level: 85 }] },
    { category: 'Frontend (apoio)', skills: [{ name: 'Angular', level: 75 }, { name: 'Vue.js', level: 75 }] },
    { category: 'Metodologias', skills: [{ name: 'SCRUM', level: 85 }, { name: 'Liderança técnica', level: 80 }, { name: 'Organização de demandas', level: 85 }] },
  ],
  en: [
    { category: 'Backend & APIs', skills: [{ name: 'Python', level: 90 }, { name: 'Django / DRF', level: 90 }, { name: 'PHP', level: 80 }, { name: 'Laravel', level: 80 }] },
    { category: 'Data & Automation', skills: [{ name: 'Pandas', level: 90 }, { name: 'OpenPyxl', level: 85 }, { name: 'RPA', level: 85 }, { name: 'Data processing', level: 90 }] },
    { category: 'Databases', skills: [{ name: 'PostgreSQL', level: 90 }, { name: 'MySQL', level: 85 }, { name: 'MongoDB', level: 80 }] },
    { category: 'Infrastructure', skills: [{ name: 'Docker', level: 80 }, { name: 'REST APIs', level: 90 }, { name: 'Integrations', level: 85 }] },
    { category: 'Frontend (support)', skills: [{ name: 'Angular', level: 75 }, { name: 'Vue.js', level: 75 }] },
    { category: 'Methods', skills: [{ name: 'SCRUM', level: 85 }, { name: 'Technical leadership', level: 80 }, { name: 'Demand organization', level: 85 }] },
  ],
};

const experiences: Record<Language, Experience[]> = {
  pt: [
    {
      id: 1,
      title: 'Engenharia Back-End • Automação • Dados',
      company: 'Fábrica de Softwares (PMPB • CBMPB • ESP)',
      period: 'Jan 2024 – Atual',
      description: 'Atuação no desenvolvimento de sistemas institucionais com foco em automação, análise de dados e integração de serviços.',
      achievements: [
        'Desenvolvimento de APIs RESTful com Django e DRF',
        'Automação de processos com Python (Pandas, OpenPyxl)',
        'Aplicação de IA em fluxos de dados e tomada de decisão',
        'Construção de pipelines e integrações entre sistemas',
        'Organização de demandas e liderança técnica (SCRUM)',
        'PMPB (2024): atuação como Squad Leader de Back-End',
        'CBMPB (2025): desenvolvimento de soluções orientadas a dados',
        'ESP (2026 – atual): automações, RPA e aplicações com IA',
      ],
    },
    {
      id: 2,
      title: 'Desenvolvedor Fullstack',
      company: 'JFPB',
      period: 'Out 2025 – Atual',
      description: 'Implementação de soluções fullstack orientadas a produtividade.',
      achievements: [
        'Construção de sistemas web integrados',
        'Desenvolvimento de RPA’s e automações com IA',
        'Implementação de soluções fullstack orientadas a produtividade',
      ],
    },
    {
      id: 3,
      title: 'Desenvolvedor Back-End',
      company: 'Cangaço Tech Solutions',
      period: 'Mai 2023 – Mai 2024',
      description: 'Atuação no backend estruturando APIs e lógica de negócios.',
      achievements: ['Desenvolvimento de sistemas SaaS e CRM', 'Criação de APIs RESTful', 'Estruturação de lógica de negócio e persistência de dados'],
    },
    {
      id: 4,
      title: 'Automação de Processos (Financeiro)',
      company: 'Jardim Imperial LTDA',
      period: 'Mar 2022 – Mar 2023',
      description: 'Foco na otimização de rotinas financeiras e operacionais.',
      achievements: ['Automação de rotinas com Python (Pandas e OpenPyxl)', 'Processamento e organização de dados', 'Redução de tarefas manuais operacionais'],
    },
  ],
  en: [
    {
      id: 1,
      title: 'Back-End Engineering • Automation • Data',
      company: 'Software Factory (PMPB • CBMPB • ESP)',
      period: 'Jan 2024 – Present',
      description: 'Development of institutional systems focused on automation, data analysis, and service integration.',
      achievements: [
        'RESTful API development with Django and DRF',
        'Process automation with Python (Pandas, OpenPyxl)',
        'AI applied to data workflows and decision support',
        'Pipeline development and system integrations',
        'Demand organization and technical leadership (SCRUM)',
        'PMPB (2024): Back-End Squad Leader',
        'CBMPB (2025): development of data-oriented solutions',
        'ESP (2026 – present): automation, RPA, and AI-powered applications',
      ],
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'JFPB',
      period: 'Oct 2025 – Present',
      description: 'Implementation of productivity-oriented full stack solutions.',
      achievements: [
        'Development of integrated web systems',
        'Development of RPA and AI-powered automation',
        'Implementation of productivity-oriented full stack solutions',
      ],
    },
    {
      id: 3,
      title: 'Back-End Developer',
      company: 'Cangaço Tech Solutions',
      period: 'May 2023 – May 2024',
      description: 'Back-end work structuring APIs and business logic.',
      achievements: ['Development of SaaS and CRM systems', 'Creation of RESTful APIs', 'Business logic and data persistence structuring'],
    },
    {
      id: 4,
      title: 'Process Automation (Finance)',
      company: 'Jardim Imperial LTDA',
      period: 'Mar 2022 – Mar 2023',
      description: 'Optimization of financial and operational routines.',
      achievements: ['Routine automation with Python (Pandas and OpenPyxl)', 'Data processing and organization', 'Reduction of manual operational tasks'],
    },
  ],
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang: Language;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly title: Title,
    private readonly meta: Meta,
  ) {
    const browserLanguage = isPlatformBrowser(platformId) ? navigator.language.toLowerCase() : 'pt-br';
    this.lang = browserLanguage.startsWith('pt') ? 'pt' : 'en';
    this.applyDocumentMetadata();
  }

  t(key: string): string {
    return translations[this.lang][key] ?? translations.pt[key] ?? key;
  }

  get projects(): Project[] {
    return projects[this.lang];
  }

  get skills(): SkillGroup[] {
    return skills[this.lang];
  }

  get experiences(): Experience[] {
    return experiences[this.lang];
  }

  private applyDocumentMetadata(): void {
    this.document.documentElement.lang = this.lang === 'pt' ? 'pt-BR' : 'en';
    const title =
      this.lang === 'pt'
        ? 'Rafael Cirne | Desenvolvedor Full Stack, Automação e IA'
        : 'Rafael Cirne | Full Stack Developer, Automation and AI';
    const description =
      this.lang === 'pt'
        ? 'Portfólio profissional de Rafael Cirne, desenvolvedor Full Stack especializado em Python, Django, Angular, Docker, automação, dados e inteligência artificial.'
        : 'Professional portfolio of Rafael Cirne, a Full Stack Developer specialized in Python, Django, Angular, Docker, automation, data, and artificial intelligence.';

    this.title.setTitle(title);
    this.meta.updateTag({
      name: 'description',
      content: description,
    });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:locale', content: this.lang === 'pt' ? 'pt_BR' : 'en_US' });
  }
}
