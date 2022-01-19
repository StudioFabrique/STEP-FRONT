import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourtesComponent } from './courtes/courtes.component';
import { FormationComponent } from './formation.component';
import { InclusionNumeriqueComponent } from './inclusion-numerique/inclusion-numerique.component';
import { LonguesComponent } from './longues/longues.component';

const routes: Routes = [
  { path: '', children: [
    { path: '', component: FormationComponent },
    { path: 'formations-longues', component: LonguesComponent,
  data: { breadcrumb: 'Formations longues' }
  },
    { path: 'formations-courtes', component: CourtesComponent,
  data: { breadcrumb: 'Formations courtes' }
  },
    { path: 'inclusion-numerique', component: InclusionNumeriqueComponent,
  data: { breadcrumb: 'Inclusion numérique' }
  },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
