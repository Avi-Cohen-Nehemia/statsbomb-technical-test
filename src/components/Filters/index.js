import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class Filters extends Component {

    constructor(props) {

        super(props);

        this.displayBy = this.displayBy.bind(this);
        this.amountToDisplay = this.amountToDisplay.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    displayBy() {

    }

    amountToDisplay() {

    }

    handleSubmit() {

    }

    render() {

        const { options, selectedOption, selectedAmount } = this.props
        const amounts = [5, 10, 20];

        return(
            <Form className="d-flex" onSubmit={ this.handleSubmit }>
                <DropdownButton
                    title={ selectedOption }
                >
                    {options.map((option, index) => (
                        <Dropdown.Item
                            key={index}
                            onClick={() => this.displayBy(option)}
                        >
                            { option }
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
                <DropdownButton
                    title={ selectedAmount }
                >
                    {amounts.map((amount, index) => (
                        <Dropdown.Item
                            key={index}
                            onClick={() => this.amountToDisplay(amount)}
                        >
                            { amount }
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
                <Button type="submit">
                    {"APPLY"}
                </Button>
            </Form>
        )
    }
}

export default Filters;
