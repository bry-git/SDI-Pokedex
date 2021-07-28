import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Navigation from './components/navigation';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';




ReactDOM.render(
  <Router>
    <Header />
  </Router>,
  document.getElementById('header')
);
ReactDOM.render(
  <Router>
    <Navigation />
    </Router>,
  document.getElementById('navigation')
);
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
