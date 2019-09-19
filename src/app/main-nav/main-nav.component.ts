import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

 title = 'angular-material-tab-router';
 navLinks: any[];
 activeLinkIndex = -1;
  constructor(private router: Router){
   this.navLinks = [
       {
           label: 'Home',
           link: '/home',
           index: 0
       }, {
           label: 'Gallery',
           link: '/gallery',
           index: 1
       }, {
           label: 'Order',
           link: '/order',
           index: 2
       }, {
           label: 'Contact',
           link: '/contact',
           index: 3
       },{
           label: 'About',
           link: '/about',
           index: 4
       },
   ];
 }
   ngOnInit(): void {
     this.router.events.subscribe((res) => {
         this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
     });
   }
}
