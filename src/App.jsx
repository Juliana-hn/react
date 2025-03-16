import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import React, { useContext } from 'react'
import {NotFound, Pizza, Register, Login, Home, Cart} from './pages/pagesindex'
import {Card, Footer, Header, Navbar, Profile} from './components/index'
import CartProvider from './context/CartContext'
import UserProvider from './context/UserContext'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <UserProvider>
      <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={ <Cart /> } />            
            <Route path="/pizza/:id" 
                   element={<Pizza />}/>
            <Route path="/profile" 
                   element={<ProtectedRoute> 
                    <Profile/> 
                    </ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
      </CartProvider>
      </UserProvider>
    </BrowserRouter>
    </>
  )
}

export default App
