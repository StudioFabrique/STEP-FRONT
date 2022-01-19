import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionsComponent } from './missions.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GouvernanceComponent } from './gouvernance/gouvernance.component';
import { ValeursComponent } from './valeurs/valeurs.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { MissionsRoutingModule } from './missions-routing.module';


@NgModule({
  declarations: [
    MissionsComponent,
    GouvernanceComponent,
    ValeursComponent,
    PartenairesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MissionsRoutingModule,

  ]
})
export class MissionsModule { }
