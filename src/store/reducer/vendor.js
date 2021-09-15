import * as types from "../const/types";

const intialState = {
  allVendorList: {
    vendors: [],
    isLoading: false,
    isSuccess: null,
    isError: null,
    message: [],
  },
  listVendorExample: {
    vendors: [],
    isLoading: false,
    isSuccess: null,
    isError: null,
    message: [],
  },
};

const vendors = (state = intialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };

    case types.GET_VENDOR_BEGIN:
      return {
        ...state,
        allVendorList: {
          isLoading: true,
        },
      };
    case types.GET_VENDOR_SUCCESS:
      return {
        ...state,
        allVendorList: {
          vendors: payload,
          isLoading: false,
        },
      };
    case types.GET_VENDOR_FAIL:
      return {
        ...state,
        allVendorList: {
          isError: true,
          isLoading: false,
          message: payload,
          error: error,
        },
      };

    case types.GET_EXAMPLE_VENDOR_BEGIN:
      return {
        ...state,
        listVendorExample: {
          isLoading: true,
        },
      };
    case types.GET_EXAMPLE_VENDOR_SUCCESS:
      return {
        ...state,
        listVendorExample: {
          vendors: payload,
          isLoading: false,
        },
      };
    case types.GET_EXAMPLE_VENDOR_FAIL:
      return {
        ...state,
        listVendorExample: {
          isError: true,
          isLoading: false,
          message: payload,
          error: error,
        },
      };
  }
};

export default vendors;
