import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-color-block',
  templateUrl: './header-color-block.component.html',
  styleUrls: ['./header-color-block.component.css'],
})
export class HeaderColorBlockComponent  implements OnInit {
  
  // bg = '../../../assets/img/solutions.png';
  
  @Input() cornerImg: string = 'default';
  @Input() title: string = 'default';
  @Input() titleBold: string = 'default';
  @Input() text: string = 'default';
  @Input() bg: string = '../../../assets/img/solutions.png';
  
  constructor() {}
  ngOnInit(): void {}
}
