import React from "react";
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  makeStyles,
} from "@material-ui/core";
// import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
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
}));

export default function ChangePassword({
  show,
  close,
  handleSubmit,
  oldPassword,
  password,
  confirmOldPassword,
  setConfirmPassword,
  setOldPassword,
  setPassword,
}) {
  // const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Dialog open={show} onClose={close}>
      <h1 className={classes.close} onClick={close}>
        x
      </h1>
      <form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Old Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="New Password"
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="Confirm New Password"
            type="password"
            value={confirmOldPassword}
            helperText={
              confirmOldPassword !== oldPassword && "password doesn't match"
            }
            error={confirmOldPassword !== oldPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={close}
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            save changes
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
