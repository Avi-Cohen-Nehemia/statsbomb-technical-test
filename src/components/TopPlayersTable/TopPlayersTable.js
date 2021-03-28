import React from "react";
import PropTypes from "prop-types";
import SBTable from "./../SBTable";
import Filters from "./../Filters";

const TopPlayersTable = ({ data, top, by }) => {

    const headers = ["player_name", "country_name", "total_shots", "total_goals"];
    const columns = ["total_goals", "total_shots"];

    return (
        <div style={{ width: "49%" }}>
            <h2>{ "Top Players" }</h2>
            <Filters
                columns={ columns }
                forTable={ "statsByPlayer" }
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

TopPlayersTable.propTypes = {
    data: PropTypes.array.isRequired,
    top: PropTypes.number.isRequired,
    by: PropTypes.string.isRequired,
}

export default TopPlayersTable;
