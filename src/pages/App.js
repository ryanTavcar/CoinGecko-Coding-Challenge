import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CryptoList from '../components/CryptoList';

function App() {

  return (
    <Router>
      <Switch>
      <Route 
        path='/'
        render={(props) => (
          <CryptoList {...props}/>
        )}
      />
        </Switch>
    </Router>
  );
}

export default App;
