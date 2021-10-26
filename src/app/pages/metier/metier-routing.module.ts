import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtelierComponent } from './atelier/atelier.component';
import { ConciergerieComponent } from './conciergerie/conciergerie.component';
import { FluxDocComponent } from './flux-doc/flux-doc.component';
import { FormationComponent } from './formation/formation.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { MetiersComponent } from './metiers.component';
import { ServicePostalComponent } from './service-postal/service-postal.component';
import { StudioComponent } from './studio/studio.component';

const routes: Routes = [
  {path: '', children: [
    {path: '', component: MetiersComponent},
    {path: 'flux-documentaire', component: FluxDocComponent},
    {path: 'atelier-numerique', component: AtelierComponent},
    {path: 'conciergerie', component: ConciergerieComponent},
    {path: 'partenaires-entreprise', component: StudioComponent},
    {path: 'service-postal', component: ServicePostalComponent},
    {path: 'livraison', component: LivraisonComponent},
    {path: 'formations', component: FormationComponent},
  ]},

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetierRoutingModule { }
