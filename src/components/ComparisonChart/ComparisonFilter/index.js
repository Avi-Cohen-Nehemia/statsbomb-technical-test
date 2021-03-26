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

    render() {

        const { allTeams } = this.props

        return(
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
        )
    }
}

export default ComparisonFilter;
