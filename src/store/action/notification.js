import * as types from "../const/types";

export const getUserNotification = () => {
  return {
    type: types.GET_NOTIFICATION_USER_BEGIN,
  };
};

export const userUpdateNotif = (id) => {
  return {
    id: id,
    type: types.UPDATE_NOTIFICATION_BEGIN,
  };
};

// export const getNotifiationDetail = (id) => {
//   return {
//     type: types.GET_NOTIFICATION_DETAIL_BEGIN,
//     id: id,
//   };
// };
