import "./App.css";
import Header from "./componentes/Header";
import React, { useState, useEffect } from "react";
import { get } from "./util/apiClient";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const App = () => {
  const [infoMovies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
            display: "flex",
            width: "70%",
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
                  width: "30%",
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
        <div style={{ border: "1px solid red", width: "30%" }}>
          Hola Soy Adonis
        </div>
      </div>
    </div>
  );
};

export default App;
