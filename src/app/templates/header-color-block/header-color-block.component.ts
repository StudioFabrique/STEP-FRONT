import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-color-block',
  templateUrl: './header-color-block.component.html',
  styleUrls: ['./header-color-block.component.css'],
})
export class HeaderColorBlockComponent implements OnInit {
  
  @Input() image: string = 'default'
  @Input() title: string = 'default'
  @Input() titleBold: string = 'default'
  @Input() text: string = 'default'
  
  
  constructor() {}
  ngOnInit(): void {}
}
