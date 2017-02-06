import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let attendees = [
      {id: 1, name: 'Mr. Nice'},
      {id: 2, name: 'Narco'},
      {id: 3, name: 'Bombasto'},
      {id: 4, name: 'Celeritas'},
      {id: 5, name: 'Magneta'},
      {id: 6, name: 'RubberMan'},
      {id: 7, name: 'Dynama'},
      {id: 8, name: 'Dr IQ'},
      {id: 9, name: 'Magma'},
      {id: 10, name: 'Tornado'}
    ];
    return {attendees};
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/