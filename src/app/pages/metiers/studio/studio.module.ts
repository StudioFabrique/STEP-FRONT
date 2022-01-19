import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudioRoutingModule } from './studio-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudioComponent } from './studio.component';
import { ApplicationsMobilesComponent } from './applications-mobiles/applications-mobiles.component';
import { ApplicationsWebComponent } from './applications-web/applications-web.component';


@NgModule({
  declarations: [
    StudioComponent,
    ApplicationsMobilesComponent,
    ApplicationsWebComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    StudioRoutingModule
  ]
})
export class StudioModule { }
