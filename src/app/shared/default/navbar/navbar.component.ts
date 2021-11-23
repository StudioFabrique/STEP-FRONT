import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {}

  ngOnInit(): void {}

  liens: Lien[] = [
    { name: 'Accueil', routerLink: 'accueil' },
    { name: 'Missions', routerLink: 'missions' },
    { name: 'Métiers', routerLink: 'metiers' },
    { name: 'Contact', routerLink: 'contact' },
  ];

  icon: any = true;

  changeIcon = () => {
    this.icon = !this.icon;
    console.log(this.icon);
    
  }

  navto(lien:any){
    this.router.navigateByUrl(lien)
  }

  navSlide = () => {
    
    const nav = document.querySelector('.navigation-items');
    const navItems = document.querySelectorAll('.navigation-items li');
    const matBurger = document.querySelectorAll('.mat-burger a span');
    const icons = document.querySelectorAll('.icons .mat-burger');
    const back = document.querySelectorAll('.burger .back');
    
    nav?.classList.toggle('nav-active');

    navItems.forEach((item: any, index) => {
      if(item.style.animation ){
        item.style.animation = ""
      } else {
        item.style.animation = `navItemsFade 0.5s ease-in-out forwards ${index/7 +1}s`;
      }
    });

    icons.forEach((item: any, index) => {
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
