import { useContext } from "react";
import { Form, Row, Col, Button, Stack, Alert } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { loginUser, loginError, loginInfo, updateLoginInfo, isLoginLoading } =
    useContext(AuthContext);
  return (
    <>
      <Form on onSubmit={loginUser}>
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
                onChange={(e) => {
                  updateLoginInfo({ ...loginInfo, email: e.target.value });
                }}
              />
              <Form.Control
                type="password"
                placeholder="Password"
                autoComplete="off"
                onChange={(e) => {
                  updateLoginInfo({ ...loginInfo, password: e.target.value });
                }}
              />
              <Button variant="primary" type="submit">
                {isLoginLoading ? "Loging in" : "Login"}
              </Button>
              {loginError?.error && (
                <Alert variant="danger">
                  <p>{loginError?.message.error}</p>
                </Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default Login;
