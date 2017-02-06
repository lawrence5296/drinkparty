import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { AttendeeSearchService } from './attendee-search.service';
import { Attendee } from './attendee';

@Component({
  moduleId: module.id,
  selector: 'attendee-search',
  templateUrl: './attendee-search.component.html',
  styleUrls: [ './attendee-search.component.css' ],
  providers: [AttendeeSearchService]
})
export class AttendeeSearchComponent implements OnInit {
  attendees: Observable<Attendee[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private attendeeSearchService: AttendeeSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.attendees = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.attendeeSearchService.search(term)
        // or the observable of empty attendees if there was no search term
        : Observable.of<Attendee[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Attendee[]>([]);
      });
  }

  gotoDetail(attendee: Attendee): void {
    let link = ['/detail', attendee.id];
    this.router.navigate(link);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/