import React, { useState } from "react";

function Busqueda() {
  const lista = [
    "Manzana",
    "Banana",
    "Pera",
    "Naranja",
    "Uva",
    "Kiwi",
    "Fresa",
    "Mango",
    "Piña",
    "Cereza",
    "Melón",
    "Sandía",
    "Limón",
    "Coco",
    "Arándano",
    "Frambuesa",
    "Papaya",
    "Guayaba",
    "Durazno",
    "Albaricoque",
    "Ciruela",
    "Higo",
    "Mandarina",
    "Toronja",
    "Lichi",
    "Maracuyá",
    "Carambola",
    "Granada",
    "Mora",
    "Coco",
    "Mangostino",
    "Mangue",
    ""
  ];
  const [busqueda, setBusqueda] = React.useState("");

  const handleChange = (event) => {
    setBusqueda(event.target.value);
  };

  const resultados = lista.filter((item) =>
    item.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h2>Busqueda en tiempo real</h2>
      <input
        type="text"
        value={busqueda}
        placeholder="Una fruta..."
        onChange={handleChange}
      />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {busqueda === "" ? (
          <li>Escribe algo para buscar</li>
        ) : resultados.length > 0 ? (
          resultados.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No hay resultados</li>
        )}
      </ul>
    </div>
  );
}

export default Busqueda;
