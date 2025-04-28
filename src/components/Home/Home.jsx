import React from 'react'
import Navbar from '../Navbar'
import First from './First'
import Second from './Second'
import Footer from './Footer'
import Contact from '../Menu/Contact'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <First/>
        <Second/>
        <Contact />
        <Footer/>
    </div>
  )
}

export default Home