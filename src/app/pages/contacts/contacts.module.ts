import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgxCaptchaModule, ReCaptchaV3Service } from 'ngx-captcha';


const routes: Routes = [
  { path: '', component: ContactsComponent }
]

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    NgxCaptchaModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SharedModule,
    HttpClientModule,
    MatSnackBarModule,
    RouterModule.forChild(routes)
   
  ],
  providers: [
    ReCaptchaV3Service,
    
  ]
})
export class ContactsModule { }
