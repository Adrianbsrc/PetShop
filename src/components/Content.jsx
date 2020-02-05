import React, { Component } from 'react'
import Welcome from './Welcome'
import Register from './Register'

export default class Content extends Component {
    render() {
        const { started, dogsList, changeStartState } = this.props
        const isLoggedIn = started

        if (isLoggedIn) {
            return (
                <main className="p-4">
                    <Register dogsList={ dogsList } />
                </main>
            )
        } else {
            return (
                <section className="welcome-wpr justify-content-center aling-items-center">
                    <Welcome changeStartState= { changeStartState } />
                </section>
            )
        }
    }
}