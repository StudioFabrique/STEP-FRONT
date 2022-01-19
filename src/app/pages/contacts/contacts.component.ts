import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { IContact } from 'src/app/interfaces/icontact';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { PartenairesService } from 'src/app/services/partenaires.service';
import{GoogleAnalyticsService} from '../../services/google-analytics.service';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {



  partenaires: IPartenaires[] = [];
  contact: IContact[] = [];

  subjects = [   
    "Questions concernants nos formations",
    "Des questions sur l'eco-conception",
    "Des questions sur nos projets",
    "collaboration",
    "autres..."
  ]


  
  constructor(public partenaireServ: PartenairesService, private http: HttpClient, private _snackBar: MatSnackBar, public googleAnalytics: GoogleAnalyticsService) {}
  
  
  durationInSeconds = 3;
  openSnackBar() {
    this._snackBar.open("Votre message a été bien envoyé", "fermer", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: ['step-blue', 'step-white-color']
    });
  }


  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
     
      
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree./f/xzbobqzj',
      
        { 
          objet: email.objet,
          name: email.name,
          lastName: email.lastName,
          telephone: email.telephone,
          entreprise: email.entreprise,
          email: email.email,
          message: email.messages
        },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          
          }
        );

        this.openSnackBar()
        contactForm.reset();
    }
    
    
  }


  sendInfo(){ 
    this.googleAnalytics.eventEmitter("contact", this.subjects, "sendmail");
  } 


  ngOnInit(): void {

    this.partenaireServ.getPartenaires$().subscribe(
      res => {
        this.partenaires = res;
        console.log(res);
        
      }
    )
  }

  contactImg = "/assets/img/contact.png"

}







