import "./App.css";
import Mensaje from "./mensaje.js";
import Description from "./descripcion";

const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" message="Estamos trabajando en un curso de React" />
      <Mensaje />
      <Description
        color="green"
        message="Estoy renderizando una nueva descripción con React"
      />
    </div>
  );
};

export default App;
