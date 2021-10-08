// REACT
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// PAGES
import Home from "./Home";
import About from "./About";
import Cryptocurrency from "./Cryptocurrency";

// COMPONENTS
import Navbar from "../components/Navbar";

// MATERIAL-UI
import { ThemeProvider } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "../util/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    overflow: "hidden",
    border: "1px solid purple",
    display: "flex",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      height: "100%",
    },
  },
}));

function App() {
  const classes = useStyles();
  const [theme, setTheme] = useState(lightTheme);
  const [lightOrDark, setLightOrDark] = useState("light");

  const handleLightOrDark = (event) => {
    const colorMode = lightOrDark === "light" ? "dark" : "light";
    setLightOrDark(colorMode);

    const colorTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(colorTheme);
  };

  return (
    <ThemeProvider theme={{ ...theme }}>
      <CssBaseline />
      <Router>
        <Navbar
          lightOrDark={lightOrDark}
          handleLightOrDark={handleLightOrDark}
        />

        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route path="/about" component={About} />

          <Route path="/cryptocurrency/:id" component={Cryptocurrency} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
