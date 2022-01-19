import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetiersComponent } from './metiers.component';
import { MetiersRoutingModule } from './metiers-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { SharedModule } from 'src/app/shared/shared.module';

import { ConciergerieComponent } from './conciergerie/conciergerie.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { ServicePostalComponent } from './service-postal/service-postal.component';

import { MetierComponent } from './metier/metier.component';


const routes: Routes = [
  { path: '', component: MetiersComponent }
]

@NgModule({
  declarations: [
    MetiersComponent,

    ConciergerieComponent,
    LivraisonComponent,
    ServicePostalComponent,

    MetierComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    MetiersRoutingModule,
    RouterModule.forChild(routes),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class MetiersModule { }
