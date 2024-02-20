import "./App.css";
import Header from "./componentes/Header";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <h1>My First React App</h1>
        <p>
          Welcome to my first React app. This is a simple app to get started
          with React.
        </p>
        <div>
          <div>
            <input
              type="text"
              id="nombre"
              placeholder="Introduzca su nombre"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
