import React from "react";
import PropTypes from "prop-types";
import SBTable from "./../SBTable";
import Filters from "./../Filters";

const TopTeamsTable = ({ data, top, by }) => {

    const headers = ["team_name", "total_goals", "total_wins"];
    const columns = ["total_wins", "total_goals"];

    return(
        <div style={{ width: "49%" }}>
            <h2>{ "Top Teams" }</h2>
            <Filters
                columns={ columns }
                forTable={ "statsByTeam" }
                selectedAmount={ top }
                selectedColumn={ by }
            />
            <SBTable
                tableHeaders={ headers }
                tableData={ data }
                top={ top }
                by={ by }
            />
        </div>
    )
}

TopTeamsTable.propTypes = {
    data: PropTypes.array.isRequired,
    top: PropTypes.number.isRequired,
    by: PropTypes.string.isRequired,
}

export default TopTeamsTable;
