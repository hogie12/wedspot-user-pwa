import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import {
  Room,
  Person,
  AttachMoney,
  Phone,
  Mail,
  Language,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
// import Rating from "@material-ui/lab/rating";
import facebook from "./icon/facebook.png";
import twitter from "./icon/twitter.png";
import instagram from "./icon/instagram.png";
import { Container, Avatar } from "@material-ui/core";
import RequestQuotation from "../Quatationform/requestquotation";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Rating } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  hr: {
    maxHeight: "1em",
  },
  text: {
    fontSize: "1em",
    paddingLeft: "10px",
  },
  logo: {
    display: "flex",
  },
  btn: {
    width: "inherit",
    height: "55px",
  },
  close: {
    position: "absolute",
    zIndex: "1",
    right: "7%",
    top: "2%",
    cursor: "pointer",
  },
  button: {
    width: "100%",
    margin: "1em",
    height: "55px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
}));
const token = localStorage.getItem("token");
export function VendorCard({
  avatar,
  name,
  rating,
  minprice,
  maxprice,
  location,
  min,
  max,
  phone,
  email,
  web,
  link_facebook,
  link_twitter,
  link_instagram,
}) {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  // const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar alt="avatar" src={avatar} />}
          title={<h4>{name}</h4>}
          subheader={<Rating name="read-only" value={rating} readOnly />}
        />
        <Divider variant="middle" className={classes.hr} />
        <CardContent>
          <p className={classes.text}>
            <Room className="me-2" />
            {location}
          </p>
          <p className={classes.text}>
            <Person className="me-2" />
            {min} - {max} pax
          </p>
          <p className={classes.text}>
            <AttachMoney className="me-2" />
            Rp.{minprice} - Rp.{maxprice}++
          </p>
        </CardContent>
        <Divider variant="middle" className={classes.hr} />
        <CardContent>
          <p className={classes.text}>
            <Phone className="me-2" />
            {phone}
          </p>
          <p className={classes.text}>
            <Mail className="me-2" />
            {email}
          </p>
          <p className={classes.text}>
            <Language className="me-2" />
            {web}
          </p>
        </CardContent>
        <Divider variant="middle" className={classes.hr} />
        <Container>
          <p className={classes.text}>Follow us through our social media</p>
          <div className={classes.logo}>
            <p>
              <a href={link_instagram} target="_blank" rel="noreferrer">
                <img src={instagram} alt="logo" />
              </a>
            </p>
            <p className="ms-3">
              <a href={link_facebook} target="_blank" rel="noreferrer">
                <img src={facebook} alt="logo" />
              </a>
            </p>
            <p className="ms-3">
              <a href={link_twitter} target="_blank" rel="noreferrer">
                <img src={twitter} alt="logo" />
              </a>
            </p>
          </div>
        </Container>
        {/* <Container className="pb-3">
          <Button
            onClick={openModal}
            type="submit"
            variant="contained"
            color="primary"
            className={classes.btn}
          >
            ask for quotation
          </Button>
        </Container> */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={show}
          onClose={closeModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={show}>
            <div className={classes.paper}>
              <RequestQuotation onClick={closeModal} />
            </div>
          </Fade>
        </Modal>
      </Card>
    </div>
  );
}

export function PackageDetailCard({
  avatar,
  name,
  rating,
  price,
  location,
  min,
  max,
  services,
}) {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar alt="avatar" src={avatar} />}
          title={<h4>{name}</h4>}
          subheader={<Rating name="read-only" value={rating} readOnly />}
        />
        <Divider variant="middle" className={classes.hr} />
        <CardContent>
          <p className={classes.text}>
            <Room className="me-2" />
            {location}
          </p>
          <p className={classes.text}>
            <Person className="me-2" />
            {min} - {max} pax
          </p>
          <p className={classes.text}>
            <AttachMoney className="me-2" />
            start from Rp.{price}
          </p>
        </CardContent>
        <Divider variant="middle" className={classes.hr} />
        <CardContent>
          <p className={classes.text}>include on package :</p>
          <ul>
            {services.map((data, idx) => (
              <li key={idx}>{data}</li>
            ))}
          </ul>
        </CardContent>
        {token ? (
          <Container className="pb-3">
            <Button
              onClick={openModal}
              type="submit"
              variant="contained"
              color="primary"
              className={classes.btn}
            >
              ask for quotation
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={show}
              onClose={closeModal}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={show}>
                <div className={classes.paper}>
                  <RequestQuotation onClick={closeModal} />
                </div>
              </Fade>
            </Modal>
          </Container>
        ) : null}
      </Card>
    </div>
  );
}
