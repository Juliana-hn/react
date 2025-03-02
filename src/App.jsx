import {BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import {NotFound, Pizza, Register, Login, Home, Cart} from './pages/pagesindex'
import {Card, Footer, Header, Navbar, Profile} from './components/index'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/pizza/p001' element={<Pizza />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}


export default App
