import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import RocketSlice from './Rockets/RocketSlice';
import missionsSlice from './missions/missions';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['missions', 'rockets'],
};

const rootReducer = combineReducers({
  missions: missionsSlice,
  rockets: RocketSlice,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
