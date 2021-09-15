/* eslint-disable no-unused-vars */
import * as types from "../const/types";

const initialState = {
  listQuotationSent: {
    sentLoading: false,
    sentSuccess: false,
    sentError: false,
    sentList: [],
    sentMessage: [],
  },
  listQuotationSentDetail: {
    sentLoading: false,
    sentSuccess: false,
    sentError: false,
    sentListDetail: [],
    sentMessage: [],
  },
  listQuotationInbox: {
    inboxLoading: false,
    inboxSuccess: false,
    inboxtError: false,
    inboxList: [],
    inboxMessage: [],
  },
  listQuotationInboxDetail: {
    inboxLoading: false,
    inboxSuccess: false,
    inboxtError: false,
    inboxListDetail: [],
    inboxMessage: [],
  },
};

const quotation = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case types.GET_QUOTATION_SENT_BEGIN:
      return {
        ...state,
        listQuotationSent: {
          sentLoading: true,
        },
      };
    case types.GET_QUOTATION_SENT_SUCCESS:
      return {
        ...state,
        listQuotationSent: {
          sentList: payload,
          sentLoading: false,
        },
      };
    case types.GET_QUOTATION_SENT_FAIL:
      return {
        ...state,
        listQuotationSent: {
          sentLoading: false,
          sentSuccess: false,
          sentError: true,
          sentMessage: payload,
        },
      };
    case types.GET_QUOTATION_SENT_DETAIL_BEGIN:
      return {
        ...state,
        listQuotationSentDetail: {
          sentLoading: true,
        },
      };
    case types.GET_QUOTATION_SENT_DETAIL_SUCCESS:
      return {
        ...state,
        listQuotationSentDetail: {
          sentListDetail: payload,
          sentLoading: false,
        },
      };
    case types.GET_QUOTATION_SENT_DETAIL_FAIL:
      return {
        ...state,
        listQuotationSentDetail: {
          sentLoading: false,
          sentSuccess: false,
          sentError: true,
          sentMessage: payload,
        },
      };
    case types.GET_QUOTATION_INBOX_BEGIN:
      return {
        ...state,
        listQuotationInbox: {
          inboxLoading: true,
        },
      };
    case types.GET_QUOTATION_INBOX_SUCCESS:
      return {
        ...state,
        listQuotationInbox: {
          inboxList: payload,
          inboxLoading: false,
        },
      };
    case types.GET_QUOTATION_INBOX_FAIL:
      return {
        ...state,
        listQuotationinbox: {
          inboxLoading: false,
          inboxSuccess: false,
          inboxError: true,
          inboxMessage: payload,
        },
      };
    case types.GET_QUOTATION_INBOX_DETAIL_BEGIN:
      return {
        ...state,
        listQuotationInboxDetail: {
          inboxLoading: true,
        },
      };
    case types.GET_QUOTATION_INBOX_DETAIL_SUCCESS:
      return {
        ...state,
        listQuotationInboxDetail: {
          inboxListDetail: payload,
          inboxLoading: false,
        },
      };
    case types.GET_QUOTATION_INBOX_DETAIL_FAIL:
      return {
        ...state,
        listQuotationInboxDetail: {
          inboxLoading: false,
          inboxSuccess: false,
          inboxError: true,
          inboxMessage: payload,
        },
      };
  }
};

export default quotation;
