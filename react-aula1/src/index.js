import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button' // importa o botão
import ComponenteA from './ComponenteA' // importa o componente A 
import "./index.css" // importa o css


// function convencional
function soma(num1, num2) {
    return num1 + num2
}

// function atribuida ao botão  para exibir alerta
function alerta(msg){
    alert(msg)
}

// criando element
const element = <h1>Eduardo Belém - Primeiro JSX</h1>

// criado JSX, incorporando element, incorporando botão
function primeiroJSX(){
    return(
        <div className = "primeiroJSX">
            {element} 
            <h2>Soma: {soma(10, 20)}</h2>
            <Button onClick={() => alerta('O botão foi clicado')} name="Clique-me!" />
            <ComponenteA>
                <h3>Componente A</h3>
                <Button onClick={() => alerta('Sou o botão do compomente A')} name="Clique-me!" />    
            </ComponenteA>
        </div>
    )
}

// arrow function
const App = () => {
    return (
        <div className = "App">
            {primeiroJSX()}
        </div>
    )
}

const rootElements = document.getElementById("root") // seleciona o elemento html onde será renderizado o App
ReactDOM.render(<App />, rootElements) // renderiza o App no elemento selecionado
