// import all the data from the mock db and pass it to the initial state
import players from "./database/player-data";
import teams from "./database/team-data";
import matches from "./database/match-data";
import stats from "./database/stat-data";

export const initialState = {
	players: players,
    teams: teams,
    matches: matches,
    stats: stats
};

export default initialState;
