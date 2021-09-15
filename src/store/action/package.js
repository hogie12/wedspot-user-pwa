import * as types from "../const/types";

export const getVenueHome = (page = 1) => {
  return {
    type: types.GET_EXAMPLE_VENUE_BEGIN,
    page,
  };
};

export const getOrganizerHome = (page = 1) => {
  return {
    type: types.GET_EXAMPLE_ORGANIZER_BEGIN,
    page,
  };
};

export const getPackageHome = (page = 1) => {
  return {
    type: types.GET_EXAMPLE_PACKAGES_BEGIN,
    page,
  };
};
export const getVenueSearch = (page = 1, body = "", location = "") => {
  return {
    type: types.GET_SEARCH_VENUE_BEGIN,
    page,
    body,
    location,
  };
};

export const getOrganizerSearch = (page = 1, body = "", location = "") => {
  return {
    type: types.GET_SEARCH_ORGANIZER_BEGIN,
    page,
    body,
    location,
  };
};

export const getPackageSearch = (page = 2, body = "", location = "") => {
  return {
    type: types.GET_SEARCH_PACKAGES_BEGIN,
    page,
    body,
    location,
  };
};
