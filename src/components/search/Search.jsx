'use client';

import React from 'react'
import './search.css'
import { useState } from 'react'
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const getAsset = async () => {
    try {
      var results = [];
      const response = await axios.get('api/assets');
      const asset_register = response.data.assets
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
      setResults(results)
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
        className='search-button duration-200 ml-4 px-3 bg-purple-300 rounded-full text-white drop-shadow-lg hover:bg-purple-400'
        onClick={getAsset}
        >
          Search
        </button>
        <div className='container text-center grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10'>
        {results.map((item, index) => (
          <div key={index} className='text-sm item bg-white rounded-md drop-shadow-lg p-4 transform duration-300 hover:bg-purple-300 hover:cursor-pointer hover:scale-125'>
            <span className='font-bold'>{item[1]}</span>
            <br/>
            <span>{item[0]}</span>
            <br/>
            <span>{item[2]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}


export default Search;
