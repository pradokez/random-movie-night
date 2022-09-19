import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RandomMovieGenerator from './RandomMovieGenerator';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RandomMovieGenerator />
  </React.StrictMode>
);