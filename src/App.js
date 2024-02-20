import "./App.css";
import Header from "./componentes/Header";
import React, { useState, useEffect } from "react";
import { get } from "./util/apiClient";

function App() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    if (movies === null) {
      get("/peliculas");
    }
  }, [movies]);
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
          <h1>Movies name</h1>
          <h1>Director</h1>
          <h1>Clacificacion</h1>
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default App;
