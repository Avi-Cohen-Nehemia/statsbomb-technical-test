import { addOrRemoveTeam } from "./../utility";

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

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_FILTERS" : return updateFilters(state, action);
        case "SELECT_TEAM" : return selectTeam(state, action);
        default: return state;
    }
};

export default reducer;
