import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Attendee } from './attendee';

@Injectable()
export class AttendeeService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private attendeesUrl = 'api/attendees';  // URL to web api

  constructor(private http: Http) { }

  getAttendees(): Promise<Attendee[]> {
    return this.http.get(this.attendeesUrl)
               .toPromise()
               .then(response => response.json().data as Attendee[])
               .catch(this.handleError);
  }


  getAttendee(id: number): Promise<Attendee> {
    const url = `${this.attendeesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Attendee)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.attendeesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Attendee> {
    return this.http
      .post(this.attendeesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(attendee: Attendee): Promise<Attendee> {
    const url = `${this.attendeesUrl}/${attendee.id}`;
    return this.http
      .put(url, JSON.stringify(attendee), {headers: this.headers})
      .toPromise()
      .then(() => attendee)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/