import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { Button, Alert } from "react-bootstrap";
import "./message.css";

export function SuccessMessage(message) {
  const [show, setShow] = useState(true);

  return (
    <div className="position">
      <Alert show={show} variant="success">
        <div className="d-flex justify-content-between ">
          <h3 className="pe-3">{message}</h3>
          <Button onClick={() => setShow(false)} variant="" className="fw-bold">
            DISMISS
          </Button>
        </div>
      </Alert>
    </div>
  );
}

export function FailedMessage({ message }) {
  const [show, setShow] = useState(true);
  const { isLoading } = useSelector((state) => state.userData);

  useEffect(() => {
    setShow(true);
  }, [isLoading]);

  return (
    <div className="position">
      <Alert show={show} variant="danger">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="pe-5">{message}</h3>
          <Button onClick={() => setShow(false)} variant="" className="fw-bold">
            DISMISS
          </Button>
        </div>
      </Alert>
    </div>
  );
}
