import { access } from "fs";

export class Person {

    #nev: string;
    #nem: string;
    #szulDatum: string;
    #egyenleg: number;
    #aktivitas: string;

    constructor(nev: string, nem: string, szulDatum: string, egyenleg: number, aktivitas: string) {
        this.#nev = nev;
        this.#nem = nem;
        this.#szulDatum = szulDatum;
        this.#egyenleg = egyenleg;
        this.#aktivitas = aktivitas;
    }

    getNev() {
        return this.#nev;
    }

    getNem() {
        return this.#nem;
    }

    getSzulDatum() {
        return this.#szulDatum;
    }

    isAktiv(): boolean {
        return this.#aktivitas == 'active';
    }

    setNev(nev: string){
        this.#nev = nev;
    }

    getSzulEv(){
        return parseInt(this.#szulDatum.split('.')[0]);
    }

}