import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about-first-col',
  templateUrl: './about-first-col.component.html',
  styleUrls: ['./about-first-col.component.css'],
  animations: [
    trigger('flyIn', [
      state('hidden', style({ transform: 'translateX(-40%)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hidden => visible', [
        animate('1500ms ease-in-out')
      ]),
      transition('visible => hidden', [
        animate('1500ms ease-in-out')
      ])
    ]),
  ]
})
export class AboutFirstColComponent {
  // TRIGGER ANIMATIONS ON SCROLL INTO VIEWPORT
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  isVisible = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentTop = this.el.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    if (componentTop < windowHeight * 0.2 && componentTop > -windowHeight * 0.8) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

  ngOnInit(): void {
    this.checkScroll();
  }
}
