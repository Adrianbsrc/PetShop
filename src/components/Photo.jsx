import React, { Component } from 'react'
import { Figure } from 'react-bootstrap'
import defaultDogImg from '../imgs/my-new-friend-dog.jpg'

export default class Photo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            img: defaultDogImg,
            name: this.props.dogName
        }
    }

    render() {
        return (
            <Figure>
                <Figure.Image src={this.state.img} className="rounded" alt="Meu novo amigo!" />
                <Figure.Caption>Oi! Eu serei seu novo amigo!</Figure.Caption>
                <label className="dogName">{this.props.dogName}</label>
            </Figure>
        )
    }
}