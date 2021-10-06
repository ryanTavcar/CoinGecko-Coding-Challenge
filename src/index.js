import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './pages/App';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

