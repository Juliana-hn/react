import { useContext, useMemo } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function ColorSchemesExample() {
  const { cart } = useContext(CartContext);
  const totalPrice = useMemo(
    () => cart.reduce((total, producto) => total + producto.price * producto.count, 0),
    [cart]
  );
  const token = false;
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="shadow-sm mb-4">
        <Container>
          <Nav className="me-auto">
          <Nav.Link as= {Link} to='/'> 🍕Home </Nav.Link>
            {/*DEJO AMBAS ALTERNATIVAS:
            <Link to="/" className="nav-link text-dark px-3 py-2 rounded hover-effect">🍕Home</Link>*/}
            {token ? (
              <>
                <Link to="/profile" className="nav-link text-dark px-3 py-2 rounded hover-effect">🔓Profile</Link>
                <Link to="/logout" className="nav-link text-dark px-3 py-2 rounded hover-effect">🔒Logout</Link>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link text-dark px-3 py-2 rounded hover-effect">🔐Login</Link>
                <Link to="/register" className="nav-link text-dark px-3 py-2 rounded hover-effect">🔐Register</Link>
              </>
            )}

          <Link to="/cart" className="nav-link text-dark px-3 py-2 rounded hover-effect total">
            🛒 Total: ${totalPrice.toLocaleString()}
          </Link>
            {token && <Nav.Link href="#token" className="nav-link text-success px-3 py-2 rounded token">✅ Token Activo</Nav.Link>}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
  