import React from "react";
import logo from "../image/Logo.png";
import SignIn from "./modal/modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { AvatarIcon, Notif } from "./dropdown/login";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header({ background = "white" }) {
  const { data } = useSelector((state) => state.userData);
  const token = localStorage.getItem("token");

  return (
    <div>
      <Navbar bg={background} className="d-flex justify-content-between">
        <Navbar.Brand className="ps-5">
          <div className="d-flex align-items-center ">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <Nav.Item className="ps-5">
              <h3>Search Venue or Wedding Organizer</h3>
            </Nav.Item>
          </div>
        </Navbar.Brand>
        {token ? (
          <Nav.Item className="pe-5">
            <div className="d-flex">
              <Notif />
              <AvatarIcon avatar={data?.user_avatar} />
            </div>
          </Nav.Item>
        ) : (
          <Nav.Item className="pe-5">
            <SignIn />
          </Nav.Item>
        )}
      </Navbar>
    </div>
  );
}

export default Header;
