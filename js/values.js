export const SET_SCORE_FIRST_TEAM_KEY = "SET_SCORE_FIRST_TEAM_KEY"
export const SET_SCORE_SECOND_TEAM_KEY = "SET_SCORE_SECOND_TEAM_KEY"

export var typeTournoiListe = {
    "SIMPLE": "Simple",
    "DOUBLE": "Double"
}
export var modeTournoiListe = {
    "ONESHOT": "Tous les tours <br> <span> On génére tous les tours en une fois dans le but de faire jouer tout le monde avec tout le monde quelque soit les niveaux. </span>",
    "STEPBYSTEP": "Tour par tour <br> <span> On génére le premier tour,  "
}
export var contrainteListe = [
    {
        "name": "ADVERSAIRE",
        "title": "Adversaires différents", 
        "desc": "Eviter de rejouer plusieurs fois contre le même adversaire.",
        "actif": true, 
        "disabled": false, 
    },
    {
        "name": "COEQUIPIER",
        "title": "Coéquipier différents", 
        "desc": "Eviter de rejouer plusieurs fois avec le même coéquipier.",
        "actif": true, 
        "disabled": false, 
    },
    {
        "name": "ATTENTE",
        "title": "Attente minimum", 
        "desc": "On essaye de faire joueur un maximum tout le monde.",
        "actif": true, 
        "disabled": false, 
    },
    {
        "name": "ISOSEXE",
        "title": "Egalité des sexes", 
        "desc": "On ne permet que des matchs où il y a autant d'hommes que de femmes dans chaque équipe.",
        "actif": true, 
        "disabled": false, 
    },
    {
        "name": "LIMITPOINT",
        "title": "Ecart de point limité", 
        "desc": "On limite l'écart des points entre les deux équipes au début du match. Limite : ",
        "actif": true, 
        "disabled": false, 
    }
]
export var niveauListe = {
    "NC": {
        level : 0,
        value: "NC", 
        handicap: 0
    },
    "P12": {
        level : 1,
        value: "P12", 
        handicap: 0
    },
    "P11": {
        level : 2,
        value: "P11",
        handicap: 0
    },
    "P10": {
        level : 3,
        value: "P10",
        handicap: -3
    },
    "D9": {
        level : 4,
        value: "D9", 
        handicap: -5
    },
    "D8": {
        level : 5,
        value: "D8",
        handicap: -10
    },
    "D7": {
        level : 6,
        value: "D7",
        handicap: -14
    },
    "R6": {
        level : 7,
        value: "R6", 
        handicap: -14
    },
    "R5": {
        level : 8,
        value: "R5",
        handicap: -18
    },
    "R4": {
        level : 9,
        value: "R4",
        handicap: -18
    },
    "N3": {
        level : 10,
        value: "N3", 
        handicap: -21
    },
    "N2": {
        level : 11,
        value: "N2",
        handicap: -21
    },
    "N1": {
        level : 12,
        value: "N1",
        handicap: -21
    }
}
export var genreListe = {
    "HOMME": {
        value: "Homme",
        handicap: 0
    },
    "FEMME": {
        value: "Femme",
        handicap: 2
    }
}