import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//MODULES
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';

//COMPONENTS
import { CardsComponent } from './cards/cards.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { ComponentItemsHeaderComponent } from './component-items-header/component-items-header.component';
import { EcoconceptionComponent } from './ecoconception/ecoconception.component';
import { EcoHeaderComponent } from './eco-header/eco-header.component';
import { HeaderColorBlockComponent } from './header-color-block/header-color-block.component';
import { HeaderComponent } from './header/header.component';
import { InfoCardsComponent } from './info-cards/info-cards.component';
import { MetierDetailsHeaderComponent } from './metier-details-header/metier-details-header.component';
import { MetierSwiperComponent } from './metier-swiper/metier-swiper.component';
import { MissionHeaderComponent } from './mission-header/mission-header.component';
import { PartnersComponent } from './partners/partners.component';
import { PrestationsCarouselComponent } from './prestations-carousel/prestations-carousel.component';
import { QuestionsComponent } from './questions/questions.component';
import { RectanglesComponent } from './rectangles/rectangles.component';
import { SolutionSliderComponent } from './solution-slider/solution-slider.component';
import { FooterComponent } from './default/footer/footer.component';
import { NavbarComponent } from './default/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BlockComponent } from './block/block.component';
import { PrestationsCarouselService } from '../services/prestations-carousel.service';
import { HttpClientModule } from '@angular/common/http';
import { MetiersDetailsHeadersService } from '../services/metiers-details-headers.service';
import { CounterDirective } from '../directives/counter.directive';
import { ArticlesService } from '../services/articles.service';
import { ThumbnailsCarouselComponent } from './thumbnails-carousel/thumbnails-carousel.component';
import { ThumbscarouselService } from '../services/thumbscarousel.service';


const materialsModules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatMenuModule ,
  MatDialogModule,
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatExpansionModule,
  MatIconModule
];

const components = [
  BlockComponent,
  CardsComponent,
  CarousselComponent,
  ComponentItemsHeaderComponent,
  EcoconceptionComponent,
  EcoHeaderComponent,
  HeaderColorBlockComponent,
  HeaderComponent,
  InfoCardsComponent,
  MetierDetailsHeaderComponent,
  MetierSwiperComponent,
  MissionHeaderComponent,
  PartnersComponent,
  PrestationsCarouselComponent,
  QuestionsComponent,
  RectanglesComponent,
  SolutionSliderComponent,
  FooterComponent,
  NavbarComponent,
  ThumbnailsCarouselComponent,
]

const otherModules = [
  // BrowserAnimationsModule,
  SlickCarouselModule,
  HttpClientModule
]

@NgModule({
  declarations: [
    components,
    CounterDirective
  ],
  imports: [
    materialsModules,
    otherModules,
    CommonModule,
    RouterModule
  ],
  exports: [
    materialsModules,
    components
  ],
  providers: [
    PrestationsCarouselService,
    MetiersDetailsHeadersService,
    ArticlesService,
    ThumbscarouselService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
