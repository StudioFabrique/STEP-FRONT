import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { EcoComponent } from './pages/eco/eco.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  {path: '', component: AccueilComponent, pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'missions', loadChildren: ()=> import("./pages/mission/mission.module").then(m => m.MissionModule)},
  {path: 'metiers', loadChildren: ()=> import("./pages/metier/metier.module").then(m => m.MetierModule)},
 
  // {path: 'metiers', component: MetiersComponent},
  {path: 'eco-conception', component: EcoComponent},
  {path: 'mentions-legales', component: MentionsLegalesComponent},
  {path: 'contacts', component: ContactsComponent},

  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
