
import { niveauListe, genreListe } from './values.js'

export class Joueur{
    constructor(pName, pGenre, pNiveau, pSelected){
        this.name = pName == undefined ? "Nouveau joueur" : pName;
        this.genre = pGenre != undefined ? pGenre : genreListe.HOMME;
        this.niveau = pNiveau != undefined ? pNiveau : niveauListe.P12;
        this.selected = pSelected != undefined ? pSelected : false;
        this.adversaires = [];
        this.coequipiers = [];
    }
    name = null;
    genre = null;
    niveau = null;
    selected = false;
    adversaires = null;
    coequipiers = null;
    totalPointAverage = 0;
    totalWonMatches = 0;
    totalWonSet = 0;
    totalLostSet = 0;

    getPointsHandicap(){
        return this.genre.handicap + this.niveau.handicap;
    }

    toJson(){
        return {
            "name": this.name,
            "genre": this.genre,
            "niveau": this.niveau,
            "selected": this.selected
        }
    }
}
