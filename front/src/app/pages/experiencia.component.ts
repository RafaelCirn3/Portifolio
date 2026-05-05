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
      title: 'Senior Software Engineer',
      company: 'TechCorp Solutions',
      period: '2023 - Presente',
      description: 'Liderança técnica em projetos de automação e desenvolvimento de plataformas SaaS',
      achievements: [
        'Arquitetura de microserviços escalável',
        'Redução de 40% no tempo de processamento',
        'Implementação de CI/CD robustado'
      ]
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Innovations Inc',
      period: '2021 - 2023',
      description: 'Desenvolvimento de aplicações web e mobile, com foco em performance e UX',
      achievements: [
        'Desenvolvimento de 5+ plataformas web',
        'Otimização de performance em 35%',
        'Mentoria de 3 desenvolvedores junior'
      ]
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'WebStudio Design',
      period: '2019 - 2021',
      description: 'Desenvolvimento de interfaces modernas e responsivas com foco em usabilidade',
      achievements: [
        'Criação de design system próprio',
        'Implementação de temas personalizados',
        'Aumento de 50% na conversão'
      ]
    },
    {
      id: 4,
      title: 'Junior Developer',
      company: 'StartupX',
      period: '2018 - 2019',
      description: 'Primeiras experiências em desenvolvimento full stack e metodologias ágeis',
      achievements: [
        'Participação em 8+ projetos',
        'Aprendizado intensivo em tecnologias modernas',
        'Promoção a desenvolvedor pleno'
      ]
    }
  ];
}
