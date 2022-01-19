import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GouvernanceComponent } from './gouvernance/gouvernance.component';
import { MissionsComponent } from './missions.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { ValeursComponent } from './valeurs/valeurs.component';


const routes: Routes = [
  {path: '', children: [
    {path: '', component: MissionsComponent},
    {path: 'gouvernance', component: GouvernanceComponent, data: {breadcrumb: 'Gouvernance'}},
    {path: 'valeurs', component: ValeursComponent, data: {breadcrumb: 'Nos valeurs'}},
    {path: 'partenaires', component: PartenairesComponent, data: {breadcrumb: 'Nos partenaires'}}
  ]},

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionsRoutingModule {}
