"use client";
import { authActions } from "@/libs/features/auth";
import { useAppDispatch, useAppSelector } from "@/libs/hooks";
import {
    COOKIE_ACCESS_TOKEN,
    COOKIE_REFRESH_TOKEN,
    cookieStorage,
} from "@/services/cookie";
import { useEffect } from "react";

export const useUser = () => {
    const { userId, userInfo, isLogin, status } = useAppSelector(
        (state) => state.auth
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        const accessToken = cookieStorage.getCookie(COOKIE_ACCESS_TOKEN);
        if (isLogin && accessToken) return;

        dispatch(authActions.isLogout());
    }, [dispatch, isLogin]);

    return { isLogin, userInfo, status };
};
