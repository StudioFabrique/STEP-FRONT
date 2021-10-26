import { Component, OnInit } from '@angular/core';

export interface Model {
  image: string,
  title: string,
  titleBold: string,
  text: string

}



@Component({
  selector: 'app-gouvernance',
  templateUrl: './gouvernance.component.html',
  styleUrls: ['./gouvernance.component.css']
})
export class GouvernanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.model);
  }

  model: Model[] = [
     {
       'image': '../../../assets/img/corner-orange.png',
       'title': 'Gouvernance',
       'titleBold': 'dddddddddddd',
       'text': 'dssdfdfsdfsssssssssssssssss ssssssssssss ssssssssss sssssssssss ssfsd',
     }
  ]


  

  }

