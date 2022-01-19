import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsMobilesComponent } from './applications-mobiles/applications-mobiles.component';
import { ApplicationsWebComponent } from './applications-web/applications-web.component';
import { StudioComponent } from './studio.component';

const routes: Routes = [
  { path: '', children: [
    {path: '', component: StudioComponent},
    { path: 'applications-web', component: ApplicationsWebComponent, data: { breadcrumb: 'Applications Web' } },
    {path: 'applications-mobiles', component: ApplicationsMobilesComponent, data: { breadcrumb: 'Applications Mobiles' }},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudioRoutingModule { }
