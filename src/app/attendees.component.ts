import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Attendee }                from './attendee';
import { AttendeeService }         from './attendee.service';

@Component({
  moduleId: module.id,
  selector: 'my-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: [ './attendees.component.css' ]
})
export class AttendeesComponent implements OnInit {
  attendees: Attendee[];
  selectedAttendee: Attendee;

  constructor(
    private attendeeService: AttendeeService,
    private router: Router) { }

  getAttendees(): void {
    this.attendeeService
        .getAttendees()
        .then(attendees => this.attendees = attendees);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.attendeeService.create(name)
      .then(attendee => {
        this.attendees.push(attendee);
        this.selectedAttendee = null;
      });
  }

  delete(attendee: Attendee): void {
    this.attendeeService
        .delete(attendee.id)
        .then(() => {
          this.attendees = this.attendees.filter(h => h !== attendee);
          if (this.selectedAttendee === attendee) { this.selectedAttendee = null; }
        });
  }

  ngOnInit(): void {
    this.getAttendees();
  }

  onSelect(attendee: Attendee): void {
    this.selectedAttendee = attendee;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedAttendee.id]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/