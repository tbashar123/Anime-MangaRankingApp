// App.js

import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import NarutoRating from './components/NarutoRating';
import BleachRating from './components/BleachRating';
import DBZRating from './components/DBZRating'; // Import DBZRating component
import yourImageSource from './imgs/animeseries.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <SideBar />

        <main>
          <div className="main-head">
            <h1>Anime/Manga Rating App</h1>
            <p>
              Hello Anime and Manga fans, welcome to this wonderful website, where you can have fun ranking your favorite
              arcs and favorite fights from any of these series. You have to click any of these buttons to go to the page
              and play around with.
            </p>
            <div className="search-box">
              <Link to="/naruto" className="button">
                Naruto Rating
              </Link>
              <Link to="/bleach" className="button">
                Bleach Rating
              </Link>
              <Link to="/dbz" className="button"> {/* Add link to DBZ Rating */}
                DBZ Rating
              </Link>
            </div>
          </div>

          <Routes>
            <Route path="/naruto" element={<NarutoRating />} />
            <Route path="/bleach" element={<BleachRating />} />
            <Route path="/dbz" element={<DBZRating />} /> {/* Add route for DBZ Rating */}
          </Routes>
        </main>
      </div>

      <div className="image-container">
        <img src={yourImageSource} alt="Your Image" />
      </div>
    </div>
  );
}

export default App;
