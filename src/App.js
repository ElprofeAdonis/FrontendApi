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
  if (infoMovies) {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          <Card sx={{ minWidth: 175, background: "red" }}>
            {infoMovies.map((movie) => (
              <CardContent key={movie.id}>
                <Typography
                  sx={{ fontSize: 28 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Movies:
                </Typography>
                <Typography variant="h5" component="div">
                  {movie.nombre}
                </Typography>
                <Typography variant="body2">{movie.director}</Typography>
                <Typography variant="body2">{movie.clasificacion}</Typography>
              </CardContent>
            ))}
          </Card>
        </div>
      </div>
    );
  }
};

export default App;
