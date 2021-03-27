export const updateFilters = (data) => {
    return {
        type: "UPDATE_FILTERS",
        forTable: data.forTable,
        top: data.amountToDisplay,
        by: data.displayBy
    };
}

export const selectTeam = (data) => {
    return {
        type: "SELECT_TEAM",
        selectedTeam: data,
    };
}

export const selectStat = (data) => {
    return {
        type: "SELECT_STAT",
        selectedStat: data,
    };
}
