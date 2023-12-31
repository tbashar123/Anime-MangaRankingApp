import React from 'react';

function SideBar() {
  return (
    <aside>
      <nav>
        <h3>My Favorite Anime, click on the links to find out more</h3>
        <button onClick={() => window.open('https://www.imdb.com/title/tt0409591/?ref_=fn_al_tt_2')}>
          Naruto
        </button>
        <button onClick={() => window.open('https://www.imdb.com/title/tt0988824/')}>
          Naruto Shippuden
        </button>
        <button onClick={() => window.open('https://www.imdb.com/title/tt0434665/?ref_=fn_al_tt_1')}>
          Bleach
        </button>
        <button onClick={() => window.open('https://www.imdb.com/title/tt0388629/?ref_=fn_al_tt_1')}>
          One Piece
        </button>
        <button onClick={() => window.open('https://www.imdb.com/title/tt0088509/?ref_=nv_sr_srsg_3_tt_8_nm_0_q_dragonball')}>
          DragonBall
        </button>
        <button onClick={() => window.open('https://www.imdb.com/title/tt0214341/?ref_=fn_al_tt_1')}>
          DragonBall Z
        </button>
        <button onClick={() => window.open('https://www.imdb.com/title/tt2098220/')}>
          Hunter X Hunter
        </button>
      </nav>
    </aside>
  );
}

export default SideBar;
