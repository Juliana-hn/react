import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Profile = () => {
  return (
    <Form>
      <Form.Group as={Row} className="m-5" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email: 
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="email@example.com" />
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

      <button className="btn btn-primary m-5" type='submit'>
                    Cerrar Sesión
                </button>
    </Form>
  );
}

export default Profile