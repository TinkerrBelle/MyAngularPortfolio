import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSlack } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about-second-col',
  templateUrl: './about-second-col.component.html',
  styleUrls: ['./about-second-col.component.css'],
  animations: [
    trigger('flyOut', [
      state('hidden', style({ transform: 'translateX(40%)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hidden => visible', [
        animate('1500ms ease-in-out')
      ]),
      transition('visible => hidden', [
        animate('1500ms ease-in-out')
      ])
    ])
  ]

})
export class AboutSecondColComponent {
  // ICONS
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faSlack = faSlack;


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
