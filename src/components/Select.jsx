import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class Select extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            formId: null
        }

        this.getDropValue = this.getDropValue.bind(this)

        this.props.items.map((item, i) => {
            if (!item.id) {
                item.id = i
            }
            this.state.items.push(<option key={item.id} value={item.id}>{item.name}</option>)
        })
    }

    getDropValue(e) {
        // const item = e.target.value // Mesmo que selectedItemValue
        const index = e.target.selectedIndex
        const selectedItemValue = e.target.options[index].value
        console.log(e.target.id)
    }

    render() {
        return (
            <Form.Group>
                <Form.Label>{this.props.label}</Form.Label>
                <Form.Control as="select" onChange={this.getDropValue}>
                    { this.state.items }
                </Form.Control>
                <Form.Text className="form-text text-muted">{this.props.smallText}</Form.Text>
            </Form.Group>
        )
    }
}