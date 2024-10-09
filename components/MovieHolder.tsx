import React from 'react'
import Link from "next/link";
import Image from "next/image";


function MovieHolder(props) {
  const { movie, user } = props
// width:15rem border-radius:1rem rounded-2xl
// transition-transform group-hover:scale-110 duration-200
  return (
    <div className='h-full hover:opcaity-75 border-white 
    border-2 shadow-sm hover:border-movie border-black hover:shadow-lg' >
      <Link href="/">
      {/* <h1>{movie.name}</h1> */}
      {/* `string text ${expression} string text` */}
      {/* https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + ${movie.poster_path} + .jpg` */}
      <img src= {`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
      width={300} height={300} className="h-full hover:opcaity-75 border-white 
    border-2 shadow-sm hover:border-movie border-black hover:shadow-lg"/>
      </Link>
    </div>
  )
}

export default MovieHolder