import { Form, Row, Col, Button, Stack, Alert } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
function Register() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Form>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "8%",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <h2>Register</h2>
              <h2>{user.name}</h2>

              <Form.Control type="text" placeholder="Name" autoComplete="off" />
              <Form.Control
                type="email"
                placeholder="Email"
                autoComplete="off"
              />
              <Form.Control
                type="password"
                placeholder="Password"
                autoComplete="off"
              />
              <Button variant="primary" type="submit">
                Register
              </Button>
              <Alert variant="danger">
                <p>An error occured!</p>
              </Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default Register;
