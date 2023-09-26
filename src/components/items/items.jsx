import React from 'react'
import './items.css'

const Items = () => {
  return (
    // <div className='container text-center flex flex-row gap-10'>
    <div className='container text-center grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
      <div className='item bg-white rounded-md drop-shadow-lg py-5 hover:bg-purple-300 hover:cursor-pointer'>
        <span className='font-bold'>High back chair</span>
        <br/>
        <span>Asset Number</span>
        <br/>
        <span>Current Location</span>
      </div>

      <div className='item bg-white rounded-md drop-shadow-lg py-5 hover:bg-purple-300 hover:cursor-pointer'>
        <span className='font-bold'>Medium back chair</span>
        <br/>
        <span>Asset Number</span>
        <br/>
        <span>Current Location</span>
      </div>

      <div className='item bg-white rounded-md drop-shadow-lg py-5 hover:bg-purple-300 hover:cursor-pointer'>
        <span className='font-bold'>Low back chair</span>
        <br/>
        <span>Asset Number</span>
        <br/>
        <span>Current Location</span>
      </div>
      
      <div className='item bg-white rounded-md drop-shadow-lg py-5 hover:bg-purple-300 hover:cursor-pointer'>
        <span className='font-bold'>Back chair</span>
        <br/>
        <span>Asset Number</span>
        <br/>
        <span>Current Location</span>
      </div>
    </div>
  )
}

export default Items
