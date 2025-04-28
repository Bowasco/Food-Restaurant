import React from 'react'
import Navbar from '../Navbar'
import Cart from './Cart'
import ContactPage from '../Home/Contact'
import Contact from '../Menu/Contact'
import Footer from '../Home/Footer'

const CartPage = () => {
  return (
    <div>
        <Navbar />
        <Cart />
        <Contact />
        <Footer />
    </div>
  )
}

export default CartPage