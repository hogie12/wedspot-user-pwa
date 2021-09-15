/* eslint-disable no-sequences */
import React, { useState } from "react";
import { useRouteMatch, Switch, Route, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Container,
  Grid,
  Avatar,
  Dialog,
  DialogTitle,
  DialogActions,
  makeStyles,
  Button,
} from "@material-ui/core";
import {
  Person,
  Notifications,
  ExitToApp,
  Assignment,
} from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./profile";
import Quotation from "./quotation";
import Notification from "./notification";

const useStyles = makeStyles((theme) => ({
  close: {
    position: "absolute",
    zIndex: "1",
    right: "7%",
    top: "2%",
    cursor: "pointer",
  },
  button: {
    width: "554px",
    margin: "1em",
    height: "55px",
  },
  logout: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "1rem",
    paddingTop: "1rem",
    cursor: "pointer",
  },
}));

export default function Sidebar() {
  const { path, url } = useRouteMatch();
  const [show, setShow] = useState(false);
  const { data } = useSelector((state) => state.userData);

  const classes = useStyles();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.replace("/");
  };

  return (
    <div className="bg-light">
      <Container className="pb-5">
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <div className="pt-5 pb-5">
              <div className="d-flex align-items-center pb-3 border-bottom border-2">
                <Avatar className="me-3" src={data.user_avatar} />
                <h3>{data.user_fullname}</h3>
              </div>
              <div className="ps-3 pb-3 border-bottom border-2">
                <NavLink
                  exact
                  to={`${url}`}
                  className="d-flex align-items-center mt-4 text-decoration-none"
                  activeStyle={{
                    color: "#C97C68",
                  }}
                >
                  <Person className="me-3" />
                  <p>Profile</p>
                </NavLink>
                <NavLink
                  to={`${url}/notification`}
                  className="d-flex align-items-center mt-5 text-decoration-none"
                  activeStyle={{ color: "#C97C68" }}
                >
                  <Notifications className="me-3" />
                  <p>Notification</p>
                </NavLink>
                <NavLink
                  to={`${url}/quotation`}
                  className="d-flex align-items-center mt-5 text-decoration-none"
                  activeStyle={{
                    color: "#C97C68",
                  }}
                >
                  <Assignment className="me-3" />
                  <p>Quotations</p>
                </NavLink>
              </div>
              <div className={classes.logout} onClick={() => setShow(true)}>
                <ExitToApp className="me-3" />
                <p>Log Out</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={10}>
            <div className="bg-white">
              <Switch>
                <Route exact path={`${path}`}>
                  <Profile />
                </Route>
                <Route path={`${path}/notification`}>
                  <Notification />
                </Route>
                <Route path={`${path}/quotation`}>
                  <Quotation />
                </Route>
              </Switch>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Dialog open={show} onClose={() => setShow(false)}>
        <h1 className={classes.close} onClick={() => setShow(false)}>
          x
        </h1>
        <DialogTitle className="pt-5">
          Are you sure want to log out?
        </DialogTitle>
        <DialogActions>
          <div>
            <Button
              onClick={() => setShow(false)}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Ooops, No
            </Button>
            <Button
              onClick={(() => setShow(false), handleLogout)}
              variant="outlined"
              color="white"
              className={classes.button}
            >
              Yes
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
