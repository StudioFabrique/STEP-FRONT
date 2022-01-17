import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { Page404Component } from './pages/page404/page404.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { EmploisComponent } from './pages/emplois/emplois.component';
import { EcoPageComponent } from './pages/eco-page/eco-page.component';
import { GoogleAnalyticsService } from './services/google-analytics.service';

import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire/compat';

import { AngularFireDatabase } from '@angular/fire/compat/database'
import {AngularFireStorageModule } from '@angular/fire/compat/storage';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    MentionsLegalesComponent,
    EmploisComponent,
    EcoPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, GoogleAnalyticsService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }
