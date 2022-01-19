import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditiqueComponent } from './editique/editique.component';
import { FluxDocComponent } from './flux-doc.component';
import { NumerisationComponent } from './numerisation/numerisation.component';
import { TraitementDonneesComponent } from './traitement-donnees/traitement-donnees.component';

const routes: Routes = [
  { path: '', children: [
    {path: '', component: FluxDocComponent},
    { path: 'editique', component: EditiqueComponent, data: { breadcrumb: 'Editique' }},
  { path: 'numerisation', component: NumerisationComponent, data: { breadcrumb: 'Numérisation' } },
  { path: 'traitement-de-donnees', component: TraitementDonneesComponent, data: { breadcrumb: 'Traitement de données' }},
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FluxDocRoutingModule { }
