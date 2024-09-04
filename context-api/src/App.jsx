import ComponenteEjemplo from "../../component/tema";
import TemaProvider from "../../contextApi/Provider";
import "./App.css";

const App = () => {
  return (
    <TemaProvider>
      <ComponenteEjemplo />
    </TemaProvider>
  );
};

export default App;
