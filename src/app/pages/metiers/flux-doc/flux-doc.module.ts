import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FluxDocRoutingModule } from './flux-doc-routing.module';
import { NumerisationComponent } from './numerisation/numerisation.component';
import { EditiqueComponent } from './editique/editique.component';
import { TraitementDonneesComponent } from './traitement-donnees/traitement-donnees.component';
import { FluxDocComponent } from './flux-doc.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FluxDocComponent,
    NumerisationComponent,
    EditiqueComponent,
    TraitementDonneesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FluxDocRoutingModule
  ]
})
export class FluxDocModule { }
