import React from 'react'
import MTC from "../images/download-removebg-preview (1).png"
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  const location = useLocation();


  return (
    <div className='flex justify-between bg-white py-3 px-20 sticky top-0'>
      <div className='flex'>
        <img width={80} src={MTC} alt="" />
      </div>
      <div className='flex'>
        <ul className='flex gap-10'>
          <Link to={'/'} className={`content-center text-xl hover:text-orange-500 ${location.pathname === '/' ? 'text-orange-500' : ''}`}>Home</Link>
          <Link to={'/menu'} className={`content-center text-xl hover:text-orange-500 ${location.pathname === '/menu' ? 'text-orange-500' : ''}`}>Menu</Link>
          <Link to={'/order'} className={`content-center text-xl hover:text-orange-500 ${location.pathname === '/order' ? 'text-orange-500' : ''}`}>Order Online</Link>
          <Link to={'/contact'} className={`content-center text-xl hover:text-orange-500 ${location.pathname === '/contact' ? 'text-orange-500' : ''}`}>Contact</Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar