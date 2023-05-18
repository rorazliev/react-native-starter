import {
  TypedUseSelectorHook,
  useDispatch as useDefaultDispatch,
  useSelector as useDefaultSelector,
} from 'react-redux';
import type { Dispatch, RootState } from '@redux/store';

export const useDispatch = () => useDefaultDispatch<Dispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useDefaultSelector;
