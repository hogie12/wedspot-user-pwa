import * as types from "../const/types";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: [],
  message: [],
};

const userData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        data: payload,
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: payload,
      };
    case types.REGISTER_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        data: payload,
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        isError: true,
        isSuccess: false,
        isLoading: false,
        message: payload,
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        data: payload,
      };
    case types.GET_USER:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_USER_FAIL:
      return {
        ...state,
      };
    case types.UPDATE_PROFILE_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case types.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case types.UPDATE_PROFILE_FAIL:
      return {
        ...state,
        isError: true,
        message: payload,
      };
    case types.GET_OAUTH_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_OAUTH_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        data: payload,
      };
    case types.GET_OAUTH_FAIL:
      return {
        ...state,
        isError: true,
        isSuccess: false,
        isLoading: false,
        message: payload,
      };
    default:
      return state;
  }
};

export default userData;
