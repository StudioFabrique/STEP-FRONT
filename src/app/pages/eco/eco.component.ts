import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eco',
  templateUrl: './eco.component.html',
  styleUrls: ['./eco.component.css']
})
export class EcoComponent implements OnInit {

  @Input() image: string = 'default';
  @Input() title: string = 'default'
  @Input() titleBold: string = 'default'
  @Input() text: string = 'default'
  constructor() { }

  ngOnInit(): void {
  }

}
