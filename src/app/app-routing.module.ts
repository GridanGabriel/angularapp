import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';


import {BuildingsComponent} from './buildings/buildings.component';
import {BuildingDetailComponent} from './building_detail/building-detail.component';

const routes: Routes = [
  {
    path: 'buildings',
    component: BuildingsComponent
  },

  {
    path: 'building/:pk',
    component: BuildingDetailComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}



