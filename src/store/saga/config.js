import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

import { BASE_URL } from "../const/server";
import * as types from "../const/types";

function* getLocation(actions) {
  const { error } = actions;
  try {
    const res = yield axios.get(`${BASE_URL}/config/locations`);
    yield put({
      type: types.GET_CONFIG_LOCATION_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_CONFIG_LOCATION_FAIL,
      error: error,
    });
  }
}

export function* watchGetLocation() {
  yield takeEvery(types.GET_CONFIG_LOCATION_BEGIN, getLocation);
}
