import * as types from "../const/types";

export const getPackageId = (id) => {
  return {
    type: types.GET_DETAIL_PACKAGE_BEGIN,
    id,
  };
};

export const getVendorId = (id) => {
  return {
    type: types.GET_DETAIL_VENDOR_BEGIN,
    id,
  };
};