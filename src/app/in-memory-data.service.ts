import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Viet', birthday : new Date(2000, 6, 10) },
      { id: 2, name: 'Narco', birthday : new Date(1988, 3, 15) },
      { id: 3, name: 'Bombasto', birthday : new Date(1988, 3, 15) },
      { id: 4, name: 'Celeritas', birthday : new Date(1988, 3, 15) },
      { id: 5, name: 'Magneta', birthday : new Date(1988, 3, 15) },
      { id: 6, name: 'RubberMan', birthday : new Date(1988, 3, 15) },
      { id: 7, name: 'Dynama', birthday : new Date(1988, 3, 15) },
      { id: 8, name: 'Dr IQ', birthday : new Date(1988, 3, 15) },
      { id: 9, name: 'Magma', birthday : new Date(1988, 3, 15) },
      { id: 10, name: 'Tornado', birthday : new Date(1988, 3, 15) }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
