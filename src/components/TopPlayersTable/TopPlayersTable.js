import React, { Component } from "react";
import SBTable from "./../SBTable";
import Filters from "./../Filters";

class TopPlayersTable extends Component {

    render() {

        const { data, top, by } = this.props;
        const headers = ["player_name", "country_name", "total_shots", "total_goals"];
        const columns = ["total_goals", "total_shots"];

        return(
            <div style={{ width: "49%" }}>
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
}

export default TopPlayersTable;
