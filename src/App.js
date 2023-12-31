// App.js
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import NarutoRating from './components/NarutoRating';
import BleachRating from './components/BleachRating';
import DBSeriesRating from './components/DBSeriesRating';
import HxHRating from './components/HxHRating';
import OnePieceRating from './components/OnePieceRating'; // Import OnePieceRating component
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
              <Link to="/dbseries" className="button">
                DBSeries Rating
              </Link>
              <Link to="/hxh" className="button">
                HxH Rating
              </Link>
              <Link to="/onepiece" className="button"> {/* Add link to OnePiece Rating */}
                One Piece Rating
              </Link>
            </div>
          </div>

          <Routes>
            <Route path="/naruto" element={<NarutoRating />} />
            <Route path="/bleach" element={<BleachRating />} />
            <Route path="/dbseries" element={<DBSeriesRating />} />
            <Route path="/hxh" element={<HxHRating />} />
            <Route path="/onepiece" element={<OnePieceRating />} /> {/* Add route for OnePiece Rating */}
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
