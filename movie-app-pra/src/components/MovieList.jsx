import React from 'react';
import '../App.css'

function MovieList({movies,favouriteComponent,handleFavouritesClicks}) {
  const OverlayOption = favouriteComponent
  return (
    <>
        {
        movies.map((movie,index) => (
          <div key={index} className='example image-container inline-block w-48 h-72 overflow-hidden bg-gray-200 rounded-lg shadow-md mx-2'>
            <img src={movie.Poster} alt="movie-poster" className='w-full h-full object-cover'/>
            <div 
              onClick={() => handleFavouritesClicks(movie)}
              className='overlay absolute top-0 left-0 flex items-center justify-center'
            >
              <OverlayOption/>
            </div>
          </div>
          )
        )
        }
    </>
  )
}

export default MovieList