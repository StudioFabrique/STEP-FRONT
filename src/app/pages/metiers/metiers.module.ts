import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetiersComponent } from './metiers.component';
import { MetiersRoutingModule } from './metiers-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { SharedModule } from 'src/app/shared/shared.module';

import { AtelierComponent } from './atelier/atelier.component';
import { ConciergerieComponent } from './conciergerie/conciergerie.component';
import { FluxDocComponent } from './flux-doc/flux-doc.component';
import { FormationComponent } from './formation/formation.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { StudioComponent } from './studio/studio.component';
import { ServicePostalComponent } from './service-postal/service-postal.component';


import { ApplicationsMobilesComponent } from './studio/applications-mobiles/applications-mobiles.component';
import { ApplicationsWebComponent } from './studio/applications-web/applications-web.component';
import { MaterielReemploiComponent } from './atelier/materiel-reemploi/materiel-reemploi.component';
import { AssistanceComponent } from './atelier/assistance/assistance.component';
import { MetierComponent } from './metier/metier.component';
import { NumerisationComponent } from './flux-doc/numerisation/numerisation.component';
import { TraitementDonneesComponent } from './flux-doc/traitement-donnees/traitement-donnees.component';
import { EditiqueComponent } from './flux-doc/editique/editique.component';
import { CourtesComponent } from './formation/courtes/courtes.component';
import { LonguesComponent } from './formation/longues/longues.component';

const routes: Routes = [
  { path: '', component: MetiersComponent }
]

@NgModule({
  declarations: [
    MetiersComponent,
    AtelierComponent,
    ConciergerieComponent,
    FluxDocComponent,
    FormationComponent,
    LivraisonComponent,
    StudioComponent,
    ServicePostalComponent,
    NumerisationComponent,
    TraitementDonneesComponent,
    EditiqueComponent,
    ApplicationsMobilesComponent,
    ApplicationsWebComponent,
    MaterielReemploiComponent,
    AssistanceComponent,
    MetierComponent,
    CourtesComponent,
    LonguesComponent
  ],
  imports: [
    // FlexLayoutModule,
    CommonModule,
    SharedModule,
    MetiersRoutingModule,
    RouterModule.forChild(routes)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class MetiersModule { }
