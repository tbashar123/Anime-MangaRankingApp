// App.js
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import NarutoArcRanking from './components/NarutoArcRanking';
import BleachArcRanking from './components/BleachArcRanking';
import DBSeriesArcRanking from './components/DBSeriesArcRanking';
import HxHArcRanking from './components/HxHArcRanking';
import OnePieceArcRanking from './components/OnePieceArcRanking'; // Import OnePieceRating component
import yourImageSource from './imgs/animeseries.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <SideBar />

        <main>
          <div className="main-head">
            <h1>Anime/Manga Ranking App</h1>
            <p>
              Hello Anime and Manga fans, welcome to this wonderful website, where you can have fun ranking your favorite
              arcs and favorite fights from any of these series. You have to click any of these buttons to go to the page
              and play around with.
            </p>
            <div className="search-box">
              <Link to="/naruto" className="button">
                Naruto Arc Ranking
              </Link>
              <Link to="/bleach" className="button">
                Bleach Arc Ranking
              </Link>
              <Link to="/dbseries" className="button">
                DBSeries Arc Ranking
              </Link>
              <Link to="/hxh" className="button">
                HxH Arc Ranking
              </Link>
              <Link to="/onepiece" className="button"> {/* Add link to OnePiece Rating */}
                One Piece Arc Ranking
              </Link>
            </div>
          </div>

          <Routes>
            <Route path="/naruto" element={<NarutoArcRanking />} />
            <Route path="/bleach" element={<BleachArcRanking />} />
            <Route path="/dbseries" element={<DBSeriesArcRanking />} />
            <Route path="/hxh" element={<HxHArcRanking />} />
            <Route path="/onepiece" element={<OnePieceArcRanking />} /> {/* Add route for OnePiece Rating */}
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
