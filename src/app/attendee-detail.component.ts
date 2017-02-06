import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Attendee }        from './attendee';
import { AttendeeService } from './attendee.service';

@Component({
  moduleId: module.id,
  selector: 'my-attendee-detail',
  templateUrl: './attendee-detail.component.html',
  styleUrls: [ './attendee-detail.component.css' ]
})
export class AttendeeDetailComponent implements OnInit {
  attendee: Attendee;

  constructor(
    private attendeeService: AttendeeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.attendeeService.getAttendee(+params['id']))
      .subscribe(attendee => this.attendee = attendee);
  }

  save(): void {
    this.attendeeService.update(this.attendee)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/