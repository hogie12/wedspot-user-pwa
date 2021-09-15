import * as types from "../const/types";

const intialState = {
  allSearchList: {
    items: [],
    searchLoading: false,
    searchSuccess: null,
    searchError: null,
    message: [],
  },
};

const search = (state = intialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };

    case types.GET_SEARCH_BEGIN:
      return {
        ...state,
        allSearchList: {
          searchLoading: true,
        },
      };
    case types.GET_SEARCH_SUCCESS:
      return {
        ...state,
        allSearchList: {
          items: payload,
          searchLoading: false,
        },
      };
    case types.GET_SEARCH_FAIL:
      return {
        ...state,
        allSearchList: {
          searchError: true,
          searchLoading: false,
          message: payload,
          error: error,
        },
      };
  }
};

export default search;
