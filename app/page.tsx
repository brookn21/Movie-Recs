// import Image from "next/image";
"use client"

import MovieHolder from "@/components/MovieHolder";
import { useState } from 'react';
import Link from 'next/link';




export default function Home() {

const [movies, setMovies] = useState([]);

// const itemsArray = page.data.items;
// *trending* https://api.themoviedb.org/3/movie/popular?
// https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1


const callAPI = async () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`);
    const data = await res.json();
    setMovies(data.results);
  } catch (err) {
    console.log(err);
  }
};
  
  // let movies = [
  //   {
  //     id:1,
  //     name:"Inception",
  //     img:"https://i.ebayimg.com/images/g/TM4AAOSwhtpfyUQV/s-l1600.jpg"
  //   },
  //   {
  //     id:2,
  //     name:"Interstellar",
  //     img:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_UF894,1000_QL80_.jpg"
  //   },
  //   {
  //     id:3,
  //     name:"The Shawshank Redemption",
  //     img:"https://m.media-amazon.com/images/I/71715eBi1sL._AC_UF894,1000_QL80_.jpg"
  //   },
  //   {
  //     id:4,
  //     name:"The Amazing Spider-Man",
  //     img:"https://www.hometheaterseattle.com/cdn-cgi/image/quality%3D85/assets/images/the-amazing-spider-man-2012.jpg"
  //   },
  //   {
  //     id:5,
  //     name:"Godzilla",
  //     img:"https://m.media-amazon.com/images/I/5198k3pCKqL._AC_UF894,1000_QL80_.jpg"
  //   },
  //   {
  //     id:6,
  //     name:"Godzilla",
  //     img:"https://m.media-amazon.com/images/I/5198k3pCKqL._AC_UF894,1000_QL80_.jpg"
  //   },
  //   {
  //     id:7,
  //     name:"Godzilla",
  //     img:"https://m.media-amazon.com/images/I/5198k3pCKqL._AC_UF894,1000_QL80_.jpg"
  //   },
  //   {
  //     id:7,
  //     name:"Godzilla",
  //     img:"https://m.media-amazon.com/images/I/5198k3pCKqL._AC_UF894,1000_QL80_.jpg"
  //   },
  //   {
  //     id:7,
  //     name:"Godzilla",
  //     img:"https://m.media-amazon.com/images/I/5198k3pCKqL._AC_UF894,1000_QL80_.jpg"
  //   },
  // ]
    // console.log(movies)
  const renderMovies = movies.map((movie)=><MovieHolder 
  movie={movie}
  key={movie.id}/>
  )
  
  return (
    <main className="">
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
  <div className="bg-gray-200 p-4">Item 1</div>
  <div className="bg-gray-200 p-4">Item 2</div>
  <div className="bg-gray-200 p-4">Item 3</div>
  <div className="bg-gray-200 p-4">Item 3</div>
  <div className="bg-gray-200 p-4">Item 3</div>
  <div className="bg-gray-200 p-4">Item 3</div>
  <div className="bg-gray-200 p-4">Item 3</div>
  <div className="bg-gray-200 p-4">Item 3</div>
  <div className="bg-gray-200 p-4">Item 3</div>

</div> */}
      <div className="grid grid-cols-5 flex space-x-5 p-5 gap-2 ">
        {renderMovies}
        <button onClick={callAPI}>Make API call</button>
      </div>
    </main>
  );
}
