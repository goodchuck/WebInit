// base
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// api
import { authApi } from "../apis/auth.api";

// action
import { actions } from "../actions/auth.actions";

// service
// import {

// }

// modules

export const userLogin = createAsyncThunk(
    actions.userLoginAction,
    async (data, { fulfillWithValue, rejectWithValue }) => {
        try {
            const res = await authApi.fetchLogin(data);

            // const {}

            return fulfillWithValue({
                ...res,
            });
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
