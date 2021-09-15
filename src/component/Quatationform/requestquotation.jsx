import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Container, IconButton } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import SentModal from "./SentModal";
import { getLocation } from "../../store/action/config";
import { useSelector, useDispatch } from "react-redux";
import { postRequest } from "../../store/action/request";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(4, 0, 4),
  },
  icon: {
    marginLeft: "90%",
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
    width: 188,
  },
}));

export default function RequestQuotation({ onClick }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { id } = useParams();
  const [success, setSuccess] = useState(false);

  const { citys } = useSelector((state) => state?.config?.allLocationList);

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);

  const [form, setForm] = useState({
    request_package_id: id,
    request_groom_name: "",
    request_bride_name: "",
    request_city: "",
    request_wedding_location: "",
    request_budget: "",
    request_wedding_date: "",
    request_invitees: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.request_groom_name === "" ||
      form.request_bride_name === "" ||
      form.request_city === "" ||
      form.request_wedding_location === "" ||
      form.request_budget === "" ||
      form.request_wedding_date === "" ||
      form.request_invitees === ""
    ) {
      alert("please fill all form");
      dispatch(postRequest());
    } else {
      dispatch(postRequest(form));
      setSuccess(true);
    }
  };

  const changeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <IconButton className={classes.icon} aria-label="close" onClick={onClick}>
        <Close style={{ width: "35px", height: "35px" }} />
      </IconButton>
      {!success ? (
        <>
          <div className={classes.paper}>
            <div>
              <div style={{ textAlign: "start" }}>
                <h1>Request Quotation</h1>
                <p>
                  Tell us your preferences here, then we will get back to you as
                  soon as possible once we prepared the nitty gritty
                </p>
              </div>
              <form
                className={classes.form}
                noValidate
                name="form"
                onSubmit={(e) => handleSubmit(e)}
                // onSubmit={() => handleSubmit()}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="request_bride_name"
                      variant="filled"
                      required
                      fullWidth
                      id="Bride to be"
                      label="Bride to be"
                      value={form.request_bride_name}
                      onChange={(e) => changeForm(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={form.request_groom_name}
                      onChange={(e) => changeForm(e)}
                      variant="filled"
                      required
                      fullWidth
                      id="Groom to be"
                      label="Groom to be"
                      name="request_groom_name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="request_city"
                      id="outlined-select-currency-native"
                      select
                      label="City Live"
                      required
                      fullWidth
                      value={form.request_city}
                      onChange={(e) => changeForm(e)}
                      SelectProps={{
                        native: true,
                      }}
                      helperText="Please select your currency"
                      variant="filled"
                    >
                      <option aria-label="None" value="" />
                      {citys?.locations?.map((data) => (
                        <option value={data}>{data}</option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="request_wedding_location"
                      id="outlined-select-currency-native"
                      select
                      label="Wedding Location"
                      required
                      fullWidth
                      value={form.request_wedding_location}
                      onChange={(e) => changeForm(e)}
                      SelectProps={{
                        native: true,
                      }}
                      helperText="Please select your currency"
                      variant="filled"
                    >
                      <option aria-label="None" value="" />
                      {citys?.locations?.map((data) => (
                        <option value={data}>{data}</option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="request_wedding_date"
                      value={form.request_wedding_date}
                      onChange={(e) => changeForm(e)}
                      fullWidth
                      id="outlined-select-currency-native"
                      label="date"
                      type="date"
                      variant="filled"
                      defaultValue="2017-05-24"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="request_budget"
                      variant="filled"
                      required
                      fullWidth
                      id="Budget"
                      label="Budget"
                      value={form.request_budget}
                      onChange={(e) => changeForm(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="filled"
                      required
                      fullWidth
                      id="Number of invitees"
                      label="Number of invitees"
                      name="request_invitees"
                      autoComplete="lname"
                      value={form.request_invitees}
                      onChange={(e) => changeForm(e)}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="Submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleSubmit}
                >
                  Send Request
                </Button>
                {/* <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <SentModal onClick={handleClose} />
                </div>
              </Fade>
            </Modal> */}
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <SentModal />
        </>
      )}
    </Container>
  );
}
