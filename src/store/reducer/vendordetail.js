import * as types from "../const/types";

const initialState = {
  isLoading: true,
  isSuccess: false,
  data: [],
};

const vendorDetail = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DETAIL_VENDOR_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_DETAIL_VENDOR_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading:false,
        data: payload,
      };
    case types.GET_DETAIL_VENDOR_FAIL:
      return {
        ...state,
        isLoading:true,
        isSuccess:false,
      };
    default:
      return state;
  }
};

export default vendorDetail;
