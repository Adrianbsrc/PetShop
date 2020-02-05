import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class Formulary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: this.props.value
        }

        this.setName = this.setName.bind(this)
    }

    setName(e) {
        this.props.onUpdate(e.target.value)
        this.setState({ value: e.target.value })
    }

    render() {
        return (
            <Form.Group>
                <Form.Label>{this.props.label}</Form.Label>
                <Form.Control onChange={this.setName} value={this.state.value} type="text" placeholder={this.props.placeholder} />
                <Form.Text className="form-text text-muted">{this.props.smallText}</Form.Text>
            </Form.Group>
        )
    }
}