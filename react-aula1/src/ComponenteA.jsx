import React from "react"

function ComponenteA(props) {
    // Propriedade children para acessar components dentro de outro component
    return (
        <div>{props.children}</div>
    )
}

export default ComponenteA