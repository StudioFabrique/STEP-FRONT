import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent implements OnInit {

  bgImg="assets/img/office.jpg"
  corner = "assets/corners/blue_cyan.png"
  title="Mes Metiers" 
  titleBold="Le metier de l'avenir" 
  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut sagittis odio. Cras sit amet interdum eros. Proin varius arcu eget eros varius luctus. Proin mi ligula, tempus non feugiat vitae, venenatis vel magna. " 

  constructor() { }

  ngOnInit(): void {
  }

}
