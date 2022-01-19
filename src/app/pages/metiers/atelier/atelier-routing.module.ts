import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistanceComponent } from './assistance/assistance.component';
import { AtelierComponent } from './atelier.component';
import { MaterielReemploiComponent } from './materiel-reemploi/materiel-reemploi.component';

const routes: Routes = [
  { path: '', children: [
    {path: '', component: AtelierComponent},
    { path: 'assistance', component: AssistanceComponent, data: { breadcrumb: 'Assistance' }  },
    { path: 'materiel-reemploi', component: MaterielReemploiComponent, data: { breadcrumb: 'Réemploi de matériels' } },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtelierRoutingModule { }
