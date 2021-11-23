import { Component, Input, OnInit } from '@angular/core';

export interface Block {
  titre: string,
  accroche: string,
  icon: string
}


@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  @Input() titre: string = 'default';
  @Input() accroche: string = 'default';
  @Input() icon: string = '/assets/svg/stack.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
