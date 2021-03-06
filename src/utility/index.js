// figure out the relationship players and stats and calculate and return meaningful stats
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

// figure out the relationship between teams, players and matches and calculate and return meaningful stats
export const getStatsByTeam = (teams, matches, players) => {

    const teamsListWithStats = teams.map(({ team_id, team_name }, index) => {

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

        const getTeamPlayers = players.filter((player) => player.country_name === team_name);
        const total_shots = getTeamPlayers.reduce((acc, player) => {
            return acc + player.total_shots
        }, 0);

        return {
            ...teams[index],
            total_goals: total_goals,
            total_wins: total_wins,
            total_shots: total_shots
        }
    })

    return teamsListWithStats;
};

// capitalize the first letter of every word using js
export const capitalizeSentence = (sentence, splitBy) => {

    const splitSentence = sentence.split(splitBy);

    const capitalizeSentence = splitSentence.map((word) => {

        const capitalizeLetter = word[0].toUpperCase();

        return word.replace(word[0], capitalizeLetter);
    });

    return capitalizeSentence.join(" ");
}

// determine whether a team needs to be added or removed from the displayed list
export const addOrRemoveTeam = (selectedTeams, team) => {

    const selectedTeamsIDList = selectedTeams.map(selectedTeam => selectedTeam.team_id)

    if (selectedTeamsIDList.includes(team.team_id)) {
        return selectedTeams.filter((selectedTeam) => selectedTeam.team_name !== team.team_name);
    }

    return selectedTeams.concat(team)
}

// determine whether a stat needs to be added or removed from the displayed columns
export const addOrRemoveStat = (selectedStats, stat) => {

    if (selectedStats.includes(stat)) {
        return selectedStats.filter((selectedStat) => selectedStat !== stat);
    }

    return selectedStats.concat(stat)
}
