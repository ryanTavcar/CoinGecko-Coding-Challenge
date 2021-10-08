import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    overflow: "hidden",
    border: "1px solid blue",
  },
  textColor: {
    color: theme.palette.primary.main,
  },
}));

const About = () => {
  const classes = useStyles();
  return <Container className={classes.container}>ABOUT PAGE</Container>;
};

export default About;
