"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var attendee_service_1 = require('./attendee.service');
var AttendeesComponent = (function () {
    function AttendeesComponent(attendeeService, router) {
        this.attendeeService = attendeeService;
        this.router = router;
    }
    AttendeesComponent.prototype.getAttendees = function () {
        var _this = this;
        this.attendeeService
            .getAttendees()
            .then(function (attendees) { return _this.attendees = attendees; });
    };
    AttendeesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.attendeeService.create(name)
            .then(function (attendee) {
            _this.attendees.push(attendee);
            _this.selectedAttendee = null;
        });
    };
    AttendeesComponent.prototype.delete = function (attendee) {
        var _this = this;
        this.attendeeService
            .delete(attendee.id)
            .then(function () {
            _this.attendees = _this.attendees.filter(function (h) { return h !== attendee; });
            if (_this.selectedAttendee === attendee) {
                _this.selectedAttendee = null;
            }
        });
    };
    AttendeesComponent.prototype.ngOnInit = function () {
        this.getAttendees();
    };
    AttendeesComponent.prototype.onSelect = function (attendee) {
        this.selectedAttendee = attendee;
    };
    AttendeesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedAttendee.id]);
    };
    AttendeesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-attendees',
            templateUrl: './attendees.component.html',
            styleUrls: ['./attendees.component.css']
        }), 
        __metadata('design:paramtypes', [attendee_service_1.AttendeeService, router_1.Router])
    ], AttendeesComponent);
    return AttendeesComponent;
}());
exports.AttendeesComponent = AttendeesComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=attendees.component.js.map