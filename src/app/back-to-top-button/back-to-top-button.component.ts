import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-back-to-top-button',
  templateUrl: './back-to-top-button.component.html',
  styleUrls: ['./back-to-top-button.component.css']
})
export class BackToTopButtonComponent {

  constructor(private scrollService: ScrollService) {}

  scrollToTop() {
    this.scrollService.scrollToTop();
  }

}
