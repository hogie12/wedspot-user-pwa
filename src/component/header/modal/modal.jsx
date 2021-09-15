import React, { useState } from "react";
import "./modal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Container } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import Login from "./login";
import Register from "./register";

function SignIn() {
  const [show, setShowLogin] = useState(false);
  const [showreg, setShowRegister] = useState(false);
  return (
    <>
      <Button
        onClick={() => setShowLogin(true)}
        style={{
          background: "#455437",
          color: "white",
          width: "132px",
          margin: "0 12px",
          boxShadow: "#B5AF8F 0px 0px 1px",
        }}
      >
        Login
      </Button>
      <Button
        onClick={() => setShowRegister(true)}
        className="bg-light"
        style={{
          width: "132px",
          margin: "0 12px",
          boxShadow: "#e5e5e5 0px 0px 1px",
          color: " #455437",
        }}
      >
        Register
      </Button>

      {/* SIGN IN MODAL */}

      <Modal
        show={show}
        onHide={() => setShowLogin(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton></Modal.Header>
          <div className="d-flex">
            <img
              src="https://images.unsplash.com/photo-1609151162377-794faf68b02f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=560&ixid=MnwxfDB8MXxyYW5kb218MHx8d2VkZGluZ3x8fHx8fDE2MjkyMDk1NjQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600"
              alt="left"
              style={{
                zIndex: "1",
                marginTop: "-3.07rem",
                marginBottom: "-0.015rem",
                borderRadius: "0.23rem",
                width: "105%",
              }}
            />
            <Container className=" d-flex flex-column p-5 justify-content-center">
              <h1>Sign in to your account</h1>
              <Login />
              <div className="text-muted fw-bolder mt-1 text-center">
                Don't have an account ?
                <span
                  className="fw-bolder pink ps-1"
                  onClick={() => [setShowLogin(false), setShowRegister(true)]}
                >
                  Sign Up
                </span>
              </div>
            </Container>
          </div>
      </Modal>

      {/* SIGN UP MODAL */}

      <Modal
        show={showreg}
        onHide={() => setShowRegister(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton></Modal.Header>
        <div className="d-flex">
          <img
            src="https://images.unsplash.com/photo-1609151162377-794faf68b02f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=560&ixid=MnwxfDB8MXxyYW5kb218MHx8d2VkZGluZ3x8fHx8fDE2MjkyMDk1NjQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600"
            alt="left"
            style={{
              zIndex: "1",
              marginTop: "-3.07rem",
              marginBottom: "-0.015rem",
              borderRadius: "0.23rem",
              width: "105%",
            }}
          />
          <Container className=" d-flex flex-column p-5 justify-content-center">
            <Register />
            <div className="text-muted fw-bolder text-center">
              Already have an account ?
              <span
                className="fw-bolder pink ps-1"
                onClick={() => [setShowLogin(true), setShowRegister(false)]}
              >
                Sign In
              </span>
            </div>
          </Container>
        </div>
      </Modal>
    </>
  );
}

export default SignIn;
