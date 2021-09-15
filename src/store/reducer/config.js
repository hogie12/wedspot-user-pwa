import * as types from "../const/types";

const intialState = {
  allLocationList: {
    citys: [],
    cityLoading: false,
    citySuccess: null,
    cityError: null,
    cityMessage: [],
  },
};

const config = (state = intialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };

    case types.GET_CONFIG_LOCATION_BEGIN:
      return {
        ...state,
        allLocationList: {
          cityLoading: true,
        },
      };
    case types.GET_CONFIG_LOCATION_SUCCESS:
      return {
        ...state,
        allLocationList: {
          citys: payload,
          cityLoading: false,
        },
      };
    case types.GET_CONFIG_LOCATION_FAIL:
      return {
        ...state,
        allLocationList: {
          cityError: true,
          cityLoading: false,
          cityMessage: payload,
          error: error,
        },
      };
  }
};

export default config;
