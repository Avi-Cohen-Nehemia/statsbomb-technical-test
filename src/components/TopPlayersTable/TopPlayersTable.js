import React, { Component } from "react";
import SBTable from "./../SBTable";

class TopPlayersTable extends Component {

    render() {

        const { data, top, by } = this.props;

        return(
            <SBTable
                tableHeaders={ ["player_name", "country_name", "total_shots", "total_goals"] }
                tableData={ data }
                top={ top }
                by={ by }
            />
        )
    }
}

export default TopPlayersTable;
