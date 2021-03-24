const playersData = require("./../data/database/player-data.json");
const statsData = require("./../data/database/stat-data.json");

export const getStatsByPlayer = (players, stats) => {

    let playersDetails = players.map((player) => {
        return {
            player_id: player.player_id,
            player_name: player.player_known_name ? player.player_known_name : player.player_name
        }
    });

    let playersListWithStats = playersDetails.map((player) => {

        let playerStats = stats.filter((stat) => {
            return stat.player_id === player.player_id;
        });

        let total_goals = playerStats.reduce((acc, stat) => {
            return acc + stat.goals;
        }, 0);

        let total_shots = playerStats.reduce((acc, stat) => {
            return acc + stat.shots;
        }, 0);

        let total_completed_passes = playerStats.reduce((acc, stat) => {
            return acc + stat.completed_passes;
        }, 0);

        let average_team_possession_percentage = playerStats.reduce((acc, stat) => {
            return acc + stat.team_possession_percentage

        // add conditional to avoid getting NaN when length is 0
        }, 0) / (playerStats.length ? playerStats.length : 1);

        return {
            ...player,
            total_goals: total_goals,
            total_shots: total_shots,
            total_completed_passes: total_completed_passes,
            average_team_possession_percentage: average_team_possession_percentage
        }
    })

    return playersListWithStats;
};
