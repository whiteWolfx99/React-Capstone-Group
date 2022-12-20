import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    return data;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      const newState = action.payload.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
      }));
      state.push(...newState);
    });
  },
});

export default missionsSlice.reducer;
