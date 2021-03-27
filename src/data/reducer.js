import { addOrRemoveTeam, addOrRemoveStat } from "./../utility";

const updateFilters = (state, { forTable, top, by}) => {
    return {
        ...state,
        [forTable]: {
            ...state[forTable],
            top: top,
            by: by
        }
    }
}

const selectTeam = (state, action) => {
    return {
        ...state,
        teamComparison: {
            ...state.teamComparison,
            teamsToCompare: addOrRemoveTeam(state.teamComparison.teamsToCompare, action.selectedTeam)
        }
    }
}

const selectStat = (state, action) => {
    return {
        ...state,
        teamComparison: {
            ...state.teamComparison,
            compareBy: addOrRemoveStat(state.teamComparison.compareBy, action.selectedStat)
        }
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_FILTERS" : return updateFilters(state, action);
        case "SELECT_TEAM" : return selectTeam(state, action);
        case "SELECT_STAT" : return selectStat(state, action);
        default: return state;
    }
};

export default reducer;
