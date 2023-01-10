import React from 'react'
import Navbar from '../components/Navbar'
import HomePage from '../components/HomePage'
import Products from '../components/Products'
import Newlester from '../components/Newlester'
import Footter from '../components/Footter'

const MainPage = () => {
  return (
    <div>
        <Navbar />
        <HomePage />
        <Products />
        <Newlester />
        <Footter />
    </div>
  )
}

export default MainPage