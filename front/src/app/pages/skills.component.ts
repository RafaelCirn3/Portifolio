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
      category: 'Backend & APIs',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Django / DRF', level: 90 },
        { name: 'PHP', level: 80 },
        { name: 'Laravel', level: 80 }
      ]
    },
    {
      category: 'Dados & Automação',
      skills: [
        { name: 'Pandas', level: 90 },
        { name: 'OpenPyxl', level: 85 },
        { name: 'RPA', level: 85 },
        { name: 'Processamento de dados', level: 90 }
      ]
    },
    {
      category: 'Banco de Dados',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 }
      ]
    },
    {
      category: 'Infraestrutura',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'APIs REST', level: 90 },
        { name: 'Integrações', level: 85 }
      ]
    },
    {
      category: 'Frontend (apoio)',
      skills: [
        { name: 'Angular', level: 75 },
        { name: 'Vue.js', level: 75 }
      ]
    },
    {
      category: 'Metodologias',
      skills: [
        { name: 'SCRUM', level: 85 },
        { name: 'Liderança técnica', level: 80 },
        { name: 'Organização de demandas', level: 85 }
      ]
    }
  ];
}
