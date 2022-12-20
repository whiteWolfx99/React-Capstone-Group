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
  reducers: {},
  extraReducers: {
    /* eslint-disable */
    [fetchRockets.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.rockets = action.payload;
    },
    /* eslint-enable */
  },
});

export default RocketSlice.reducer;
