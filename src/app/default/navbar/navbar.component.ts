import { Component, OnInit } from '@angular/core';

export interface Lien {
  name: string;
  routerLink: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  liens: Lien[] = [
    { name: 'Accueil', routerLink: '/accueil' },
    { name: 'Missions', routerLink: '/missions' },
    { name: 'Métiers', routerLink: '/metiers' },
    { name: 'Contacts', routerLink: '/contacts' },
  ];

  icon: any = true;

  changeIcon = () => {
    this.icon = !this.icon;
    console.log(this.icon);
    
  }

  navSlide = () => {
    
    const nav = document.querySelector('.navigation-items');
    const navItems = document.querySelectorAll('.navigation-items li');
    const matBurger = document.querySelectorAll('.mat-burger a span');
    const back = document.querySelectorAll('.burger .back');
    
    nav?.classList.toggle('nav-active');

    navItems.forEach((item: any, index) => {
      if(item.style.animation ){
        item.style.animation = ""
      } else {
        item.style.animation = `navItemsFade 0.5s ease-in-out forwards ${index/7 +1}s`;
      }
    });

    matBurger.forEach((item: any, index) => {
      if(item.style.animation ){
        item.style.animation = ""
      } else {
        item.style.animation = `navItemsFade 0.5s ease-in-out forwards ${index/7 +1.5}s`;
      }
    });

    back.forEach((item: any, index) => {
      if(item.style.animation ){
        item.style.animation = ""
      } else {
        item.style.animation = `navItemsFade 0.5s ease-in-out forwards ${index/7 +0.9}s`;
      }
    });
  };
}
