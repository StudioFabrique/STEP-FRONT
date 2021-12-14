import { Component, OnInit } from '@angular/core';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { PartenairesService } from 'src/app/services/partenaires.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  partenaires: IPartenaires[] = []


  constructor(public partenaireServ: PartenairesService) { }

  ngOnInit(): void {

    this.partenaireServ.getPartenaires$().subscribe(
      res => {
        this.partenaires = res;
        console.log(res);
        
      }
    )
  }

  contactImg = "../../../assets/img/contact.png"

}
