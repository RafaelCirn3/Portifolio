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
      title: 'Platform Automação',
      description: 'Plataforma SaaS para automação de workflows com integração em tempo real',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'RabbitMQ'],
      link: '#'
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      description: 'Dashboard em tempo real para análise de métricas e performance',
      technologies: ['Angular', 'WebSocket', 'D3.js', 'Express'],
      link: '#'
    },
    {
      id: 3,
      title: 'Microservices API',
      description: 'Arquitetura de microserviços escalável para processamento de dados',
      technologies: ['Node.js', 'Docker', 'Kubernetes', 'MongoDB'],
      link: '#'
    },
    {
      id: 4,
      title: 'Mobile App',
      description: 'Aplicativo mobile para gerenciamento de tarefas e projetos',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: '#'
    },
    {
      id: 5,
      title: 'Admin Portal',
      description: 'Portal administrativo com controle de acesso e permissões',
      technologies: ['Angular', 'Express', 'JWT', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 6,
      title: 'Integration Engine',
      description: 'Engine de integração com múltiplas APIs e formatos de dados',
      technologies: ['Node.js', 'Apache Kafka', 'GraphQL'],
      link: '#'
    }
  ];
}
