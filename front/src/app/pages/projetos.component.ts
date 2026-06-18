import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer.component';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Sistema de Monitoramento de Dados Públicos',
      description: 'Coleta, processamento e organização de dados para geração de insights automatizados.',
      technologies: ['Python', 'Pandas', 'IA', 'Automação'],
      link: 'https://github.com/RafaelCirn3'
    },
    {
      id: 2,
      title: 'Plataforma SaaS de Gestão',
      description: 'Sistema web com autenticação, APIs REST e controle de dados estruturados.',
      technologies: ['Django', 'DRF', 'PostgreSQL', 'APIs'],
      link: 'https://github.com/RafaelCirn3'
    },
    {
      id: 3,
      title: 'Automação de Processos com RPA',
      description: 'Scripts e aplicações voltadas à eliminação de tarefas repetitivas e aumento de eficiência.',
      technologies: ['Python', 'RPA', 'OpenPyxl', 'Automação'],
      link: 'https://github.com/RafaelCirn3'
    }
  ];
}
