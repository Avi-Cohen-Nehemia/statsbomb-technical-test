// import all the data from the mock db and pass it to the initial state
import players from "./database/player-data";
import teams from "./database/team-data";
import matches from "./database/match-data";
import stats from "./database/stat-data";
import { getStatsByPlayer, getStatsByTeam } from "./../utility";

const teamStats = getStatsByTeam(teams, matches);

export const initialState = {
	players: players,
    teams: teams,
    matches: matches,
    stats: stats,
    statsByPlayer: {
        stats: getStatsByPlayer(players, stats),
        top: 5,
        by: "total_goals"
    },
    statsByTeam: {
        stats: teamStats,
        top: 5,
        by: "total_wins"
    },
    teamComparison: {
        teamsToCompare: [teamStats[7], teamStats[6], teamStats[10]],
        compareBy: ["total_wins", "total_goals"]
    }
};

export default initialState;
