import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
 
  constructor() {}

  ngOnInit(): void {
   
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const elements = document.querySelectorAll(
      '.moving-img'
    ) as NodeListOf<HTMLElement>;
    const { clientX: x, clientY: y } = event;

    elements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      let offsetX, offsetY;

      if (index % 2 === 0) {
        // Impar: Atraer hacia el mouse
        offsetX = (x - (rect.left + rect.width / 2)) * 0.05;
        offsetY = (y - (rect.top + rect.height / 2)) * 0.05;
      } else {
        // Par: Alejar del mouse
        offsetX = -(x - (rect.left + rect.width / 2)) * 0.05;
        offsetY = -(y - (rect.top + rect.height / 2)) * 0.05;
      }

      element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    const elements = document.querySelectorAll(
      '.moving-img'
    ) as NodeListOf<HTMLElement>;
    elements.forEach((element) => {
      element.style.transform = 'translate(0, 0)';
    });
  }

}
