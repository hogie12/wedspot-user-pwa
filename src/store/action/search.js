import * as types from "../const/types";

export const getSearch = (
  tipe = "",
  location = "",
  category = "",
  minPax = "",
  maxPax = "",
  minPrice = "",
  maxPrice = "",
  limit = ""
) => {
  return {
    type: types.GET_SEARCH_BEGIN,
    tipe,
    location,
    category,
    minPax,
    maxPax,
    minPrice,
    maxPrice,
    limit,
  };
};
