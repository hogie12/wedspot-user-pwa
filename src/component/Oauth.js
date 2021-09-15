/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { oauthWithGoogle } from "../store/action/user";

const Oauth = () => {
  const dispatch = useDispatch();
  // console.log("tokenoauth", window.location.search.replace("?token=", ""));
  const tokenOauth = window.location.search.replace("?token=", "");
  // console.log("tokenOauth", tokenOauth);

  useEffect(() => {
    dispatch(oauthWithGoogle(tokenOauth));
  }, [dispatch]);
  return <div>ini oauth</div>;
};

export default Oauth;
