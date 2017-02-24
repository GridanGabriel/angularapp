import {Component, OnInit} from '@angular/core';
import {Building} from '../buildings/buildings';
import {BuildingService} from '../buildings/building.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'my-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.css']
})

export class BuildingDetailComponent implements OnInit {

  building: Building;

  constructor(private buildingService: BuildingService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    console.log('mesaj de test');
    this.buildingService.getBuilding(this.route.params['pk'])
      .subscribe(building => this.building = building);
  }
}
