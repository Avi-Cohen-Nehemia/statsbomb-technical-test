import React, { Component } from "react";
import SBTable from "./../SBTable";

class PlayersTable extends Component {

    render() {

        const { data } = this.props;

        return(
            <SBTable
                tableHeaders={ ["player_name", "country_name"] }
                tableData={ data }
            />
        )
    }
}

export default PlayersTable;