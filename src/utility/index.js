export const getStatsByPlayer = (players, stats) => {

    const playersDetails = players.map((player) => {
        return {
            player_id: player.player_id,
            player_name: player.player_known_name ? player.player_known_name : player.player_name,
            country_name: player.country_name
        }
    });

    const playersListWithStats = playersDetails.map((player) => {

        // filter to get only relevant stats
        const playerStats = stats.filter((stat) => {
            return stat.player_id === player.player_id;
        });

        const total_goals = playerStats.reduce((acc, stat) => {
            return acc + stat.goals;
        }, 0);

        const total_shots = playerStats.reduce((acc, stat) => {
            return acc + stat.shots;
        }, 0);

        const total_completed_passes = playerStats.reduce((acc, stat) => {
            return acc + stat.completed_passes;
        }, 0);

        const average_team_possession_percentage = playerStats.reduce((acc, stat) => {
            return acc + stat.team_possession_percentage

        // add conditional to avoid getting NaN when length is 0
        }, 0) / (playerStats.length ? playerStats.length : 1);

        return {
            ...player,
            total_goals: total_goals,
            total_shots: total_shots,
            total_completed_passes: total_completed_passes,
            average_team_possession_percentage: average_team_possession_percentage.toFixed(2)
        }
    })

    return playersListWithStats;
};

export const getStatsByTeam = (teams, matches) => {

    const teamsListWithStats = teams.map(({ team_id }, index) => {

        // filter to get only the matches where the team played at
        const teamMatches = matches.filter((match) => {
            return  team_id === match.match_home_team_id || team_id === match.match_away_team_id;
        });

        // calculate total goals each team scored (excluding penalties)
        const total_goals = teamMatches.reduce((acc, match) => {

            if (team_id === match.match_home_team_id) {
                return acc + match.match_home_score;
            }

            return acc + match.match_away_score;
        }, 0);

        // calculate total wins for each team
        const total_wins = teamMatches.reduce((acc, {
            match_home_score,
            match_away_score,
            match_home_team_id,
            match_away_team_id,
            match_home_penalty_score,
            match_away_penalty_score
        }) => {

            // when match DID NOT go to penalties
            if (match_home_score !== match_away_score) {

                if (team_id === match_home_team_id && match_home_score > match_away_score) {
                    return acc + 1;
                }
    
                if (team_id === match_away_team_id && match_away_score > match_home_score) {
                    return acc + 1;
                }
            }

            // when match DID go to penalties
            if (team_id === match_home_team_id && match_home_penalty_score > match_away_penalty_score) {
                return acc + 1;
            }

            if (team_id === match_away_team_id && match_away_penalty_score > match_home_penalty_score) {
                return acc + 1;
            }

            return acc;
        }, 0);

        return {
            ...teams[index],
            total_goals: total_goals,
            total_wins: total_wins
        }
    })

    return teamsListWithStats;
};
