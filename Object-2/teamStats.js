const team = {
    _players: [
        {
            firstName: "Snoopy",
            lastName: "Jina",
            age: 20
        },
        {
            firstName: "Goldberg",
            lastName: "Ben",
            age: 12
        },
        {
            firstName: "Johnson",
            lastName: "Dawn",
            age: 18
        }
    ],
    _games: [
        {
            opponent: "Senler",
            teamPoints: 23,
            opponentPoints: 17
        },
        {
            opponent: "Ian",
            teamPoints: 43,
            opponentPoints: 76
        },
        {
            opponent: "Simon",
            teamPoints: 65,
            opponentPoints: 45
        },
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
    addGame(opponent, teamPoint, opponentPoint) {
        const game = {
            opponent: opponent,
            teamPoints: teamPoint,
            opponentPoints: opponentPoint
        };
        this.games.push(game);
    }
}
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame("Titan", 23, 54);
team.addGame("Phonix", 87, 56);
team.addGame("Dragon", 64, 68);
console.log(team.games);
