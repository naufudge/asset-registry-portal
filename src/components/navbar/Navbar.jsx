import React from 'react'

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
];

const value = "";

const Navbar = () => {
  return (
    <div>
      <header className='bg-gray-100 px-8 py-5 mb-8'>
        <nav className='flex justify-between items-center w-[92%] mx-auto text-xl text-gray-800'>
          <div className='logo'>National Archives</div>
          <div className=''>
            <ul className='flex items-center gap-[3vw]'>
              <li><a className='hover:text-gray-500' href='#'>About</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
