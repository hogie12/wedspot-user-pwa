import * as types from "../const/types";

export const userLogin = (email, password) => {
  return {
    type: types.LOGIN_PENDING,
    user_email: email,
    user_password: password,
  };
};

export const userRegister = (email, password, fullname) => {
  return {
    type: types.REGISTER_PENDING,
    user_email: email,
    user_password: password,
    user_fullname: fullname,
  };
};

export const userUpdateProfile = (
  email,
  fullname,
  birthday,
  avatar,
  password,
  oldPassword
) => {
  return {
    type: types.UPDATE_PROFILE_PENDING,
    user_email: email,
    user_password: password,
    user_fullname: fullname,
    user_birthday: birthday,
    user_avatar: avatar,
    user_old_password: oldPassword,
  };
};

export const getUser = () => {
  return {
    type: types.GET_USER,
  };
};

export const oauthWithGoogle = (googleToken) => {
  console.log("tokenaction", googleToken);
  return {
    type: types.GET_OAUTH_BEGIN,
    googleToken,
  };
};
