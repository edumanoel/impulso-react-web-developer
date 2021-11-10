import React, { Component } from 'react' // import React Component
import ReactDOM from 'react-dom'
import Button from './Button'
import "./index.css"

// Criando App utilizando Class
class App extends Component { // requer import / extend React Component

    constructor(props){
        super(props)

        this.state = {
            relogio: 1000,
            copo: 'Água'
        }
    }

    // 3 segundos após iniciar App executa DiMount e atualizar o state
    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                copo: 'Suco'
            })
        }, 3000)
    }

    // criar arrow function ação Button
    alterarCopo = () => {
        this.setState({
            copo: 'Refrigerante'
        })
    }

    // criar render method
    render() {

        const { relogio, copo } = this.state // desestruturar props

        return (
            <div className="App">
                <h1>Relógio: {relogio}</h1>
                <Button onClick={() => this.alterarCopo()} name={copo}/>
            </div>

        )
    }
}

const rootElements = document.getElementById("root") // seleciona o elemento html onde será renderizado o App
ReactDOM.render(<App />, rootElements) // renderiza o App no elemento selecionado
