import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-metier-details-header',
  templateUrl: './metier-details-header.component.html',
  styleUrls: ['./metier-details-header.component.css']
})
export class MetierDetailsHeaderComponent implements OnInit {


  @Input() image: string = '/assets/img/numerisation.png'
  @Input() title: string = 'Numérisation'
  @Input() text: string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, obcaecati?'
  @Input() bg: string = '/assets/rectangles/rectangle_1.png'
  
 
  constructor() { }

  ngOnInit(): void {
  }

}
