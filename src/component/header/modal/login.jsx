/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import { Divider, Button, Icon } from "semantic-ui-react";
import { userLogin } from "../../../store/action/user";
import { FailedMessage } from "../../message/message";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  // const { isError, message } = useSelector((state) => state.userData);

  const handleLogin = (e) => {
    e.preventDefault();
    if (login.email === "" || login.password === "") {
      alert("please fill all form");
    } else {
      dispatch(userLogin(login.email, login.password));
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleLogin(e)}>
        <div className="form-floating mb-0">
          <input
            type="email"
            className="form-control rounded-4"
            id="floatingInput"
            placeholder="email"
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating my-2 ">
          <input
            type="password"
            className="form-control rounded-4"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => {
              setLogin({ ...login, password: e.target.value });
            }}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button
          className=" text-light w-100 btn btn-lg rounded-4 green watch-btn fw-bold p-3 mb-4"
          type="submit"
          style={{
            background: "#455437",
            fontSize: "1.1rem",
          }}
          onClick={handleLogin}
        >
          Sign In
        </button>
        {/* <p className="pink mb-5">FORGOT PASSWORD</p> */}
        {/* 
        <Divider horizontal>Or</Divider>

        <div className="d-flex mt-5 mb-5">
          <Button
            fluid
            basic
            size="huge"
            color="red"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://wedspot.gabatch13.my.id/user/auth/google";
            }}
          >
            <Icon name="google" />
            Google
          </Button>
          <Button fluid basic size="huge" color="blue">
            <Icon name="facebook f" />
            Facebook
          </Button>
        </div> */}
      </form>
      {/* {isError && (
        <div>
          <FailedMessage message={message[0]} />
        </div>
      )} */}
    </div>
  );
}

export default Login;
