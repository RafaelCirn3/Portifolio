import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer.component';

interface Skill {
  category: string;
  skills: Array<{ name: string; level: number }>;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillsData: Skill[] = [
    {
      category: 'Frontend',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'CSS/HTML', level: 90 },
        { name: 'React', level: 85 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'Express', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'C#/.NET', level: 80 }
      ]
    },
    {
      category: 'Banco de Dados',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 88 },
        { name: 'Redis', level: 85 },
        { name: 'Firebase', level: 80 }
      ]
    },
    {
      category: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 85 },
        { name: 'AWS', level: 85 },
        { name: 'CI/CD', level: 90 }
      ]
    },
    {
      category: 'Ferramentas & Padrões',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Microserviços', level: 90 },
        { name: 'REST/GraphQL', level: 90 },
        { name: 'Agile', level: 85 }
      ]
    },
    {
      category: 'Automação & IA',
      skills: [
        { name: 'RPA', level: 85 },
        { name: 'Python Scripting', level: 88 },
        { name: 'ChatGPT/LLMs', level: 80 },
        { name: 'Web Scraping', level: 85 }
      ]
    }
  ];
}
