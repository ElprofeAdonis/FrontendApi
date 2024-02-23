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
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Movies:
            </Typography>
            {infoMovies && (
              <ul>
                {infoMovies.map((movie) => (
                  <li key={movie.id}>
                    {movie.nombre}
                    {movie.director}
                    {movie.clasificacion}
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default App;
