import * as types from "../const/types";

const initialState = {
  request: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: [],
};

const requestData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_REQUEST_BEGIN:
      return {
        ...state,
        isLoading: false,
      };
    case types.GET_REQUEST_SUCCESS:
      return {
        ...state,
        request: payload,
        isLoading: false,
        isSuccess: true,
      };
    case types.GET_REQUEST_FAIL:
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: payload,
      };
    case types.POST_REQUEST_USER_BEGIN:
      return {
        ...state,
        isLoading: false,
      };
    case types.POST_REQUEST_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        request: payload,
      };
    case types.POST_REQUEST_USER_FAIL:
      return {
        ...state,
        isError: true,
        message: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default requestData;
