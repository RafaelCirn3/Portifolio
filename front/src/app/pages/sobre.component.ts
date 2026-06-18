import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer.component';
import { I18nService } from '../services/i18n.service';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {
  readonly i18n = inject(I18nService);
}
