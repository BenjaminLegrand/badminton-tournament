import { Tournoi } from './tournament.js'
import { Match } from './match.js'
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
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0')
        const day = String(now.getDate()).padStart(2, '0')
        const hours = String(now.getHours()).padStart(2, '0')
        const minutes = String(now.getMinutes()).padStart(2, '0')
        var name = `tournament_${this.tournoi.name}_${year}_${month}_${day}_${hours}h${minutes}`;
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



    findPlayer(name) {
        return this.joueurs.find(j => j.name == name)
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

    resetTournamentMatches() {
        this.tournoi.tours = [];
        this.tournoi.currentTour = -1;
        this.save();
    }

    updateTournamentName(name) {
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


    replacePlayer(player, newPlayer, turnIndex, matchIndex) {
        let matchs = this.tournoi.tours[turnIndex].matchs;

        console.log(matchIndex);

        if (matchIndex !== -1) {
            let oldMatch = matchs[matchIndex];

            console.log("Old match:", oldMatch);

            // Clone teams so you don’t mutate original arrays unexpectedly
            let firstTeam = [...oldMatch.firstTeam];
            let secondTeam = [...oldMatch.secondTeam];

            // Replace player in the correct team
            let index = firstTeam.findIndex(p => p.name === player.name);
            if (index !== -1) {
                console.log("Player found in firstTeam");
                firstTeam[index] = {...newPlayer, ranked:false};
            } else {
                index = secondTeam.findIndex(p => p.name === player.name);
                if (index !== -1) {
                    console.log("Player found in secondTeam");
                    secondTeam[index] = {...newPlayer, ranked:false};
                }
            }

            console.log("Updated firstTeam:", firstTeam);
            console.log("Updated secondTeam:", secondTeam);

            // Recreate the match with updated teams
            let updatedMatch = this.newMatch(firstTeam, secondTeam);

            console.log("New match:", updatedMatch);

            // Replace the match in the array
            matchs[matchIndex] = updatedMatch;
        } else {
            console.log("No match found for player:", player.name);
        }
        this.save()
    }

    updateContraintes(contraintes) {
        if (contraintes != undefined) this.tournoi.contraintes = contraintes;
        this.save();
    }


    newMatch(firstTeam, secondTeam) {
        var firstTeamHandicap = 0;
        firstTeam.forEach(player => {
            firstTeamHandicap += this.getPlayerHandicap(player);
        })

        var secondTeamHandicap = 0;
        secondTeam.forEach(player => {
            secondTeamHandicap += this.getPlayerHandicap(player);
        })

        //équilibrage des points
        var departNegatif = this.tournoi.departMatchNegatif;
        if (firstTeamHandicap > secondTeamHandicap) {
            firstTeamHandicap -= secondTeamHandicap;
            secondTeamHandicap = 0;
            if ((departNegatif && firstTeamHandicap > 0) ||
                (!departNegatif && firstTeamHandicap < 0)) {
                secondTeamHandicap = firstTeamHandicap * (-1);
                firstTeamHandicap = 0;
            }
        } else {
            secondTeamHandicap -= firstTeamHandicap;
            firstTeamHandicap = 0;
            if ((departNegatif && secondTeamHandicap > 0) ||
                (!departNegatif && secondTeamHandicap < 0)) {
                firstTeamHandicap = secondTeamHandicap * (-1);
                secondTeamHandicap = 0;
            }
        }

        var max = Math.max(firstTeamHandicap, secondTeamHandicap);
        if (max > 15) {
            firstTeamHandicap -= (max - 15);
            secondTeamHandicap -= (max - 15);
        }

        return new Match(
            this.tournoi.nbPoints,
            firstTeam,
            secondTeam,
            firstTeamHandicap,
            secondTeamHandicap,
            [
                {
                    SET_SCORE_FIRST_TEAM_KEY: firstTeamHandicap,
                    SET_SCORE_SECOND_TEAM_KEY: secondTeamHandicap,
                },
                {
                    SET_SCORE_FIRST_TEAM_KEY: firstTeamHandicap,
                    SET_SCORE_SECOND_TEAM_KEY: secondTeamHandicap,
                },
                {
                    SET_SCORE_FIRST_TEAM_KEY: 0,
                    SET_SCORE_SECOND_TEAM_KEY: 0,
                }
            ]
        );
    }

getPlayerHandicap(player) {
    return player.genre.handicap + player.niveau.handicap;
}
}
