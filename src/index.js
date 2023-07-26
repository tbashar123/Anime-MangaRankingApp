import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import NarutoRating from './components/NarutoRating'; // Updated import for NarutoRating

import App from './App';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} /> {/* Use element prop for the component */}
      <Route path="/naruto" element={<NarutoRating />} /> {/* Updated route */}
    </Routes>
  </Router>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals