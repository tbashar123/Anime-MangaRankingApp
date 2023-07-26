import React from 'react';
import AnimeCard from './AnimeCard';

function MainContent(props) {
  const { animeCatalog } = props;

  if (!animeCatalog) {
    // Loading state while waiting for the API response
    return <p>Loading...</p>;
  }

//   if (animeCatalog.length === 0) {
//     // No anime found
//     return <p>No anime found.</p>;
//   }

  return (
    <main>
      <div className="main-head">
        <form className="search-box" onSubmit={props.HandleSearch}>
          <input
            type="search"
            placeholder="Search for an Anime..."
            required
            value={props.search}
            onChange={(e) => props.SetSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="anime-Catalog">
        {animeCatalog.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </main>
  );
}

export default MainContent;