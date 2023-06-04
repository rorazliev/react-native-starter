import {
  type TypedUseSelectorHook,
  useDispatch as useDefaultDispatch,
  useSelector as useDefaultSelector,
} from 'react-redux';
import {
  type Action,
  type ThunkAction,
  configureStore,
} from '@reduxjs/toolkit';
import appReducer from '@app/redux/slices/appSlice';

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

export const useDispatch = () => useDefaultDispatch<Dispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useDefaultSelector;
