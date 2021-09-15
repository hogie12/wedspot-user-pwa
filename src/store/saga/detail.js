import axios from "axios";
import * as types from "../const/types";
import { BASE_URL } from "../const/server";
import { put, takeEvery } from "redux-saga/effects";

function* vendorsDetail({ id }) {
  try {
    const res = yield axios.get(`${BASE_URL}/vendors/${id}`);
    yield put({
      type: types.GET_DETAIL_VENDOR_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log("ini error vendor detail", error);
    yield put({
      type: types.GET_DETAIL_VENDOR_FAIL,
      payload: error.response,
    });
  }
}

function* packageDetail({ id }) {
  // console.log(id)
  try {
    const res = yield axios.get(`${BASE_URL}/packages/${id}`);
    yield put({
      type: types.GET_DETAIL_PACKAGE_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_DETAIL_PACKAGE_FAIL,
    });
  }
}

export function* watchVendorId() {
  yield takeEvery(types.GET_DETAIL_VENDOR_BEGIN, vendorsDetail);
}

export function* watchPackageId() {
  yield takeEvery(types.GET_DETAIL_PACKAGE_BEGIN, packageDetail);
}
