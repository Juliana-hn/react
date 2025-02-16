import React from 'react'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/navbar'
import Register from './components/Register'
import Login from './components/Login'
import Cart from './components/Cart'

const App = () => {
  return (
    <>
    <Navbar />
    {/*<Login />*/}
    <Home />
    {/*<Register />*/}
    <Cart />
    <Footer />

    </>
  )
}


export default App
