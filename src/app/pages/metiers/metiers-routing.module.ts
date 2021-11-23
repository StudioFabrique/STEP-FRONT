import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistanceComponent } from './atelier/assistance/assistance.component';

import { AtelierComponent } from './atelier/atelier.component';
import { MaterielReemploiComponent } from './atelier/materiel-reemploi/materiel-reemploi.component';
import { ConciergerieComponent } from './conciergerie/conciergerie.component';
import { EditiqueComponent } from './flux-doc/editique/editique.component';
import { FluxDocComponent } from './flux-doc/flux-doc.component';
import { NumerisationComponent } from './flux-doc/numerisation/numerisation.component';
import { TraitementDonneesComponent } from './flux-doc/traitement-donnees/traitement-donnees.component';
import { CourtesComponent } from './formation/courtes/courtes.component';

import { FormationComponent } from './formation/formation.component';
import { LonguesComponent } from './formation/longues/longues.component';
import { LivraisonComponent } from './livraison/livraison.component';


import { ServicePostalComponent } from './service-postal/service-postal.component';
import { ApplicationsMobilesComponent } from './studio/applications-mobiles/applications-mobiles.component';
import { ApplicationsWebComponent } from './studio/applications-web/applications-web.component';
import { StudioComponent } from './studio/studio.component';


  const routes: Routes = [
      // FLUX DOC
      {path: 'flux-documentaire', component:FluxDocComponent},
      {path: 'flux-documentaire/editique', component:EditiqueComponent},
      {path: 'flux-documentaire/numerisation', component:NumerisationComponent},
      {path: 'flux-documentaire/traitement-de-donnees', component:TraitementDonneesComponent},
      // Atelier
      {path: 'atelier-numerique', component: AtelierComponent},
      {path: 'atelier-numerique/assistance', component: AssistanceComponent},
      {path: 'atelier-numerique/materiel-reemploi', component: MaterielReemploiComponent},
      // STUDIO
      {path: 'studio', component: StudioComponent},
      {path: 'studio/applications-web', component: ApplicationsWebComponent},
      {path: 'studio/applications-mobiles', component: ApplicationsMobilesComponent},
      // Autres
      {path: 'conciergerie', component: ConciergerieComponent},
      {path: 'service-postal', component: ServicePostalComponent},
      {path: 'livraison', component: LivraisonComponent},
      // FORMATIONS
      {path: 'formations', component: FormationComponent},
      {path: 'formations/formations-longues', component: LonguesComponent},
      {path: 'formations/formations-courtes', component: CourtesComponent},
   
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetiersRoutingModule { }
