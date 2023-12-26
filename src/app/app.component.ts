import { Component, HostListener, ElementRef  } from '@angular/core';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';


  
  //SHOW SIDEBAR MENU BAR
  showMenu: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }





  //CHANGE BACKGROUND AND FONT COLOR WITH TOGGLE BUTTON
  backgroundColor: string = '#030200';
  newbackgroundColor: string = '#f8f8f8';

  color: string = '#f8f8f8';
  newcolor: string = '#030200';

  isToggled: boolean = false;

  toggleButton() {
    this.isToggled = !this.isToggled;
    this.backgroundColor = this.backgroundColor === this.newbackgroundColor ? '#030200' : this.newbackgroundColor;
    this.color = this.color === this.newcolor ? '#f8f8f8' : this.newcolor;

  }

  //ICONS IN TOGGLE BUTTON
  sun = faSun;
  moon = faMoon;





  //BACK TO TOP BUTTON
  isShow: boolean = false;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  


  

}
