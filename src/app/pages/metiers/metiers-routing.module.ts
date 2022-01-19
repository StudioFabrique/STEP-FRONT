import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConciergerieComponent } from './conciergerie/conciergerie.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { ServicePostalComponent } from './service-postal/service-postal.component';


const routes: Routes = [
  // FLUX DOC
  // { path: 'flux-documentaire', loadChildren: () => import('./pages/').then(m => m.) },

  {path: 'flux-documentaires', loadChildren: () => import('./flux-doc/flux-doc.module').then(m => m.FluxDocModule), data: { breadcrumb: 'Flux documentaire' }},

  {path: 'studio', loadChildren: () => import('./studio/studio.module').then(m => m.StudioModule), data: { breadcrumb: 'Studio de développement' }},

  {path: 'formations', loadChildren: () => import('./formation/formation.module').then(m => m.FormationModule), data: { breadcrumb: 'Formations' }},

  {path: 'atelier-numerique', loadChildren: () => import('./atelier/atelier.module').then(m => m.AtelierModule), data: { breadcrumb: 'Atelier' }},

  { path: 'conciergerie', component: ConciergerieComponent, data: { breadcrumb: 'Conciergerie' } },
  { path: 'service-postal', component: ServicePostalComponent, data: { breadcrumb: 'Service postal' } },
  { path: 'livraison', component: LivraisonComponent, data: { breadcrumb: 'Livraison' } },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetiersRoutingModule {}
