import { Form } from "react-bootstrap";
import { CustomButton } from "../components/lib/CustomButton";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Spinner from "react-bootstrap/Spinner";

export const Login = () => {
  const [open, setOpen] = useState("none");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const closeModal = () => setOpen("none");
  const openLogin = () => setOpen("login");
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      closeModal();
      setIsLoading(false);
    }, 2000);
    console.log("email : ", email);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 20,
          height: "100%",
        }}
      >
        <h1>Marvel Api Call</h1>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "70%",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
          }}
        >
          <CustomButton onClick={openLogin}>Login</CustomButton>
          <CustomButton variant="secondary" onClick={() => setOpen("register")}>
            Register
          </CustomButton>
        </div>
      </div>
      <Modal onHide={closeModal} show={open === "login"} centered>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              Login
              {isLoading && (
                <Spinner animation="grow" variant="info" size="sm" />
              )}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel
              controlId="input"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel controlId="password" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <CustomButton variant="secondary" onClick={closeModal}>
              Cancel
            </CustomButton>
            <CustomButton
              variant="primary"
              type="submit"
              onSubmit={handleSubmit}
            >
              Login
            </CustomButton>
          </Modal.Footer>
        </Form>
      </Modal>
      <Modal onHide={closeModal} show={open === "register"} centered>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              Register
              {isLoading && (
                <Spinner animation="grow" variant="info" size="sm" />
              )}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel
              controlId="input"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel controlId="password" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <CustomButton variant="secondary" onClick={closeModal}>
              Cancel
            </CustomButton>
            <CustomButton
              variant="primary"
              type="submit"
              onSubmit={handleSubmit}
            >
              Login
            </CustomButton>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
