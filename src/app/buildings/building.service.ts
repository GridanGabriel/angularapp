import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Rx';
import {Building} from './buildings';
import {Response, Http} from "@angular/http";

@Injectable()
export class BuildingService {

  private _buildingsUrl = 'http://192.168.33.10:8000/api/buildings/';

  private getBaseUrl(pk: number) {
    return (this._buildingsUrl + pk);
  }

  constructor(private _http: Http) {
  }


  getBuildings() {
    return this._http.get(this._buildingsUrl)
      .map(result => result.json())
      .map(jsonResult => <Building[]>jsonResult.results)
      .catch(this.handleError);
  }

  getBuilding(pk: number) {
    return this._http.get(this.getBaseUrl(pk))
      .map(result => result.json())
      .map(jsonResult => <Building[]>jsonResult.results)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
