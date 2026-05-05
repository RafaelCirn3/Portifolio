import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  mouseX = 0;
  mouseY = 0;
  private animationFrameId: number | null = null;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  ngOnInit() {
    this.startParallax();
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  private startParallax() {
    const element = document.querySelector('.hero-grid');
    if (element) {
      const updateParallax = () => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const offsetX = (this.mouseX - centerX) * 0.02;
        const offsetY = (this.mouseY - centerY) * 0.02;
        
        (element as HTMLElement).style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        this.animationFrameId = requestAnimationFrame(updateParallax);
      };
      this.animationFrameId = requestAnimationFrame(updateParallax);
    }
  }
}
