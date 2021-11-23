import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
// import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  { path: '', component: ContactsComponent }
]

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    // FlexLayoutModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactsModule { }
