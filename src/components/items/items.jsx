// 'use client';

import React, { useContext } from 'react'
import './items.css'
import { asset_registry } from '../ConnectToExcel'
import { search } from '../search/Search'
const xlsx = require('xlsx');

const Items = () => {
  // const [searchResults, setSearchResults] = useState([])
  // const workbook = xlsx.readFile("src/NA Asset Register 2023.xlsx");
  const items = asset_registry();

  const hello = async () => {
    try {
      const response = await axios.get('api/routing');
      console.log("success");
      return response
    } catch(error) {
      console.log(error.message);
    }
  };

  // const handle_search = (searchTerm) => {
  //   var results = [];
  //   console.log(searchTerm);
  //   if (searchTerm) {
  //     items.filter(item => {
  //       if(item[0].toLowerCase().startsWith(searchTerm.toLowerCase()) || 
  //       item[0].toLowerCase().includes(searchTerm.toLowerCase())
  //       ){
  //         results.push(item)
  //       }
  //     })
  //   } else if (!searchTerm) {
  //     results = items;
  //   }
  //   return results;
  // }

  console.log(search)
  // console.log(items);
  return (
    // <div className='container text-center flex flex-row gap-10'>
    <div>
      <div className='container text-center grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10'>
        {items.map((item) => (
          <div className='text-sm item bg-white rounded-md drop-shadow-lg p-4 transform duration-300 hover:bg-purple-300 hover:cursor-pointer hover:scale-125'>
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

export default Items
