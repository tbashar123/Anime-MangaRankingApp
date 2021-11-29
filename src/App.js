import { useState } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent'

function App() {
    //arrays
    const [animeCatalog, SetAnimeCatalog] = useState([]); // this will hold main anime when we search for it 
    const [FavoriteAnime] = useState([]); // my favorite Anime
    const [search, SetSearch] = useState(""); // search

    const HandleSearch = e => {
        e.preventDefault();

        FetchAnime(search);
    }

    const FetchAnime = async(query) => {
        const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
            .then(res => res.json());

        console.log(temp.results);


        SetAnimeCatalog(temp.results);
    }

    return ( <
        div className = "App" >
        <
        Header / >
        <
        div className = "content-wrap" >
        <
        SideBar FavoriteAnime = { FavoriteAnime }
        /> <
        MainContent HandleSearch = { HandleSearch }
        search = { search }
        SetSearch = { SetSearch }
        animeCatalog = { animeCatalog }
        / > < /div > <
        /div>
    );
}

export default App;