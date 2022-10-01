import React, {useEffect, useState} from "react";
// import { movies } from "../data";

function Movies() {
const[movies,setMovies] =useState([]);
// const params= useParams()

useEffect(() =>{
  fetch("/movies")
  .then(r => r.json())
  .then(movies => setMovies(movies))
}, [])

const{title, name, genres} = movies


  return (
    <>
    <h1> Movies Page</h1>
    <div>
<h2>{title}</h2>
<h3>{name}</h3>
<div > {genres}</div>

    </div>

    </>
  )
   
}

export default Movies;
