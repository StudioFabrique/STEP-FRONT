import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtelierRoutingModule } from './atelier-routing.module';
import { AtelierComponent } from './atelier.component';
import { AssistanceComponent } from './assistance/assistance.component';
import { MaterielReemploiComponent } from './materiel-reemploi/materiel-reemploi.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AtelierComponent,
    AssistanceComponent,
    MaterielReemploiComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AtelierRoutingModule
  ]
})
export class AtelierModule { }
