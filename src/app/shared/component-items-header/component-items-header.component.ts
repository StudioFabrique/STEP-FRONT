import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-component-items-header',
  templateUrl: './component-items-header.component.html',
  styleUrls: ['./component-items-header.component.css']
})
export class ComponentItemsHeaderComponent implements OnInit {
    
  @Input() corner: string = 'assets/corners/orange_white.png';
  @Input() title: string = 'default';
  @Input() titleBold: string = 'default';
  @Input() text: string = 'default';
  @Input() bgImg: string = 'assets/img/flux_doc.jpg';
 


  constructor() { }
  ngOnInit(): void {
  }
}
