import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { appReducer } from '@redux/slices/appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export type Dispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type Thunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
