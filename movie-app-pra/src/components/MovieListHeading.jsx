import React from 'react'

function MovieListHeading({heading}) {
  return (
    <div className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-2 rounded-md shadow-md'>
      <h1 className='text-xl md:text-2xl font-semibold text-white text-center'>
        {heading}
      </h1>
    </div>
  )
}

export default MovieListHeading