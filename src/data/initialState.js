// import all the data from the mock db and pass it to the initial state
const players = require('./database/player-data.json');
const teams = require('./database/team-data.json');
const matches = require('./database/match-data.json');
const stats = require('./database/stat-data.json');

const initialState = {
	players: players,
    teams: teams,
    matches: matches,
    stats: stats
};

export default initialState;
