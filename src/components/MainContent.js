import React from 'react';
import AnimeCard from './AnimeCard';

function MainContent(props) {
  const { animeCatalog, handleSearch, selectedAnime, setSelectedAnime, selectedArc, setSelectedArc, selectedFight, setSelectedFight } = props;

  return (
    <main>
      <div className="main-head">
        <form className="search-box" onSubmit={(e) => { e.preventDefault(); handleSearch(e.target.search.value); }}>
          <input
            type="search"
            name="search"
            placeholder="Search for an Anime..."
            required
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="anime-catalog">
        {animeCatalog.map((anime) => (
          <AnimeCard
            key={anime.mal_id}
            anime={anime}
            onClick={() => setSelectedAnime(anime)}
          />
        ))}
      </div>

      {/* Show selected anime/manga details */}
      {selectedAnime && (
        <div className="selected-anime">
          <h2>{selectedAnime.title}</h2>
          {/* Render arcs and fights selection for the selected anime/manga */}
          {/* ... (add your own UI and logic for selecting and rating arcs and fights) */}
        </div>
      )}
    </main>
  );
}

export default MainContent;

