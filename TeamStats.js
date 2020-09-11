let team = {
  _players: [
    {
      firstName: 'Michelle',
      lastName: 'Ernst - van Wijk',
      age: 29
    },
    {
      firstName: 'Kobe',
      lastName: 'Bryant',
      age: 41
    },
    {
      firstName: 'Michael',
      lastName: 'Jordan',
      age: 57
    },
  ],

  _games: [
    {
      opponent: 'Picker Reds',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Chicaco Bulls',
      teamPoints: 35,
      opponentPoints: 33
    },
    {
      opponent: 'La Clippers',
      teamPoints: 6,
      opponentPoints: 10
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
      firstname: firstName,
      lastName: lastName,
      age: age
    };
    team._players.push(player);
  },
  
  addGame(opponentName, teamPoints, opponentPoints) {
    let game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    team._games.push(game);
  },
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);

console.log('');

team.addGame('Amersfoort033', 22, 22);
team.addGame('EBC', 56, 57);
team.addGame('Waterdorp Winners', 27, 34);
console.log(team._games);



