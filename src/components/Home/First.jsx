import React from 'react'
import { Link } from 'react-router-dom'

const First = () => {
  return (
    <div className='bg-customYellow px-20 py-28'>
      <h3 className='text-4xl font-bold'>OPEN FOR DELIVERY & PICK UP</h3>
      <h1 className='text-8xl font-bold w-7/12 text-red-600 pt-10 pb-10'>GET IT WHILE IT'S HOT</h1>
      <Link className='bg-red-600 text-white px-10 py-3 text-lg border border-transparent hover:bg-white transition-all duration-300 hover:text-customRed hover:border-customRed'
      to={'/order'}>
       Order Online
      </Link>
    </div>
  )
}

export default First