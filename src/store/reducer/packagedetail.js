import * as types from "../const/types";

const initialState = {
  isLoading: true,
  isSuccess: false,
  data: [],
};

const packageDetail = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DETAIL_PACKAGE_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_DETAIL_PACKAGE_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading:false,
        data: payload,
      };
    case types.GET_DETAIL_PACKAGE_FAIL:
      return {
        ...state,
        isLoading:true,
        isSuccess:false,
        data:payload
      };
    default:
      return state;
  }
};

export default packageDetail;
