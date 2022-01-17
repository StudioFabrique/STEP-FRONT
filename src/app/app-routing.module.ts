import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcoPageComponent } from './pages/eco-page/eco-page.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { Page404Component } from './pages/page404/page404.component';


const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', loadChildren: () => import('./pages/accueil/accueil.module').then(m => m.AccueilModule) },
  { path: 'cas-etudes', loadChildren: () => import('./pages/cas-etudes/cas-etudes.module').then(m => m.CasEtudesModule) },
  { path: 'missions', loadChildren: ()=> import("./pages/missions/missions.module").then(m => m.MissionsModule), data: {breadcrumb: 'Missions'} },
  { path: 'metiers', loadChildren: ()=> import("./pages/metiers/metiers.module").then(m => m.MetiersModule), data: {breadcrumb: 'Métiers'} },
  { path: 'contact', loadChildren: ()=> import("./pages/contacts/contacts.module").then(m => m.ContactsModule) },
  { path: 'eco-conception', component: EcoPageComponent},
  { path: 'mentions-legales', component: MentionsLegalesComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: "top" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
