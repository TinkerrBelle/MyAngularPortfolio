import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  //SCROLL FROM SIDEBAR BUTTON CLICK
  scrollToElement(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
