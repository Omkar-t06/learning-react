import React from 'react'

function SearchBox({searchValue, setSearchValue}) {
  return (
    <div className='my-2 mx-2'>
        <input 
        className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 text-gray-800 placeholder-gray-500 transition duration-150' 
        placeholder='Type to search...'
        value={searchValue}
        onChange={(e)=>setSearchValue(e.target.value)}
        >
        </input>
    </div>
  )
}

export default SearchBox