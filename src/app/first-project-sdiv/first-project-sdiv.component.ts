import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-first-project-sdiv',
  templateUrl: './first-project-sdiv.component.html',
  styleUrls: ['./first-project-sdiv.component.css'],
  animations: [
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
export class FirstProjectSdivComponent {
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faJs = faJs;


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
