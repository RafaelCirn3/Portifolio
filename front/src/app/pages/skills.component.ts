import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer.component';
import { I18nService } from '../services/i18n.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  readonly i18n = inject(I18nService);
}
