import React from "react";
import { makeStyles } from "@material-ui/core/";
import  AppBar  from "@material-ui/core/AppBar";
import  Toolbar  from "@material-ui/core/Toolbar";
import  Typography  from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor:"transparent",
  },
  hero: {
    backgroundImage:`linier-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdlZGRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')`,
  }
}));

export default function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Blog
          </Typography>
        </Toolbar>
        <Box>
          <Box>React blog</Box> 
        </Box>
      </AppBar>
      
      {/* <div
        id="landing"
        style={{
          height: "100vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${"https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdlZGRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"}`,
        }}
      >
        <div class="ui secondary stackable menu" id="menu">
          <div class="item">
            <i class="industry purple big icon"></i>
          </div>
          <div class="right menu">
            <div class="item header">
              <a href="index.html">Home</a>
            </div>
            <div class="item header">
              <a href="#">Properties</a>
            </div>
            <div class="item header">
              <a href="#">About</a>
            </div>
            <div class="item header">
              <a href="#">Blog</a>
            </div>
            <div class="item header">
              <a href="#">Contact</a>
            </div>
            <div class="item">
              <button class="ui huge purple button">Create listing</button>
            </div>
          </div>
        </div>
        <div class="ui text container">
          <h2 class="ui inverted header">Lorem ipsum dolor sit amet.</h2>
          <h5 class="ui inverted header">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A iste
            sapiente praesentium blanditiis ea aliquid itaque modi saepe et ad?
          </h5>
        </div>
      </div> */}
    </div>
  );
}
