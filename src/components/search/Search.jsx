import React from 'react'
import './search.css'

const Search = () => {
  return (
    <div className='text-center'>
        <input 
        className='search-box px-5 rounded-full my-5 w-10 drop-shadow-lg hover:bg-gray-100 hover:cursor-text active:bg-gray-200'
        type='text'
        placeholder='What are you looking for?'
        />
        {/* <button className='search-button ml-5 px-3 bg-purple-400 rounded-full text-white'>Search</button> */}
    </div>
  )
}

export default Search
