import { persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
/**
 * ? Local Imports
 */
import homeReducers, { InitialState as HomeStore } from './home/HomeReducers';
export const reducers = {
  home: homeReducers,
};

export type MainState = {
  home: HomeStore;
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 20000,
  blacklist: [''],
  whitelist: [''],
};

export const persistedRootReducer = persistCombineReducers(
  persistConfig,
  reducers,
);

export type RootState = ReturnType<typeof persistedRootReducer>;

export default persistedRootReducer;
