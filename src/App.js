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
        {infoMovies.map((movie) => (
          <Card
            sx={{
              background: "red",
              margin: "2px",
              padding: "1px",
              display: "inline-block",
              width: "20%",
              height: "250px",
            }}
            key={movie.id}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 28 }}
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
    </div>
  );
};

export default App;
