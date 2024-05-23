// base
import { createAction } from '@reduxjs/toolkit';

// default
export const COUNTER = 'counter';
export const COUNTER_SLICE_NAME = `${COUNTER}Slice`;

// action
const INCREMENT = `${COUNTER}/increment`;
const DECREMENT = `${COUNTER}/decrement`;
const INCREMENT_BY_AMOUNT = `${COUNTER}/incrementByAmount`;
const FETCH_COUNT = `${COUNTER}/fetchCount`;

// createAction -> 해당껀 thunk랑은 맞지 않는다.
const incrementAction = createAction(INCREMENT);
const decrementAction = createAction(DECREMENT);
const incrementByAmount = createAction<number>(INCREMENT_BY_AMOUNT);
// const fetchCountAction = createAction(FETCH_COUNT);

export const actions = {
  incrementAction,
  decrementAction,
  incrementByAmount,
  FETCH_COUNT,
};
