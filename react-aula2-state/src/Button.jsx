import React from "react";

function Button(props) {
  // desestruturação de props obtendo os parametros nome e função onClick.
  const { name, onClick } = props;

  // botão recebe nome e função via parametros
  return (
    <button className="botao" onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
