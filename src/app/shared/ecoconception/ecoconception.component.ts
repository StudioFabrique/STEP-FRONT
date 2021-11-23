import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecoconception',
  templateUrl: './ecoconception.component.html',
  styleUrls: ['./ecoconception.component.css']
})
export class EcoconceptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  image = "/assets/img/eco-concept.jpg";
  titre = "L'écoconception au centre de nos démarches"
  text = "";
  
}
