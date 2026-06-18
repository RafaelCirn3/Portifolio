import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer.component';
import { I18nService } from '../services/i18n.service';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  readonly i18n = inject(I18nService);
}
