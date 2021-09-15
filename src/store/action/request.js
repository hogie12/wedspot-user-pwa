import * as types from "../const/types";

export const getRequest = () => {
  return {
    type: types.GET_REQUEST_BEGIN,
  };
};

// export const postRequest = (
//   groom,
//   bride,
//   package_id,
//   city,
//   location,
//   budget,
//   date,
//   invitees
// ) => {
//   return {
//     type: types.POST_REQUEST_USER_BEGIN,
//     request_package_id: package_id,
//     request_groom_name: groom,
//     request_bride_name: bride,
//     request_city: city,
//     request_wedding_location: location,
//     request_budget: budget,
//     request_wedding_date: date,
//     request_invitees: invitees,
//   };
// };
export const postRequest = (form) => {
  return {
    type: types.POST_REQUEST_USER_BEGIN,
    form,
  };
};
