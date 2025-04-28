import React from 'react'
import Navbar from '../Navbar'
import Delivery from './Delivery'
import Dishes from './Dishes'
import Main from './Main'
import Footer from '../Home/Footer'
import Contact from '../Menu/Contact'

const Order = () => {
  return (
    <div>
      <Navbar/>
      <Delivery/>
      <Dishes/>
      <Main/>
      <Contact />
      <Footer/>
    </div>
  )
}

export default Order