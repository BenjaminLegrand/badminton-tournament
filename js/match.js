export class Match {
    constructor(firstTeam, secondTeam, firstTeamStartScore, secondTeamStartScore, scores){
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

    scores = [];
}