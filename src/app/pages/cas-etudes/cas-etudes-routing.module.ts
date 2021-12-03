import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasArticleComponent } from './cas-article/cas-article.component';
import { CasEtudesComponent } from './cas-etudes.component';



const routes: Routes = [
  {path: '', children: [
    {path: '', component: CasEtudesComponent},
    {path: 'cas-article/:id', component: CasArticleComponent},  
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasEtudesRoutingModule { }
