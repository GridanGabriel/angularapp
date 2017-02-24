import {Component, OnInit} from '@angular/core';
import {Building} from './buildings';
import {BuildingService} from './building.service';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-build',
  templateUrl: 'buildings.component.html',
  styleUrls: ['buildings.component.css'],
})

export class BuildingsComponent implements OnInit {

  buildings: Building[];
  selectedBuilding: Building;

  constructor(private router: Router,
              private buildingService: BuildingService) {
  }

  ngOnInit(): void {
    this.getBuilding();
  }

  getBuilding(): void {
    this.buildingService.getBuildings()
      .subscribe(building => this.buildings = building);
  }

  onSelect(building: Building): void {
    this.selectedBuilding = building;
  }

  gotoDetail(): void {
    this.router.navigate(['/building', this.selectedBuilding.pk]);
  }

}
