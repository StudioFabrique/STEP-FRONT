import { Component, OnInit } from '@angular/core';

export interface Rectangle {
  img: string,
  text: string,
  bg: string
}

@Component({
  selector: 'app-rectangles',
  templateUrl: './rectangles.component.html',
  styleUrls: ['./rectangles.component.css']
})
export class RectanglesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rectangles: Rectangle[] = [
    {'img':'./../../assets/pictos/plus_white.svg', 'text': 'Studio de développement', 'bg':'assets/rectangles/rectangle_2.png'},
    {'img':'./../../assets/pictos/chat.svg', 'text': 'Centre de formation', 'bg':'assets/rectangles/rectangle_1.png'},
  ]

}
