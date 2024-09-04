import { useState } from "react";
import { TemaContext } from "./context";

const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState("claro");

  const toggleTema = () => {
    setTema((prevTema) => (prevTema === "claro" ? "oscuro" : "claro"));
  };

  return (
    <TemaContext.Provider value={{ tema, toggleTema }}>
      {children}
    </TemaContext.Provider>
  );
};

export default TemaProvider;
