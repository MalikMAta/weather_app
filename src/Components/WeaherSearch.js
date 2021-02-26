// This will be the forum fields component that will allow the user to search for cities

import React from "react";

// Import all the components we will need from Material - UI
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  IconButton,
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
      marginTop: '10px'
  }
});

const WeatherSearch = () => {
  const classes = useStyles();

  return (
    <>
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

        <Container className={classes.containerTwo}>
        <Grid>
          <Typography variant="h1" component="h1" className={classes.title}>
            Enter a city to check the weather
          </Typography>

          <Grid>
          <form noValidate autoComplete="off">
            <TextField id="standard-basic" />
           
          </form>
          </Grid>
          <Grid className ={classes.gridTwo}><Button variant="contained" color="primary"> Submit</Button></Grid>
        </Grid>
        </Container>
      
    </>
  );
};

export default WeatherSearch;
