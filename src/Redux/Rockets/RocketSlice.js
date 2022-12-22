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
      const arr = action.payload.map((rocket) => ({
        id: rocket.id,
        rocket_name: rocket.rocket_name,
        reserved: false,
        description: rocket.description,
        flickr_images: rocket.flickr_images,
      }));

      state.rockets = state.rockets.concat(arr);;
    },
    /* eslint-enable */
  },
});

export const { reserveRocket } = RocketSlice.actions;

export default RocketSlice.reducer;
