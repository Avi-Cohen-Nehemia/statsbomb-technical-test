import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

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

    // select how to order results and enable apply button
    handleDisplayBy(column) {
        this.setState({
            displayBy: column.replace(/ /g, '_'),
            changeToApply: true
        });
    }

    // select how to many results to display and enable apply button
    handleAmountToDisplay(amount) {
        this.setState({
            amountToDisplay: amount,
            changeToApply: true
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        // update results and disable apply button
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
                    title="Order By"
                >
                    {columns.map((column, index) => (
                        <Dropdown.Item
                            key={ index }
                            onClick={ () => this.handleDisplayBy(column) }
                        >
                            { column.replace(/_/g, ' ') }
                            { displayBy === column ? <i className="fas fa-check ml-2"/> : null }
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
                <DropdownButton
                    className="ml-3"
                    title="Top"
                >
                    {amounts.map((amount, index) => (
                        <Dropdown.Item
                            key={ index }
                            onClick={ () => this.handleAmountToDisplay(amount) }
                        >
                            { amount }
                            {amount === amountToDisplay ? <i className="fas fa-check ml-2"/> : null }
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

Filters.propTypes = {
    updateFilters: PropTypes.func.isRequired,
    columns: PropTypes.array.isRequired,
}

export default Filters;
