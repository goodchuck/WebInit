// base
import { createAction } from "@reduxjs/toolkit";

// default
export const AUTH = "auth";
export const AUTH_SLICE_NAME = `${AUTH}Slice`;

// action
const GET_SMS = `${AUTH}/getSms`;
const GET_SMS_VERIFY = `${AUTH}/getSmsVerify`;
const GET_SMS_CHANGE_MOBILE = `${AUTH}/getSmsChangeMobile`;
const GET_SMS_VERIFY_FORGOT = `${AUTH}/getSmsVerifyForgot`;
const AUTH_USER_LOGIN = `${AUTH}/userLogin`;
const AUTH_USER_LOGOUT = `${AUTH}/userLogout`;
const AUTH_USER_SIGNUP = `${AUTH}/userSignUp`;
const AUTH_GET_ACCESS_TOKEN = `${AUTH}/getAccessToken`;
const GET_AUTH_LIST = `${AUTH}/getAuthList`;
const POST_PASSWORD = `${AUTH}/postPassword`;
const POST_APPROVE = `${AUTH}/postApprove`;
const POST_REJECT = `${AUTH}/postReject`;

// createAction
// const userLoginAction = createAction(AUTH_USER_LOGIN);
// const userLogoutAction = createAction(AUTH_USER_LOGOUT);
// const userSignUpAction = createAction(AUTH_USER_SIGNUP);
// const getAccessTokenAction = createAction(AUTH_GET_ACCESS_TOKEN);
// const authListAction = createAction(GET_AUTH_LIST);
// const postPasswordAction = createAction(POST_PASSWORD);
// const getSmsAction = createAction(GET_SMS);
// const getSmsVerifyAction = createAction(GET_SMS_VERIFY);
// const getSmsChangeMobileAction = createAction(GET_SMS_CHANGE_MOBILE);
// const getSmsVerifyForgotAction = createAction(GET_SMS_VERIFY_FORGOT);
// const postApproveAction = createAction(POST_APPROVE);
// const postRejectAction = createAction(POST_REJECT);

// actions
export const actions = {
    GET_SMS,
    GET_SMS_VERIFY,
    GET_SMS_CHANGE_MOBILE,
    GET_SMS_VERIFY_FORGOT,
    AUTH_USER_LOGIN,
    AUTH_USER_LOGOUT,
    AUTH_USER_SIGNUP,
    AUTH_GET_ACCESS_TOKEN,
    GET_AUTH_LIST,
    POST_PASSWORD,
    POST_APPROVE,
    POST_REJECT,
};
