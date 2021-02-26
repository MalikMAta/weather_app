// This will be the forum fields component that will allow the user to search for cities

import React, { useState, useEffect } from "react";

import Weather from "./Weather";
import axios from "axios";

// Import all the components we will need from Material - UI
import {
  Container,
  AppBar,
  Typography,
  Grid,
  TextField,
  Button,
  Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Setting up he styles I want to use with materialize UI
const useStyles = makeStyles({
  root: {
    height: "75x",
    color: "white",
  },
  title: {
    color: "black",
    fontSize: "30px",
  },
  gridTwo: {
    marginTop: "10px",
  },
  containerTwo: {
    marginTop: "100px",
  },
});

function WeaherSearch() {
  const [city, setCity] = useState("");
    const [weather, setWeather] = useState("")
  const classes = useStyles();

  const converterForumula = (data) => {
    const newData = ((data - 273.15) * 9) / 5 + 32;
    console.log(newData)
    return newData
    // return data − 273.15) × 9/5 + 32
  };
  const handleSubmit = (e) => {
    e.preventDefault();


    // Call the api using axios 
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2ef83a8b42392109d4cc4d35fac1fdde`
      )
      .then((res) => {
        const persons = res.data;
        const weather = persons.main.feels_like;
        console.log(weather);

        // call the formula to convert the weather
        converterForumula(weather)
        setWeather( converterForumula(weather))
      });
  };

  return (
    <>
      {/* Create the first container for the top bar */}
      <Container className={classes.root}>
        <AppBar
          position="static"
          component="span"
          m={1}
          className={classes.root}
        >
          <Toolbar varient="dense">
            <Typography variant="text">Weather Api App</Typography>
          </Toolbar>
        </AppBar>
      </Container>

      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign in</h5>

        <div className="input-feild">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>

    
        {/* Send the weather information through a prop */}
      <Container>
        <Weather weather={weather} />
      </Container>
    </>
  );
}

export default WeaherSearch;
