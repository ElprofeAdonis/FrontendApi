import "./App.css";
import Header from "./componentes/Header";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Input from "./componentes/Input";
import Button from "@mui/material/Button";

import { get } from "./util/apiClient";
import { post } from "./util/apiClient";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const App = () => {
  const [infoMovies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newMovie, setNewMovie] = useState({
    nombre: "",
    director: "",
    clasificacion: "",
  });

  useEffect(() => {
    const fetchdata = async () => {
      setIsLoading(true);
      try {
        const movies = await get("/peliculas");
        setMovies(movies);
      } catch (error) {
        console.error("Error fetching movies", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();
  }, []);
  console.log(infoMovies);

  function handleAddMovie() {
    post("/peliculas", newMovie)
      .then((response) => {
        const updateMovies = [...infoMovies, response];
        setMovies(updateMovies);
        setNewMovie({ nombre: "", director: "", clasificacion: "" });
      })
      .catch((error) => {
        console.error("Error fetching movies", error);
      });
  }
  if (isLoading) {
    return <div>Loading movies...</div>;
  }

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "50%",
            border: "1px solid red",
            height: "90%",
          }}
        >
          {infoMovies &&
            infoMovies.map((movie) => (
              <Card
                sx={{
                  margin: "1px",
                  padding: "1px",
                  display: "-ms-inline-flexbox",
                  width: "50%",
                  height: "150px",
                }}
                key={movie.id}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 18 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {movie.nombre}
                  </Typography>
                  <Typography variant="body2">{movie.director}</Typography>
                  <Typography variant="body2">{movie.clasificacion}</Typography>
                </CardContent>
              </Card>
            ))}
        </div>
        <div>
          <div className="App-header">Hola Soy Adonis</div>
          <div>
            <Box
              className="Centrar-box"
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <Input
                  id="outlined-multiline-flexible"
                  label="Nombre de la película"
                  placeholder="Película"
                  value={newMovie.nombre}
                  onChange={(event) =>
                    setNewMovie({ ...newMovie, nombre: event.target.value })
                  }
                  multiline
                  maxRows={4}
                />
                <Input
                  id="outlined-multiline-flexible"
                  label="Director"
                  placeholder="Director"
                  value={newMovie.director}
                  onChange={(event) =>
                    setNewMovie({ ...newMovie, director: event.target.value })
                  }
                  multiline
                  maxRows={4}
                />
                <Input
                  id="outlined-multiline-flexible"
                  label="Clasificación"
                  placeholder="Clasificación"
                  value={newMovie.clasificacion}
                  onChange={(event) =>
                    setNewMovie({
                      ...newMovie,
                      clasificacion: event.target.value,
                    })
                  }
                  multiline
                  maxRows={4}
                />
              </div>
            </Box>
            <div className="Centrar-box">
              <Button onClick={handleAddMovie} variant="contained">
                Agregar película
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
