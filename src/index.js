import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NarutoRating from './components/NarutoRating';
import App from './App';

// Get the root element
const root = document.getElementById('root');

// Use createRoot to render your app
const rootElement = createRoot(root);

rootElement.render(
  <Router>
    <Routes>
      {/* Change the parent Route path to have a trailing "*" */}
      <Route path="*">
        {/* Use the index route without a specific path */}
        <Route index element={<App />} />

        {/* Specify a relative path for the NarutoRating route */}
        <Route path="naruto" element={<NarutoRating />} />
      </Route>
    </Routes>
  </Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals