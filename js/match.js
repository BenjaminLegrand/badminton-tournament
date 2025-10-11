export class Match {
    constructor(setPoints, firstTeam, secondTeam, firstTeamStartScore, secondTeamStartScore, scores){
        this.setPoints = setPoints;
        this.firstTeam = firstTeam;
        this.secondTeam = secondTeam;
        this.firstTeamStartScore = firstTeamStartScore;
        this.secondTeamStartScore = secondTeamStartScore;
        this.scores = scores;
    }
    firstTeam = [];
    secondTeam = [];
    firstTeamStartScore = 0;
    secondTeamStartScore = 0;
    pointContrainte = 0;
    setPoints = 21;

    scores = [];
}