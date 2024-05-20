import { createAction } from "@reduxjs/toolkit";

// default
export const AUTH = "auth";
export const AUTH_SLICE_NAMe = `${AUTH}Slice`;

// actions
const AUTH_USER_LOGIN = `${AUTH}/userLogin`;
const AUTH_USER_LOGOUT = `${AUTH}/userLogout`;
const AUTH_USER_SIGNUP = `${AUTH}/userSignUp`;
const AUTH_GET_ACCESS_TOKEN = `${AUTH}/getAccessToken`;

// createAction
const userLoginAction = createAction(AUTH_USER_LOGIN);
const userLogoutAction = createAction(AUTH_USER_LOGOUT);
const userSignUpAction = createAction(AUTH_USER_SIGNUP);

// actions
export const actions = {
    userLoginAction,
    userLogoutAction,
    userSignUpAction,
};
