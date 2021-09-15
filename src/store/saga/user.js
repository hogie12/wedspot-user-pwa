import axios from "axios";
import * as types from "../const/types";
import { BASE_URL } from "../const/server";
import { put, takeEvery } from "redux-saga/effects";

const token = localStorage.getItem("token");

function* userLogin(action) {
  const { user_email, user_password } = action;
  try {
    const res = yield axios.post(`${BASE_URL}/user/login`, {
      user_email,
      user_password,
    });
    yield localStorage.setItem("token", res.data.token);
    yield put({
      type: types.LOGIN_SUCCESS,
      payload: res.data,
    });
    yield alert("Login success");
    yield window.location.reload();
  } catch (error) {
    console.log(error.response.data.errors[0]);
    yield put({
      type: types.LOGIN_FAIL,
      payload: error.response.data.errors,
    });
    yield alert(error.response.data.errors);
  }
}

function* userRegister(action) {
  const { user_email, user_password, user_fullname } = action;
  try {
    const res = yield axios.post(`${BASE_URL}/user/register`, {
      user_email,
      user_password,
      user_fullname,
    });
    yield localStorage.setItem("token", res.data.token);
    yield put({
      type: types.REGISTER_SUCCESS,
      payload: res.data.current_user,
    });
    yield alert("Register success");
    yield window.location.reload();
  } catch (error) {
    yield put({
      type: types.REGISTER_FAIL,
      payload: error.response.data.errors,
    });
    yield alert(error.response.data.errors);
  }
}

function* userUpdateProfile(action) {
  const {
    user_email,
    user_password,
    user_fullname,
    user_birthday,
    user_avatar,
    user_old_password,
  } = action;
  let dataToSend = new FormData();
  dataToSend.append("user_fullname", user_fullname);
  dataToSend.append("user_email", user_email);
  dataToSend.append("user_password", user_password);
  dataToSend.append("user_birthday", user_birthday);
  dataToSend.append("user_avatar", user_avatar);
  dataToSend.append("user_old_password", user_old_password);
  // console.log("token", token);
  try {
    const res = yield axios.put(`${BASE_URL}/user/edit`, dataToSend, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    yield put({
      type: types.UPDATE_PROFILE_SUCCESS,
      payload: res.data.new_data,
    });
    yield alert("Successfully");
  } catch (error) {
    console.log(error);
    yield put({
      type: types.UPDATE_PROFILE_FAIL,
      payload: error.response.data.errors,
    });

    yield alert(error.response.data.errors);
  }
}

function* getUser() {
  try {
    const res = yield axios.get(`${BASE_URL}/user/getprofil`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put({
      type: types.GET_USER_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    yield put({
      type: types.GET_USER_FAIL,
      payload: error.response,
    });
  }
}

function* oauthWithGoogle(action) {
  const googleToken = action;
  try {
    // yield localStorage.setItem("token", googleToken);
    const res = yield axios.put(`${BASE_URL}/user/storetoken`, {
      headers: { Authorization: `Bearer ${token}` },
      data: { googleToken },
    });
    console.log("res", res);
    yield put({
      type: types.GET_OAUTH_SUCCESS,
      payload: res.data.new_data,
    });
    yield alert("Successfully");
    yield window.location.replace("/");
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_OAUTH_FAIL,
      payload: error.response.data.errors,
    });

    yield alert(error.response.data.errors);
  }
}

export function* watchLogin() {
  yield takeEvery(types.LOGIN_PENDING, userLogin);
}

export function* watchUpdateProfile() {
  yield takeEvery(types.UPDATE_PROFILE_PENDING, userUpdateProfile);
}

export function* watchRegister() {
  yield takeEvery(types.REGISTER_PENDING, userRegister);
}

export function* watchGetUser() {
  yield takeEvery(types.GET_USER, getUser);
}

export function* watchOauthWithGoogle() {
  yield takeEvery(types.GET_OAUTH_BEGIN, oauthWithGoogle);
}
