import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-first-project-fdiv',
  templateUrl: './first-project-fdiv.component.html',
  styleUrls: ['./first-project-fdiv.component.css'],
  animations: [
    trigger('flyIn', [
      state('hidden', style({ transform: 'translateX(-40%) scale(0.5)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0) scale(1)', opacity: 1 })),
      transition('hidden => visible', [
        animate('1500ms ease-in-out')
      ]),
      transition('visible => hidden', [
        animate('1500ms ease-in-out')
      ])
    ]),

  ]

})
export class FirstProjectFdivComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

 
  isVisible = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentTop = this.el.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    if (componentTop < windowHeight * 0.8 && componentTop > -windowHeight * 0.2) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
  
  animationDone() {
    // Animation completion logic
  }

  ngOnInit(): void {
    this.checkScroll();
  }




}
