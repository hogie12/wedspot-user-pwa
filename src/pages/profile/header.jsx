import React from "react";
import logo from "../../component/image/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Dashboard } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function ProfileHeader() {
  return (
    <div>
      <Navbar bg="light" expand="md">
        <div className="ps-5 pt-3">
          <Navbar.Brand className="d-flex align-items-center">
            <img src={logo} alt="logo" />
            <Link
              to="/"
              className="d-flex align-items-center ps-5 text-black text-decoration-none"
            >
              <Dashboard />
              <p className="ps-2">Back To Home</p>
            </Link>
          </Navbar.Brand>
        </div>
      </Navbar>
    </div>
  );
}
