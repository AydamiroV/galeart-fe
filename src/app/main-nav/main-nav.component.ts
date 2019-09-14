import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  constructor() {}

  tabs = [
    {
      name: 'Home',
      link: '/home'
    },
    {
          name: 'Gallery',
          link: '/gallery'
    },
    {
      name: 'Place order',
      link: '/order'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
       name: 'Contact',
       link: '/contact'
    }
  ];
  activeLink = this.tabs[0];


}
