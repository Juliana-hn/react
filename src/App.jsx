import React from 'react'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/navbar'
import Register from './components/Register'
import Login from './components/Login'

const App = () => {
  return (
    <>
    <Navbar />
    <Login />
    {/*<Home />*/} 
    <Register />
    <Footer />
    </>
  )
}


export default App
