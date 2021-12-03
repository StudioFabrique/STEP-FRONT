import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { CasEtudesRoutingModule } from './cas-etudes-routing.module';
import { CasArticleComponent } from './cas-article/cas-article.component';
import { CasEtudesComponent } from './cas-etudes.component';

const routes: Routes = [
  { path: '', component: CasEtudesComponent, children: [

  ]}
]



@NgModule({
  declarations: [
    CasArticleComponent,
    CasEtudesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CasEtudesRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class CasEtudesModule { }
