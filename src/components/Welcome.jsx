import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        const { changeStartState } = this.props
        
        return (
            <section className="welcome">
                <i className="welcome-icon fa fa-paw"></i>
                <h1>Bem vindo!</h1>
                <h3>Encontre aqui seu mais novo amigo!</h3>
                <p>Você poderá levar seu companheiro com uma coleira personalizada.</p>
                <p>Vá em frente e parabéns!</p>
                <button className="btn btn-primary" onClick={() => changeStartState()}>Encontrar novo amigo</button>
            </section>
        )
    }
}