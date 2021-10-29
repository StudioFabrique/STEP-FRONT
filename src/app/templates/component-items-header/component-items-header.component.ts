import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-component-items-header',
  templateUrl: './component-items-header.component.html',
  styleUrls: ['./component-items-header.component.css']
})
export class ComponentItemsHeaderComponent implements OnInit {
    
  @Input() image: string = 'default';
  @Input() title: string = 'default';
  @Input() titleBold: string = 'default';
  @Input() text: string = 'default';
 


  constructor() { }
  ngOnInit(): void {
  }
}
