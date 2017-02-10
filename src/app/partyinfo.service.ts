import { Injectable } from '@angular/core';

@Injectable()
export class PartyInfoService {
    private partyname: string;
    private date: string;
    private place: string;
    private prace: number;

    public getName() {
        return this.partyname;
    }

    public getDate() {
        return this.date;
    }

    public getPlace() {
        return this.place;
    }

    public getPrace () {
        return this.prace;
    }

    public setName (partyname: string) {
        this.partyname = partyname;
    }
    public setDate (date: string) {
        this.date = date;
    }
    public setPlace (place: string) {
        this.place = place;
    }
    public setPrace (prace: number) {
        this.prace = prace;
    }

}