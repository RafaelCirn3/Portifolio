import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../components/footer.component';
import { I18nService } from '../services/i18n.service';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  readonly i18n = inject(I18nService);

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;
  loading = false;

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.loading = true;
      
      // Simulação de envio
      setTimeout(() => {
        this.submitted = true;
        this.loading = false;
        this.resetForm();
        
        // Resetar mensagem após 5 segundos
        setTimeout(() => {
          this.submitted = false;
        }, 5000);
      }, 1500);
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
