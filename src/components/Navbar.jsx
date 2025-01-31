import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  const total = 25000;
  const token = false;
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">🍕Home</Nav.Link>
            {token ? (
              <>
            <Nav.Link href="#profiles">🔓Profile</Nav.Link>
            <Nav.Link href="#logout">🔒Logout</Nav.Link>
            </>) : (
              <>
            <Nav.Link href="#login">🔐Login</Nav.Link>
            <Nav.Link href="#register">🔐Register</Nav.Link>
            </>) }

            <Nav.Link href="#pricing" className="total">🛒Total</Nav.Link>
            
            {token && <Nav.Link href="#token" className="token">✅ Token Activo</Nav.Link>}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
  