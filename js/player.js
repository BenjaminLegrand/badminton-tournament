
import { niveauListe, genreListe } from './values.js'

export class Joueur{
    constructor(pName, age, pGenre, pNiveau, pSelected){
        this.name = pName ?? "";
        this.age = age;
        this.genre = pGenre != undefined ? pGenre : genreListe.HOMME;
        this.niveau = pNiveau != undefined ? pNiveau : niveauListe.NC;
        this.selected = pSelected != undefined ? pSelected : false;
    }
    name = null;
    genre = null;
    age = null;
    niveau = null;
    selected = false;
    ranking = -1;
    totalPointAverage = 0;
    playedMatches = 0;
    totalWonMatches = 0;
    totalWonSet = 0;
    totalLostSet = 0;
}
