import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missions';

export default configureStore({
  reducer: {
    missions: missionsSlice,
  },
});
