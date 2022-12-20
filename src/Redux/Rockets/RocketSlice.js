import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await fetch(baseUrl);
    const rockets = await response.json();
    return rockets;
  },
);

const RocketSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
  },
  reducers: {
    reserveRocket: (state, action) => {
      const rocket = state.rockets.find((rocket) => rocket.id === action.payload.id);
      if (rocket) {
        rocket.reserved = action.payload.reserved;
      }
    },
  },
  extraReducers: {
    /* eslint-disable */
    [fetchRockets.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.rockets = action.payload;
    },
    /* eslint-enable */
  },
});

export const { reserveRocket } = RocketSlice.actions;

export default RocketSlice.reducer;
