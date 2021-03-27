import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class ComparisonFilter extends Component {

    constructor(props) {

        super(props);

        this.state = {
            selectedTeams: props.selectedTeams
        }
    }

    handleSelectTeam(team) {
        this.props.selectTeam(team);
    }

    handleSelectStat(stat) {
        this.props.selectStat(stat);
    }

    render() {

        const { allTeams } = this.props
        const allStats = ["total_wins", "total_goals"];

        return(
            <div className="d-flex">
                <DropdownButton
                    className="text-capitalize"
                    title="Teams"
                >
                    {allTeams.map((team, index) => (
                        <Dropdown.Item
                            key={ index }
                            onClick={ () => this.handleSelectTeam(team) }
                        >
                            { team.team_name }
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
                <DropdownButton
                    className="text-capitalize ml-3"
                    title="Compare"
                >
                    {allStats.map((stat, index) => (
                        <Dropdown.Item
                            key={ index }
                            onClick={ () => this.handleSelectStat(stat) }
                        >
                            { stat.replace(/_/g, ' ') }
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
            </div>
        )
    }
}

export default ComparisonFilter;
