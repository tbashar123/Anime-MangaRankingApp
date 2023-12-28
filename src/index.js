// index.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NarutoRating from './components/NarutoRating';
import BleachRating from './components/BleachRating';
import DBZRating from './components/DBZRating'; // Import DBZRating component
import App from './App';

const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  <Router>
    <Routes>
      <Route path="*">
        <Route index element={<App />} />
        <Route path="naruto" element={<NarutoRating />} />
        <Route path="bleach" element={<BleachRating />} />
        <Route path="dbz" element={<DBZRating />} /> {/* Add route for DBZ Rating */}
      </Route>
    </Routes>
  </Router>
);
