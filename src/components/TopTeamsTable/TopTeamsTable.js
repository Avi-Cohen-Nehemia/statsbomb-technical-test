import React, { Component } from "react";
import SBTable from "./../SBTable";
import Filters from "./../Filters";

class TopTeamsTable extends Component {

    render() {

        const { data, top, by } = this.props;
        const headers = ["team_name", "total_goals", "total_wins"];
        const options = ["total_wins", "total_goals"];

        return(
            <div style={{ width: "48%" }}>
                <Filters
                    options={ options }
                    selectedAmount={ top }
                    selectedOption={ by }
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

export default TopTeamsTable;
