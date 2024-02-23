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
      <div>
        <Card sx={{ minWidth: 175 }}>
          <CardContent>
            <Typography variant="h3" component="div">
              Movies:
            </Typography>
            {infoMovies && (
              <Typography>
                {infoMovies.map((movie) => (
                  <Typography key={movie.id} variant="body2">
                    {movie.nombre} - {movie.director} - {movie.clasificacion}
                  </Typography>
                ))}
              </Typography>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default App;
