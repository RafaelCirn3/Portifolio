import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer.component';
import { I18nService } from '../services/i18n.service';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {
  readonly i18n = inject(I18nService);
}
