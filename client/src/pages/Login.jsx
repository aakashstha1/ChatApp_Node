import { Form, Row, Col, Button, Stack, Alert } from "react-bootstrap";

function Login() {
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
              <h2>Login</h2>
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
                Login
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

export default Login;
