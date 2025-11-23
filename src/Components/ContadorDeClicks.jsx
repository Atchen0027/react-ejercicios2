import React from "react";

function ContadorDeClicks() {
  const [contador, setContador] = React.useState(0);
  return (
    <div>
      <h2>Contador de Clicks</h2>
      <p>Has hecho {contador} clicks</p>
      <button onClick={() => setContador((prev) => prev + 1)}>Sumar</button>
      <button onClick={() => setContador(0)}>Reiniciar</button>
    </div>
  );
}

export default ContadorDeClicks;
