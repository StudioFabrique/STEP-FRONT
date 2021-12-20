import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';


const routes: Routes = [
  { path: '', component: ContactsComponent }
]

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SharedModule,
    HttpClientModule,
    MatSnackBarModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactsModule { }
