import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Attendee }           from './attendee';

@Injectable()
export class AttendeeSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Attendee[]> {
    return this.http
               .get(`app/attendees/?name=${term}`)
               .map(response => response.json().data as Attendee[]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/