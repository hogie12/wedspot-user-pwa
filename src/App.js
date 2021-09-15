/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/router";
import { createTheme } from "@material-ui/core/styles";
import { getUser } from "./store/action/user";
import { useDispatch } from "react-redux";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#455437",
      },
      secondary: {
        main: "#C97C68",
      },
      grey: {
        main: "#ffffff",
      },
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
