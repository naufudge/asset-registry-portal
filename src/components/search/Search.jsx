'use client';

import React from 'react'
import './search.css'
import { useState } from 'react'
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const hello = async () => {
    try {
      var results = [];
      const response = await axios.get('api/assets');
      const asset_register = response.data.message
      if (searchTerm) {
        asset_register.filter(item => {
          if(item[0].toLowerCase().startsWith(searchTerm.toLowerCase()) || 
          item[0].toLowerCase().includes(searchTerm.toLowerCase())) {
            results.push(item);
          } else if (item[1].toLowerCase().includes(searchTerm.toLowerCase())) {
            results.push(item);
          }
        })
      } else {
        results = asset_register
      }

      console.log(results);
    } catch(error) {
      console.log(error.message);
    }
  }

  return (
    <div className='text-center'>
        <input 
        className='search-box px-5 rounded-full my-5 drop-shadow-lg hover:bg-gray-100 hover:cursor-text active:bg-gray-200 focus:outline-none'
        type='text'
        placeholder='What are you looking for?'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
        className='search-button duration-200 ml-3 px-3 bg-purple-200 rounded-full text-white drop-shadow-lg hover:bg-purple-400'
        onClick={hello}
        >
          Search
        </button>
    </div>
  )
}


export default Search
