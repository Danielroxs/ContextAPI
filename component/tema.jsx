import React, { useContext } from "react";
import { TemaContext } from "../contextApi/context";

const ComponenteEjemplo = () => {
  const { tema, toggleTema } = useContext(TemaContext);

  return (
    <div
      style={{
        background: tema === "claro" ? "#fff" : "#333",
        color: tema === "claro" ? "#000" : "#fff",
      }}
    >
      <h1>El tema actual es {tema}</h1>
      <button onClick={toggleTema}>Cambiar Tema</button>
    </div>
  );
};

export default ComponenteEjemplo;
