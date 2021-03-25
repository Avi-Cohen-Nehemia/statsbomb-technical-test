export const updateFilters = (data) => {
    return {
        type: "UPDATE_FILTERS",
        forTable: data.forTable,
        top: data.amountToDisplay,
        by: data.displayBy
    };
}
