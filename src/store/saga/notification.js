import axios from "axios";
import { BASE_URL } from "../const/server";
import { put, takeEvery } from "@redux-saga/core/effects";
import * as types from "../const/types";

const token = localStorage.getItem("token");
// console.log(token);
function* getUserNotification() {
  try {
    const res = yield axios.get(`${BASE_URL}/notifications/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log("ini res", res);
    yield put({
      type: types.GET_NOTIFICATION_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    yield put({
      type: types.GET_NOTIFICATION_USER_FAIL,
    });
  }
}

function* userUpdateNotif(actions) {
  const { id } = actions;
  try {
    const res = yield axios.put(`${BASE_URL}/notifications/user/${id}`, {
      headers: {
        Authorization: `Bearear ${token}`,
      },
    });
    console.log("ini res", res);
    yield put({
      type: types.UPDATE_NOTIFICATION_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.UPDATE_NOTIFICATION_FAIL,
      payload: error.data.error,
    });
  }
}

// function* getNotificationDetail(actions) {
//   const { id } = actions;
//   try {
//     const res = yield axios.get(`${BASE_URL}/notifications/${id}`)
//   }
// }

export function* watchGetUserNotification() {
  yield takeEvery(types.GET_NOTIFICATION_USER_BEGIN, getUserNotification);
}

export function* watchuserUpdateNotif() {
  yield takeEvery(types.GET_NOTIFICATION_USER_BEGIN, userUpdateNotif);
}
