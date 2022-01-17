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
import { InclusionNumeriqueComponent } from './formation/inclusion-numerique/inclusion-numerique.component';
import { LonguesComponent } from './formation/longues/longues.component';
import { LivraisonComponent } from './livraison/livraison.component';

import { ServicePostalComponent } from './service-postal/service-postal.component';
import { ApplicationsMobilesComponent } from './studio/applications-mobiles/applications-mobiles.component';
import { ApplicationsWebComponent } from './studio/applications-web/applications-web.component';
import { StudioComponent } from './studio/studio.component';

const routes: Routes = [
  // FLUX DOC
  { path: 'flux-documentaire', component: FluxDocComponent, data: { breadcrumb: 'Flux documentaires'}},
  { path: 'flux-documentaire/editique', component: EditiqueComponent, data: { breadcrumb: 'Editique' }},
  { path: 'flux-documentaire/numerisation', component: NumerisationComponent, data: { breadcrumb: 'Numérisation' } },
  { path: 'flux-documentaire/traitement-de-donnees', component: TraitementDonneesComponent, data: { breadcrumb: 'Traitement de données' }},

  // Atelier
  { path: 'atelier-numerique', component: AtelierComponent },
  { path: 'atelier-numerique/assistance', component: AssistanceComponent },
  { path: 'atelier-numerique/materiel-reemploi', component: MaterielReemploiComponent},
  // STUDIO
  { path: 'studio', component: StudioComponent },
  { path: 'studio/applications-web', component: ApplicationsWebComponent },
  {path: 'studio/applications-mobiles', component: ApplicationsMobilesComponent},
  // FORMATIONS
  { path: 'formations', component: FormationComponent },
  { path: 'formations/formations-longues', component: LonguesComponent },
  { path: 'formations/formations-courtes', component: CourtesComponent },
  { path: 'formations/inclusion-numerique', component: InclusionNumeriqueComponent},

  // Autres
  { path: 'conciergerie', component: ConciergerieComponent, data: { breadcrumb: 'Conciergerie' } },
  { path: 'service-postal', component: ServicePostalComponent, data: { breadcrumb: 'Service postal' } },
  { path: 'livraison', component: LivraisonComponent, data: { breadcrumb: 'Livraison' } },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetiersRoutingModule {}
