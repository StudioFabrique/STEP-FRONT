import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GouvernanceComponent } from './gouvernance/gouvernance.component';
import { MissionsComponent } from './missions.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { ValeursComponent } from './valeurs/valeurs.component';


const routes: Routes = [
  {path: '', children: [
    {path: '', component: MissionsComponent},
    {path: 'gouvernance', component: GouvernanceComponent},
    {path: 'valeurs', component: ValeursComponent},
    {path: 'partenaires', component: PartenairesComponent}
  ]},

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionsRoutingModule { 




}
