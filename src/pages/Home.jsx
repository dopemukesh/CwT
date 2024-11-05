/* eslint-disable no-unused-vars */
import React from 'react'
import Members from './Member'
import Resources from './Resources'

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[356px] to-blue-500 w-screen">
        <div className="container px-4 md:px-8 lg:px-32 flex flex-col font-medium items-center">
          {/* <h1 className='font-medium text-yellow-500 text-center w-fit px-4 py-2 rounded border border-yellow-500 cursor-pointer bg-yellow-500/20'>Website is Underconstruction ❌</h1> */}
          <h1 className='flex justify-center items-center md:text-3xl font-extrabold bg-yellow-500 mb-4'>Website is Underconstruction ❌</h1>
          <h1 className='flex justify-center items-center text-center text-3xl md:text-7xl font-extrabold'>Welcome to CodeWithTechries</h1>
        </div>

      </div>
      <Members />
      <Resources />
    </>
  )
}

export default Home