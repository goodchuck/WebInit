import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from './features/counter';
import { authReducer } from './features/auth/slices/auth.slice';

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
