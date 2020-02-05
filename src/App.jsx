import React, { Component } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

const baseUrl = 'https://dog.ceo/api/breeds/list/all'
// const baseUrl = 'http://files.cod3r.com.br/curso-js/turmaA.json'

export default class App extends Component {
    constructor(props) {
        super(props)
        
        this.changeStartState = this.changeStartState.bind(this)
    
        this.state = {
            // dogsList: this.getDogs(),
            started: false, // false
            dogs: null
        }
    }

    // componentDidMount() {
    //     fetch(baseUrl)
    //         .then(response => response.json())
    //         .then(data => {
    //             let dogsFromApi = data.map(dog => {
    //                 return { value: dog }
    //             })
    //             this.setState({
    //                 dogs: dogsFromApi
    //             })
    //         })
    // }

    // getDogs() {
    //     fetch(baseUrl)
    //         .then(resp => resp.json())
    //         .then(data => {
    //             this.setState({
    //                 dogsList: data.message
    //             })
    //         })
    // }

    fixData(data) {
        const dataFixed = []
        Object.keys(data).forEach((item, i) => {
            dataFixed.push({ name: item, id: i })
        })
        return dataFixed
    }

    componentDidMount() {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    dogs: this.fixData(data.message)
                })
            })
    }

    changeStartState() {
        this.setState({
            started: !this.state.started
        })
    }

    render() {
        const { started, dogs } = this.state
        return (
            <React.Fragment>
                <Header />
                <Content started={ started } dogsList={ dogs } changeStartState={ this.changeStartState } />
                <Footer />
            </React.Fragment>
        )
    }
}