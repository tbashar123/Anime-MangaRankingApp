// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NarutoArcRanking from './components/NarutoArcRanking';
import BleachArcRanking from './components/BleachArcRanking';
import DBSeriesArcRanking from './components/DBSeriesArcRanking';
import HxHArcRanking from './components/HxHArcRanking';
import OnePieceArcRanking from './components/OnePieceArcRanking'; // Import OnePieceRating component
import App from './App';

const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  <Router>
    <Routes>
      <Route path="*">
        <Route index element={<App />} />
        <Route path="naruto" element={<NarutoArcRanking />} />
        <Route path="bleach" element={<BleachArcRanking />} />
        <Route path="dbseries" element={<DBSeriesArcRanking />} />
        <Route path="hxh" element={<HxHArcRanking />} />
        <Route path="onepiece" element={<OnePieceArcRanking />} /> {/* Add route for OnePiece Rating */}
      </Route>
    </Routes>
  </Router>
);
