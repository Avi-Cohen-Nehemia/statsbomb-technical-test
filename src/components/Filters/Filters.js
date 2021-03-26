import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { capitalizeSentence } from "./../../utility";

class Filters extends Component {

    constructor(props) {

        super(props);

        this.state = {
            displayBy: props.selectedColumn,
            amountToDisplay: props.selectedAmount,
            forTable: props.forTable,
            changeToApply: false
        }

        this.handleDisplayBy = this.handleDisplayBy.bind(this);
        this.handleAmountToDisplay = this.handleAmountToDisplay.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDisplayBy(column) {
        this.setState({
            displayBy: column.replace(/ /g, '_'),
            changeToApply: true
        });
    }

    handleAmountToDisplay(amount) {
        this.setState({
            amountToDisplay: amount,
            changeToApply: true
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.updateFilters(this.state);
        this.setState({ changeToApply: false });
    }

    render() {

        const { amountToDisplay, changeToApply, displayBy } = this.state;
        const { columns } = this.props
        const amounts = [5, 10, 20];

        return(
            <Form className="d-flex mb-2" onSubmit={ this.handleSubmit }>
                <DropdownButton
                    className="text-capitalize"
                    title={ capitalizeSentence(displayBy, "_") }
                >
                    {columns.map((column, index) => (
                        <Dropdown.Item
                            key={ index }
                            onClick={ () => this.handleDisplayBy(column) }
                        >
                            { column.replace(/_/g, ' ') }
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
                <DropdownButton
                    className="ml-3"
                    title={ `Top: ${amountToDisplay}` }
                >
                    {amounts.map((amount, index) => (
                        <Dropdown.Item
                            key={ index }
                            onClick={ () => this.handleAmountToDisplay(amount) }
                        >
                            { amount }
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
                <Button
                    className="ml-3"
                    disabled={ !changeToApply }
                    type="submit"
                >
                    {"APPLY"}
                </Button>
            </Form>
        )
    }
}

export default Filters;
