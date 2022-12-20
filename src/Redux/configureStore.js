import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missions';
import RocketSlice from './Rockets/RocketSlice';

export default configureStore({
  reducer: {
    missions: missionsSlice,
    rockets: RocketSlice,
  },
});
