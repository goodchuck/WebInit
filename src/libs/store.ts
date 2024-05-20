import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: counterReducer,
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
