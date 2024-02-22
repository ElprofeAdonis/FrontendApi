import "./App.css";
import Header from "./componentes/Header";
import React, { useState, useEffect } from "react";
import { get } from "./util/apiClient";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const App = () => {
  const [infoMovies, setMovies] = useState(null);

  useEffect(() => {
    if (infoMovies === null) {
      setMovies(get("/peliculas"));
    }
  }, [infoMovies]);
  console.log({ infoMovies });

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
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default App;
