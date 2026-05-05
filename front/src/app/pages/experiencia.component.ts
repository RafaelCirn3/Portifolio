import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer.component';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experiences: Experience[] = [
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
        'ESP (2026 – atual): automações, RPA e aplicações com IA'
      ]
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
        'Implementação de soluções fullstack orientadas a produtividade'
      ]
    },
    {
      id: 3,
      title: 'Desenvolvedor Back-End',
      company: 'Cangaço Tech Solutions',
      period: 'Mai 2023 – Mai 2024',
      description: 'Atuação no backend estruturando APIs e lógica de negócios.',
      achievements: [
        'Desenvolvimento de sistemas SaaS e CRM',
        'Criação de APIs RESTful',
        'Estruturação de lógica de negócio e persistência de dados'
      ]
    },
    {
      id: 4,
      title: 'Automação de Processos (Financeiro)',
      company: 'Jardim Imperial LTDA',
      period: 'Mar 2022 – Mar 2023',
      description: 'Foco na otimização de rotinas financeiras e operacionais.',
      achievements: [
        'Automação de rotinas com Python (Pandas e OpenPyxl)',
        'Processamento e organização de dados',
        'Redução de tarefas manuais operacionais'
      ]
    }
  ];
}
