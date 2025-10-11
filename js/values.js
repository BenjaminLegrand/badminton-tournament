export const SET_SCORE_FIRST_TEAM_KEY = "SET_SCORE_FIRST_TEAM_KEY"
export const SET_SCORE_SECOND_TEAM_KEY = "SET_SCORE_SECOND_TEAM_KEY"

export var typeTournoiListe = {
    "SIMPLE": "Simple",
    "DOUBLE": "Double aléatoire",
    "DOUBLE_MX": "Double mixte"
}
export var modeTournoiListe = {
    "ONESHOT": "Tous les tours <br> <span> On génére tous les tours en une fois dans le but de faire jouer tout le monde avec tout le monde quelque soit les niveaux. </span>",
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
        color : "#525353",
        textColor : "white",
        value: "NC", 
        handicap: 0
    },
    "P12": {
        level : 1,
        color : "#f8e71c",
        textColor : "black",
        value: "P12", 
        handicap: 0
    },
    "P11": {
        level : 2,
        color : "#f8e71c",
        textColor : "black",
        value: "P11",
        handicap: 0
    },
    "P10": {
        level : 3,
        color : "#f8e71c",
        textColor : "black",
        value: "P10",
        handicap: -3
    },
    "D9": {
        level : 4,
        color : "#7ed321",
        textColor : "black",
        value: "D9", 
        handicap: -5
    },
    "D8": {
        level : 5,
        color : "#7ed321",
        textColor : "black",
        value: "D8",
        handicap: -10
    },
    "D7": {
        level : 6,
        color : "#7ed321",
        textColor : "black",
        value: "D7",
        handicap: -14
    },
    "R6": {
        level : 7,
        color : "#4a90e2",
        textColor : "white",
        value: "R6", 
        handicap: -14
    },
    "R5": {
        level : 8,
        color : "#4a90e2",
        textColor : "white",
        value: "R5",
        handicap: -18
    },
    "R4": {
        level : 9,
        color : "#4a90e2",
        textColor : "white",
        value: "R4",
        handicap: -18
    },
    "N3": {
        level : 10,
        color : "#f80220",
        textColor : "white",
        value: "N3", 
        handicap: -21
    },
    "N2": {
        level : 11,
        color : "#f80220",
        textColor : "white",
        value: "N2",
        handicap: -21
    },
    "N1": {
        level : 12,
        color : "#f80220",
        textColor : "white",
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