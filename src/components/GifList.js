import React from "react";

function GifList({gifs}){

   const gifList = gifs.map((gif) => {
    return (
    <li key={gif}> <img src={gif} alt="gif" ></img> </li>
    )
   })


    return (
        <ul>
        {gifList}
        </ul>
    )
}

export default GifList;