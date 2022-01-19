import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { FormationComponent } from './formation.component';
import { LonguesComponent } from './longues/longues.component';
import { CourtesComponent } from './courtes/courtes.component';
import { InclusionNumeriqueComponent } from './inclusion-numerique/inclusion-numerique.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FormationComponent,
    LonguesComponent,
    CourtesComponent,
    InclusionNumeriqueComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormationRoutingModule
  ]
})
export class FormationModule { }
