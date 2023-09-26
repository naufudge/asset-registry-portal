import React from 'react'

const Search = () => {
  return (
    <div className='text-center'>
        <input 
        className='px-2 border-gray-500 border-2 rounded-full my-5 '
        type='text'
        />
        <button className='ml-2 px-2 py-1 pt-2 bg-purple-400 rounded-full text-sm text-white'>search</button>
    </div>
  )
}

export default Search
