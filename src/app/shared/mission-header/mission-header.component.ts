import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

export interface Model {
  image: string,
  title: string,
  titleBold: string,
  text: string

}

@Component({
  selector: 'app-mission-header',
  templateUrl: './mission-header.component.html',
  styleUrls: ['./mission-header.component.css']
})
export class MissionHeaderComponent implements OnInit {

@Input() image: string = 'default'
@Input() title: string = 'default'
@Input() titleBold: string = 'default'
@Input() text: string = 'default'
@Input() bg: string = 'default'


  constructor() { }

  ngOnInit(): void {
  }



}
