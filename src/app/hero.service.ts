import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {

  constructor(private http: Http) {
  }

  private heroesUrl = 'api/heroes';//URL to web api

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}


