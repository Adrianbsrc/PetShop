import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import FormuItem from './FormItem'
import Select from './Select'
import Photo from './Photo'

export default class Register extends Component {
    constructor(props) {
        super(props)

        const initialState = {
            dogNameTag: '',
            fonts: [{ name: 'Montserrat'}, { name: 'JimNightshade'} , {name: 'SigmarOne'}, { name: 'Teko'}, { name: 'ZhiMangXing'}],
            fontColors: [{ name: 'Verde', id: '#00ff88' }, { name: 'Azul', id: '#3700ff' }, { name: 'Laranja', id: '#ff9100' }, { name: 'Vermelho', id: '#ff0000' }, { name: 'Rosa', id: '#ff00bf'}]
        }

        this.state = { ...initialState }
    }

    onUpdate = value => {
        this.setState({
            dogNameTag: value
        })
    }

    render() {
        return (
            <Row>
                <Col sm="12" md="6" lg="3">
                    <Select id="raca" items={this.props.dogsList} label="Raça" smallText="Escolha a raça do seu novo amigo" />
                    <Select id="corFonte" items={this.state.fontColors} label="Cor da fonte" smallText="Cor do nome que ficará na coleira" />
                </Col>
                <Col sm="12" md="6" lg="3">
                    <FormuItem
                        onUpdate={this.onUpdate}
                        value={this.state.dogNameTag}
                        label="Nome" 
                        placeholder="Ex.: Zyon"
                        smallText="Escolha o nome do seu novo amigo" />
                    <Select id="tipoFonte" items={this.state.fonts} label="Tipografia" smallText="Escolha um estilo de fonte para o nome" />
                    <div className="text-right">
                        <button className="btn btn-primary">Salvar</button>
                        <button className="btn btn-secondary ml-2">Cancelar</button>
                    </div>
                </Col>
                <Col sm="12" md="6" lg="6">
                    <Photo dogName={this.state.dogNameTag} />
                </Col>
            </Row>
        )
    }
}