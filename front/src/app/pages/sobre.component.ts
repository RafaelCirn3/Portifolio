import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {
}
