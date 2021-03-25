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

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_FILTERS" : return updateFilters(state, action);
        default: return state;
    }
};

export default reducer;
