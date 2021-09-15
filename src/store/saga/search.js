import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

import { BASE_URL } from "../const/server";
import * as types from "../const/types";

function* getSearch(actions) {
  const {
    error,
    tipe,
    location,
    category,
    minPax,
    maxPax,
    minPrice,
    maxPrice,
    limit,
  } = actions;
  try {
    const res = yield axios.get(
      `${BASE_URL}/${tipe}?location=${location}&type=${category}&min_capacity=${minPax}&max_capacity=${maxPax}&min_price=${minPrice}&max_price=${maxPrice}&limit=${limit}`
    );
    yield put({
      type: types.GET_SEARCH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_SEARCH_FAIL,
      error: error,
    });
  }
}

export function* watchGetSearch() {
  yield takeEvery(types.GET_SEARCH_BEGIN, getSearch);
}
