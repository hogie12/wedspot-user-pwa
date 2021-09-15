import axios from "axios";
import { BASE_URL } from "../const/server";
import { put, takeEvery } from "@redux-saga/core/effects";
import * as types from "../const/types";

const token = localStorage.getItem("token");
function* postRequest(action) {
  const { form } = action;
  try {
    const res = yield axios.post(`${BASE_URL}/requests/`, form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put({
      type: types.POST_REQUEST_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    yield put({
      type: types.POST_REQUEST_USER_FAIL,
      payload: error.response,
    });
  }
}

export function* watchPostRequest() {
  yield takeEvery(types.POST_REQUEST_USER_BEGIN, postRequest);
}
