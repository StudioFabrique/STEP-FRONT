import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MetierRoutingModule } from './metier-routing.module';
import { FluxDocComponent } from './flux-doc/flux-doc.component';
import { StudioComponent } from './studio/studio.component';
import { AtelierComponent } from './atelier/atelier.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { ServicePostalComponent } from './service-postal/service-postal.component';
import { ConciergerieComponent } from './conciergerie/conciergerie.component';
import { FormationComponent } from './formation/formation.component';
import { AppMobilesComponent } from './studio/app-mobiles/app-mobiles.component';
import { AppWebComponent } from './studio/app-web/app-web.component';
import { LongueComponent } from './formation/longue/longue.component';
import { CourteComponent } from './formation/courte/courte.component';
import { InclusionComponent } from './formation/inclusion/inclusion.component';
import { IngenierieComponent } from './flux-doc/ingenierie/ingenierie.component';
import { PrestationsComponent } from './flux-doc/prestations/prestations.component';
import { MaterielComponent } from './atelier/materiel/materiel.component';
import { AssistanceComponent } from './atelier/assistance/assistance.component';
import { NumerisationComponent } from './flux-doc/prestations/numerisation/numerisation.component';
import { EditiqueComponent } from './flux-doc/prestations/editique/editique.component';
import { TraitementComponent } from './flux-doc/prestations/traitement/traitement.component';
@NgModule({
  declarations: [
    FluxDocComponent,
    StudioComponent,
    AtelierComponent,
    LivraisonComponent,
    ServicePostalComponent,
    ConciergerieComponent,
    FormationComponent,
    AppMobilesComponent,
    AppWebComponent,
    LongueComponent,
    CourteComponent,
    InclusionComponent,
    IngenierieComponent,
    PrestationsComponent,
    MaterielComponent,
    AssistanceComponent,
    NumerisationComponent,
    EditiqueComponent,
    TraitementComponent,
  ],
  imports: [
    CommonModule,
    MetierRoutingModule,

  ]
})
export class MetierModule { }
