'use client';

import './search.css'
import { useState, useEffect, Suspense } from 'react'
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Loading from '../../loading'
import AssetCounter from './assetCounter'

const Search = () => {
  const router = useRouter()
  
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [assetRegister, setAssetRegister] = useState(null)
  const [assetCount, setAssetCount] = useState(0)

  useEffect(() => {
    async function getAssetsFromApi() {
      const response = await fetch("http://10.12.29.68:8000/assets")
      const asset_register = await response.json()
      if (asset_register.length != 0) {
        setAssetRegister(asset_register)
        setAssetCount(asset_register.length)
      }
    }

    try {
      if (!assetRegister) getAssetsFromApi()
    } catch (error) {
      console.log(error.message)
    }
  }, [assetRegister, assetCount])

  const getAsset = async () => {
    try {
      var results = [];
      if (searchTerm) {
        const _search = searchTerm.toLowerCase()
        assetRegister.filter(item => {
          if(item.name.toLowerCase().startsWith(_search) ||
          item.name.toLowerCase().includes(_search)) {
            results.push(item);
          } else if (item.asset_number.toLowerCase().includes(_search)) {
            results.push(item);
          } else if (item.present_location.toLowerCase().includes(_search)) {
            results.push(item);
          }
        })
      } else {
        results = assetRegister
      }
      setResults(results);
    } catch(error) {
      console.log(error.message)
    }
  }

  const handleKeypress = e => {
    // It triggers by pressing the enter key
    // The keyCode for the Enter key is 13
    if (e.keyCode === 13) {
      getAsset();
    }
  };

  const asset_redirect = (id) => {
    router.push(`/assets/${id.toString()}`)
  }

  return (
    <div className='text-center'>
      <Suspense fallback={<Loading />}>
        <AssetCounter count={assetCount} />
      </Suspense>
        <input
        className='search-box px-5 rounded-full drop-shadow-lg my-5 md:w-[500px] sm:w-[350px] hover:bg-gray-100 hover:cursor-text active:bg-gray-200 focus:outline-none'
        type='text'
        placeholder='What are you looking for?'
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value)
          getAsset()
        }}
        onKeyDown={handleKeypress}
        />
        <button
        className='search-button duration-200 ml-4 px-3 bg-purple-300 rounded-full text-white drop-shadow-lg hover:bg-purple-400'
        onClick={getAsset}
        >
          Search
        </button>

        <div className='container text-center items-stretch grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-7 place-items-center'>
        {results.map((item, index) => (
          // <div 
          // key={index} 
          // className='text-sm item h-full bg-white rounded-md drop-shadow-md p-5 transform duration-300 hover:bg-purple-300 hover:cursor-pointer hover:scale-125'
          // onClick={() => asset_redirect(item.asset_number)}>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='text-sm item h-full bg-white rounded-md drop-shadow-md p-5 transform duration-300 hover:bg-purple-300 hover:cursor-pointer hover:scale-125'
            onClick={() => asset_redirect(item.asset_number)}
          >
            <div className='grid-cols-1'>
              <div className='font-bold'>{item.name}</div>
              <div>{item.asset_number}</div>
              <div>{item.present_location}</div>
            </div>
            </motion.div>
            
        ))}
      </div>
    </div>
  )
}


export default Search;
