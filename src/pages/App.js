import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '@material-ui/core/styles';
import {lightTheme, darkTheme} from '../util/theme'

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [lightOrDark, setLightOrDark] = useState('light');

  const handleLightOrDark = event => {
    const colorMode = lightOrDark === 'light' ? 'dark' : 'light';
    setLightOrDark(colorMode);
    
    const colorTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(colorTheme);
  };

  return (
    <ThemeProvider theme={{...theme}}>
      <Router>
        <div style={{display: 'flex'}}>
          <nav>
            <Navbar lightOrDark={lightOrDark} handleLightOrDark={handleLightOrDark}/>
          </nav>
      
          <Switch>
            <Route 
              path='/'
              render={(props) => (
                <Home {...props}/>
              )}
            />
            </Switch>
          </div>

      </Router>
    </ThemeProvider>
  );
}

export default App;
