
import { typeTournoiListe, modeTournoiListe, niveauListe, genreListe, contrainteListe } from './values.js'
import { Joueur } from './player.js'

export class Tournoi{
    constructor(pTypeTournoi, pModeTournoi, pNbTour, pNbTerrain, pDepartMatchNegatif, pNiveauListe, pGenreListe, pContraintes, pTours, pCurrentTour, pLimitPoint, pDate, pNbPoint){
        this.typeTournoi = pTypeTournoi != undefined ? pTypeTournoi : typeTournoiListe.SIMPLE;
        this.modeTournoi = pModeTournoi != undefined ? pModeTournoi : modeTournoiListe.ONESHOT;
        this.nbTour = pNbTour != undefined ? pNbTour : 5;
        this.nbTerrain = pNbTerrain != undefined ? pNbTerrain : 5;
        this.departMatchNegatif = pDepartMatchNegatif != undefined ? pDepartMatchNegatif : false;
        this.niveauListe = pNiveauListe != undefined ? pNiveauListe : niveauListe;
        this.genreListe = pGenreListe != undefined ? pGenreListe : genreListe;
        this.contraintes = pContraintes != undefined ? pContraintes : contrainteListe;
        this.tours = pTours != undefined ? pTours : [];
        this.currentTour = pCurrentTour != undefined ? pCurrentTour : -1;
        this.limitPoint = pLimitPoint != undefined ? pLimitPoint : 10;
        this.date = pDate != undefined ? pDate : new Date();
        this.nbPoints = pNbPoint != undefined ? pNbPoint : 21;
    }

    typeTournoi = null;
    modeTournoi = null;
    nbTour = null;
    nbTerrain = null;
    departMatchNegatif = null;
    niveauListe = null;
    genreListe = null;
    contraintes = null;
    currentTour = null;
    limitPoint = null;
    date = null;
    nbPoints = null;
}
