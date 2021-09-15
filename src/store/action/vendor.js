import * as types from "../const/types";

export const getAllVendor = (
  location,
  category,
  minPax,
  maxPax,
  minPrice,
  maxPrice
) => {
  return {
    type: types.GET_VENDOR_BEGIN,
    location,
    category,
    minPax,
    maxPax,
    minPrice,
    maxPrice,
  };
};

export const getVendorHome = (Page = 1) => {
  return {
    type: types.GET_EXAMPLE_VENDOR_BEGIN,
    Page,
  };
};
