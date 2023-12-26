import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent {
  showMenu: boolean = false;

  rotate: boolean = false;
  first: boolean = false;
  second: boolean = false;
  third: boolean = false;

  toggleMenu() {
    if (!this.showMenu) {
      this.showMenu = true;

      this.rotate = true;
      this.first = true;
      this.second = true;
      this.third = true;

    } else {
      this.showMenu = false;

      this.rotate = false;
      this.first = false;
      this.second = false;
      this.third = false;
    }
  }


  // GO TO COMPONENT ONCLICK
  //constructor(private router: Router) { }

 // navigateToOtherPage() {
 //   this.router.navigate(['/about']);
 // }



  //SCROLL FROM SIDEBAR BUTTON CLICK
  constructor(private scrollService: ScrollService) {}

  scrollToComponent(componentId: string) {
    const element = document.getElementById(componentId);
    if (element) {
      this.scrollService.scrollToElement(element);
    }
  }
}
