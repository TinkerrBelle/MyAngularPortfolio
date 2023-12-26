import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-first-project',
  templateUrl: './first-project.component.html',
  styleUrls: ['./first-project.component.css'],
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

    trigger('flyOut', [
      state('hidden', style({ transform: 'translateX(40%) scale(0.5)', opacity: 0 })),
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


export class FirstProjectComponent {
  // ICONS
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faJs = faJs;


  // TRIGGER ANIMATIONS ON SCROLL INTO VIEWPORT
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

  ngOnInit(): void {
    this.checkScroll();
  }
}
