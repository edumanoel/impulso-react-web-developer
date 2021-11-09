import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"


// Função soma
function soma(num1, num2) {
    return num1 + num2;
}


function primeiroJSX(){
    return(
        <div className = "primeiroJSX">
            <h1>Eduardo Belém - Primeiro JSX</h1>
            <h2>Soma: {soma(10, 20)}</h2>
        </div>
    )
}


const App = () => {
    return (
        <div className = "App">
            {primeiroJSX()};
        </div>
    )
}

const rootElements = document.getElementById("root")
ReactDOM.render(<App />, rootElements)