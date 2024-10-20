import React from 'react'
import Navbar from '../Navbar'
import Delivery from './Delivery'
import Dishes from './Dishes'
import Main from './Main'
import Contact from '../Home/Contact'
import Footer from '../Home/Footer'

const Order = () => {
  return (
    <div>
      <Navbar/>
      <Delivery/>
      <Dishes/>
      <Main/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Order