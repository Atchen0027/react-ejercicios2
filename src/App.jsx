import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CambiarColorFondo from "./Components/CambiarColorFondo.jsx";
import ContadorDeClicks from "./Components/ContadorDeClicks.jsx";
import ListaDinamica from "./Components/ListaDinamica.jsx";
import Busqueda from "./Components/Busqueda.jsx";
import Calculadora from "./Components/Calculadora.jsx";
import Temporizador from "./Components/Temporizador.jsx";
import Generador from "./Components/Generador.jsx";
import ContadorPalabras from "./Components/ContadorPalabras.jsx";
import TareasLocalStorage from "./Components/TareasLocalStorage.jsx";
function App() {
  return (
    <>
      <div>
        <CambiarColorFondo />
        <ContadorDeClicks />
        <ListaDinamica />
        <Busqueda />
        <Calculadora />
        <Temporizador />
        <Generador />
        <ContadorPalabras />
        <TareasLocalStorage />
      </div>
    </>
  );
}

export default App;
