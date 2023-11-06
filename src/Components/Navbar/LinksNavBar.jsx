import React, { useState } from 'react'

export default function LinksNavBar() {


  return (
    <>
      <div className="bg-indigo-950 py-4 lg:py-8 text-white font-open shadow-black shadow-md">
        <div className="container flex items-center justify-between space-x-2 lg:space-x-10">
          {/* Navigasyon */}
          <nav className='block lg:flex justify-between lg:flex-1'>
            {/* Menu */}
            <div id='toggleActive' className='justify-self-center block me-3 ms-0 lg:flex items-center text-sm lg:text-lg space-x-2 lg:space-x-8'>
              <a href="#home" className='self-center block ms-2 mb-3 lg:mb-0 lg:ms-0 lg:flex text-white text-xs lg:text-lg hover:text-blue-400 transition duration-500'>Home</a>
              <a href="#about" className='self-center block mb-3 lg:mb-0 lg:flex text-white text-xs lg:text-lg hover:text-blue-400 transition duration-500'>About</a>
              <a href="#contact" className='self-center block mb-3 lg:flex lg:mb-0 text-white text-xs lg:text-lg hover:text-blue-400 transition duration-500'>Contact</a>
            </div>
           
          </nav>
        </div>
      </div>
    </>
  )
}