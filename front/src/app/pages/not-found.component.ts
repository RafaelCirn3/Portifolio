import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  decorativeSquares = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.1,
    duration: 3 + Math.random() * 2
  }));
}
