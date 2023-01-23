import React, {useState, useEffect} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";



function GifListContainer(){

   const [gifs, setGifs] = useState([])
   const [search, setSearch] = useState("")

   useEffect((search="dolphin") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=9kGMaikBINXizUjeUnMUOcTFOTy3Y1Oh&rating=g&limit=3`)
    .then((res) => res.json())
    .then(({data}) => setGifs(data.map((gif) => gif.images.original.url)));
   }, [])



    function handleSubmit(e){
        e.preventDefault();
       if(search.length > 0){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=9kGMaikBINXizUjeUnMUOcTFOTy3Y1Oh&rating=g&limit=3`)
        .then((res) => res.json())
        .then(({data}) => setGifs(data.map((gif) => gif.images.original.url)))
        .catch(() => alert("Something went wrong"))
       }
    }



    return (
        <div>
        <GifSearch handleSubmit = {handleSubmit} search = {search} setSearch = {setSearch}/>
        <GifList gifs = {gifs}/>

        </div>
    )
}

export default GifListContainer;