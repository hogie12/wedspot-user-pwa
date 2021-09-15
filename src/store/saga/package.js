import axios from "axios";
import { BASE_URL } from "../const/server";
import { put, takeEvery } from "redux-saga/effects";
import * as types from "../const/types";

function* getVenueHome(actions) {
  const { error, page = 2 } = actions;
  try {
    const res = yield axios.get(
      `${BASE_URL}/vendors?page=${page}&limit=10&type=venue`
    );
    yield put({
      type: types.GET_EXAMPLE_VENUE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_EXAMPLE_VENUE_FAIL,
      error: error,
    });
  }
}

function* getOrganizerHome(actions) {
  const { error, page = 1 } = actions;
  try {
    const res = yield axios.get(
      `${BASE_URL}/vendors?page=${page}&limit=5&type=organizer`
    );
    yield put({
      type: types.GET_EXAMPLE_ORGANIZER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_EXAMPLE_ORGANIZER_FAIL,
      error: error,
    });
  }
}

function* getPackagesHome(actions) {
  const { error, page = 2 } = actions;
  try {
    const res = yield axios.get(
      `${BASE_URL}/packages?page=${page}&limit=6&type=`
    );
    yield put({
      type: types.GET_EXAMPLE_PACKAGES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_EXAMPLE_PACKAGES_FAIL,
      error: error,
    });
  }
}

function* getVenueSearch(actions) {
  const { error, page = 5, body, location } = actions;
  try {
    const res = yield axios.get(
      `${BASE_URL}/packages?page=${page}&limit=10&type=venue&search=${body}&location=${location}`
    );
    yield put({
      type: types.GET_SEARCH_VENUE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_SEARCH_VENUE_FAIL,
      error: error,
    });
  }
}

function* getOrganizerSearch(actions) {
  const { error, page = 1, body, location } = actions;
  try {
    const res = yield axios.get(
      `${BASE_URL}/packages?page=${page}&limit=5&type=organizer&search=${body}&location=${location}`
    );
    yield put({
      type: types.GET_SEARCH_ORGANIZER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_SEARCH_ORGANIZER_FAIL,
      error: error,
    });
  }
}

function* getPackageSearch(actions) {
  const { error, page = 2, body, location } = actions;
  try {
    const res = yield axios.get(
      `${BASE_URL}/packages?page=${page}&limit=6&type=&search=${body}&location=${location}`
    );
    yield put({
      type: types.GET_SEARCH_PACKAGES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_SEARCH_PACKAGES_FAIL,
      error: error,
    });
  }
}

export function* watchGetVenueHome() {
  yield takeEvery(types.GET_EXAMPLE_VENUE_BEGIN, getVenueHome);
}

export function* watchGetOrganizerHome() {
  yield takeEvery(types.GET_EXAMPLE_ORGANIZER_BEGIN, getOrganizerHome);
}
export function* watchGetPackagesHome() {
  yield takeEvery(types.GET_EXAMPLE_PACKAGES_BEGIN, getPackagesHome);
}

export function* watchGetVenueSearch() {
  yield takeEvery(types.GET_SEARCH_VENUE_BEGIN, getVenueSearch);
}

export function* watchGetOrganizerSearch() {
  yield takeEvery(types.GET_SEARCH_ORGANIZER_BEGIN, getOrganizerSearch);
}
export function* watchGetPackageSearch() {
  yield takeEvery(types.GET_SEARCH_PACKAGES_BEGIN, getPackageSearch);
}
