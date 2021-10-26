import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-metiers-items-header',
  templateUrl: './metiers-items-header.component.html',
  styleUrls: ['./metiers-items-header.component.css']
})
export class MetiersItemsHeaderComponent implements OnInit {
    
  @Input() metierImage: string = 'default';
  @Input() metierTitle: string = 'default';
  @Input() metierTitleBold: string = 'default';
  @Input() metierText: string = 'default';
 


  constructor() { }
  ngOnInit(): void {
  }
}
