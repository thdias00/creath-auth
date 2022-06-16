import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from './styles';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
