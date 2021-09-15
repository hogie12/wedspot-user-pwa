import * as types from "../const/types";

const initialState = {
  listNotification: {
    notifLoading: false,
    notifSuccess: false,
    notifError: false,
    notifList: [],
    notifMessage: [],
  },
};

const notification = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case types.GET_NOTIFICATION_USER_BEGIN:
      return {
        ...state,
        listNotification: {
          notifLoading: true,
        },
      };
    case types.GET_NOTIFICATION_USER_SUCCESS:
      return {
        ...state,
        listNotification: {
          notifList: payload,
          notifLoading: false,
        },
      };
    case types.GET_NOTIFICATION_USER_FAIL:
      return {
        ...state,
        listNotification: {
          notifLoading: false,
          notifSuccess: false,
          notifError: true,
          notifMessage: payload,
        },
      };
    case types.UPDATE_NOTIFICATION_BEGIN:
      return {
        ...state,
        listNotification: {
          notifLoading: false,
          notifSuccess: false,
          notifError: true,
          notifMessage: payload,
        },
      };
    case types.UPDATE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        listNotification: {
          notifLoading: false,
          notifSuccess: false,
          notifError: true,
          notifMessage: payload,
        },
      };
    case types.UPDATE_NOTIFICATION_FAIL:
      return {
        ...state,
        listNotification: {
          notifLoading: false,
          notifSuccess: false,
          notifError: true,
          notifMessage: payload,
        },
      };
  }
};

export default notification;
