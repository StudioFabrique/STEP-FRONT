import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ReCaptchaV3Service } from 'ngx-captcha';

import { IContact } from 'src/app/interfaces/icontact';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { PartenairesService } from 'src/app/services/partenaires.service';
import { GoogleAnalyticsService } from '../../services/google-analytics.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contactImg = '/assets/img/contact.png';
  partenaires: IPartenaires[] = [];
  contact: IContact[] = [];

  map = "https://www.google.com/maps/place/Step/@43.319347,-0.366196,15z/data=!4m2!3m1!1s0x0:0x503142a10cf1a61b?sa=X&ved=2ahUKEwjG9puH2cD1AhWP4YUKHRY1DN8Q_BJ6BAgqEAU";

  serverURL =
    'https://script.google.com/macros/s/AKfycbxURr5g7xLT7dvigI9ouwNAV9PH3lF7mk6ClYW5VWakU--I2TkzX7G6Y-Dw5Rg6ZkDJ/exec';

  subjects = [
    "Demande d'informations",
    'Demande de devis',
    'Poser une question sur une formation',
    'autres...',
  ];

  form!: FormGroup;
  objet: FormControl = new FormControl('', [Validators.required]);
  name: FormControl = new FormControl('', [Validators.required]);
  lastName: FormControl = new FormControl('', [Validators.required]);
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  telephone: FormControl = new FormControl('');
  entreprise: FormControl = new FormControl('');
  message: FormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(256),
  ]);
  recaptcha: FormControl = new FormControl(['', Validators.required]);
  honeypot: FormControl = new FormControl('');
  submitted: boolean = false;
  isLoading: boolean = false;
  responseMessage!: string;

  siteKey = '6Ld6oCUeAAAAAEzQqgEojpVa_V2D5JNVDP0u9gcI';

  constructor(
    private reCaptchaV3Service: ReCaptchaV3Service,
    public builder: FormBuilder,
    public partenaireServ: PartenairesService,
    private httpServ: HttpClient,
    private _snackBar: MatSnackBar,
    public googleAnalytics: GoogleAnalyticsService
  ) {
    this.form = this.builder.group({
    
      objet: this.objet,
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      telephone: this.telephone,
      entreprise: this.entreprise,
      message: this.message,
      honeypot: this.honeypot,
    });

    this.reCaptchaV3Service.execute(
      this.siteKey,
      'homepage',
      (token) => {
        console.log('This is your token: ', token);
      },
      {
        useGlobalDomain: false,
      }
    );
  }


  onSubmit() {
    if (this.form.status == 'VALID' && this.honeypot.value == '') {
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append('objet', this.form.get('objet')?.value);
      formData.append('name', this.form.get('name')?.value);
      formData.append('lastName', this.form.get('lastName')?.value);
      formData.append('email', this.form.get('email')?.value);
      formData.append('telephone', this.form.get('telephone')?.value);
      formData.append('entreprise', this.form.get('entreprise')?.value);
      formData.append('message', this.form.get('message')?.value);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
      this.httpServ.post(this.serverURL, formData).subscribe(
        (response: any) => {
          // choose the response message
          if (response['result'] == 'success') {
            this.responseMessage =
              "Thanks for the message! I'll get back to you soon!";
            this.openSnackBar();
          } else {
            this.responseMessage =
              'Oops! Something went wrong... Reload the page and try again.';
          }
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(response);
        },
        (error) => {
          this.responseMessage =
            'Oops! An error occurred... Reload the page and try again.';
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(error);
        }
      );
    }
  }

  ngOnInit(): void {
    this.partenaireServ.getPartenaires$().subscribe((res) => {
      this.partenaires = res;
      console.log(res);
    });
  }

  durationInSeconds = 3;

  openSnackBar() {
    this._snackBar.open('Votre message a été bien envoyé', 'fermer', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['step-blue', 'step-white-color'],
    });
  }

  sendInfo() {
    this.googleAnalytics.eventEmitter('contact', this.subjects, 'sendmail');
  }
}

