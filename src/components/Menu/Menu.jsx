import React from 'react'
import Navbar from '../Navbar'
import FirstMenu from './FirstMenu'
import MainMenu from './MainMenu'
import Contact from './Contact'
import Footer from '../Home/Footer'

const Menu = () => {
  return (
    <div>
        <Navbar />
        <FirstMenu />
        <MainMenu />
        <Contact />
        <Footer />
    </div>
  )
}

export default Menu