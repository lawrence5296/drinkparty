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
var PartyInfoService = (function () {
    function PartyInfoService() {
    }
    PartyInfoService.prototype.getName = function () {
        return this.partyname;
    };
    PartyInfoService.prototype.getDate = function () {
        return this.date;
    };
    PartyInfoService.prototype.getPlace = function () {
        return this.place;
    };
    PartyInfoService.prototype.getPrace = function () {
        return this.prace;
    };
    PartyInfoService.prototype.setName = function (partyname) {
        this.partyname = partyname;
    };
    PartyInfoService.prototype.setDate = function (date) {
        this.date = date;
    };
    PartyInfoService.prototype.setPlace = function (place) {
        this.place = place;
    };
    PartyInfoService.prototype.setPrace = function (prace) {
        this.prace = prace;
    };
    PartyInfoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PartyInfoService);
    return PartyInfoService;
}());
exports.PartyInfoService = PartyInfoService;
//# sourceMappingURL=partyinfo.service.js.map