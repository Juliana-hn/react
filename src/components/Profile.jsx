import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { logout } = useContext(UserContext); // Accede a la función logout
  const navigate = useNavigate(); // Para redirigir al Home
  const handleLogout = (event) => {
    event.preventDefault(); 
    logout(); 
    navigate("/"); 
  };

  return (
    <Form>
      <Form.Group as={Row} className="m-5" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email: 
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="test@test.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="m-5" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>

      <button className="btn btn-primary m-5" onClick={handleLogout}>
                    Logout
                </button>
    </Form>
  );
}

export default Profile