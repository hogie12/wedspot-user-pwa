import * as types from "../const/types";

export const getQuotationInbox = () => {
  return {
    type: types.GET_QUOTATION_INBOX_BEGIN,
  };
};
export const getQuotationSent = () => {
  return {
    type: types.GET_QUOTATION_SENT_BEGIN,
  };
};

export const getQuotationSentDetail = (id) => {
  return {
    type: types.GET_QUOTATION_SENT_DETAIL_BEGIN,
    id: id,
  };
};

export const getQuotationInboxDetail = (id) => {
  return {
    type: types.GET_QUOTATION_INBOX_DETAIL_BEGIN,
    id: id,
  };
};
