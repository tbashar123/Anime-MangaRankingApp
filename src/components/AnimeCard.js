import React from 'react'

function AnimeCard({ anime }) {
    return ( <
        artcle className = "anime-card" >
        <
        a href = { anime.url }
        target = "_blank"
        rel = "noreferrer" >
        <
        figure >
        <
        img src = { anime.image_url }
        alt = "Anime Image" / >
        <
        /figure> <
        h3 > { anime.title } < /h3> < /
        a > <
        /artcle>
    )
}

export default AnimeCard