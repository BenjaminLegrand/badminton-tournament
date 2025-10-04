import { Tournoi } from './tournament.js'
import {
    typeTournoiListe,
} from './values.js'


const LOCAL_STORAGE_KEY = "tournoiBad";
export class LocalStorage {
    constructor() {
        this.load(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
    }
    joueurs = [];
    tournoi = new Tournoi();

    getNbJoueurSelected() {
        var count = 0;
        this.joueurs.forEach(player => {
            if (player.selected) {
                count++;
            }
        });
        return count;
    }
    getNbContrainteActif() {
        var count = 0;
        this.tournoi.contraintes.forEach(constraint => {
            if (constraint.actif) {
                count++;
            }
        });
        return count;
    }

    getDatas() {
        return {
            "joueurs": this.joueurs,
            "tournoi": this.tournoi
        }
    }

    export() {
        const year = this.tournoi.date.getFullYear();
        const month = String(this.tournoi.date.getMonth() + 1).padStart(2, '0')
        const day =  String(this.tournoi.date.getDate()).padStart(2, '0')
        var name = `tournament_${this.tournoi.name}_${year}_${month}_${day}`;
        var type = "application/json";
        var anchor = document.createElement("a");
        anchor.href = window.URL.createObjectURL(new Blob([JSON.stringify(this.getDatas())], { type }));
        anchor.download = name;
        anchor.click();
    }
    
    save() {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.getDatas()));
    }

    load(datas) {
        if (datas == null) return;
        this.joueurs = datas.joueurs;
        this.tournoi = datas.tournoi;
        this.tournoi.date = new Date(datas.tournoi.date);
    }

    addJoueur(joueur) {
        if (this.joueurs.filter(j => j.name == joueur.name).length > 0) return false;
        this.joueurs.push(joueur);
        this.save();
        return true;
    }

    updateJoueur(index, attributes) {
        if (this.joueurs[index] != undefined) {
            for (var att in attributes) {
                if (this.joueurs[index][att] != undefined) {
                    if (att == "name") {
                        if (this.joueurs[index][att] != attributes[att] &&
                            this.joueurs.filter(j => j.name == attributes[att]).length > 0)
                            return false;
                    }
                    this.joueurs[index][att] = attributes[att];
                }
            }
        }
        this.save();
        return true;
    }

    deleteJoueur(index) {
        this.joueurs.splice(index, 1);
        this.save();
    }

    updateTournamentName(name){
        this.tournoi.name = name;
        this.save();
    }

    updateTournoi(attributes) {
        for (var att in attributes) {
            if (this.tournoi[att] != undefined) {
                this.tournoi[att] = attributes[att];
            }
        }
        //mise à jour des contraintes disponibles en fonction du type de tournoi
        this.tournoi.contraintes.filter(c => c.name == "COEQUIPIER")[0].disabled = this.tournoi["typeTournoi"] == typeTournoiListe.SIMPLE;
        this.save();
    }

    updateMatch(indexMatch, setIndex, setTeam, score) {
        this.tournoi.tours.flatMap(turn => {
            return turn.matchs
        }).forEach((match, index) => {
            if (index == indexMatch) {
                match.scores[setIndex][setTeam] = score;
                this.save();
            }
        })
    }

    updateContraintes(contraintes) {
        if (contraintes != undefined) this.tournoi.contraintes = contraintes;
        this.save();
    }
}
