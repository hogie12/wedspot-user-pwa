import axios from "axios";
import { BASE_URL } from "../const/server";
import { put, takeEvery } from "@redux-saga/core/effects";
import * as types from "../const/types";

const token = localStorage.getItem("token");

function* getQuotationInbox() {
  try {
    const res = yield axios.get(`${BASE_URL}/quotations/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log("ini res", res);
    yield put({
      type: types.GET_QUOTATION_INBOX_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    yield put({
      type: types.GET_QUOTATION_INBOX_FAIL,
    });
  }
}

function* getQuotationSent() {
  try {
    const res = yield axios.get(`${BASE_URL}/requests/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put({
      type: types.GET_QUOTATION_SENT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    yield put({
      type: types.GET_QUOTATION_SENT_FAIL,
    });
  }
}

function* getQuotationSentDetail(actions) {
  const { id } = actions;
  try {
    const res = yield axios.get(`${BASE_URL}/requests/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put({
      type: types.GET_QUOTATION_SENT_DETAIL_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    yield put({
      type: types.GET_QUOTATION_SENT_DETAIL_FAIL,
    });
  }
}

function* getQuotationInboxDetail(actions) {
  const { id } = actions;
  // console.log(`Bearer ${token}`);
  try {
    const res = yield axios.get(`${BASE_URL}/quotations/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log(res);
    yield put({
      type: types.GET_QUOTATION_INBOX_DETAIL_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    yield put({
      type: types.GET_QUOTATION_INBOX_DETAIL_FAIL,
    });
  }
}

export function* watchGetQuotationInbox() {
  yield takeEvery(types.GET_QUOTATION_INBOX_BEGIN, getQuotationInbox);
}

export function* watchGetQuotationSent() {
  yield takeEvery(types.GET_QUOTATION_SENT_BEGIN, getQuotationSent);
}

export function* watchGetQuotationSentDetail() {
  yield takeEvery(
    types.GET_QUOTATION_SENT_DETAIL_BEGIN,
    getQuotationSentDetail
  );
}

export function* watchGetQuotationInboxDetail() {
  yield takeEvery(
    types.GET_QUOTATION_INBOX_DETAIL_BEGIN,
    getQuotationInboxDetail
  );
}
