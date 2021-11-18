import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { GraphqlService } from './services/graphql.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Step eco';
  constructor(public graphServ:GraphqlService, public dataServ:DataService){
    this.dataServ.getConfig();
  }
}
