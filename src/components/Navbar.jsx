import { useContext, useMemo } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { UserContext } from "../context/UserContext";

function ColorSchemesExample() {
  const { cart } = useContext(CartContext);
  const totalPrice = useMemo(
    () => cart.reduce((total, producto) => total + producto.price * producto.count, 0),
    [cart]
  );
  
  // HITO 7 RUTAS
  const { user, logout } = useContext(UserContext) 
  const navigate = useNavigate();
  const cerrarsesion = () => {
    logout() ;
    navigate ("/")
  } 
  const validateRoot = ({isActive}) => (isActive ? 'active nav-link':'nav-link')

  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="shadow-sm mb-4">
        <Container>
          <Nav className="me-auto">
          <NavLink className={validateRoot} to='/'> 🍕Home </NavLink>
          {/* Mostrar Profile y Logout si el usuario está logueado */}
          {user && (<NavLink className={validateRoot} to="/profile">🔓Profile</NavLink>)}
          {user && (
            <button className='btn btn-outline-light btn-sm' onClick={handleLogout}>Cerrar Sesión</button>
          )}
           {/* Mostrar Login y Register si el usuario no está logueado */}
          {!user && (
            <>
              <NavLink className={validateRoot} to="/login">🔐Login</NavLink>
              <NavLink className={validateRoot} to="/register">🔐Register</NavLink>
            </>
          )}
          <NavLink className={validateRoot} to="/cart">🛒 Total: ${totalPrice.toLocaleString()}</NavLink>
        </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
  