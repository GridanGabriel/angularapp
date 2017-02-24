import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';

import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';

import {HttpModule} from '@angular/http';


import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {BuildingsComponent} from './buildings/buildings.component';
import {BuildingService} from './buildings/building.service';
import {BuildingDetailComponent} from './building_detail/building-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    BuildingsComponent,
    BuildingDetailComponent,
  ],
  providers: [
    HeroService,
    BuildingService
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}


