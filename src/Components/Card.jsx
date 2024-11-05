// import React from 'react'
import cardData from '../api/cardData.json'

const Card = () => {
  return (
    <>
        <h1 className='font-bold text-3xl text-center my-8'>This is from the inbuilt api.</h1>

<div className='w-screen bg-blue-500 py-4'>

    <ul className='flex gap-4 w-screen overflow-x-scroll snap-x snap-mandatory px-4'>
        {cardData.map((CurElem) =>{
            return(
        <li key={CurElem.id} id={CurElem.id} className='bg-gray-800 text-white rounded-md p-4 flex flex-col min-w-72 snap-center'>
            <p>Name : {CurElem.name}</p>
            <p>DOB : {CurElem.dob}</p>
            <p>Address : {CurElem.address}</p>
        </li>
            )
        })}
    </ul>
</div>
    </>
  )
}

export default Card