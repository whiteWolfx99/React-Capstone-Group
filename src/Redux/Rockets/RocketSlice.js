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
      const rockets = state.rockets.map((rocket) => {
        if (rocket.id === action.payload.id) {
          return {
            ...rocket,
            reserved: action.payload.reserved,
          };
        }
        return rocket;
      });
      return {
        ...state,
        rockets,
        reserved: action.payload.reserved,
      };
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
