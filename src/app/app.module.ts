import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {IvyCarouselModule} from 'angular-responsive-carousel';

// DEFAULTS
import { FooterComponent } from './default/footer/footer.component';
import { NavbarComponent } from './default/navbar/navbar.component';

// PAGES
import { AccueilComponent } from './pages/accueil/accueil.component';
import { MissionsComponent } from './pages/mission/missions.component';
import { MetiersComponent } from './pages/metier/metiers.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { Page404Component } from './pages/page404/page404.component';

// TEMPLATES
import { CarousselComponent } from './templates/caroussel/caroussel.component';
import { HeaderComponent } from './templates/header/header.component';
import { RectanglesComponent } from './templates/rectangles/rectangles.component';
import { CardsComponent } from './templates/cards/cards.component';
import { InfoCardsComponent } from './templates/info-cards/info-cards.component';
import { PartnersComponent } from './templates/partners/partners.component';
import { QuestionsComponent } from './templates/questions/questions.component';
import { SolutionSliderComponent } from './templates/solution-slider/solution-slider.component';
import { MetierSwiperComponent } from './templates/metier-swiper/metier-swiper.component';
import { EcoconceptionComponent } from './templates/ecoconception/ecoconception.component';

// MATERIAL MODULES
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';


import { ReactiveFormsModule } from '@angular/forms';
import { GouvernanceComponent } from './pages/mission/gouvernance/gouvernance.component';
import { PartenairesComponent } from './pages/mission/partenaires/partenaires.component';
import { ValeursComponent } from './pages/mission/valeurs/valeurs.component';
import { MissionHeaderComponent } from './templates/mission-header/mission-header.component';  
import { HighLightDirective } from './directives/highlight.directive';
import { NewHighLightDirective } from './directives/newHighlight.directive';
import { DataService } from './services/data.service';
import { EmploisComponent } from './pages/emplois/emplois.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { HeaderColorBlockComponent } from './templates/header-color-block/header-color-block.component';
import { MetiersItemsHeaderComponent } from './templates/metiers-items-header/metiers-items-header.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MissionsComponent,
    MetiersComponent,
    CarousselComponent,
    FooterComponent,
    Page404Component,
    NavbarComponent,
    HeaderComponent,
    RectanglesComponent,
    CardsComponent,
    InfoCardsComponent,
    PartnersComponent,
    QuestionsComponent,
    SolutionSliderComponent,
    MetierSwiperComponent,
    EcoconceptionComponent,
    ContactsComponent,
    GouvernanceComponent,
    PartenairesComponent,
    ValeursComponent,
    MissionHeaderComponent,

    //DIRECTIVES
    HighLightDirective,
    NewHighLightDirective,
    EmploisComponent,
    MentionsLegalesComponent,
    HeaderColorBlockComponent,
    MetiersItemsHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatMenuModule ,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    // IvyCarouselModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    MatCarouselModule.forRoot() ,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
