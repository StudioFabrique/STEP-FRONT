import { Component, Input, OnInit } from '@angular/core';

export interface Model {

  title: string,
  titleBold: string,
  text: string

}

@Component({
  selector: 'app-eco-header',
  templateUrl: './eco-header.component.html',
  styleUrls: ['./eco-header.component.css']
})
export class EcoHeaderComponent implements OnInit {



@Input() image: string = 'default'
@Input() title: string = 'default'
@Input() titleBold: string = 'default'
@Input() text: string = 'default'
@Input() bg: string = 'default'




  constructor() { }

  ngOnInit(): void {
  }

}
