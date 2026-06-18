import { Component, OnInit, OnDestroy, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nService } from '../services/i18n.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly i18n = inject(I18nService);
  mouseX = 0;
  mouseY = 0;
  private animationFrameId: number | null = null;
  private isMobile = false;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Desabilitar parallax em mobile
    if (!this.isMobile) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    }
  }

  ngOnInit() {
    // Detectar se é dispositivo móvel
    this.isMobile = this.detectMobile();
    
    // Iniciar parallax apenas em desktop
    if (!this.isMobile) {
      this.startParallax();
    }
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  private detectMobile(): boolean {
    return window.matchMedia('(max-width: 768px)').matches || 
           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  private startParallax() {
    const element = document.querySelector('.hero-background');
    if (element) {
      const updateParallax = () => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const offsetX = (this.mouseX - centerX) * 0.01;
        const offsetY = (this.mouseY - centerY) * 0.01;
        
        (element as HTMLElement).style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        this.animationFrameId = requestAnimationFrame(updateParallax);
      };
      this.animationFrameId = requestAnimationFrame(updateParallax);
    }
  }
}
