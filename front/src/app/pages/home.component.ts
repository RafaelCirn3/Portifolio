import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../components/hero.component';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
}
